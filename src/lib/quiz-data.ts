// 12 种人格类型 key
export type TypeKey =
  | "ISTJ" | "INFP" | "ENTP" | "INTP"
  | "ESFP" | "ISFJ" | "INFJ" | "ISTP"
  | "ENFJ" | "ISFP" | "ENFP" | "INTJ";

export interface Question {
  q: string;
  options: { label: string; types: TypeKey[] }[];
}

// 11 道题 —— 来自上传文档
export const QUESTIONS: Question[] = [
  {
    q: "早上6:50闹钟响了，你昨晚练到2点半。今天还有专业课+文化课/排练。你会：",
    options: [
      { label: "直接把闹钟按掉，继续睡，死就死吧，反正今天状态肯定寄", types: ["ISFP", "INTP"] },
      { label: "爬起来打开琴/开始练声，机械式热身，脑子还是空的", types: ["ISTJ", "ISTP"] },
      { label: "赖床到7:20，然后疯狂洗脸+背谱/背词，靠肾上腺素硬上", types: ["ISFJ", "ENFP"] },
      { label: "已经6点就醒了，在床上脑内过了一遍今天要练/要排的所有难点", types: ["INTJ", "INFJ"] },
    ],
  },
  {
    q: "老师当面把你骂得狗血淋头：'你这音色像杀猪！'你当场：",
    options: [
      { label: "表面点头，内心OS：'对对对，我是猪，您是屠夫'", types: ["INTP", "ISTP"] },
      { label: "眼泪在眼眶打转，但咬牙继续弹/唱，想证明自己", types: ["ISFJ", "INFP"] },
      { label: "表面低头认错，回去把这段录音/视频循环听100遍，越听越气", types: ["ISTJ", "INTJ"] },
      { label: "当场反问：'那您觉得我应该怎么调整？'（心里已准备好几种说辞）", types: ["ENTP", "ENFJ"] },
    ],
  },
  {
    q: "演出前一天，你发现曲子还有几个乐句没练完，你会？",
    options: [
      { label: "熬夜练完，保证每个乐句完美", types: ["ISTJ", "ISFJ"] },
      { label: "偷偷跳过，想着明天再补", types: ["ISFP", "ENTP"] },
      { label: "焦虑到失眠，反复复盘错误", types: ["INFJ", "INTJ"] },
      { label: "直接崩溃，刷手机缓解压力", types: ["ENFP", "INTP"] },
    ],
  },
  {
    q: "宿舍/琴房熄灯后，你偷偷继续练，结果被宿管警告。你：",
    options: [
      { label: "立刻关琴/停止，明天白天再肝", types: ["ISFJ", "ISTJ"] },
      { label: "等管理员走后把音量调更小，继续练（赌一把）", types: ["ENTP", "ESFP"] },
      { label: "戴着耳机在床上疯狂脑内过完整首曲子，手指跟着动", types: ["INTJ", "INTP"] },
      { label: "把谱子拍下来，钻被窝用手机背谱/背词", types: ["INFJ", "INFP"] },
    ],
  },
  {
    q: "上台/考试/比赛前30秒，你脑子里闪过：",
    options: [
      { label: "'完了完了，这个地方我上次失误过'", types: ["ISFJ", "ISTJ"] },
      { label: "'我今天状态好好啊，一定能杀'", types: ["ESFP", "ENFP"] },
      { label: "'不管了，弹/唱就是了，爱谁谁'", types: ["ISFP", "ENTP"] },
      { label: "把整首曲子的难点和技术要点像走马灯一样过一遍", types: ["INTJ", "ISTP"] },
    ],
  },
  {
    q: "你最爽的时刻是：",
    options: [
      { label: "老师/指挥终于说了一句'今天这个乐句有点味道了'", types: ["ISFJ", "ENFJ"] },
      { label: "半夜两点突然把一个技术难点突破了，兴奋到想尖叫", types: ["ISTP", "ISTJ"] },
      { label: "朋友/观众听完说'卧槽你好牛'", types: ["ESFP", "ENFP"] },
      { label: "自己随便即兴弹/唱了一段，感觉灵魂出窍", types: ["INFP", "INFJ", "ISFP"] },
    ],
  },
  {
    q: "拿到新曲子/新作品，你第一反应是：",
    options: [
      { label: "先看技术难度，有没有大跳、八度、和弦、快速段落", types: ["ISTP", "ISTJ"] },
      { label: "先听音频/示范，感受整体情绪和画面感", types: ["INFP", "INFJ"] },
      { label: "直接打开谱子，从头开始拆分，标记指法/呼吸/表情", types: ["INTJ", "ISFJ"] },
      { label: "脑补自己站在舞台上表演这首的样子，先爽为敬", types: ["ESFP", "ENTP"] },
    ],
  },
  {
    q: "当你练了一晚上，老师却只说一句：'没感情。'你会？",
    options: [
      { label: "回家继续疯狂练", types: ["ISTJ", "ISFJ"] },
      { label: "表面冷静，回去偷偷崩溃", types: ["INFJ", "INFP"] },
      { label: "开始怀疑自己是不是没天赋", types: ["ISFP", "INTP"] },
      { label: "当场想退学", types: ["ENFP", "ENTP"] },
    ],
  },
  {
    q: "练到想砸琴/摔麦的时候，你通常：",
    options: [
      { label: "发小红书/朋友圈发疯，配图手指或喉咙特写+'救命'", types: ["ENFP", "ESFP"] },
      { label: "继续练，直到练到麻木", types: ["ISTJ", "ISTP"] },
      { label: "出去吃顿好的，或者和朋友吐槽一晚上", types: ["ISFJ", "ENFJ"] },
      { label: "换一首完全不同风格的作品发泄（突然来首爵士/流行/动漫改编）", types: ["ISFP", "ENTP"] },
    ],
  },
  {
    q: "如果能重来学音乐，你最想：",
    options: [
      { label: "从小就好好练基本功，不留那么多坏毛病", types: ["ISTJ", "ISTP"] },
      { label: "多谈几场恋爱，别把青春全献给琴房", types: ["ESFP", "ENFP"] },
      { label: "早点明白自己真正适合什么风格/方向", types: ["INTJ", "INTP"] },
      { label: "坚持现在这条路，只是希望少点折磨多点快乐", types: ["INFP", "ENFJ"] },
    ],
  },
  {
    q: "你最不能接受别人说你：",
    options: [
      { label: "'你弹/唱得挺标准的，就是没感情'", types: ["INFP", "INFJ", "ESFP"] },
      { label: "'你弹/唱得很有感情，就是老出错/不稳定'", types: ["ISTJ", "ISTP", "ISFJ"] },
      { label: "'你其实不适合学音乐吧？'", types: ["INTJ", "ENFJ", "ENFP"] },
      { label: "'你练这么辛苦值得吗？'", types: ["INTP", "ENTP", "ISFP"] },
    ],
  },
];

