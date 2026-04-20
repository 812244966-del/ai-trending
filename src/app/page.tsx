import { CategoryHeatmap, type CategoryHeatmapItem } from "@/components/category-heatmap";

type ReportLink = {
  label: string;
  href: string;
};

type RichSegment = {
  text: string;
  strong?: boolean;
};

type RichTextBlock = RichSegment[];

type FindingImage = {
  url: string;
  alt: string;
  type: "official newsroom" | "app store preview";
  sourceLabel: string;
  sourceHref?: string;
  note: string;
};

type Finding = {
  name: string;
  market: "美国" | "中国";
  date: string;
  type: "new app" | "feature launch" | "notable update" | "social signal";
  summary: RichTextBlock[];
  whyItMatters: RichTextBlock[];
  sources: ReportLink[];
  image?: FindingImage;
};

type TrendJudgment = {
  title: string;
  evidence: RichTextBlock;
  comparison: RichTextBlock;
};

type MarketSummaryPoint = {
  title: string;
  bullets: RichTextBlock[];
  sources: ReportLink[];
};

type ReportArchiveItem = {
  date: string;
  title: string;
  href: string;
  status: "current" | "archive";
  note: string;
};

const reportDate = "2026-04-14";

const navigation = [
  ["section-1", "本周重点"],
  ["section-2", "AI+各方向最新应用情况"],
  ["section-3", "美国市场"],
  ["section-4", "中国市场"],
  ["section-5", "趋势判断"],
] as const;

const reportArchive: ReportArchiveItem[] = [
  {
    date: "2026-04-14",
    title: "Weekly AI Consumer Trends",
    href: "/",
    status: "current",
    note: "当前线上版本。后续每周新增一期时，只需要在这里补一条归档数据。",
  },
];

function t(text: string, strong = false): RichSegment {
  return { text, strong };
}

