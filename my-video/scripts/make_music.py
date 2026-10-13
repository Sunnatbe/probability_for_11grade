"""Procedurally generates a 60 s modern chill-electronic backing track (public/music.mp3)."""
import subprocess
import sys
import wave

import numpy as np

SR = 44100
DUR = 60.0
BPM = 112
BEAT = 60 / BPM
N = int(SR * DUR)
rng = np.random.default_rng(7)

L = np.zeros(N)
R = np.zeros(N)


def add(buf, start, sig, gain=1.0):
    i = int(start * SR)
    if i >= N:
        return
    seg = sig[: N - i]
    buf[i : i + len(seg)] += seg * gain


def mid(freq):
    return 440.0 * 2 ** ((freq - 69) / 12)


def t_of(d):
    return np.arange(int(SR * d)) / SR


def kick():
    t = t_of(0.35)
    f = 48 + 90 * np.exp(-t * 28)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t * 9) * 0.9


def hat(open_=False):
    t = t_of(0.18 if open_ else 0.05)
    n = rng.standard_normal(len(t))
    n = np.diff(n, prepend=0)
    return n * np.exp(-t * (22 if open_ else 90)) * 0.25


def clap():
    t = t_of(0.22)
    n = rng.standard_normal(len(t))
    n = np.diff(n, prepend=0) * 0.5 + n * 0.2
    env = np.exp(-t * 20) + 0.6 * np.exp(-((t - 0.012) ** 2) * 9e3)
    return n * env * 0.35


def bass(note, d):
    t = t_of(d)
    s = np.sin(2 * np.pi * mid(note) * t) + 0.25 * np.sin(4 * np.pi * mid(note) * t)
    env = np.minimum(1, t * 80) * np.exp(-t * 1.6) * np.minimum(1, (d - t) * 40)
    return np.tanh(s * 1.4) * env * 0.55


def pluck(note, d=0.5):
    t = t_of(d)
    f = mid(note)
    s = (
        np.sin(2 * np.pi * f * t)
        + 0.5 * np.sin(4 * np.pi * f * t) * np.exp(-t * 8)
        + 0.25 * np.sin(6 * np.pi * f * t) * np.exp(-t * 14)
    )
    return s * np.exp(-t * 7) * np.minimum(1, t * 400) * 0.35


def pad(notes, d):
    t = t_of(d)
    out = np.zeros_like(t)
    for n in notes:
        f = mid(n)
        for det in (-0.07, 0.0, 0.07):
            out += np.sin(2 * np.pi * f * (1 + det / 100) * t) + 0.3 * np.sin(
                2 * np.pi * 2 * f * (1 + det / 100) * t
            )
    attack = np.minimum(1, t / 0.6)
    release = np.minimum(1, (d - t) / 0.8)
    return out * attack * release * 0.03


# A minor: Am - F - C - G, one bar each
CHORDS = [
    (45, [57, 60, 64]),  # Am
    (41, [53, 57, 60]),  # F
    (48, [55, 60, 64]),  # C
    (43, [55, 59, 62]),  # G
]
ARP = [0, 1, 2, 1, 2, 1, 2, 1]  # chord-tone order over 8th notes

bar = BEAT * 4
n_bars = int(DUR / bar) + 1
for b in range(n_bars):
    t0 = b * bar
    if t0 >= DUR:
        break
    root, tones = CHORDS[b % 4]
    sec = t0
    drums_on = 6 <= sec < 55
    bass_on = 12 <= sec < 55

    p = pad(tones, bar + 0.4)
    add(L, t0, p)
    add(R, t0, p)

    # arpeggio (8th notes) with stereo offset
    for k in range(8):
        note = tones[ARP[k]] + 12
        s = pluck(note)
        tt = t0 + k * BEAT / 2
        g = 0.8 if sec > 3 else 0.5
        add(L, tt, s, g)
        add(R, tt + 0.011, s, g * 0.9)

    if bass_on:
        for off, dur in ((0, 1.5), (2.5, 0.75), (3, 1.0)):
            s = bass(root, dur * BEAT)
            add(L, t0 + off * BEAT, s)
            add(R, t0 + off * BEAT, s)

    if drums_on:
        for beat in range(4):
            tt = t0 + beat * BEAT
            if beat in (0, 2):
                k = kick()
                add(L, tt, k)
                add(R, tt, k)
            if beat in (1, 3):
                c = clap()
                add(L, tt, c, 0.9)
                add(R, tt, c, 1.0)
            h = hat()
            add(L, tt, h, 0.6)
            add(R, tt, h, 0.7)
            h2 = hat(open_=True)
            add(L, tt + BEAT / 2, h2, 0.7)
            add(R, tt + BEAT / 2, h2, 0.6)
        if sec >= 18:
            k = kick()
            add(L, t0 + 3.5 * BEAT, k, 0.6)
            add(R, t0 + 3.5 * BEAT, k, 0.6)

# master: gentle fades, normalise quietly (leaves room for a voice-over)
t = np.arange(N) / SR
fade = np.minimum(1, t / 1.5) * np.minimum(1, (DUR - t) / 3.0)
out = np.stack([L * fade, R * fade], axis=1)
out = np.tanh(out * 1.1)
out *= 0.55 / max(1e-6, np.abs(out).max())

wav_path = sys.argv[1] if len(sys.argv) > 1 else "/tmp/music.wav"
with wave.open(wav_path, "wb") as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((out * 32767).astype("<i2").tobytes())
if len(sys.argv) > 2:
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav_path, "-b:a", "160k", sys.argv[2]], check=True)
