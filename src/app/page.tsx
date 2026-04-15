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

type WatchItem = {
  product: string;
  reason: RichTextBlock;
  next: RichTextBlock;
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
  ["section-3", "美国动态"],
  ["section-4", "中国动态"],
  ["section-5", "趋势判断"],
  ["section-6", "继续跟踪"],
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

const watchList: WatchItem[] = [
  {
    product: "Meta AI",
    reason: [t(""), t("Muse Spark 带来的下载拉升", true), t(" 已经出现，接下来最关键的是 iOS 排名和活跃能否稳住。")],
    next: [t("观察 2026-04-21 前后 "), t("Meta AI 是否仍停留在美国总榜和 Photo & Video 榜前列", true), t("。")],
  },
  {
    product: "Gemini notebooks",
    reason: [t("这是美国市场少见的 "), t("“项目容器”级更新", true), t("，可能改变用户把 AI 当长期工作台的方式。")],
    next: [t("继续看 Google 是否把 "), t("notebooks 更明显地下放到移动端和更便宜的订阅层", true), t("。")],
  },
  {
    product: "点点",
    reason: [t("它代表社区平台把 "), t("内容分发进一步 AI 化", true), t(" 的尝试，不只是在做普通聊天助手。")],
    next: [t("观察 "), t("攻略模式是否继续扩展到更多生活场景", true), t("，以及是否出现更明确的留存或榜单信号。")],
  },
  {
    product: "即梦AI / 可灵AI",
    reason: [t("中国视频生成产品本周仍是 "), t("最接近大众创作工具的一组 AI 原生应用", true), t("。")],
    next: [t("继续关注它们是 "), t("加速会员化、模板化分发", true), t("，还是推出更明确的社交和协作能力。")],
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
      <RichParagraphs blocks={blocks} className="space-y-3" />
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
              description="保留最重要的 8 个中美 AI C 端信号，按核心事实、趋势含义与正文内来源引用的方式展开。"
            />
            <div className="space-y-5">
              {keyFindings.map((finding, index) => (
                <FindingCard key={`${finding.name}-${finding.date}`} finding={finding} index={index} />
              ))}
            </div>
          </section>

          <section id="section-3" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 3"
              title="Section 3：美国动态"
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
              title="Section 4：中国动态"
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

          <section id="section-6" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 6"
              title="Section 6：值得继续跟踪的产品/功能"
              description="这些条目要么处在增长拐点，要么代表下一阶段中美 C 端 AI 产品竞争方向。"
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {watchList.map((item) => (
                <article
                  key={item.product}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="font-display text-2xl font-bold text-slate-950">{item.product}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                    <p>
                      <span className="font-semibold text-slate-950">产品/功能</span>: {item.product}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">原因</span>: {renderInline(item.reason)}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">下周应关注什么</span>: {renderInline(item.next)}
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
