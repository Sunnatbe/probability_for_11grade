import React from 'react';
import katex from 'katex';

const cache = new Map<string, string>();
const tex = (src: string, display: boolean) => {
  const key = `${display ? 'D' : 'I'}${src}`;
  let html = cache.get(key);
  if (html === undefined) {
    html = katex.renderToString(src, {throwOnError: false, displayMode: display, strict: false});
    cache.set(key, html);
  }
  return html;
};

/** Renders text with inline $math$ (KaTeX) and **bold**. */
export const Tx: React.FC<{children: string; style?: React.CSSProperties}> = ({children, style}) => {
  const parts = children.split(/(\$[^$]+\$|\*\*[^*]+\*\*)/g).filter((p) => p !== '');
  return (
    <span style={style}>
      {parts.map((p, i) => {
        if (p.startsWith('$') && p.endsWith('$') && p.length > 1) {
          return <span key={i} dangerouslySetInnerHTML={{__html: tex(p.slice(1, -1), false)}} />;
        }
        if (p.startsWith('**') && p.endsWith('**')) {
          // Bold text may itself contain inline math.
          return (
            <b key={i} style={{fontWeight: 800}}>
              <Tx>{p.slice(2, -2)}</Tx>
            </b>
          );
        }
        return <React.Fragment key={i}>{p}</React.Fragment>;
      })}
    </span>
  );
};

/** A standalone math expression (display style). */
export const MathBlock: React.FC<{tex: string; style?: React.CSSProperties}> = ({tex: src, style}) => (
  <span style={style} dangerouslySetInnerHTML={{__html: tex(src, false)}} />
);
