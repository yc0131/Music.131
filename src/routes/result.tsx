import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RESULTS, type TypeKey } from "@/lib/quiz-data";

export const Route = createFileRoute("/result")({
  component: ResultPage,
  validateSearch: (search: Record<string, unknown>) => ({
    t: (search.t as TypeKey | undefined) ?? undefined,
  }),
});

function ResultPage() {
  const { t } = Route.useSearch();
  const [typeKey, setTypeKey] = useState<TypeKey | null>(null);

  useEffect(() => {
    if (t && (RESULTS as Record<string, unknown>)[t]) {
      setTypeKey(t);
      return;
    }
    try {
      const saved = sessionStorage.getItem("mbti-result") as TypeKey | null;
      if (saved && (RESULTS as Record<string, unknown>)[saved]) {
        setTypeKey(saved);
        return;
      }
    } catch {}
    setTypeKey("INFP");
  }, [t]);

  if (!typeKey) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <p className="font-mono-x text-xs uppercase tracking-[0.3em] text-muted-foreground flicker">
          loading result…
        </p>
      </main>
    );
  }

  const r = RESULTS[typeKey];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <header className="flex items-center justify-between px-5 pt-5 text-[10px] uppercase tracking-[0.25em] font-mono-x">
        <Link to="/" className="hover:opacity-60">← home</Link>
        <span className="flicker">annual report · 24:00</span>
      </header>

      <section className="px-4 pt-6">
        <div id="share-card" className="relative border border-foreground bg-background p-5">
          <div className="grain absolute inset-0 pointer-events-none" />

          {/* report header */}
          <div className="relative flex items-start justify-between border-b border-foreground pb-3">
            <div>
              <p className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                midnight mbti · 2026
              </p>
              <p className="mt-1 font-display italic text-[13px]">音乐生·年度人格报告</p>
            </div>
            <div className="text-right">
              <p className="font-mono-x text-[9px] uppercase tracking-[0.3em] text-muted-foreground">type</p>
              <p className="mt-0.5 font-mono-x text-sm font-bold">{r.type}</p>
              <p className="font-mono-x text-[9px] text-muted-foreground">
                NO.{String(r.index).padStart(2, "0")}/12
              </p>
            </div>
          </div>

          {/* hero name */}
          <div className="relative mt-7 slide-up-in">
            <p className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              你是 / you are
            </p>
            <p className="mt-3 font-display italic text-[13px] text-muted-foreground">
              · {r.emoji} ·
            </p>
            <h1 className="mt-2 font-display text-[44px] leading-[1.02] tracking-tight">
              「{r.name}」
            </h1>
            <p className="mt-2 font-display italic text-[13px] text-muted-foreground">
              {r.subtitle}
            </p>
          </div>

          {/* stats grid */}
          <div
            className="relative mt-7 grid grid-cols-2 border border-foreground slide-up-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="border-r border-foreground p-4">
              <p className="font-mono-x text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                发疯指数
              </p>
              <p className="mt-2 font-display text-[34px] leading-none">
                {r.madness}<span className="text-base text-muted-foreground">%</span>
              </p>
              <div className="mt-3 h-[3px] w-full bg-muted-foreground/30">
                <div className="h-full bg-foreground" style={{ width: `${r.madness}%` }} />
              </div>
              <p className="mt-1 font-mono-x text-[8px] uppercase tracking-[0.25em] text-muted-foreground">
                madness
              </p>
            </div>
            <div className="p-4">
              <p className="font-mono-x text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                深夜崩溃概率
              </p>
              <p className="mt-2 font-display text-[34px] leading-none">
                {r.crash}<span className="text-base text-muted-foreground">%</span>
              </p>
              <div className="mt-3 h-[3px] w-full bg-muted-foreground/30">
                <div className="h-full bg-foreground" style={{ width: `${r.crash}%` }} />
              </div>
              <p className="mt-1 font-mono-x text-[8px] uppercase tracking-[0.25em] text-muted-foreground">
                midnight crash
              </p>
            </div>
          </div>

          {/* punch line — hero quote */}
          <div
            className="relative mt-7 border border-foreground bg-foreground px-5 py-6 text-background slide-up-in"
            style={{ animationDelay: "0.18s" }}
          >
            <p className="font-mono-x text-[9px] uppercase tracking-[0.3em] opacity-70">
              扎心一句 / it hurts
            </p>
            <p className="mt-3 font-display text-[19px] leading-snug">
              "{r.punch}"
            </p>
          </div>

          {/* description */}
          <div
            className="relative mt-7 slide-up-in"
            style={{ animationDelay: "0.26s" }}
          >
            <p className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              人格速写 / sketch
            </p>
            <p className="mt-3 font-display text-[15px] leading-relaxed">
              {r.description}
            </p>
          </div>

          {/* second hurt line */}
          <div
            className="relative mt-6 border-t border-foreground pt-5 slide-up-in"
            style={{ animationDelay: "0.32s" }}
          >
            <p className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              另一个真相 / b-side
            </p>
            <p className="mt-3 font-display italic text-[15px] leading-snug">
              {r.hurt}
            </p>
          </div>

          {/* footer */}
          <div className="relative mt-8 flex items-end justify-between border-t border-foreground pt-4">
            <div>
              <p className="font-display italic text-sm">深夜练琴室</p>
              <p className="font-mono-x text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                midnight practice room
              </p>
            </div>
            <p className="font-mono-x text-[9px] uppercase tracking-[0.3em] text-right text-muted-foreground">
              你也来测<br />哪种发疯人格
            </p>
          </div>
        </div>

        <p className="mt-6 text-center font-display italic text-sm text-muted-foreground">
          长按截图 · 发到小红书
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 pb-10">
          <Link
            to="/test"
            className="border border-foreground bg-background px-4 py-4 text-center font-display text-base transition-all hover:bg-foreground hover:text-background"
          >
            重新测试
          </Link>
          <Link
            to="/"
            className="border border-foreground bg-foreground px-4 py-4 text-center font-display text-base text-background transition-all"
          >
            发给同学
          </Link>
        </div>
      </section>
    </main>
  );
}
