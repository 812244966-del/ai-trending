import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-06-08";

export const topFindings: Finding[] = [
  {
    "name": "Muse Spark 在 Meta 生态产品中的能力扩展",
    "market": "美国",
    "date": "2026-06-01",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "Meta 于 5 月 12 日更新并逐步在旗下产品中推广其最新的 Muse Spark 模型，该模型将赋能 Meta AI 应用、WhatsApp、Instagram、Facebook、Messenger 和 Threads，以及 Ray-Ban Meta 和 Oakley Meta 眼镜。",
          "strong": false
        }
      ],
      [
        {
          "text": "在 Meta AI App 中，Muse Spark 实现了更快速自然的语音响应，用户可以自由打断、切换话题或语言。同时，新增购物功能，允许用户搜索 Facebook Marketplace 房源并直接与品牌或创作者互动。",
          "strong": false
        }
      ],
      [
        {
          "text": "对于智能眼镜，Muse Spark 将逐步支持实时 AI 功能，如通过摄像头识别并回答眼前物体的问题。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这一更新大幅提升了 Meta AI 的能力、上下文理解和日常实用性，通过多模态交互（语音、视觉、文本）满足用户在不同场景下的需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "它展示了 AI 巨头将大模型能力深度集成到现有产品生态的策略，旨在让 AI 成为用户跨平台、无缝体验的核心部分。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需密切关注用户在各种 Meta 应用和 AI 眼镜中对这些新功能的实际接受度和使用频率，以及其对用户粘性的影响。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ],
    "image": {
      "url": "https://about.fb.com/wp-content/uploads/2026/04/01_Subagent-1.gif?resize=960%2C836",
      "alt": "Meta AI 在官方新闻稿中的产品演示图",
      "type": "official newsroom",
      "sourceLabel": "Meta 官方新闻稿",
      "sourceHref": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      "note": "官方新闻稿里的 Meta AI 产品演示图，用来对应 Muse Spark 带动的消费端入口更新。"
    }
  },
  {
    "name": "ChatGPT 记忆能力升级并全量上线“Lockdown Mode”",
    "market": "美国",
    "date": "2026-06-04",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "ChatGPT 于 6 月 4 日升级了记忆功能，使其能更好地更新上下文，减少陈旧或矛盾的记忆，从而提高响应的相关性。",
          "strong": false
        }
      ],
      [
        {
          "text": "Plus 和 Pro 用户获得了双倍的记忆容量。记忆现在能够自动更新，ChatGPT 会追踪最重要的细节。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，“Lockdown Mode”已对所有登录用户全量开放，这是一个可选的高级安全设置，限制对网络和外部服务的访问，以降低提示注入攻击的风险。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "记忆能力的提升直接改善了用户与 ChatGPT 的互动体验，减少重复信息输入，使对话更连贯、个性化。",
          "strong": false
        }
      ],
      [
        {
          "text": "“Lockdown Mode”的推出则显示了 OpenAI 对安全性和隐私的重视，为企业用户和关注数据安全的用户提供了更可靠的选择。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些更新反映了 AI 助手在提升核心能力（记忆）和拓展用户需求（安全）方面的双重努力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cf/c8/33/cfc83360-f210-5c47-cee1-ef9458924dfa/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 推出求职与简历优化功能",
    "market": "美国",
    "date": "2026-06-01",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 于 6 月 1 日新增了求职功能，能够帮助用户寻找相关的实时职位和兼职机会。",
          "strong": false
        }
      ],
      [
        {
          "text": "它能够从 Indeed、Upwork、Appcast 等平台和整个网络抓取招聘信息，并根据用户的经验、技能和目标进行个性化推荐。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，用户还可以在 ChatGPT 中上传或创建简历，针对特定职位进行修改，并下载为专业格式的文档。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这项功能将 AI 从通用对话扩展到具体的生产力场景，直接解决了用户的求职痛点，提供了从信息获取到内容生成的全流程支持。",
          "strong": false
        }
      ],
      [
        {
          "text": "它展示了 AI 助手在垂直领域提供“Agentic”服务的潜力，能够扮演更积极、更具执行力的角色。",
          "strong": false
        }
      ],
      [
        {
          "text": "后续需观察其推荐的精准度、简历优化效果以及用户对其作为求职工具的信赖程度。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cf/c8/33/cfc83360-f210-5c47-cee1-ef9458924dfa/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI 上线 Seedance2.0 fast 模型",
    "market": "中国",
    "date": "2026-06-01",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下 AI 图片和视频工具即梦AI 于 6 月 1 日更新至 2.2.2 版本，并上线了 Seedance2.0 fast 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新旨在提供全新的多模态创作体验，支持用户通过自然语言描述来生成图片和视频。",
          "strong": false
        }
      ],
      [
        {
          "text": "即梦AI 强调其快速生成能力，并允许用户对生成的作品进行编辑和分享。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast 模型的推出，有望进一步提升用户进行图片和视频创作的效率和质量，降低创作门槛。",
          "strong": false
        }
      ],
      [
        {
          "text": "这反映了中国市场对多模态 AI 创作工具的旺盛需求，以及大厂在 AIGC 领域持续加码的趋势。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注该模型在实际应用中的表现，以及用户对生成内容的满意度和创造力激发效果。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6a/6c/e2/6a6ce2b4-24f9-a1a1-b45d-4d4471648f54/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝上线“元宝高考通”",
    "market": "中国",
    "date": "2026-06-05",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "腾讯元宝于 6 月 5 日更新至 2.71.0 版本，并正式上线了“元宝高考通”功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能被称为“行业首个高考咨询师 Agent”，旨在提供一站式高考志愿填报辅助，覆盖查分、选校、选专业、填报及录取全流程。",
          "strong": false
        }
      ],
      [
        {
          "text": "通过 AI 智能体，元宝将为考生和家长提供个性化的建议和信息支持。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "“元宝高考通”的推出，标志着通用 AI 助手开始深度渗透中国教育这一重要垂直领域，解决高考志愿填报这一长期存在的痛点。",
          "strong": false
        }
      ],
      [
        {
          "text": "这体现了 AI 产品在本地化、场景化应用上的创新，通过结合特定行业知识和数据，提升用户粘性和平台价值。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注其推荐的准确性和权威性，以及用户对其作为高考决策辅助工具的信任度。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/83/60/cd836021-5c2e-6b29-3140-b5eb54f1cb2b/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点上线基于小红书数据的“攻略模式”",
    "market": "中国",
    "date": "2026-06-04",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "生活助手 App “点点” 于 6 月 4 日更新至 3.23 版本，全新上线了“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量的真人经验数据，旨在为用户生成专属的深度攻略。",
          "strong": false
        }
      ],
      [
        {
          "text": "攻略内容覆盖旅行规划、生活兴趣、购物决策、美食探店、笔记总结和知识梳理等多个生活场景。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "“攻略模式”的推出，有效结合了 AI 的信息整合能力与小红书真实、丰富、生活化的内容生态。",
          "strong": false
        }
      ],
      [
        {
          "text": "这为用户提供了更精准、更个性化的生活决策支持，显著提升了生活工具的实用性和用户体验，也反映了 AI 与 UGC 社区内容结合的潜力。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注用户对 AI 生成攻略的信任度、内容的即时更新能力以及如何将其转化为实际消费行为。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2a/34/72/2a347299-cac0-90fb-9726-30440d047475/1040g3g831svff01vle2mecoj9s6j637s0us79to.png/392x696bb.png",
      "alt": "点点-你的ai生活小助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "点点 App Store",
      "sourceHref": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      "note": "使用 点点-你的ai生活小助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI 助手记忆与上下文理解能力持续强化",
    "evidence": [
      {
        "text": "ChatGPT 升级记忆功能，使系统能更好地更新上下文，减少陈旧或矛盾的记忆，从而提高响应的相关性。Plus 和 Pro 用户记忆容量翻倍。",
        "strong": true
      },
      {
        "text": "Meta AI 的 Muse Spark 模型强调其更强的上下文理解能力，并正在逐步推广到旗下所有应用和智能眼镜。",
        "strong": true
      },
      {
        "text": "Character.AI 在 4 月份更新中，大幅改进了 Memory 功能，扩展了可跟踪的类别，增加了聊天内记忆记录通知，并预告将推出记忆可视化功能。",
        "strong": true
      },
      {
        "text": "Gemini App 在 3 月份的更新中，提到 Gemini Live 3.1 的对话流程更快，上下文保持时间翻倍，支持更自然、直观的对话。",
        "strong": true
      }
    ],
    "comparison": [
      {
        "text": "过去 AI 助手的一大痛点在于上下文丢失导致重复沟通和体验不佳。当前各主要 AI 平台都将提升记忆和上下文理解能力作为核心发展方向，旨在提供更自然、更连贯、更个性化的对话体验。",
        "strong": false
      },
      {
        "text": "这种强化不仅限于模型层面，还体现在产品功能设计上，如 Character.AI 的记忆可视化，让用户对 AI 的“记忆”有更强的感知和控制力。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 功能加速融入垂直场景和平台生态",
    "evidence": [
      {
        "text": "Meta AI 将 Muse Spark 深入整合至 WhatsApp、Instagram、Facebook、Messenger、Threads 等核心应用，并支持购物、实时视觉问答等特定场景。",
        "strong": true
      },
      {
        "text": "ChatGPT 推出求职和简历优化功能，直接提供招聘信息和格式化简历服务，将 AI 能力引入专业办公场景。",
        "strong": true
      },
      {
        "text": "腾讯元宝上线高考通，提供高考志愿填报一站式服务，并整合微信生态信源，深度服务教育垂类用户。",
        "strong": true
      },
      {
        "text": "点点 App 基于小红书数据推出“攻略模式”，专注旅行、购物、生活兴趣等生活决策场景。",
        "strong": true
      }
    ],
    "comparison": [
      {
        "text": "AI 产品的竞争已从单一模型能力转向如何将 AI 深度嵌入用户日常生活和特定工作流。通过结合自有生态数据或外部垂类内容，AI 正在从通用工具向专业化、场景化助手转变。",
        "strong": false
      },
      {
        "text": "中美两国市场均呈现出这一趋势，但中国产品更注重结合本地化社交媒体和教育生态，提供更接地气的解决方案。",
        "strong": false
      }
    ]
  },
  {
    "title": "智能硬件作为 AI 入口的重要性日益凸显",
    "evidence": [
      {
        "text": "Meta AI 的 Muse Spark 模型逐步推广到 Ray-Ban Meta 和 Oakley Meta 眼镜，支持实时 AI 功能，如通过摄像头识别并回答眼前物体的问题。",
        "strong": true
      },
      {
        "text": "Rokid AI 眼镜App 持续更新，优化 AI 助手交互、直播推流和城市伴游等功能，并接入通义千问、豆包等大模型。",
        "strong": true
      },
      {
        "text": "Google AI Edge Eloquent 作为端侧语音转文本应用，强调本地化处理和隐私，展示了端侧 AI 在硬件上的应用潜力。",
        "strong": true
      }
    ],
    "comparison": [
      {
        "text": "智能眼镜等设备正从传统显示功能向集成 AI 助手演进，通过多模态交互（语音、视觉）将 AI 能力从手机/PC 端延伸到更自然的物理世界。",
        "strong": false
      },
      {
        "text": "尽管 AI 硬件市场仍处于早期探索阶段，但科技巨头和创新公司都在积极布局，试图找到新的 AI 交互范式和杀手级应用。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 Muse Spark 在 Meta 生态产品中的能力扩展、ChatGPT 记忆能力升级并全量上线“Lockdown Mode”，以及中国的 即梦AI 上线 Seedance2.0 fast 模型、腾讯元宝上线“元宝高考通”，都说明消费者能直接感知的 AI 入口还在继续前推。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "这是基于本期已验证发布与分发信号的归纳，不直接外推为长期格局。",
        "strong": false
      }
    ]
  },
  {
    "title": "美国更偏向模型能力和工作流深度升级",
    "evidence": [
      {
        "text": "AI 驱动的图片/视频编辑和生成工具日益普及，在 App Store 榜单上表现活跃，功能集成度不断提高。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国巨头（尤其是字节跳动）在 AI 图片和视频生成领域投入巨大，通过旗下多款产品抢占市场，强调多模态创作和易用性。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "us-ai-assistant-search",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Meta AI",
      "ChatGPT",
      "Gemini App",
      "Google AI Edge Eloquent"
    ],
    "pattern": "巨头 AI 助手持续深化多模态能力、生态整合和场景化应用，提升用户体验和安全性。",
    "opportunity": "垂类场景 AI 助手、多模态交互创新，以及企业级部署的安全性和可控性。",
    "watchNext": "用户在不同平台上的接受度和粘性，长尾场景的渗透以及商业模式的探索。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "cn-ai-assistant-search",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "中国巨头积极布局通用型 AI 助手，强调多模态能力与生态融合，并深入生活、办公、学习场景。",
    "opportunity": "结合本地生态优势，深耕细分场景，提升用户粘性；在用户抱怨中发现优化体验和模型能力的着力点。",
    "watchNext": "商业化路径、用户付费意愿，以及产品在复杂推理和精准性方面的持续提升。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "us-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI 学习平台通过游戏化和个性化辅助学习，在年轻用户中获得显著增长和融资（融资 + 产品验证）。",
    "opportunity": "细分学习场景的 AI 产品创新，结合沉浸式体验和互动机制，提高学生学习兴趣和效率。",
    "watchNext": "长期学习效果的验证、用户留存，以及 AI 如何更好地适应不同学习风格和需求。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "cn-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "千问智学",
      "腾讯元宝"
    ],
    "pattern": "中国大厂在教育领域推出专业 AI 家教，覆盖多学科，从解题到批改、定制资料，满足学生及家长需求。",
    "opportunity": "个性化学习路径、教育内容生成，以及如何提升 AI 辅助教学的信任度和市场渗透率。",
    "watchNext": "用户对 AI 教学效果的反馈，以及 AI 在教育公平性方面的潜在贡献。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "us-ai-companion-social",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Series",
      "Replika"
    ],
    "pattern": "AI 陪伴和社交产品强调更深度的关系建立、上下文记忆和场景互动，探索在 iMessage 等平台内构建新社交模式。",
    "opportunity": "打造更具沉浸感和个性化的 AI 角色，探索 AI 辅助社交的新形态和用户情感连接的深度。",
    "watchNext": "用户粘性、情感连接的深度、商业模式可持续性，以及如何在 AI 驱动的社交中保持真实性。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      }
    ]
  },
  {
    "id": "cn-ai-companion-social",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "星野"
    ],
    "pattern": "中国市场 AI 陪伴产品注重用户 UGC 创作 AI 角色，形成社区生态，满足个性化互动需求。",
    "opportunity": "虚拟社交场景的创新，多模态人设的丰富性，以及如何平衡用户创作自由与内容监管。",
    "watchNext": "用户创造内容的质量、社区活跃度、以及 AI 角色与用户之间情感连接的深度。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "us-ai-gaming-interactive-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明确产品信号。",
    "opportunity": "AI NPC、AI 剧情生成、AI 辅助游戏开发和个性化游戏体验。",
    "watchNext": "头部游戏厂商在 AI 领域的探索，以及独立开发者在创新互动娱乐方面的尝试。",
    "sources": []
  },
  {
    "id": "cn-ai-gaming-interactive-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明确产品信号。",
    "opportunity": "AI NPC、AI 剧情生成、AI 辅助游戏开发和个性化游戏体验。",
    "watchNext": "头部游戏厂商在 AI 领域的探索，以及独立开发者在创新互动娱乐方面的尝试。",
    "sources": []
  },
  {
    "id": "us-ai-creation",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Canva",
      "Picsart",
      "Facetune",
      "Lightroom",
      "Cantina: AI Video & Characters"
    ],
    "pattern": "AI 驱动的图片/视频编辑和生成工具日益普及，在 App Store 榜单上表现活跃，功能集成度不断提高。",
    "opportunity": "更多专业级 AI 创作功能下放给大众用户，降低创作门槛，激发用户创造力。",
    "watchNext": "实际创作质量、用户付费意愿，以及 AI 在长视频和 3D 内容创作方面的突破。",
    "sources": [
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "cn-ai-creation",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "剪映",
      "即梦AI",
      "小云雀",
      "可灵AI",
      "星绘"
    ],
    "pattern": "中国巨头（尤其是字节跳动）在 AI 图片和视频生成领域投入巨大，通过旗下多款产品抢占市场，强调多模态创作和易用性。",
    "opportunity": "更高质量、更低门槛、更场景化的 AI 创作工具，以及如何在内容版权和伦理问题上形成行业规范。",
    "watchNext": "用户对生成内容的真实性、原创性认可，以及商业化盈利模式的成熟度。",
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "us-ai-efficiency-office",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Granola",
      "ChatGPT"
    ],
    "pattern": "AI 工具从单一效率功能（如会议纪要）向企业级应用和更广泛的办公场景（如求职、简历优化）拓展。",
    "opportunity": "垂直行业的 AI 办公解决方案，AI Agent 在办公自动化领域的应用，提升企业生产力。",
    "watchNext": "数据安全、企业集成、用户付费习惯，以及 AI 在复杂任务协作方面的表现。",
    "sources": [
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-efficiency-office",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "中国 AI 助手在效率办公领域功能全面，强调与本地办公生态的深度集成，提供从内容生成到文档处理的一站式服务。",
    "opportunity": "深度结合行业知识的定制化 AI 办公助手，解决特定行业痛点，提高专业工作效率。",
    "watchNext": "用户数据隐私、企业级部署和兼容性，以及 AI 在多团队协作中的实际应用效果。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "us-ai-life-tools",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Google AI Edge Eloquent"
    ],
    "pattern": "端侧 AI 应用探索在日常生活中提高效率，强调隐私和离线能力，满足特定场景需求。",
    "opportunity": "结合具体生活场景的智能助手，如健康管理、个人财务规划，提供更便捷、私密的解决方案。",
    "watchNext": "端侧 AI 的性能提升、与云端 AI 的协同，以及用户对离线 AI 应用的接受度。",
    "sources": [
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "cn-ai-life-tools",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "点点",
      "豆包"
    ],
    "pattern": "AI 生活工具与 UGC 社区内容深度融合，提供个性化、场景化的生活决策支持。",
    "opportunity": "更多细分生活服务领域的 AI 创新，如旅游规划、购物推荐、美食探索等，提升用户生活品质。",
    "watchNext": "用户对 AI 推荐的信任度、内容质量与时效性，以及如何将生活决策转化为实际消费。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "us-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta glasses",
      "Oakley Meta glasses"
    ],
    "pattern": "智能眼镜作为 AI 新入口，通过整合多模态 AI 大模型，实现更自然的现实世界交互。",
    "opportunity": "AR/VR 与 AI 的深度融合，更小巧、更时尚的 AI 硬件设计，以及杀手级应用场景的开发。",
    "watchNext": "用户实际佩戴体验、续航能力、数据隐私保护，以及生态系统建设。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "cn-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid Glasses"
    ],
    "pattern": "中国厂商积极探索 AI 眼镜产品形态，通过集成多模态大模型和丰富功能，拓展 AI 在移动场景的应用。",
    "opportunity": "语音交互、视觉识别、AR 导航的深度融合，以及垂直行业（如旅游、工业）的应用探索。",
    "watchNext": "产品市场接受度、内容生态建设、用户痛点解决，以及技术成熟度与成本控制。",
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "ChatGPT 生产力工具能力多维度提升",
    "bullets": [
      [
        {
          "text": "记忆能力升级，Plus 和 Pro 用户记忆容量翻倍，系统能自动跟踪和更新关键细节，提供更相关的响应。",
          "strong": false
        }
      ],
      [
        {
          "text": "新增求职功能，可搜索 Indeed、Upwork 等平台的实时职位，并根据用户经验、技能和目标定制简历。",
          "strong": false
        }
      ],
      [
        {
          "text": "推出“Lockdown Mode”高级安全设置，限制网页和外部服务访问，以减少提示注入攻击风险。",
          "strong": false
        }
      ],
      [
        {
          "text": "新增活动会话管理，用户可查看并登出账户关联会话，增强账户安全性。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "Meta AI 持续深入 Meta 生态并增强多模态交互",
    "bullets": [
      [
        {
          "text": "Muse Spark 模型逐步在 WhatsApp、Instagram、Facebook、Messenger 和 Threads 等 Meta 旗下应用中推广，加强 AI 赋能。",
          "strong": false
        }
      ],
      [
        {
          "text": "Meta AI App 提升语音响应速度，支持更自然的对话中断、话题切换和语言切换。",
          "strong": false
        }
      ],
      [
        {
          "text": "引入购物功能，可在 Facebook Marketplace 搜索商品，并@特定品牌/创作者浏览内容。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI 眼镜（Ray-Ban Meta、Oakley Meta）开始逐步获得 Muse Spark 的智能赋能，支持实时视觉问答等功能。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "title": "Muse Spark 在 Meta 生态产品中的能力扩展",
    "bullets": [
      [
        {
          "text": "Meta 于 5 月 12 日更新并逐步在旗下产品中推广其最新的 Muse Spark 模型，该模型将赋能 Meta AI 应用、WhatsApp、Instagram、Facebook、Messenger 和 Threads，以及 Ray-Ban Meta 和 Oakley Meta 眼镜。",
          "strong": false
        }
      ],
      [
        {
          "text": "在 Meta AI App 中，Muse Spark 实现了更快速自然的语音响应，用户可以自由打断、切换话题或语言。同时，新增购物功能，允许用户搜索 Facebook Marketplace 房源并直接与品牌或创作者互动。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "title": "ChatGPT 记忆能力升级并全量上线“Lockdown Mode”",
    "bullets": [
      [
        {
          "text": "ChatGPT 于 6 月 4 日升级了记忆功能，使其能更好地更新上下文，减少陈旧或矛盾的记忆，从而提高响应的相关性。",
          "strong": false
        }
      ],
      [
        {
          "text": "Plus 和 Pro 用户获得了双倍的记忆容量。记忆现在能够自动更新，ChatGPT 会追踪最重要的细节。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "ChatGPT 推出求职与简历优化功能",
    "bullets": [
      [
        {
          "text": "ChatGPT 于 6 月 1 日新增了求职功能，能够帮助用户寻找相关的实时职位和兼职机会。",
          "strong": false
        }
      ],
      [
        {
          "text": "它能够从 Indeed、Upwork、Appcast 等平台和整个网络抓取招聘信息，并根据用户的经验、技能和目标进行个性化推荐。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "中国 AI 助手加速垂直场景化和生态融合",
    "bullets": [
      [
        {
          "text": "腾讯元宝上线“元宝高考通”，成为行业首个高考咨询师 Agent，提供一站式高考志愿填报辅助。",
          "strong": false
        }
      ],
      [
        {
          "text": "点点 App 推出基于小红书真人经验的“攻略模式”，为用户提供旅行、生活、购物等深度决策支持。",
          "strong": false
        }
      ],
      [
        {
          "text": "即梦 AI 上线 Seedance2.0 fast 模型，持续提升多模态内容创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid AI 眼镜 App 优化 AI 助手交互，新增直播推流和城市伴游等功能，拓展 AI 硬件应用场景。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "title": "中国 AI 助手竞争激烈，用户反馈凸显体验挑战",
    "bullets": [
      [
        {
          "text": "豆包、腾讯元宝、千问等主流 AI 产品在 App Store 获得大量用户评论和高分，但用户反馈也暴露出模型理解能力、响应速度和付费策略等方面的问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "部分用户对产品改版（如豆包智能体搜索栏合并）、复杂专业推理的准确性不足以及付费权益变动表示不满。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI 眼镜等硬件配套软件仍在积极迭代，但初期用户反馈显示其稳定性、核心功能支持和语音交互体验仍有待提升。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "title": "即梦AI 上线 Seedance2.0 fast 模型",
    "bullets": [
      [
        {
          "text": "抖音旗下 AI 图片和视频工具即梦AI 于 6 月 1 日更新至 2.2.2 版本，并上线了 Seedance2.0 fast 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新旨在提供全新的多模态创作体验，支持用户通过自然语言描述来生成图片和视频。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "腾讯元宝上线“元宝高考通”",
    "bullets": [
      [
        {
          "text": "腾讯元宝于 6 月 5 日更新至 2.71.0 版本，并正式上线了“元宝高考通”功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能被称为“行业首个高考咨询师 Agent”，旨在提供一站式高考志愿填报辅助，覆盖查分、选校、选专业、填报及录取全流程。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "点点上线基于小红书数据的“攻略模式”",
    "bullets": [
      [
        {
          "text": "生活助手 App “点点” 于 6 月 4 日更新至 3.23 版本，全新上线了“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量的真人经验数据，旨在为用户生成专属的深度攻略。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  }
];
