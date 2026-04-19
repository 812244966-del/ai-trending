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

type RankingSlice = {
  title: string;
  market: string;
  storefront: string;
  chart: string;
  rankStart: string;
  rankEnd: string;
  delta: string;
  dateWindow: string;
  whyItMatters: RichTextBlock[];
  note: RichTextBlock[];
  currentSnapshot: RichTextBlock[];
  sources: ReportLink[];
};

type TrendJudgment = {
  title: string;
  evidence: RichTextBlock;
  comparison: RichTextBlock;
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
  ["section-2", "分类热力图"],
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

const rankingSlices: RankingSlice[] = [
  {
    title: "美国区",
    market: "美国",
    storefront: "Apple App Store US",
    chart: "overall free / Productivity / Photo & Video",
    rankStart: "数据不足",
    rankEnd: "仅能确认当前或发布后短时快照",
    delta: "无法写入可信 7 天 delta",
    dateWindow: "2026-04-08 - 2026-04-14",
    whyItMatters: [
      [t("本周美国区能确认的是 "), t("分发热度显著上升", true), t("，但不能把它写成严格符合 skill 标准的 7 天榜单异动。")],
      [t("Meta AI 的确在 TechCrunch 援引 Appfigures 的报道里出现了 "), t("从第 57 位到第 5 位的快速跃升", true), t("，但时间跨度并非可审计的 7 天窗口；Apple 公开可访问页面也未提供足够清晰的同榜历史端点。")],
    ],
    note: [[t("按 skill 规则，本周美国区不输出满足 "), t("“当前 Top 100 且 7 天净提升超过 20”", true), t(" 条件的正式条目。")]],
    currentSnapshot: [
      [t("Apple 美国总榜可见 "), t("ChatGPT、Google Gemini、Claude", true), t(" 继续位于免费总榜前列。")],
      [t("Apple 美国 Productivity 榜可见 "), t("ChatGPT、Claude、Google Gemini", true), t(" 位于前列。")],
      [t("Apple 美国 Photo & Video 榜可见 "), t("Meta AI", true), t(" 位于前列，TechCrunch 还给出发布后短时冲榜信号。")],
    ],
    sources: [
      {
        label: "Apple 美国总榜",
        href: "https://apps.apple.com/us/genre/ios-apps/id6016",
      },
      {
        label: "Apple 美国 Productivity 榜",
        href: "https://apps.apple.com/us/iphone/charts/6007?chart=top-free",
      },
      {
        label: "Apple 美国 Photo & Video 榜",
        href: "https://apps.apple.com/us/iphone/charts/6008?chart=top-free",
      },
      {
        label: "TechCrunch - Meta AI 冲榜",
        href: "https://techcrunch.com/2026/04/08/meta-debuts-the-muse-spark-model-in-a-ground-up-overhaul-of-its-ai/",
      },
    ],
  },
  {
    title: "中国区",
    market: "中国",
    storefront: "Apple App Store CN",
    chart: "overall free / Productivity / Photo & Video",
    rankStart: "数据不足",
    rankEnd: "可确认当前快照高位",
    delta: "无法写入可信 7 天 delta",
    dateWindow: "2026-04-08 - 2026-04-14",
    whyItMatters: [
      [t("本周中国区可以稳定确认的是 "), t("当前榜单位置", true), t("，而不是可审计的 7 天净跃升。")],
      [t("按照 skill 要求，我优先检查了七麦作为历史点位候选来源，但公开可访问结果没有给出 "), t("足够清晰且可直接核验的 7 天前端点", true), t("，因此不能估算 rank_start 或 delta。")],
    ],
    note: [[t("按 skill 规则，本周中国区保留榜单 section，但 "), t("不补猜测性涨幅数字", true), t("。")]],
    currentSnapshot: [
      [t("Apple 中国免费总榜快照显示 "), t("豆包位于第 1 位，腾讯元宝与千问位于 Top 10 区间", true), t("。")],
      [t("Apple 中国效率榜快照里，"), t("AI 助手类应用继续密集分布在前列", true), t("。")],
      [t("Apple 中国摄影与录像榜快照里，"), t("即梦AI 位于第 1 位，可灵AI 位于 Top 20 区间", true), t("。")],
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
        label: "七麦数据",
        href: "https://www.qimai.cn/rank",
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
const usFindings = keyFindings.filter((item) => item.market === "美国");
const cnFindings = keyFindings.filter((item) => item.market === "中国");

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

const sourceGroups = [
  {
    label: "官方来源",
    links: [
      {
        label: "Meta 官方",
        href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      },
      {
        label: "Google 官方 - notebooks in Gemini",
        href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/",
      },
      {
        label: "OpenAI Release Notes",
        href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      },
      {
        label: "Google AI Edge Eloquent App Store",
        href: "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      },
      {
        label: "豆包 App Store",
        href: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      },
      {
        label: "即梦AI App Store",
        href: "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      },
      {
        label: "点点 App Store",
        href: "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
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
  {
    label: "媒体来源",
    links: [
      {
        label: "TechCrunch - Meta AI / Muse Spark",
        href: "https://techcrunch.com/2026/04/08/meta-debuts-the-muse-spark-model-in-a-ground-up-overhaul-of-its-ai/",
      },
      {
        label: "The Verge - notebooks in Gemini",
        href: "https://www.theverge.com/tech/909031/google-gemini-notebooks-notebooklm",
      },
      {
        label: "TechCrunch - Google AI Edge Eloquent",
        href: "https://techcrunch.com/2026/04/07/google-quietly-releases-an-offline-first-ai-dictation-app-on-ios/",
      },
    ],
  },
  {
    label: "榜单来源",
    links: [
      {
        label: "Apple 美国总榜",
        href: "https://apps.apple.com/us/genre/ios-apps/id6016",
      },
      {
        label: "Apple 美国 Productivity 榜",
        href: "https://apps.apple.com/us/iphone/charts/6007?chart=top-free",
      },
      {
        label: "Apple 美国 Photo & Video 榜",
        href: "https://apps.apple.com/us/iphone/charts/6008?chart=top-free",
      },
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
        label: "七麦数据",
        href: "https://www.qimai.cn/rank",
      },
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
    products: ["ChatGPT", "Gemini", "Meta AI", "Claude", "Perplexity"],
    pattern: "头部助手把模型升级、项目上下文、搜索和订阅层级做成用户可感知的消费端事件。",
    opportunity: "新产品可以从“更强回答”转向“可持续上下文容器”，用项目、记忆、配额后的稳定体验提升留存。",
    watchNext: "继续看 Meta AI 的多入口分发能否沉淀留存，以及 Gemini notebooks 是否扩展到移动端和更低价订阅层。",
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
    products: ["豆包", "腾讯元宝", "千问", "Kimi", "夸克", "纳米AI搜索"],
    pattern: "中国 AI 助手继续以超级入口形态占位，搜索、办公、学习、生活决策和多模态创作被打包进同一入口。",
    opportunity: "机会不只在单点问答，而在把 PPT、视频、搜索、学习、生活决策等高频任务压进一个入口后做清晰分层。",
    watchNext: "继续看头部助手是否从免费高频入口转向会员化能力包，以及功能叠加是否带来体验复杂度问题。",
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
    intensity: 3,
    signalLabel: "强",
    products: ["Khanmigo", "Duolingo Max", "Gauth", "Gemini notebooks"],
    pattern: "美国 AI 教育覆盖 AI tutor、语言学习角色扮演、拍题答疑和学习资料工作台，既有独立教育产品，也有通用助手的学习模式。",
    opportunity: "教育产品可以围绕课程、论文、资料包和长期复习做“学习项目容器”，也可以在垂直学科里用 Socratic 引导替代直接给答案。",
    watchNext: "继续看学生订阅、拍题答疑和 AI tutor 是否形成更明确的付费分层，以及平台如何处理未成年人安全。",
    sources: [
      {
        label: "Google 官方",
        href: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/",
      },
      {
        label: "Khanmigo",
        href: "https://www.khanmigo.ai/",
      },
      {
        label: "Duolingo Max",
        href: "https://blog.duolingo.com/duolingo-max/",
      },
      {
        label: "Gauth",
        href: "https://www.gauthmath.com/",
      },
    ],
  },
  {
    id: "education-cn",
    category: "AI 教育/学习",
    market: "中国",
    intensity: 2,
    signalLabel: "中",
    products: ["作业帮", "夸克", "豆包爱学", "学而思学习机"],
    pattern: "中国 AI 教育更偏拍照答疑、分步讲解、学习 Agent 和学习硬件入口，产品常和既有教育内容、题库或硬件结合。",
    opportunity: "机会在于把“搜答案”升级成“解释思路 + 练习巩固 + 家长可见进度”，而不是只提高解题速度。",
    watchNext: "关注 App Store 教育榜、学习机厂商发布、以及小红书/Bilibili 上是否出现新的学习工作流 demo。",
    sources: [
      {
        label: "作业帮 App Store",
        href: "https://apps.apple.com/us/app/%E4%BD%9C%E4%B8%9A%E5%B8%AE-%E4%B8%AD%E5%B0%8F%E5%AD%A6%E5%AE%B6%E9%95%BF%E4%BD%9C%E4%B8%9A%E6%A3%80%E6%9F%A5%E5%92%8C%E8%BE%85%E5%AF%BC%E5%B7%A5%E5%85%B7/id803781859",
      },
      {
        label: "夸克学习 Agent",
        href: "https://news.sina.com.cn/c/2025-04-18/doc-inetquyn4700562.shtml",
      },
      {
        label: "学而思智能",
        href: "https://www.xessw.com/",
      },
    ],
  },
  {
    id: "companion-us",
    category: "AI 陪伴/情感/社交",
    market: "美国",
    intensity: 3,
    signalLabel: "强",
    products: ["Replika", "Character.AI", "Nomi", "Kindroid"],
    pattern: "美国 AI 陪伴已经是独立 C 端赛道，竞争点集中在长期记忆、人格设定、语音/图像互动、角色社区和安全限制。",
    opportunity: "新产品不能只做“可聊天角色”，更需要清楚设计关系边界、记忆可控性、角色创作工具和未成年人保护。",
    watchNext: "继续观察 Character.AI 的未成年人限制、Replika/Nomi/Kindroid 的记忆与订阅设计，以及各州 AI companion 监管。",
    sources: [
      {
        label: "Replika",
        href: "https://replika.com/",
      },
      {
        label: "Replika App Store",
        href: "https://apps.apple.com/us/app/replika-ai-friend/id1158555867",
      },
      {
        label: "Character.AI 官方",
        href: "https://blog.character.ai/character-ai-launches-mobile-app-for-ios-and-android/",
      },
      {
        label: "Nomi App Store",
        href: "https://apps.apple.com/us/app/nomi-ai-companion-with-a-soul/id6450270929",
      },
      {
        label: "Kindroid",
        href: "https://landing.kindroid.ai/",
      },
    ],
  },
  {
    id: "companion-cn",
    category: "AI 陪伴/情感/社交",
    market: "中国",
    intensity: 3,
    signalLabel: "强",
    products: ["星野", "名人朋友圈", "Talkie", "Cici"],
    pattern: "中国 AI 陪伴更偏角色扮演、语音互动、同人/剧情社区和轻社交；同时也有 Talkie、Cici 这类中国团队面向海外分发的产品。",
    opportunity: "机会在角色生态和创作者供给，而不是单一虚拟恋人；但合规、安全和应用商店政策会直接影响分发稳定性。",
    watchNext: "继续看星野和名人朋友圈的角色社区供给，也要跟踪 Talkie 类产品在海外 App Store 的上架状态。",
    sources: [
      {
        label: "星野 App Store",
        href: "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337",
      },
      {
        label: "名人朋友圈 App Store",
        href: "https://apps.apple.com/cr/app/%E5%90%8D%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88-%E7%9C%9F%E4%BA%BAai-%E8%A7%92%E8%89%B2%E6%89%AE%E6%BC%94%E7%A4%BE%E5%8C%BA/id982115698",
      },
      {
        label: "SCMP - Talkie",
        href: "https://www.scmp.com/tech/tech-trends/article/3291715/chinese-owned-characterai-rival-vanishes-us-app-store",
      },
      {
        label: "WIRED - Cici",
        href: "https://www.wired.com/story/bytedances-ai-chatbot-is-quietly-gaining-traction-around-the-world/",
      },
    ],
  },
  {
    id: "game-us",
    category: "AI 游戏/互动娱乐",
    market: "美国",
    intensity: 2,
    signalLabel: "中",
    products: ["AI Dungeon", "Hidden Door", "Suck Up!", "Inworld Arcade"],
    pattern: "美国 AI 游戏更偏生成式叙事、角色互动和可玩 demo，尚未像助手或创作工具那样进入主流榜单高位。",
    opportunity: "机会在“可重复游玩”的系统设计，而不是只让 NPC 会聊天；需要把生成式内容嵌进关卡、叙事、社交传播和付费循环。",
    watchNext: "关注 Steam、Product Hunt、TikTok/YouTube demo，以及 App Store 游戏榜中的 AI 互动产品。",
    sources: [
      {
        label: "AI Dungeon",
        href: "https://aidungeon.com/",
      },
      {
        label: "Hidden Door",
        href: "https://www.hiddendoor.co/",
      },
      {
        label: "Suck Up!",
        href: "https://www.playsuckup.com/",
      },
    ],
  },
  {
    id: "game-cn",
    category: "AI 游戏/互动娱乐",
    market: "中国",
    intensity: 2,
    signalLabel: "中",
    products: ["逆水寒手游", "星野", "名人朋友圈"],
    pattern: "中国互动娱乐的 AI 信号更多来自 AI NPC、角色扮演社区和剧情互动，而不是独立 AI 游戏 App 爆发。",
    opportunity: "更有潜力的方向是把 AI 角色变成游戏/社区内容供给的一部分，让玩家既消费剧情，也参与角色与世界观共创。",
    watchNext: "继续看 TapTap、Bilibili、小游戏渠道和 App Store 游戏榜里的 AI 原生玩法。",
    sources: [
      {
        label: "逆水寒手游官网",
        href: "https://h.163.com/",
      },
      {
        label: "星野 App Store",
        href: "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337",
      },
    ],
  },
  {
    id: "creation-us",
    category: "AI 创作",
    market: "美国",
    intensity: 2,
    signalLabel: "中",
    products: ["Meta AI", "Midjourney", "Runway", "Canva", "CapCut"],
    pattern: "美国创作类覆盖图像、视频、设计和社交发布工具，本周信号主要来自 Meta AI 的入口分发和榜单可见度。",
    opportunity: "创作工具需要把模型能力变成模板、品牌素材、发布链路和协作流程，单纯生成一张图的壁垒在下降。",
    watchNext: "继续看 Meta AI 在 Photo & Video 榜的位置，以及 Runway、Canva、CapCut 等工具是否把 AI 创作推向更低门槛的发布流程。",
    sources: [
      {
        label: "Apple 美国 Photo & Video 榜",
        href: "https://apps.apple.com/us/iphone/charts/6008?chart=top-free",
      },
      {
        label: "TechCrunch",
        href: "https://techcrunch.com/2026/04/08/meta-debuts-the-muse-spark-model-in-a-ground-up-overhaul-of-its-ai/",
      },
      {
        label: "Runway",
        href: "https://runwayml.com/",
      },
      {
        label: "Canva AI",
        href: "https://www.canva.com/ai/",
      },
    ],
  },
  {
    id: "creation-cn",
    category: "AI 创作",
    market: "中国",
    intensity: 4,
    signalLabel: "极强",
    products: ["即梦AI", "可灵AI", "豆包", "海螺AI", "妙鸭相机"],
    pattern: "中国视频生成、图片生成和人像创作工具既有模型更新，也有摄影与录像榜高位，占据本期最强分类信号之一。",
    opportunity: "新产品可从模板化生产、短视频发布链路、多人协作、人像消费和会员权益切入，把模型能力变成日常内容生产流程。",
    watchNext: "继续看即梦AI、可灵AI、海螺AI 是否加速会员化、模板化分发，或推出更明确的社交传播能力。",
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
      {
        label: "海螺AI",
        href: "https://hailuoai.com/",
      },
    ],
  },
  {
    id: "productivity-us",
    category: "AI 效率/办公",
    market: "美国",
    intensity: 4,
    signalLabel: "极强",
    products: ["Gemini notebooks", "Google AI Edge Eloquent", "ChatGPT", "Notion AI", "Claude"],
    pattern: "美国效率类信号覆盖长期工作台、本地语音转写、文档协作和订阅模型体验，都是高频任务型场景。",
    opportunity: "效率产品可以优先做窄任务里的高质量闭环，例如离线语音成稿、项目资料整理、文档协作、会议纪要和配额后的稳定降级体验。",
    watchNext: "继续看 Eloquent 是否进入键盘场景，notebooks 是否成为 Gemini 的核心留存模块，以及 Notion/Claude 这类工作流产品如何强化上下文。",
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
    products: ["豆包", "WPS AI", "飞书", "钉钉", "讯飞星火"],
    pattern: "中国效率类一边被豆包等超级助手吸收，一边被 WPS、飞书、钉钉等办公套件嵌入既有工作流。",
    opportunity: "办公能力在中国更可能被超级助手和办公套件同时夹击；垂直产品需要用更深模板、更强交付结果或行业数据建立差异化。",
    watchNext: "继续看 AI PPT、专家模型、会议纪要和办公 Agent 是否形成明确付费层级，以及是否带动效率榜排名变化。",
    sources: [
      {
        label: "豆包 App Store",
        href: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      },
      {
        label: "Apple 中国效率榜",
        href: "https://apps.apple.com/cn/iphone/charts/6007?chart=top-free",
      },
      {
        label: "WPS AI",
        href: "https://ai.wps.cn/",
      },
    ],
  },
  {
    id: "life-us",
    category: "AI 生活工具",
    market: "美国",
    intensity: 2,
    signalLabel: "中",
    products: ["Google AI Edge Eloquent", "ChatGPT Voice", "Perplexity Assistant"],
    pattern: "美国生活工具更多从语音、搜索和个人助理入口渗透，而不是出现大量独立生活决策 App。",
    opportunity: "可从隐私、本地运行、低摩擦输入和即时搜索切入，但需要绑定更具体的日常场景才能形成高频使用。",
    watchNext: "观察 Eloquent 是否进入键盘或系统输入法层，ChatGPT/Perplexity 是否把语音和实时搜索做成日常入口。",
    sources: [
      {
        label: "Google AI Edge Eloquent App Store",
        href: "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      },
      {
        label: "TechCrunch",
        href: "https://techcrunch.com/2026/04/07/google-quietly-releases-an-offline-first-ai-dictation-app-on-ios/",
      },
      {
        label: "Perplexity Assistant",
        href: "https://www.perplexity.ai/assistant",
      },
    ],
  },
  {
    id: "life-cn",
    category: "AI 生活工具",
    market: "中国",
    intensity: 3,
    signalLabel: "强",
    products: ["点点", "夸克", "豆包", "小红书"],
    pattern: "中国生活工具更依赖内容社区和超级助手，把旅行、探店、购物、总结和推荐做成生活决策入口。",
    opportunity: "社区内容平台可以把 AI 做成旅行、探店、购物的决策层，而不是只做内容搜索或问答；关键是把真实经验内容转成可信建议。",
    watchNext: "继续看攻略模式是否扩展到更多生活场景，以及小红书、夸克、豆包类入口是否获得榜单或社交传播反馈。",
    sources: [
      {
        label: "点点 App Store",
        href: "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      },
      {
        label: "夸克 AI 超级框",
        href: "https://www.ithome.com/0/848/833.htm",
      },
    ],
  },
  {
    id: "hardware-us",
    category: "AI 硬件入口",
    market: "美国",
    intensity: 3,
    signalLabel: "强",
    products: ["Ray-Ban Meta", "Meta AI glasses", "Plaud Note", "Rabbit R1", "Friend"],
    pattern: "美国硬件入口覆盖 AI 眼镜、录音笔、独立 AI device 和陪伴硬件；Meta 的眼镜入口仍是最强平台级信号。",
    opportunity: "硬件入口的机会在于把模型能力变成即时视觉、语音、记录和场景感知，而不是复制手机里的聊天窗口。",
    watchNext: "继续看 Meta 是否把 Muse Spark 的能力更明确地落到眼镜端交互、拍摄和实时辅助，以及轻硬件是否找到持续使用场景。",
    sources: [
      {
        label: "Meta 官方",
        href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      },
      {
        label: "Ray-Ban Meta",
        href: "https://www.ray-ban.com/usa/ray-ban-meta-smart-glasses",
      },
      {
        label: "Plaud",
        href: "https://www.plaud.ai/",
      },
    ],
  },
  {
    id: "hardware-cn",
    category: "AI 硬件入口",
    market: "中国",
    intensity: 2,
    signalLabel: "中",
    products: ["学而思学习机", "讯飞 AI 学习机", "Rokid Glasses", "夸克 AI 眼镜"],
    pattern: "中国硬件入口更偏学习硬件、翻译/会议记录和智能眼镜，AI 往往作为既有硬件的能力升级出现。",
    opportunity: "机会在专用场景硬件，而不是泛 AI device；学习、翻译、会议和拍摄辅助更容易形成明确购买理由。",
    watchNext: "继续关注手机发布会、学习硬件新品和可穿戴设备的 AI 助手入口。",
    sources: [
      {
        label: "学而思智能",
        href: "https://www.xessw.com/",
      },
      {
        label: "讯飞 AI 学习机",
        href: "https://mall.iflytek.com/category/100006",
      },
      {
        label: "Rokid",
        href: "https://www.rokid.com/",
      },
    ],
  },
];

function LinkChip({ link }: { link: ReportLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/86 px-3 py-2 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-slate-950"
    >
      {link.label}
    </a>
  );
}

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

function RichParagraphs({
  blocks,
  className,
  paragraphClassName,
  strongClassName,
}: {
  blocks: RichTextBlock[];
  className?: string;
  paragraphClassName?: string;
  strongClassName?: string;
}) {
  return (
    <div className={className ?? "space-y-3"}>
      {blocks.map((block, index) => (
        <p key={index} className={paragraphClassName ?? "text-sm leading-7 text-slate-700 sm:text-[15px]"}>
          {renderInline(block, strongClassName)}
        </p>
      ))}
    </div>
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
    <figure className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
      <img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="block aspect-[16/9] w-full object-cover"
      />
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
            ? "grid gap-5 pt-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] xl:items-start"
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
        {finding.image ? <FindingImageFigure image={finding.image} /> : null}
      </div>
    </article>
  );
}

function RankingCard({ slice }: { slice: RankingSlice }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">{slice.title}</p>
          <h3 className="mt-3 font-display text-3xl font-bold text-slate-950">{slice.market}</h3>
        </div>

        <InsightBlock blocks={slice.whyItMatters} />

        <div className="rounded-[1.5rem] bg-slate-950 p-5 text-slate-100">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">note</p>
          <RichParagraphs
            blocks={slice.note}
            className="mt-3 space-y-3"
            paragraphClassName="text-sm leading-7 text-slate-200 sm:text-[15px]"
            strongClassName="font-semibold text-white"
          />
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">当前可确认快照</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {slice.currentSnapshot.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        </div>

        <SourceLine links={slice.sources} />
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f6f1e8_0%,#f8f7f2_28%,#eef4f7_100%)] text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <details className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/88 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <summary className="cursor-pointer list-none px-6 py-5 text-sm font-semibold tracking-[0.18em] text-slate-950 marker:content-none sm:px-7">
            <span className="flex items-center justify-between gap-4">
              <span className="uppercase">Weekly Archive</span>
              <span className="text-xs uppercase tracking-[0.22em] text-cyan-700">查看过往周报</span>
            </span>
          </summary>
          <div className="border-t border-slate-200 px-6 py-5 sm:px-7">
            <div className="grid gap-4">
              {reportArchive.map((item) => (
                <a
                  key={item.date}
                  href={item.href}
                  className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-cyan-500 hover:bg-white"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold text-slate-950">{item.date}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        item.status === "current"
                          ? "border border-cyan-200 bg-cyan-50 text-cyan-700"
                          : "border border-slate-200 bg-white text-slate-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-base font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.note}</p>
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
              title="Section 2：分类热力图"
              description="按 AI C 端产品类型对比中美信号强度，并补充各品类代表产品；点击任意格子查看产品形态、机会和来源。"
            />
            <CategoryHeatmap items={categoryHeatmapItems} />
          </section>

          <section id="section-3" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 3"
              title="Section 3：美国市场"
              description="美国本周的重点更偏模型升级、助手工作台和任务型单点工具。"
            />
            <div className="grid gap-5">
              {usFindings.map((finding, index) => (
                <FindingCard key={`${finding.name}-${finding.date}-us`} finding={finding} index={index} />
              ))}
            </div>
          </section>

          <section id="section-4" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 4"
              title="Section 4：中国市场"
              description="中国本周正式新品不算密集，但头部 AI 助手、视频生成应用和社区型生活助手都保持了强更新或强分发。"
            />
            <div className="grid gap-5">
              {cnFindings.map((finding, index) => (
                <FindingCard key={`${finding.name}-${finding.date}-cn`} finding={finding} index={index} />
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