export interface Result {
  type: TypeKey;
  index: number;
  emoji: string;
  name: string;
  subtitle: string;
  description: string;
  hurt: string;
  madness: number;
}

export const RESULTS: Record<TypeKey, Result> = {
  ISTJ: {
    type: "ISTJ", index: 1, emoji: "钢琴卷王",
    name: "指尖死神", subtitle: "The Fingertip Reaper",
    description: "基本功干净到变态，老师最爱拿你当示范，但你永远觉得'还不够'。",
    hurt: "情感永远藏在技术下面，听你弹琴像精密仪器。",
    madness: 78,
  },
  INFP: {
    type: "INFP", index: 2, emoji: "情绪疯批",
    name: "被音乐囚禁的诗人", subtitle: "The Imprisoned Poet",
    description: "每首曲子都是人生，能弹哭自己。技术永远追不上情感。",
    hurt: "老师说技术不行，你内心：但我有灵魂啊！",
    madness: 96,
  },
  ENTP: {
    type: "ENTP", index: 3, emoji: "舞台炸子",
    name: "即兴鬼才", subtitle: "The Reckless Genius",
    description: "表演欲拉满，即兴改编信手拈来。老师头疼，观众爱死。",
    hurt: "基本功是死穴，但嘴硬'天才不需要基本功'。",
    madness: 84,
  },
  INTP: {
    type: "INTP", index: 4, emoji: "摆烂天才",
    name: "谱面解构师", subtitle: "The Score Deconstructor",
    description: "理解力恐怖，执行力为0。脑内过完整首，手指不动。",
    hurt: "明明有天赋，却总在想练和不想练之间纠结。",
    madness: 71,
  },
  ESFP: {
    type: "ESFP", index: 5, emoji: "社牛表演家",
    name: "人形音响", subtitle: "The Human Speaker",
    description: "天生为舞台而生，感染力爆棚。动力来自'下次演出要惊艳全场'。",
    hurt: "理论课拉胯就自我怀疑。",
    madness: 82,
  },
  ISFJ: {
    type: "ISFJ", index: 6, emoji: "焦虑完美主义",
    name: "老师最爱学生", subtitle: "Teacher's Favorite",
    description: "超级听话，老师说什么练什么。内心压力巨大。",
    hurt: "最怕别人说'你最近状态不太好'。",
    madness: 89,
  },
  INFJ: {
    type: "INFJ", index: 7, emoji: "文艺女巫",
    name: "灵魂共振者", subtitle: "The Soul Resonator",
    description: "能精准捕捉作曲家情绪，练琴像灵魂对话。",
    hurt: "现实的竞争和排名把浪漫主义砸得稀碎。",
    madness: 92,
  },
  ISTP: {
    type: "ISTP", index: 8, emoji: "技术狂魔",
    name: "指尖机械", subtitle: "The Fingertip Machine",
    description: "对技术有病态执着，音色冷而高级。",
    hurt: "老师说你太冷，你：冷怎么了？",
    madness: 74,
  },
  ENFJ: {
    type: "ENFJ", index: 9, emoji: "温柔卷王",
    name: "音乐班班长", subtitle: "The Music Class Monitor",
    description: "自己卷还爱带别人一起卷，是大家的精神支柱。",
    hurt: "最怕自己没做好，对不起信任你的人。",
    madness: 87,
  },
  ISFP: {
    type: "ISFP", index: 10, emoji: "摆烂艺术家",
    name: "随性音色怪", subtitle: "The Drifting Tone",
    description: "音色特别好，但讨厌被规定束缚，喜欢改编即兴。",
    hurt: "容易被'浪费天赋'扎心。",
    madness: 76,
  },
  ENFP: {
    type: "ENFP", index: 11, emoji: "戏剧女王",
    name: "情绪过山车", subtitle: "The Emotional Coaster",
    description: "情绪像过山车，今天爱明天恨，后天又复活。",
    hurt: "容易三分钟热度，但真的爱音乐。",
    madness: 94,
  },
  INTJ: {
    type: "INTJ", index: 12, emoji: "隐形大佬",
    name: "战略规划者", subtitle: "The Silent Strategist",
    description: "不声不响，但早就规划好未来几年路线。",
    hurt: "表面云淡风轻，内心比谁都怕失败。",
    madness: 81,
  },
};

export function scoreAnswers(answers: number[]): TypeKey {
  const scores: Record<string, number> = {};
  answers.forEach((optIdx, qIdx) => {
    const types = QUESTIONS[qIdx]?.options[optIdx]?.types ?? [];
    types.forEach((t, i) => {
      // primary type gets 2 points, secondary 1.5, tertiary 1
      scores[t] = (scores[t] ?? 0) + (i === 0 ? 2 : i === 1 ? 1.5 : 1);
    });
  });
  let best: TypeKey = "INFP";
  let max = -1;
  (Object.keys(RESULTS) as TypeKey[]).forEach((k) => {
    if ((scores[k] ?? 0) > max) {
      max = scores[k] ?? 0;
      best = k;
    }
  });
  return best;
}