const keyFindings: Finding[] = [
  {
    name: "Meta AI + Muse Spark",
    market: "美国",
    date: "2026-04-08",
    type: "feature launch",
    summary: [
      [
        t("Meta 于 2026-04-08 发布 "),
        t("Muse Spark", true),
        t("，并明确说明该模型已经开始支撑 "),
        t("Meta AI app 与网站版本", true),
        t("，随后将继续扩展到 WhatsApp、Instagram、Facebook、Messenger 和 AI glasses。"),
      ],
      [
        t("TechCrunch 同日报道称，"),
        t("Meta AI iOS 下载量在发布日达到约 4.6 万次", true),
        t("，较前一日增长 87%，并在美国 App Store 总榜一度从第 57 位冲到第 5 位。"),
      ],
      [t("Meta AI 还同步强调 "), t("更强推理、更自然的对话和全入口分发", true), t("。")],
    ],
    whyItMatters: [
      [t("这一周美国最强的信号不是单一功能，而是 "), t("模型升级和分发渠道同步推新", true), t(" 的联动。")],
      [t("基于官方发布和媒体跟踪可以推断，头部平台正在把 "), t("“更强模型”直接当成消费端增长事件", true), t(" 来运营，而不是只作为后台能力迭代。")],
      [t("接下来要看的不是下载峰值本身，而是 "), t("这些新增入口能否形成稳定留存", true), t("。")],
    ],
    sources: [
      {
        label: "Meta 官方",
        href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      },
      {
        label: "TechCrunch",
        href: "https://techcrunch.com/2026/04/08/meta-debuts-the-muse-spark-model-in-a-ground-up-overhaul-of-its-ai/",
      },
    ],
    image: {
      url: "https://about.fb.com/wp-content/uploads/2026/04/01_Subagent-1.gif?resize=960%2C836",
      alt: "Meta AI 在官方新闻稿中的产品演示图",
      type: "official newsroom",
      sourceLabel: "Meta 官方新闻稿",
      sourceHref: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      note: "官方新闻稿里的 Meta AI 产品演示图，用来对应 Muse Spark 带动的消费端入口更新。",
    },
  },
  {
    name: "notebooks in Gemini",
    market: "美国",
    date: "2026-04-08",
    type: "feature launch",
    summary: [
      [
        t("Google 在 2026-04-08 宣布把 "),
        t("notebooks", true),
        t(" 引入 Gemini，定位是把文件、长对话、研究资料和项目上下文整理成 "),
        t("可持续使用的工作台", true),
        t("，并与 NotebookLM 互补。"),
      ],
      [
        t("Google 官方说明这一能力先向 "),
        t("Gemini AI Pro、AI Ultra 和 Google AI for Students 用户", true),
        t("在网页端开放。"),
      ],
      [t("The Verge 的实测解读指出，这一能力让 Gemini 更像一个 "), t("持续积累项目上下文的空间", true), t("，而不只是一次性问答窗口。")],
    ],
    whyItMatters: [
      [t("这说明美国头部 AI 助手正在从 "), t("“即时聊天”转向“项目容器”", true), t("。")],
      [t("这类产品方向通常更影响 "), t("用户留存、知识复用和付费理由", true), t("，而不是短期的新鲜感。")],
      [t("若这一模式跑通，AI 助手之间的竞争会更像 "), t("工作台和操作系统之争", true), t("，而不是只比回答质量。")],
    ],
    sources: [
      {
        label: "Google 官方",
        href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/",
      },
      {
        label: "The Verge",
        href: "https://www.theverge.com/tech/909031/google-gemini-notebooks-notebooklm",
      },
      {
        label: "Gemini App Store",
        href: "https://apps.apple.com/us/app/google-gemini/id6477489729",
      },
    ],
    image: {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ec/af/4e/ecaf4e28-4e4b-eb1a-1c7b-7aa872c151c8/Placeholder.mill/1200x630wa.jpg",
      alt: "Gemini App Store 预览图",
      type: "app store preview",
      sourceLabel: "Gemini App Store",
      sourceHref: "https://apps.apple.com/us/app/google-gemini/id6477489729",
      note: "官方产品博文未稳定暴露可直链主视觉图，因此按 skill 规则回退到 App Store 预览图。",
    },
  },
  {
    name: "Google AI Edge Eloquent",
    market: "美国",
    date: "2026-04-07",
    type: "new app",
    summary: [
      [
        t("Google 于 2026-04-07 在 iOS 端低调推出 "),
        t("Google AI Edge Eloquent", true),
        t("。App Store 官方页面写明，这是一款基于 Gemma 架构的 "),
        t("本地语音转写工具", true),
        t("，强调离线运行、自动去掉口头禅与自我修正，并把自然口语整理成更干净的成稿文本。"),
      ],
      [t("TechCrunch 同日报道称，Google 计划后续将这一能力 "), t("扩展到键盘场景", true), t("。")],
    ],
    whyItMatters: [
      [t("它代表另一条与超级助手不同的美国路线：用 "), t("高频单点任务", true), t(" 切入，优先解决真实使用摩擦。")],
      [t("对消费者来说，"), t("隐私、本地处理和结果可直接用", true), t("，比“无所不能”的大而全承诺更容易建立日常习惯。")],
      [t("若这种窄场景工具持续增加，美国 AI 市场会继续保持 "), t("强烈的任务型产品分化", true), t("。")],
    ],
    sources: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      },
      {
        label: "TechCrunch",
        href: "https://techcrunch.com/2026/04/07/google-quietly-releases-an-offline-first-ai-dictation-app-on-ios/",
      },
    ],
    image: {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d1/17/de/d117de20-75b7-f1d4-ae5a-4ad1ac5fc8bd/Placeholder.mill/1200x630wa.jpg",
      alt: "Google AI Edge Eloquent App Store 预览图",
      type: "app store preview",
      sourceLabel: "Google AI Edge Eloquent App Store",
      sourceHref: "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      note: "使用 App Store 官方预览图来展示这款离线优先的语音转写工具。",
    },
  },
  {
    name: "ChatGPT GPT-5.3 Instant mini",
    market: "美国",
    date: "2026-04-09",
    type: "notable update",
    summary: [
      [
        t("OpenAI 在 2026-04-09 的 ChatGPT 更新日志中写明，"),
        t("GPT-5.3 Instant mini", true),
        t(" 已开始替代此前的 GPT-5 Instant Mini，作为用户达到 GPT-5.3 Instant 配额后的 "),
        t("默认回退模型", true),
        t("。"),
      ],
      [t("OpenAI 同日还同步调整 "), t("Pro 订阅层级", true), t("，继续把模型能力和消费端使用层级绑定在一起。")],
      [t("对普通用户来说，这不是一个独立入口，但会直接影响高频使用者触发配额后的体验稳定性。")],
    ],
    whyItMatters: [
      [t("美国头部 AI 产品现在越来越多把 "), t("“模型切换”本身做成消费者可感知的产品策略", true), t("，而不仅仅是后端更新。")],
      [t("它意味着留住付费用户的方法之一，是在 "), t("降级场景里也保持可接受的对话质量", true), t("。")],
      [t("这个方向会让 "), t("订阅层级、使用配额和模型体验", true), t(" 之间的关系变得更像 SaaS 产品设计。")],
    ],
    sources: [
      {
        label: "OpenAI Release Notes",
        href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      },
      {
        label: "Apple 美国总榜",
        href: "https://apps.apple.com/us/genre/ios-apps/id6016",
      },
    ],
    image: {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e1/5d/25/e15d25a4-ab3e-709d-4941-1090f824b7bc/Placeholder.mill/1200x630wa.jpg",
      alt: "ChatGPT App Store 预览图",
      type: "app store preview",
      sourceLabel: "ChatGPT App Store",
      sourceHref: "https://apps.apple.com/us/app/chatgpt/id6448311069",
      note: "OpenAI 更新日志页没有稳定开放主视觉图，因此回退到 ChatGPT 的 App Store 预览图。",
    },
  },
  {
    name: "豆包",
    market: "中国",
    date: "2026-04-10",
    type: "notable update",
    summary: [
      [
        t("豆包在 App Store 版本历史中显示，12.8.1 于 2026-04-10 上线，重点写明“"),
        t("上线专家模型和 AI PPT 功能", true),
        t("，现已集成 "),
        t("Seedance 2.0 视频生成模型", true),
        t("”。"),
      ],
      [t("同一页面显示 12.8.0 也在 2026-04-09 推出同类功能说明，说明字节在这一周持续加快 "), t("工作流能力叠加", true), t("。")],
      [t("Apple 中国区总榜快照中，豆包仍位于 "), t("免费总榜第 1 位", true), t("。")],
    ],
    whyItMatters: [
      [t("中国头部 AI 助手的竞争，已经不只是回答能力，而是要不断把 "), t("高频工作流并进一个超级入口", true), t(" 里。")],
      [t("豆包把 "), t("专家模型、PPT 和视频生成", true), t(" 放在一次更新说明中，反映出中国市场更重视“一站式解决多个场景”的产品叙事。")],
      [t("接下来要观察的是，这类持续加功能的策略会不会带来 "), t("体验复杂化和付费分层压力", true), t("。")],
    ],
    sources: [
      {
        label: "豆包 App Store",
        href: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      },
      {
        label: "Apple 中国总榜",
        href: "https://apps.apple.com/cn/charts/iphone",
      },
    ],
    image: {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/59/c0/66/59c066c5-2bec-d591-e635-38755dfd36b7/Placeholder.mill/1200x630wa.jpg",
      alt: "豆包 App Store 预览图",
      type: "app store preview",
      sourceLabel: "豆包 App Store",
      sourceHref: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      note: "使用豆包官方 App Store 预览图，直接对应本周版本更新与总榜高位。",
    },
  },
  {
    name: "即梦AI",
    market: "中国",
    date: "2026-04-10",
    type: "notable update",
    summary: [
      [
        t("即梦AI 的 App Store 页面显示，2.1.6 版本于 2026-04-10 更新，新增“"),
        t("Seedance 2.0 视频生成模型快速版", true),
        t("”，并强调 "),
        t("多模态创作体验的优化", true),
        t("。"),
      ],
      [t("Apple 中国摄影与录像榜快照中，即梦AI 位于 "), t("免费榜第 1 位", true), t("。")],
      [t("也就是说，这一周它既有明确功能更新，也维持了强分发位置。")],
    ],
    whyItMatters: [
      [t("中国视频生成产品已经不只是展示模型能力，而是在往 "), t("高频创作工具", true), t(" 过渡。")],
      [t("即梦AI 同时占据 "), t("更新节奏和榜单可见度", true), t("，说明视频生成在中国更接近主流消费产品，而不是小众尝鲜工具。")],
      [t("接下来值得看的是，用户是否会把这类应用长期当作 "), t("内容生产入口", true), t("，而不只是短期热点。")],
    ],
    sources: [
      {
        label: "即梦AI App Store",
        href: "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      },
      {
        label: "Apple 中国摄影与录像榜",
        href: "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free",
      },
    ],
    image: {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a0/4c/74/a04c747f-ed54-b8a7-2f94-6f9dc31f99f0/Placeholder.mill/1200x630wa.jpg",
      alt: "即梦AI App Store 预览图",
      type: "app store preview",
      sourceLabel: "即梦AI App Store",
      sourceHref: "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      note: "使用即梦AI 的官方 App Store 预览图，突出其视频生成与多模态创作定位。",
    },
  },
  {
    name: "点点",
    market: "中国",
    date: "2026-04-12",
    type: "feature launch",
    summary: [
      [
        t("小红书出品的点点在 App Store 版本历史中显示，3.12.1 于 2026-04-12 更新，3.12 版本于 2026-04-09 上线“"),
        t("攻略模式", true),
        t("”，官方文案写明它会基于 "),
        t("小红书真实经验内容", true),
        t("，为旅行、探店、购物等生活场景生成个性化深度攻略。"),
      ],
      [t("页面同时强调用户可以直接把感兴趣的小红书内容分享给点点，继续做 "), t("总结、推荐和规划", true), t("。")],
      [t("这个更新把点点从通用问答又往 "), t("“生活决策助理”", true), t(" 推进了一步。")],
    ],
    whyItMatters: [
      [t("这类产品方向说明中国消费 AI 也在向 "), t("垂直决策助手", true), t(" 扩张，只是数据资产更多来自内容社区，而不是单纯的公开网页搜索。")],
      [t("与美国更强调项目工作台不同，点点更像把 "), t("社区内容和 AI 交互压缩成一个生活入口", true), t("。")],
      [t("若这一模式有效，社区平台会更积极把 "), t("内容分发权延伸到 AI 助理层", true), t("。")],
    ],
    sources: [
      {
        label: "点点 App Store",
        href: "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      },
    ],
    image: {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c9/5f/4e/c95f4ea2-9268-c280-6261-00f113544c40/Placeholder.mill/1200x630wa.jpg",
      alt: "点点 App Store 预览图",
      type: "app store preview",
      sourceLabel: "点点 App Store",
      sourceHref: "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      note: "使用点点 App Store 预览图，帮助读者快速理解它作为生活决策型助手的产品形态。",
    },
  },
  {
    name: "中国 AI 助手继续占据总榜高位",
    market: "中国",
    date: reportDate,
    type: "social signal",
    summary: [
      [
        t("截至本次周报整理时，Apple 中国区免费总榜快照显示，"),
        t("豆包位于第 1 位，腾讯元宝和千问都处于 Top 10 区间", true),
        t("。"),
      ],
      [t("与此同时，Apple 中国区摄影与录像免费榜快照里，"), t("即梦AI 位于第 1 位，可灵AI 处于 Top 20 区间", true), t("。")],
      [t("这个组合说明中国市场本周不是新品爆发周，但 "), t("分发层面仍由 AI 原生应用持续占位", true), t("。")],
    ],
    whyItMatters: [
      [t("这更像是 "), t("“平台级渗透”", true), t("，而不只是单点爆款。")],
      [t("中国消费者已经习惯在总榜和垂类榜单里反复遇见 AI 助手与 AI 创作工具，这会反向强化这些产品的 "), t("安装和复访习惯", true), t("。")],
      [t("这里的判断主要是基于榜单分布推断，真正需要继续验证的是这些高位是否来自 "), t("事件驱动还是稳定需求抬升", true), t("。")],
    ],
    sources: [
      {
        label: "Apple 中国总榜",
        href: "https://apps.apple.com/cn/charts/iphone",
      },
      {
        label: "Apple 中国效率榜",
        href: "https://apps.apple.com/cn/iphone/charts/6007?chart=top-free",
      },
      {
        label: "Apple 中国摄影与录像榜",
        href: "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free",
      },
      {
        label: "腾讯元宝 App Store",
        href: "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      },
      {
        label: "千问 App Store",
        href: "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE-%E9%98%BF%E9%87%8C%E6%9C%80%E5%BC%BA%E6%A8%A1%E5%9E%8B%E5%AE%98%E6%96%B9ai%E5%8A%A9%E6%89%8B/id6466733523",
      },
      {
        label: "可灵AI App Store",
        href: "https://apps.apple.com/cn/app/%E5%8F%AF%E7%81%B5ai-ai%E5%9B%BE%E7%89%87-%E8%A7%86%E9%A2%91%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%85%B7/id6670396916",
      },
    ],
  },
];

const topFindingNames = new Set([
  "Meta AI + Muse Spark",
  "notebooks in Gemini",
  "ChatGPT GPT-5.3 Instant mini",
  "豆包",
  "即梦AI",
  "中国 AI 助手继续占据总榜高位",
]);

const topFindings = keyFindings.filter((item) => topFindingNames.has(item.name));

const trendJudgments: TrendJudgment[] = [
  {
    title: "美国更像“模型升级带动分发”，中国更像“超级入口继续叠能力”",
    evidence: [
      t("美国本周最强事件是 "),
      t("Meta 把 Muse Spark、Meta AI app 和多入口分发绑在一起推", true),
      t("；Google 也把 notebooks 做成 Gemini 的长期工作台。中国这边最清晰的证据是 "),
      t("豆包持续把专家模型、AI PPT 和视频生成叠进同一个主入口", true),
      t("。"),
    ],
    comparison: [
      t("这是一条基于本周样本的推断。美国强调 "),
      t("模型升级和产品容器", true),
      t("，中国强调 "),
      t("一个入口内覆盖更多高频工作流", true),
      t("。"),
    ],
  },
  {
    title: "视频生成在中国已经更接近主流消费产品，而非小众创作玩具",
    evidence: [
      t("即梦AI 2026-04-10 更新 "),
      t("Seedance 2.0 快速版", true),
      t(" 后仍处于中国摄影与录像榜第 1 位，可灵AI 也处于 Top 20 区间。相较之下，美国本周更突出的并不是视频生成新品，而是助手能力和单点工具。"),
    ],
    comparison: [
      t("中国用户更早在主流榜单里反复碰到 "),
      t("AI 视频工具", true),
      t("，这意味着视频生成在中国的消费端渗透速度快于美国。"),
    ],
  },
  {
    title: "社区数据和生活决策，正在成为中国 AI 产品的重要差异化资产",
    evidence: [
      t("点点把 "),
      t("小红书真实经验内容做成“攻略模式”", true),
      t("，从问答扩展到旅行、探店、购物等生活决策建议。这个方向与豆包、元宝、千问的通用助手路线不同，但都在争夺高频入口。"),
    ],
    comparison: [
      t("美国本周更强调 "),
      t("项目知识管理和生产力容器", true),
      t("，中国则更明显地把 AI 嵌进内容社区和日常生活选择场景。"),
    ],
  },
  {
    title: "榜单能说明需求热度，但还不能单独说明长期质量优势",
    evidence: [
      t("本周中美两边都能确认不少 AI 应用处于 "),
      t("榜单高位", true),
      t("，但只有部分条目能拿到强发布证据和完整历史点位。Meta AI 的冲榜、豆包与即梦AI 的高位，都说明分发很强；是否会转化为长期活跃，还要继续看下周。"),
    ],
    comparison: [
      t("这条判断更多是方法论提醒："),
      t("榜单是强信号，但不是充分证据", true),
      t("，所以本期没有硬写任何无法核实的 7 天 delta。"),
    ],
  },
];

const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    id: "assistant-us",
    category: "AI 助手/搜索",
    market: "美国",
    intensity: 4,
    signalLabel: "极强",
    products: ["Meta AI", "Gemini", "ChatGPT"],
    pattern: "近 30 天美国助手方向最强的信号来自 Meta、Google 和 OpenAI：模型升级、项目容器与订阅层级调整，都被直接做成消费者可感知的产品事件。",
    opportunity: "新产品值得从“回答更强”转向“上下文更稳”，把项目资料、配额后的默认体验和多入口分发一起设计成留存机制。",
    watchNext: "继续看 Meta AI 的多入口分发能否沉淀活跃，以及 Gemini notebooks 是否从网页工作台扩展到更高频的移动端入口。",
    sources: [
      {
        label: "Meta 官方",
        href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      },
      {
        label: "Google 官方",
        href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/",
      },
      {
        label: "OpenAI Release Notes",
        href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      },
      {
        label: "Claude App Store",
        href: "https://apps.apple.com/us/app/claude-by-anthropic/id6473753684",
      },
    ],
  },
  {
    id: "assistant-cn",
    category: "AI 助手/搜索",
    market: "中国",
    intensity: 4,
    signalLabel: "极强",
    products: ["豆包", "腾讯元宝", "千问"],
    pattern: "近 30 天中国助手方向的强信号不是密集新品，而是头部入口持续叠功能并稳居榜单高位，助手、搜索、PPT 和视频能力继续收敛到同一入口。",
    opportunity: "更有机会的不是再做一个通用问答，而是把工作流分层做得足够清楚，让用户知道不同任务为什么留在同一个超级入口里。",
    watchNext: "继续看头部助手是否把高频入口进一步转成会员权益包，以及功能持续叠加后是否出现体验复杂化的拐点。",
    sources: [
      {
        label: "豆包 App Store",
        href: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      },
      {
        label: "Apple 中国总榜",
        href: "https://apps.apple.com/cn/charts/iphone",
      },
      {
        label: "腾讯元宝 App Store",
        href: "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      },
      {
        label: "夸克 AI 超级框",
        href: "https://www.ithome.com/0/848/833.htm",
      },
    ],
  },
  {
    id: "education-us",
    category: "AI 教育/学习",
    market: "美国",
    intensity: 1,
    signalLabel: "弱",
    products: ["Gemini notebooks"],
    pattern: "近 30 天美国没有看到足够强的独立教育类新品信号，较清晰的变化主要还是通用助手把 notebook 式资料整理能力吸收进学习场景。",
    opportunity: "教育方向如果继续做，机会更像把长期资料管理、复习和作业上下文做成稳定工作台，而不是只提供一次性答题。",
    watchNext: "继续看头部助手是否把学习模式单独产品化，以及是否出现面向学生的新定价或校园分发动作。",
    sources: [
      {
        label: "Google 官方",
        href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/",
      },
    ],
  },
  {
    id: "education-cn",
    category: "AI 教育/学习",
    market: "中国",
    intensity: 0,
    signalLabel: "暂无",
    products: [],
    pattern: "近 30 天中国市场没有收集到足够强、且能直接验证的教育向 C 端新品或重要版本更新，因此这一格只保留空白信号，不延用更早的存量案例。",
    opportunity: "如果后续出现学习 Agent、拍题或学习硬件的新动作，这一类目值得重新拉高；当前更像观察窗口，而不是本期重点。",
    watchNext: "继续盯 App Store 教育榜、学习硬件发布和头部助手的学习入口更新，确认是否有新的消费者级信号出现。",
    sources: [],
  },
  {
    id: "companion-us",
    category: "AI 陪伴/情感/社交",
    market: "美国",
    intensity: 2,
    signalLabel: "中",
    products: ["Character.AI", "Replika"],
    pattern: "近 30 天美国陪伴方向最明确的新信号来自 Character.AI 的 4 月产品更新，重点落在模型、记忆和可玩内容；Replika 仍然是用户心智里的代表产品，但本期没有同等级的新发布证据。",
    opportunity: "这个方向的机会已经不是“做一个能聊的角色”，而是围绕记忆、内容世界观、创作者供给和安全边界做产品差异。",
    watchNext: "继续看 Character.AI 的新模型和记忆升级是否带来创作活跃，以及 Replika 这类老牌产品会不会在近月给出更明确的消费者级更新。",
    sources: [
      {
        label: "Character.AI April Update",
        href: "https://blog.character.ai/",
      },
      {
        label: "Character.AI Books",
        href: "https://blog.character.ai/introducing-c-ai-books-classic-literature-now-playable/",
      },
      {
        label: "Replika Help Center",
        href: "https://help.replika.com/hc/en-us/articles/5040453297293-Can-Replika-be-my-virtual-assistant",
      },
    ],
  },
  {
    id: "companion-cn",
    category: "AI 陪伴/情感/社交",
    market: "中国",
    intensity: 0,
    signalLabel: "暂无",
    products: [],
    pattern: "近 30 天没有收集到足够强、且能稳定验证的中国陪伴类新应用或关键版本更新，因此这一方向本期不继续沿用旧产品列表充数。",
    opportunity: "陪伴方向依然值得看，但当前更需要新的可验证发布或分发信号，而不是把历史代表产品重复放进本期判断。",
    watchNext: "继续跟踪角色扮演社区、语音互动产品和出海陪伴应用，等出现明确版本更新或榜单异常再抬高信号。",
    sources: [],
  },
  {
    id: "game-us",
    category: "AI 游戏/互动娱乐",
    market: "美国",
    intensity: 1,
    signalLabel: "弱",
    products: ["c.ai Books"],
    pattern: "近 30 天美国 AI 娱乐方向的可验证消费者信号更多出现在 Character.AI 的可玩内容实验，而不是独立 AI 游戏 App 的主流爆发。",
    opportunity: "这说明互动娱乐机会更接近“故事世界 + 角色互动 + 可分享体验”，而不是单独堆一个会聊天的 NPC。",
    watchNext: "继续看 c.ai Books 这类轻娱乐形态是否形成稳定使用，以及是否有新的 AI 原生互动产品冲进主流分发渠道。",
    sources: [
      {
        label: "Character.AI Books",
        href: "https://blog.character.ai/introducing-c-ai-books-classic-literature-now-playable/",
      },
    ],
  },
  {
    id: "game-cn",
    category: "AI 游戏/互动娱乐",
    market: "中国",
    intensity: 0,
    signalLabel: "暂无",
    products: [],
    pattern: "近 30 天中国市场没有出现足够强、且可直接验证的 AI 游戏或互动娱乐新品信号，因此这一格维持空白观察，不再沿用更早的案例。",
    opportunity: "这一方向后续仍可能从 AI NPC、剧情互动或小游戏渠道冒出来，但本期不强行补齐没有新证据的类目。",
    watchNext: "继续看 TapTap、Bilibili 和小游戏渠道，确认是否有新的消费者级玩法在未来 30 天浮出水面。",
    sources: [],
  },
  {
    id: "creation-us",
    category: "AI 创作",
    market: "美国",
    intensity: 2,
    signalLabel: "中",
    products: ["Meta AI"],
    pattern: "近 30 天美国创作方向仍有消费者信号，但强度明显低于助手和效率；更清晰的变化主要来自 Meta AI 入口分发对图像生成消费的带动。",
    opportunity: "这里的机会更像把生成能力贴到社交发布、模板和协作流程上，而不是再做一个只强调模型能力的单点生成器。",
    watchNext: "继续看 Meta AI 在创作榜单和社交分发上的后劲，以及美国是否出现新的消费级视频生成更新进入主流视野。",
    sources: [
      {
        label: "TechCrunch",
        href: "https://techcrunch.com/2026/04/08/meta-debuts-the-muse-spark-model-in-a-ground-up-overhaul-of-its-ai/",
      },
      {
        label: "Apple 美国 Photo & Video 榜",
        href: "https://apps.apple.com/us/iphone/charts/6008?chart=top-free",
      },
    ],
  },
  {
    id: "creation-cn",
    category: "AI 创作",
    market: "中国",
    intensity: 4,
    signalLabel: "极强",
    products: ["即梦AI", "可灵AI", "豆包"],
    pattern: "近 30 天中国创作方向是最强消费者信号之一：即梦AI 有明确版本更新，可灵AI 位于摄影与录像榜前列，视频生成已从尝鲜功能走向主流内容生产入口。",
    opportunity: "更值得做的是把模型能力继续压进模板、协作、短视频发布和会员权益，而不只是强调一次性的生成效果。",
    watchNext: "继续看即梦AI、可灵AI 和豆包里的创作能力是否进一步模板化、会员化，以及是否出现更明显的内容传播闭环。",
    sources: [
      {
        label: "即梦AI App Store",
        href: "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      },
      {
        label: "Apple 中国摄影与录像榜",
        href: "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free",
      },
      {
        label: "可灵AI App Store",
        href: "https://apps.apple.com/cn/app/%E5%8F%AF%E7%81%B5ai-ai%E5%9B%BE%E7%89%87-%E8%A7%86%E9%A2%91%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%85%B7/id6670396916",
      },
    ],
  },
  {
    id: "productivity-us",
    category: "AI 效率/办公",
    market: "美国",
    intensity: 4,
    signalLabel: "极强",
    products: ["Gemini notebooks", "Google AI Edge Eloquent", "ChatGPT"],
    pattern: "近 30 天美国效率方向的亮点很清晰：Gemini notebooks 把资料工作台产品化，Google AI Edge Eloquent 把离线语音转写做成独立工具，ChatGPT 则继续把模型层级设计成高频体验的一部分。",
    opportunity: "效率产品更适合做窄任务里的高完成度闭环，比如本地语音成稿、资料整理和配额后的稳定降级，而不是把所有能力堆成一个大而全入口。",
    watchNext: "继续看离线语音和 notebook 形态是否获得更高频入口，以及更多效率工具会不会用类似方式把 AI 变成默认工作流。",
    sources: [
      {
        label: "Google 官方",
        href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/",
      },
      {
        label: "Google AI Edge Eloquent App Store",
        href: "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      },
      {
        label: "OpenAI Release Notes",
        href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      },
      {
        label: "Notion AI",
        href: "https://www.notion.com/product/ai",
      },
    ],
  },
  {
    id: "productivity-cn",
    category: "AI 效率/办公",
    market: "中国",
    intensity: 3,
    signalLabel: "强",
    products: ["豆包"],
    pattern: "近 30 天中国效率方向的消费者信号主要被头部助手吸收，豆包把 AI PPT、专家模型和视频能力继续叠进主入口，说明效率能力正在被超级入口吞并。",
    opportunity: "垂直效率产品要站住脚，得靠更明确的结果交付、行业模板或强数据壁垒，而不是只复刻通用助手已有的能力集合。",
    watchNext: "继续看 AI PPT、会议纪要和办公 Agent 是否从功能点变成独立付费层，以及是否在效率榜单里出现新的强分发产品。",
    sources: [
      {
        label: "豆包 App Store",
        href: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      },
      {
        label: "Apple 中国效率榜",
        href: "https://apps.apple.com/cn/iphone/charts/6007?chart=top-free",
      },
    ],
  },
  {
    id: "life-us",
    category: "AI 生活工具",
    market: "美国",
    intensity: 2,
    signalLabel: "中",
    products: ["Google AI Edge Eloquent"],
    pattern: "近 30 天美国生活工具的消费者信号主要落在低摩擦语音输入和轻助手场景，Google AI Edge Eloquent 是较清晰的独立新工具。",
    opportunity: "如果做生活工具，切口最好足够轻、足够高频，比如语音输入、即时记录和手机上的低干扰入口。",
    watchNext: "继续看离线语音工具是否进入键盘层或系统入口，以及美国市场会不会冒出更强的生活决策类 AI 产品。",
    sources: [
      {
        label: "Google AI Edge Eloquent App Store",
        href: "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      },
      {
        label: "TechCrunch",
        href: "https://techcrunch.com/2026/04/07/google-quietly-releases-an-offline-first-ai-dictation-app-on-ios/",
      },
    ],
  },
  {
    id: "life-cn",
    category: "AI 生活工具",
    market: "中国",
    intensity: 3,
    signalLabel: "强",
    products: ["点点", "夸克"],
    pattern: "近 30 天中国生活工具方向最清晰的信号来自点点的攻略模式，它把小红书社区内容进一步转成旅行、探店和购物场景里的生活决策建议。",
    opportunity: "这一方向的关键不是多会回答，而是能不能把真实经验内容整理成可信、可执行的攻略和推荐。",
    watchNext: "继续看点点是否把攻略模式扩到更多生活场景，以及类似入口会不会在榜单或社交传播里继续放大。",
    sources: [
      {
        label: "点点 App Store",
        href: "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      },
    ],
  },
  {
    id: "hardware-us",
    category: "AI 硬件入口",
    market: "美国",
    intensity: 2,
    signalLabel: "中",
    products: ["Meta AI glasses"],
    pattern: "近 30 天美国硬件方向的有效信号仍然主要来自 Meta：官方在 4 月更新中明确把后续分发扩展到 AI glasses，这让硬件入口继续留在本期视野里。",
    opportunity: "硬件机会依然在视觉、语音和场景感知，不在于把手机聊天窗口原样搬到新设备上。",
    watchNext: "继续看 Meta 是否把新模型能力更具体地下沉到眼镜端交互和拍摄场景，以及是否有新的硬件入口跟进。",
    sources: [
      {
        label: "Meta 官方",
        href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      },
    ],
  },
  {
    id: "hardware-cn",
    category: "AI 硬件入口",
    market: "中国",
    intensity: 0,
    signalLabel: "暂无",
    products: [],
    pattern: "近 30 天中国 AI 硬件方向没有进入本期的强消费者信号集合，因此这里保留空白观察，不混入更早的学习机或眼镜案例。",
    opportunity: "如果后续有学习硬件、可穿戴设备或手机 AI 入口发布，再把这一类目抬高会更准确。",
    watchNext: "继续盯中国厂商的发布会、学习硬件新品和可穿戴设备更新，确认是否出现新的消费者级硬件信号。",
    sources: [],
  },
];

const usSummaryPoints: MarketSummaryPoint[] = [
  {
    title: "头部助手把模型升级直接做成分发事件",
    bullets: [
      [t("过去 30 天里，美国最强的消费端信号集中在 "), t("Meta AI、Gemini 和 ChatGPT", true), t("。这些动作不是单一小功能，而是把模型升级、工作台和订阅层级直接推到用户可感知的前台。")],
      [t("从产品角度看，这意味着美国市场正在把 "), t("“模型能力”包装成增长和留存事件", true), t("，而不是只留在底层技术叙事里。")],
    ],
    sources: [
      { label: "Meta 官方", href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/" },
      { label: "Google 官方", href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/" },
      { label: "OpenAI Release Notes", href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
    ],
  },
  {
    title: "效率与工作台类产品比“新娱乐形态”更有确定性",
    bullets: [
      [t("Gemini notebooks 和 Google AI Edge Eloquent 说明，美国近月更稳定的消费者信号来自 "), t("项目资料工作台、本地语音转写和高频任务工具", true), t("。")],
      [t("相比之下，陪伴、游戏和创作虽然仍有活跃产品，但 "), t("近 30 天新增强信号没有同样密集", true), t("。")],
    ],
    sources: [
      { label: "Google 官方", href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/" },
      { label: "TechCrunch", href: "https://techcrunch.com/2026/04/07/google-quietly-releases-an-offline-first-ai-dictation-app-on-ios/" },
      { label: "Character.AI Blog", href: "https://blog.character.ai/" },
    ],
  },
  {
    title: "美国市场这一个月的主线是“更强容器”，不是“更多 App”",
    bullets: [
      [t("无论是 Meta 的多入口分发、Gemini 的 notebook 工作台，还是 ChatGPT 的模型层级调整，核心都在于 "), t("把用户的长期上下文和使用路径握得更紧", true), t("。")],
      [t("所以如果要从美国市场找灵感，优先应该看 "), t("上下文管理、订阅层设计和任务闭环", true), t("，而不是只追逐单一爆款界面。")],
    ],
    sources: [
      { label: "Meta 官方", href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/" },
      { label: "Google 官方", href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/" },
      { label: "OpenAI Release Notes", href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
    ],
  },
];

const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    title: "中国近月最强的不是新品密度，而是超级入口继续叠能力",
    bullets: [
      [t("豆包在 4 月更新里把 "), t("专家模型、AI PPT 和视频生成", true), t(" 继续压进主入口，同时中国区总榜里仍然保持高位。")],
      [t("这说明中国市场的竞争主线更像 "), t("“一个入口覆盖更多高频任务”", true), t("，而不是每周都冒出全新独立 App。")],
    ],
    sources: [
      { label: "豆包 App Store", href: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672" },
      { label: "Apple 中国总榜", href: "https://apps.apple.com/cn/charts/iphone" },
    ],
  },
  {
    title: "视频生成已经是中国消费 AI 的主流信号之一",
    bullets: [
      [t("即梦AI 在 2026-04-10 更新 Seedance 2.0 快速版后，仍处于 "), t("中国摄影与录像免费榜第 1 位", true), t("；可灵AI 也保持在前列。")],
      [t("这意味着视频生成在中国更接近 "), t("高频内容生产工具", true), t("，而不是只在社交媒体里短暂爆一下。")],
    ],
    sources: [
      { label: "即梦AI App Store", href: "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563" },
      { label: "Apple 中国摄影与录像榜", href: "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free" },
      { label: "可灵AI App Store", href: "https://apps.apple.com/cn/app/%E5%8F%AF%E7%81%B5ai-ai%E5%9B%BE%E7%89%87-%E8%A7%86%E9%A2%91%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%85%B7/id6670396916" },
    ],
  },
  {
    title: "生活决策类 AI 正在吸收社区内容这类本地优势",
    bullets: [
      [t("点点这次上线 "), t("攻略模式", true), t("，把小红书真实经验内容变成旅行、探店和购物建议，说明中国市场的一个差异化方向是把内容社区沉淀成 AI 决策层。")],
      [t("这类产品如果跑通，竞争力不只来自模型，而来自 "), t("社区数据、场景理解和可信推荐", true), t("。")],
    ],
    sources: [{ label: "点点 App Store", href: "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122" }],
  },
  {
    title: "近 30 天中国市场更值得看“入口整合”和“分发惯性”",
    bullets: [
      [t("中国区总榜和摄影与录像榜里，"), t("豆包、腾讯元宝、千问、即梦AI、可灵AI", true), t(" 都处于容易被普通用户反复遇见的位置。")],
      [t("这说明中国市场目前一个很强的现实是 "), t("分发惯性本身就会继续强化 AI 使用习惯", true), t("。")],
    ],
    sources: [
      { label: "Apple 中国总榜", href: "https://apps.apple.com/cn/charts/iphone" },
      { label: "Apple 中国摄影与录像榜", href: "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free" },
      { label: "腾讯元宝 App Store", href: "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430" },
      { label: "千问 App Store", href: "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE-%E9%98%BF%E9%87%8C%E6%9C%80%E5%BC%BA%E6%A8%A1%E5%9E%8B%E5%AE%98%E6%96%B9ai%E5%8A%A9%E6%89%8B/id6466733523" },
    ],
  },
];

function renderInline(block: RichTextBlock, strongClassName = "font-semibold text-slate-950") {
  return block.map((segment, index) =>
    segment.strong ? (
      <strong key={`${segment.text}-${index}`} className={strongClassName}>
        {segment.text}
      </strong>
    ) : (
      <span key={`${segment.text}-${index}`}>{segment.text}</span>
    ),
  );
}

function needsInlineSpace(previous: RichTextBlock, next: RichTextBlock) {
  const previousText = previous.map((segment) => segment.text).join("").trim();
  const nextText = next.map((segment) => segment.text).join("").trim();
  const previousLast = previousText.slice(-1);
  const nextFirst = nextText.charAt(0);
  return /[A-Za-z0-9)]/.test(previousLast) && /[A-Za-z0-9(]/.test(nextFirst);
}

function RichInlineParagraph({
  blocks,
  className,
  strongClassName,
}: {
  blocks: RichTextBlock[];
  className?: string;
  strongClassName?: string;
}) {
  return (
    <p className={className ?? "text-sm leading-7 text-slate-700 sm:text-[15px]"}>
      {blocks.map((block, index) => (
        <span key={index}>
          {index > 0 && needsInlineSpace(blocks[index - 1], block) ? " " : ""}
          {renderInline(block, strongClassName)}
        </span>
      ))}
    </p>
  );
}

function SourceLine({ links }: { links: ReportLink[] }) {
  return (
    <p className="mt-3 text-sm leading-7 text-slate-500">
      <span className="font-semibold text-slate-700">来源：</span>
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? "、" : ""}
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950 hover:decoration-cyan-500"
          >
            {link.label}
          </a>
        </span>
      ))}
    </p>
  );
}

function InsightBlock({ blocks }: { blocks: RichTextBlock[] }) {
  return (
    <div className="rounded-[1.5rem] border border-cyan-200/80 bg-[linear-gradient(135deg,rgba(236,254,255,0.92),rgba(248,250,252,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-10 w-1 rounded-full bg-cyan-500" />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">why_it_matters</p>
      </div>
      <ul className="space-y-3">
        {blocks.map((block, index) => (
          <li key={index} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
            <span>{renderInline(block)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FindingImageFigure({ image }: { image: FindingImage }) {
  return (
    <figure className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-50 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="block aspect-[4/3] w-full object-cover"
      />
      <figcaption className="border-t border-slate-200 bg-white/90 px-3 py-2 text-[11px] leading-5 text-slate-500">
        {image.sourceLabel}
      </figcaption>
    </figure>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

function FindingCard({ finding, index }: { finding: Finding; index: number }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-slate-950 px-3 text-xs font-semibold tracking-[0.2em] text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              {finding.type}
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-950">{finding.name}</h3>
        </div>

        <div className="grid gap-3 text-sm text-slate-600 sm:min-w-[220px]">
          <div>
            <span className="font-semibold text-slate-950">market</span>: {finding.market}
          </div>
          <div>
            <span className="font-semibold text-slate-950">date</span>: {finding.date}
          </div>
        </div>
      </div>

      <div
        className={
          finding.image
            ? "grid gap-5 pt-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start xl:grid-cols-[minmax(0,1fr)_240px]"
            : "space-y-5 pt-6"
        }
      >
        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">summary</p>
            <RichInlineParagraph blocks={finding.summary} className="mt-3 text-sm leading-7 text-slate-700 sm:text-[15px]" />
            <SourceLine links={finding.sources} />
          </div>
          <InsightBlock blocks={finding.whyItMatters} />
        </div>
        {finding.image ? (
          <div className="lg:pl-1">
            <FindingImageFigure image={finding.image} />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function SummaryPointCard({ point, index }: { point: MarketSummaryPoint; index: number }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-7">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-slate-950 px-3 text-xs font-semibold tracking-[0.2em] text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">分点总结</p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-slate-950">{point.title}</h3>
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {point.bullets.map((block, bulletIndex) => (
          <li key={bulletIndex} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
            <span>{renderInline(block)}</span>
          </li>
        ))}
      </ul>

      <SourceLine links={point.sources} />
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f6f1e8_0%,#f8f7f2_28%,#eef4f7_100%)] text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <details className="group mb-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-sm font-semibold tracking-[0.18em] text-slate-950 marker:content-none">
            <span className="uppercase">Weekly Archive</span>
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-700 transition group-open:text-slate-500">
              查看过往周报
            </span>
          </summary>
          <div className="mt-3 border-l border-slate-200 pl-4 sm:pl-5">
            <div className="grid gap-3">
              {reportArchive.map((item) => (
                <a
                  key={item.date}
                  href={item.href}
                  className="rounded-[1.1rem] px-3 py-3 transition hover:bg-white/80"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold text-slate-950">{item.date}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        item.status === "current"
                          ? "border border-cyan-200 bg-cyan-50 text-cyan-700"
                          : "border border-slate-200 bg-white/80 text-slate-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{item.note}</p>
                </a>
              ))}
            </div>
          </div>
        </details>

        <section className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_40px_120px_rgba(15,23,42,0.24)] sm:px-8 lg:px-10 lg:py-10">
          <div className="max-w-5xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">{reportDate}</p>
            <h1 className="font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-[6.8rem]">
              Weekly AI
              <br />
              Consumer Trends
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300">
              本网站整理并分析在过去7天内中美市场的AI行业相关应用的最新趋势，信息来源于产品官网，appstore及36氪等行业媒体
            </p>
          </div>
        </section>

        <nav className="sticky top-4 z-20 mt-6 rounded-[1.5rem] border border-slate-200 bg-white/88 p-3 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-slate-950"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-8 space-y-8">
          <section id="section-1" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 1"
              title="Section 1：本周重点发现"
              description="保留最重要的 6 个中美 AI C 端信号，影响面较窄的条目下沉到对应市场模块中。"
            />
            <div className="space-y-5">
              {topFindings.map((finding, index) => (
                <FindingCard key={`${finding.name}-${finding.date}`} finding={finding} index={index} />
              ))}
            </div>
          </section>

          <section id="section-2" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 2"
              title="Section 2：AI+各方向最新应用情况"
              description="仅保留 2026-03-14 至 2026-04-14 的可验证信号，按方向对比中美近 30 天的代表产品、分发强度与产品机会；点击任意格子查看详细分析。"
            />
            <CategoryHeatmap items={categoryHeatmapItems} />
          </section>

          <section id="section-3" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 3"
              title="Section 3：美国市场分点总结"
              description="不再逐条罗列产品，而是把近 30 天美国市场最重要的消费者级变化拆成几个更适合快速阅读的结论点。"
            />
            <div className="grid gap-5">
              {usSummaryPoints.map((point, index) => (
                <SummaryPointCard key={point.title} point={point} index={index} />
              ))}
            </div>
          </section>

          <section id="section-4" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 4"
              title="Section 4：中国市场分点总结"
              description="这里保留中国市场近 30 天最值得看的几个判断，重点放在超级入口、视频创作和生活决策类 AI 的变化。"
            />
            <div className="grid gap-5">
              {cnSummaryPoints.map((point, index) => (
                <SummaryPointCard key={point.title} point={point} index={index} />
              ))}
            </div>
          </section>

          <section id="section-5" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 5"
              title="Section 5：跨市场趋势判断"
              description="以下判断都明确区分来源事实与推断，证据来自本期已收录条目与榜单快照。"
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {trendJudgments.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-600 px-3 text-xs font-semibold tracking-[0.2em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">趋势判断</p>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-950">{item.title}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                    <p>
                      <span className="font-semibold text-slate-950">证据</span>: {renderInline(item.evidence)}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">对比</span>: {renderInline(item.comparison)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
