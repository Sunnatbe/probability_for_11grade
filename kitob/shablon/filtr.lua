-- Kitob filtri:
--  * ::: {.mashq #m3-12 javob="..."} / .sat  -> "**3.12.** ..." bilan boshlanadigan paragraf;
--    id, daraja va javob atributlari olib tashlanadi (javob o'quvchiga ko'rinmaydi);
--  * ::: {.misol} -> "**Misol N.**" (N har bobda 1 dan boshlanadi);
--  * har bir 1-darajali sarlavha oldidan bet uzilishi (OpenXML).

local PAGE_BREAK = pandoc.RawBlock('openxml',
  '<w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="20" w:lineRule="exact"/></w:pPr>'
  .. '<w:r><w:br w:type="page"/></w:r></w:p>')

local STYLES = { mashq = "Mashq", sat = "SAT savol", misol = "Misol" }

-- m3-12 -> "3.12"; s3-2 -> "S3.2" (R6); d-1 / y-1 -> "1"
local function label_from_id(id)
  local bob, n = id:match("^m(%d+)%-(%d+)$")
  if bob then return bob .. "." .. n end
  bob, n = id:match("^s(%d+)%-(%d+)$")
  if bob then return "S" .. bob .. "." .. n end
  n = id:match("^[dy]%-(%d+)$")
  if n then return n end
  return nil
end

local function has_class(el, name)
  for _, c in ipairs(el.classes) do
    if c == name then return true end
  end
  return false
end

-- Birinchi paragrafga qalin yorliq qo'shadi; paragraf bo'lmasa, alohida paragraf yaratadi.
local function prefix_label(blocks, text)
  local label = pandoc.Strong({ pandoc.Str(text) })
  local first = blocks[1]
  if first and (first.t == "Para" or first.t == "Plain") then
    local inlines = pandoc.List({ label, pandoc.Space() })
    inlines:extend(first.content)
    blocks[1] = pandoc.Para(inlines)
  else
    blocks:insert(1, pandoc.Para({ label }))
  end
  return blocks
end

-- Faqat paragraflarga uslub beramiz; ro'yxat (A) B) ...) raqamlanishi buzilmasin.
local function styled(blocks, style)
  local out = pandoc.List()
  for _, b in ipairs(blocks) do
    if b.t == "Para" or b.t == "Plain" then
      out:insert(pandoc.Div({ pandoc.Para(b.content) }, pandoc.Attr("", {}, { { "custom-style", style } })))
    else
      out:insert(b)
    end
  end
  return out
end

function Pandoc(doc)
  local out = pandoc.List()
  local misol_n = 0
  for _, block in ipairs(doc.blocks) do
    if block.t == "Header" and block.level == 1 then
      misol_n = 0
      out:insert(PAGE_BREAK)
      out:insert(block)
    elseif block.t == "Div" and (has_class(block, "mashq") or has_class(block, "sat")) then
      local kind = has_class(block, "mashq") and "mashq" or "sat"
      local label = label_from_id(block.identifier)
      local content = pandoc.List(block.content)
      if label then content = prefix_label(content, label .. ".") end
      out:extend(styled(content, STYLES[kind]))
    elseif block.t == "Div" and has_class(block, "misol") then
      misol_n = misol_n + 1
      local content = prefix_label(pandoc.List(block.content), "Misol " .. misol_n .. ".")
      out:extend(styled(content, STYLES.misol))
    else
      out:insert(block)
    end
  end
  doc.blocks = out
  return doc
end
