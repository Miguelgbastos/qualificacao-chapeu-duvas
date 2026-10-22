import { useCallback, useEffect, useState } from "react";
import type { ComponentType } from "react";
import { SLIDE_META } from "./data";
import {
  SlideAfluencia,
  SlideArea,
  SlideCapa,
  SlideCapitulo2,
  SlideCenarios,
  SlideConclusoes,
  SlideCotas,
  SlideCronograma,
  SlideEstruturas,
  SlideFluxo,
  SlideIntro,
  SlideLimites,
  SlideModelo,
  SlideObjetivos,
  SlideObrigada,
  SlideSubBacias,
  SlideSumario,
} from "./slides";

const SLIDES = [
  SlideCapa,
  SlideSumario,
  SlideIntro,
  SlideObjetivos,
  SlideArea,
  SlideFluxo,
  SlideModelo,
  SlideSubBacias,
  SlideEstruturas,
  SlideCotas,
  SlideAfluencia,
  SlideCenarios,
  SlideConclusoes,
  SlideLimites,
  SlideCapitulo2,
  SlideCronograma,
  SlideObrigada,
];

function parseHash() {
  const value = window.location.hash.replace(/^#/, "");
  const n = Number(value.replace(/^slide-/, ""));
  if (Number.isInteger(n) && n >= 1 && n <= SLIDES.length) return n - 1;
  return 0;
}

export default function App() {
  const [index, setIndex] = useState(parseHash);
  const [overview, setOverview] = useState(false);
  const [help, setHelp] = useState(false);

  const go = useCallback((i: number) => {
    const next = Math.max(0, Math.min(SLIDES.length - 1, i));
    setIndex(next);
    setOverview(false);
    window.location.hash = `slide-${next + 1}`;
  }, []);

  useEffect(() => {
    const onHash = () => setIndex(parseHash());
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "1";
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(SLIDES.length - 1);
      } else if (e.key === "o" || e.key === "O" || e.key === "Escape") {
        setOverview((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => undefined);
        } else {
          document.exitFullscreen().catch(() => undefined);
        }
      } else if (e.key === "?") {
        setHelp((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  return (
    <div className="app">
      <div className="stage">
        <div className="progress">
          <i style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }} />
        </div>

        <section className={`slide on ${index === 0 ? "cover" : ""}`}>
          {index === 1 ? <SlideSumario go={go} /> : (() => {
            const Slide = SLIDES[index] as ComponentType;
            return <Slide />;
          })()}
        </section>

        <button type="button" className="hit prev" aria-label="Slide anterior" onClick={() => go(index - 1)} />
        <button type="button" className="hit next" aria-label="Próximo slide" onClick={() => go(index + 1)} />

        <footer className="chrome">
          <span>{SLIDE_META[index].section} · {SLIDE_META[index].title}</span>
          <nav>
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Anterior">
              ←
            </button>
            <span>
              {index + 1} / {SLIDES.length}
            </span>
            <button type="button" onClick={() => go(index + 1)} disabled={index === SLIDES.length - 1} aria-label="Próximo">
              →
            </button>
            <button type="button" onClick={() => setOverview(true)}>Visão geral</button>
            <button type="button" onClick={() => setHelp((v) => !v)}>Atalhos</button>
          </nav>
        </footer>

        {help && (
          <aside className="help">
            <div><kbd>←</kbd><kbd>→</kbd> navegar</div>
            <div><kbd>F</kbd> tela cheia</div>
            <div><kbd>O</kbd> visão geral</div>
            <div><kbd>?</kbd> esconder atalhos</div>
          </aside>
        )}

        {overview && (
          <div className="overview">
            {SLIDE_META.map((s, i) => (
              <button key={s.id} type="button" className={i === index ? "on" : ""} onClick={() => go(i)}>
                <small>{String(i + 1).padStart(2, "0")} · {s.section}</small>
                <b>{s.title}</b>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
