import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/test")({
  component: TestPage,
});

// Placeholder questions — user will replace later
const QUESTIONS: { q: string; options: string[] }[] = [
  {
    q: "凌晨1点，琴房只剩你一个人。你做的第一件事是？",
    options: ["把同一段重复30遍", "瘫在地板上刷小红书", "给老师发一条又删掉的消息", "对着乐谱发呆10分钟"],
  },
  {
    q: "听到隔壁琴房的人弹得比你好，你的反应是？",
    options: ["关上门继续练", "默默录音回去对比", "立刻自我怀疑人生", "假装没听见，戴上耳机"],
  },
  {
    q: "明天就要考试了，此刻你在？",
    options: ["疯狂背谱", "崩溃大哭后睡着", "突然开始整理琴房", "和朋友打电话发疯"],
  },
  {
    q: "老师说：'你这段再处理一下。' 你内心OS是？",
    options: ["处理你🙂", "好的老师我回去想想", "完了我什么都不会", "再处理就要爆炸了"],
  },
];

function TestPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const total = QUESTIONS.length;
  const current = QUESTIONS[index];
  const progress = useMemo(() => Math.round(((index) / total) * 100), [index, total]);

  const handleSelect = (optionIdx: number) => {
    const nextAnswers = [...answers, optionIdx];
    setAnswers(nextAnswers);
    setDirection("next");

    if (index + 1 >= total) {
      // navigate to result
      setTimeout(() => {
        navigate({ to: "/result" });
      }, 250);
    } else {
      setTimeout(() => setIndex(index + 1), 200);
    }
  };

  const goBack = () => {
    if (index === 0) {
      navigate({ to: "/" });
      return;
    }
    setDirection("prev");
    setAnswers(answers.slice(0, -1));
    setIndex(index - 1);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* top bar */}
      <header className="flex items-center justify-between px-5 pt-5 text-[10px] uppercase tracking-[0.25em] font-mono-x">
        <button onClick={goBack} className="hover:opacity-60">← back</button>
        <span className="flicker">23:{47 + index}</span>
      </header>

      {/* progress */}
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

      {/* card */}
      <section className="px-5 pt-12">
        <article
          key={index}
          className={`slide-up-in ${direction === "prev" ? "" : ""}`}
        >
          <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            mvt. {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-4 font-display text-[28px] leading-snug tracking-tight">
            {current.q}
          </h2>

          <div className="mt-10 space-y-3">
            {current.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="group flex w-full items-center justify-between gap-4 border border-foreground bg-background px-5 py-4 text-left transition-all hover:bg-foreground hover:text-background active:scale-[0.99] slide-up-in"
                style={{ animationDelay: `${0.1 + i * 0.06}s` }}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono-x text-[10px] uppercase tracking-[0.25em] opacity-60">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-display text-[17px] leading-snug">{opt}</span>
                </span>
                <span className="font-mono-x opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </button>
            ))}
          </div>
        </article>
      </section>

      <footer className="mt-16 px-5 pb-8 text-center font-display italic text-sm text-muted-foreground">
        — 别想太多，第一直觉就是答案 —
      </footer>
    </main>
  );
}
