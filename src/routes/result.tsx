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
        <span className="flicker">result · 24:00</span>
      </header>

      <section className="px-5 pt-8">
        <div id="share-card" className="relative border border-foreground bg-background p-6">
          <div className="grain absolute inset-0" />

          {/* header */}
          <div className="relative flex items-start justify-between border-b border-foreground pb-4">
            <div>
              <p className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                music student · midnight mbti
              </p>
              <p className="mt-1 font-mono-x text-xs">NO. {String(r.index).padStart(3, "0")} / 012</p>
            </div>
            <div className="text-right">
              <p className="font-mono-x text-[10px] uppercase tracking-[0.3em]">type</p>
              <p className="mt-1 font-mono-x text-base font-bold">{r.type}</p>
            </div>
          </div>

          {/* name */}
          <div className="relative mt-6 slide-up-in">
            <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              你是 / you are
            </p>
            <p className="mt-3 font-display italic text-base text-muted-foreground">
              {r.emoji}
            </p>
            <h1 className="mt-1 font-display text-[40px] leading-[1.05] tracking-tight">
              「{r.name}」
            </h1>
            <p className="mt-2 font-display italic text-sm text-muted-foreground">
              {r.subtitle}
            </p>
          </div>

          {/* madness meter */}
          <div className="relative mt-8 slide-up-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-end justify-between">
              <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                发疯指数 / madness
              </p>
              <p className="font-display text-3xl">
                {r.madness}
                <span className="font-mono-x text-sm text-muted-foreground"> / 100</span>
              </p>
            </div>
            <div className="mt-3 h-2 w-full border border-foreground">
              <div className="h-full bg-foreground" style={{ width: `${r.madness}%` }} />
            </div>
            <div className="mt-1 flex justify-between font-mono-x text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>pp</span><span>mp</span><span>mf</span><span>ff</span><span>fff</span>
            </div>
          </div>

          {/* description */}
          <p className="relative mt-8 font-display text-[17px] leading-relaxed slide-up-in" style={{ animationDelay: "0.2s" }}>
            {r.description}
          </p>

          {/* hurt line */}
          <div className="relative mt-8 border-t border-foreground pt-6 slide-up-in" style={{ animationDelay: "0.3s" }}>
            <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              扎心一句 / it hurts
            </p>
            <p className="mt-4 font-display italic text-[18px] leading-snug">
              "{r.hurt}"
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
