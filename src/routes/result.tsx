import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/result")({
  component: ResultPage,
});

// Placeholder result — user will replace later
const RESULT = {
  code: "INFP-pp",
  name: "深夜哭谱型",
  subtitle: "The Midnight Score-Crier",
  madness: 87,
  description:
    "你是那种把谱子翻到最后一页，会突然鼻酸的人。别人练琴是任务，你练琴是渡劫。每一次pp都是叹气，每一次ff都是反抗。",
  punchlines: [
    "你不是在练琴，你是在和自己谈判。",
    "老师说'再来一遍'，你听成了'你不配'。",
    "凌晨三点的琴房，是你唯一的朋友。",
  ],
  traits: ["敏感系", "完美主义", "EMO高发", "独处充电"],
};

function ResultPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <header className="flex items-center justify-between px-5 pt-5 text-[10px] uppercase tracking-[0.25em] font-mono-x">
        <Link to="/" className="hover:opacity-60">← home</Link>
        <span className="flicker">result · 24:00</span>
      </header>

      {/* SHARE CARD — designed to be screenshotted */}
      <section className="px-5 pt-8">
        <div
          id="share-card"
          className="relative border border-foreground bg-background p-6"
        >
          <div className="grain absolute inset-0" />

          {/* card header */}
          <div className="relative flex items-start justify-between border-b border-foreground pb-4">
            <div>
              <p className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                music student · midnight mbti
              </p>
              <p className="mt-1 font-mono-x text-xs">NO. 001</p>
            </div>
            <div className="text-right">
              <p className="font-mono-x text-[10px] uppercase tracking-[0.3em]">type</p>
              <p className="mt-1 font-mono-x text-base font-bold">{RESULT.code}</p>
            </div>
          </div>

          {/* name */}
          <div className="relative mt-6 slide-up-in">
            <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              你是 / you are
            </p>
            <h1 className="mt-3 font-display text-[42px] leading-[1.05] tracking-tight">
              {RESULT.name}
            </h1>
            <p className="mt-2 font-display italic text-base text-muted-foreground">
              {RESULT.subtitle}
            </p>
          </div>

          {/* madness meter */}
          <div className="relative mt-8 slide-up-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-end justify-between">
              <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                发疯指数 / madness
              </p>
              <p className="font-display text-3xl">
                {RESULT.madness}<span className="font-mono-x text-sm text-muted-foreground"> / 100</span>
              </p>
            </div>
            <div className="mt-3 h-2 w-full border border-foreground">
              <div
                className="h-full bg-foreground"
                style={{ width: `${RESULT.madness}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between font-mono-x text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>pp</span>
              <span>mp</span>
              <span>mf</span>
              <span>ff</span>
              <span>fff</span>
            </div>
          </div>

          {/* description */}
          <p className="relative mt-8 font-display text-[17px] leading-relaxed slide-up-in" style={{ animationDelay: "0.2s" }}>
            {RESULT.description}
          </p>

          {/* punchlines — 扎心文案 */}
          <div className="relative mt-8 border-t border-foreground pt-6 slide-up-in" style={{ animationDelay: "0.3s" }}>
            <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              扎心三连 / it hurts
            </p>
            <ol className="mt-4 space-y-4">
              {RESULT.punchlines.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono-x text-[10px] uppercase tracking-[0.25em] text-muted-foreground pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display italic text-[17px] leading-snug">"{line}"</span>
                </li>
              ))}
            </ol>
          </div>

          {/* traits */}
          <div className="relative mt-8 flex flex-wrap gap-2">
            {RESULT.traits.map((t) => (
              <span
                key={t}
                className="border border-foreground px-3 py-1 font-mono-x text-[10px] uppercase tracking-[0.25em]"
              >
                # {t}
              </span>
            ))}
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
              扫码测你的<br />发疯人格
            </p>
          </div>
        </div>

        {/* share hint */}
        <p className="mt-6 text-center font-display italic text-sm text-muted-foreground">
          长按截图 · 发到小红书
        </p>

        {/* actions */}
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
