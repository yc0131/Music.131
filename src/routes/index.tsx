import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* top bar */}
      <header className="flex items-center justify-between px-5 pt-5 text-[10px] uppercase tracking-[0.25em] font-mono-x">
        <span>NO. 001 / 深夜练琴室</span>
        <span className="flicker">● REC</span>
      </header>

      {/* marquee */}
      <div className="mt-4 overflow-hidden border-y border-foreground py-2">
        <div className="marquee whitespace-nowrap font-mono-x text-xs uppercase tracking-[0.3em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="mx-6">
              practice room · 23:47 · A=442 · espressivo · molto rubato · pp ——— ffff · da capo al fine ·
            </span>
          ))}
        </div>
      </div>

      {/* hero */}
      <section className="px-5 pt-14 pb-10">
        <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground rise">
          MBTI · for music students only
        </p>
        <h1 className="mt-6 font-display text-[44px] leading-[1.05] tracking-tight rise" style={{ animationDelay: "0.05s" }}>
          测测你是<br />
          <em className="italic">哪种</em>音乐生<br />
          深夜<span className="relative inline-block">
            发疯
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-foreground" />
          </span>
          人格
        </h1>

        <p className="mt-8 max-w-xs font-display italic text-lg leading-relaxed text-muted-foreground rise" style={{ animationDelay: "0.15s" }}>
          每个音乐生，<br />
          都有自己的崩溃方式。
        </p>

        {/* divider with details */}
        <div className="mt-12 flex items-center gap-3 font-mono-x text-[10px] uppercase tracking-[0.25em] text-muted-foreground rise" style={{ animationDelay: "0.2s" }}>
          <span className="h-px flex-1 bg-foreground/30" />
          <span>16 questions</span>
          <span className="h-px w-2 bg-foreground/30" />
          <span>3 min</span>
          <span className="h-px flex-1 bg-foreground/30" />
        </div>

        {/* CTA */}
        <Link
          to="/test"
          className="group mt-10 flex items-center justify-between rounded-none border border-foreground bg-foreground px-6 py-5 text-background transition-all active:scale-[0.98] rise"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="font-display text-2xl tracking-wide">开始测试</span>
          <span className="font-mono-x text-xl">→</span>
        </Link>

        <p className="mt-6 text-center font-mono-x text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          请戴上耳机 · 调暗灯光
        </p>
      </section>

      {/* footer */}
      <footer className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-5 font-mono-x text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span>scroll · ↓</span>
        <span className="font-display italic text-base text-foreground">opus.<span className="blink">_</span></span>
      </footer>
    </main>
  );
}
