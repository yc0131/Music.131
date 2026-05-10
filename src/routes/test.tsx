import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { QUESTIONS, scoreAnswers } from "@/lib/quiz-data";

export const Route = createFileRoute("/test")({
  component: TestPage,
});

function TestPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [locking, setLocking] = useState(false);

  const total = QUESTIONS.length;
  const current = QUESTIONS[index];
  const progress = useMemo(() => Math.round(((index + 1) / total) * 100), [index, total]);

  const handleSelect = (optionIdx: number) => {
    if (locking) return;
    setLocking(true);
    const nextAnswers = [...answers, optionIdx];
    setAnswers(nextAnswers);

    if (index + 1 >= total) {
      const result = scoreAnswers(nextAnswers);
      try {
        sessionStorage.setItem("mbti-result", result);
      } catch {}
      setTimeout(() => navigate({ to: "/result", search: { t: result } as never }), 280);
    } else {
      setTimeout(() => {
        setIndex(index + 1);
        setLocking(false);
      }, 220);
    }
  };

  const goBack = () => {
    if (index === 0) {
      navigate({ to: "/" });
      return;
    }
    setAnswers(answers.slice(0, -1));
    setIndex(index - 1);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <header className="flex items-center justify-between px-5 pt-5 text-[10px] uppercase tracking-[0.25em] font-mono-x">
        <button onClick={goBack} className="hover:opacity-60">← back</button>
        <span className="flicker">23:{47 + index}</span>
      </header>

      <div className="px-5 pt-6">
        <div className="flex items-center justify-between font-mono-x text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>question {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2 h-px w-full bg-foreground/15">
          <div
            className="h-full bg-foreground transition-all duration-500 ease-out"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <section className="px-5 pt-12 pb-16">
        <article key={index}>
          <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground slide-up-in">
            mvt. {String(index + 1).padStart(2, "0")}
          </p>
          <h2
            className="mt-4 font-display text-[26px] leading-snug tracking-tight slide-up-in"
            style={{ animationDelay: "0.05s" }}
          >
            {current.q}
          </h2>

          <div className="mt-10 space-y-3">
            {current.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={locking}
                className="group flex w-full items-start justify-between gap-4 border border-foreground bg-background px-5 py-4 text-left transition-all hover:bg-foreground hover:text-background active:scale-[0.99] disabled:opacity-60 slide-up-in"
                style={{ animationDelay: `${0.1 + i * 0.06}s` }}
              >
                <span className="flex items-start gap-3">
                  <span className="font-mono-x text-[10px] uppercase tracking-[0.25em] opacity-60 pt-1">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-display text-[16px] leading-snug">{opt.label}</span>
                </span>
                <span className="font-mono-x opacity-0 transition-opacity group-hover:opacity-100 pt-1">→</span>
              </button>
            ))}
          </div>
        </article>
      </section>

      <footer className="px-5 pb-8 text-center font-display italic text-sm text-muted-foreground">
        — 别想太多，第一直觉就是答案 —
      </footer>
    </main>
  );
}
