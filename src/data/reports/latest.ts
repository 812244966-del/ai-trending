import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-05-18";

export const topFindings: Finding[] = [
  {
    "name": "Meta AI 核心能力升级并扩展至全生态应用与硬件",
    "market": "美国",
    "date": "2026-05-12",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "Meta AI 通过其最新模型Muse Spark进行了全面升级。此次升级增强了其语音交互能力，支持更自然的对话，允许用户打断、切换话题及多语言交流。",
          "strong": false
        }
      ],
      [
        {
          "text": "新功能包括实时AI眼镜的视觉问答（用户可将摄像头指向现实世界并提问所见内容），以及在Facebook Marketplace和全网范围内搜索商品的购物功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "Muse Spark的核心智能将逐步扩展至Meta旗下的WhatsApp、Instagram、Facebook、Messenger和Threads等应用，涵盖搜索栏、群聊和帖子等多个触点。Meta还在测试群聊中的“侧边聊天”和Threads中的@meta.ai提及功能。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次更新标志着Meta在将AI深度融入用户日常数字生活方面的重大进展，旨在使AI助手更加无缝、上下文感知和实用。通过在多平台和AI眼镜上的集成，Meta正在构建一个统一的、泛在的AI体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "实时视觉问答和增强的购物功能展现了多模态AI的强大潜力，即AI不仅能理解文本和语音，还能理解现实世界的视觉信息并采取行动，这预示着未来AI将成为更主动、更具交互性的生活助手。",
          "strong": false
        }
      ],
      [
        {
          "text": "群聊中的“侧边聊天”和社交平台提及功能，旨在将AI作为一种便捷的协作工具，进一步模糊AI与人类社交互动的界限。接下来需关注这些新功能的用户接受度及其对现有产品生态的长期影响。",
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
    "name": "ChatGPT 推出个人财务管理功能",
    "market": "美国",
    "date": "2026-05-15",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI正在为美国境内的ChatGPT Pro用户逐步推出一项新的个人财务管理体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过Plaid安全连接其支持的金融账户，从而在一个集中的仪表板中查看支出、账单、订阅、净资产和投资信息。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能在网页和iOS平台上可用，允许用户直接在ChatGPT中提问或通过“财务”页面探索洞察、审阅即将到来的支付、追踪循环扣费，并思考预算、储蓄目标、债务偿还等财务决策。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这一功能将ChatGPT从通用助手扩展到高度个性化的垂直领域，通过整合用户的敏感财务数据，为用户提供便捷的财务概览和决策支持，显著提升了AI的实用价值和用户粘性。",
          "strong": false
        }
      ],
      [
        {
          "text": "通过提供基于个人财务上下文的问答能力，ChatGPT在自动化和智能辅助个人理财方面迈出了重要一步，有望改变用户管理个人财务的方式。",
          "strong": false
        }
      ],
      [
        {
          "text": "此举也带来了数据隐私和安全方面的挑战，尽管声明通过Plaid安全连接，但用户对AI处理敏感信息的信任度将是关键。未来需观察其功能深度、与其他金融工具的整合以及用户反馈。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bb/cd/85/bbcd8519-7d86-ec84-fad0-5b12880e3efc/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 移动应用支持 Codex 远程访问",
    "market": "美国",
    "date": "2026-05-14",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI在其ChatGPT移动应用中推出了Codex远程访问的预览功能。这项功能允许用户通过手机，远程连接并控制在Mac主机上运行的Codex编程工作。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以在手机上启动或继续对话、回答问题、改变方向、批准操作、查看Codex的发现，并轻松切换连接的主机，从而在离开工作台时也能保持工作连接。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能将在iOS和Android平台上向所有ChatGPT用户（包括免费和Go套餐用户）逐步推出，并加载Mac主机上的实时上下文，例如项目上下文、插件、屏幕截图、终端输出等。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此更新极大提升了开发者的工作灵活性和效率，特别是对于需要远程协作或在外出时监控、指导AI编程代理的用户而言。它将AI代理的能力从桌面延伸到移动端，实现更无缝的工作流。",
          "strong": false
        }
      ],
      [
        {
          "text": "这也是AI Agent走向“无处不在”的一个缩影，它不再局限于特定设备，而是通过云端和移动端的协同，使得复杂的AI任务可以在后台持续运行，并随时接受人类的指令和反馈。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注Codex在移动端远程访问的稳定性、安全性，以及如何更好地与移动设备特有功能结合，进一步优化开发者体验。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bb/cd/85/bbcd8519-7d86-ec84-fad0-5b12880e3efc/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 免费用户获得更多内联图片",
    "market": "美国",
    "date": "2026-05-12",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "ChatGPT的免费用户现在将会在AI回答中看到更多来自网页的内联图片。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些图片旨在帮助用户更直观地理解视觉相关的话题，例如著名人物、地点和产品，图片将出现在回答的相关部分旁边。",
          "strong": false
        }
      ],
      [
        {
          "text": "此功能正在全球范围内的网页和iOS平台，面向使用5.5-Instant模型的免费用户逐步推出。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此举显著提升了免费用户在理解复杂或视觉密集型信息时的体验，使得ChatGPT的回答不仅限于文本，更能结合视觉元素提供更全面的信息，从而降低了AI使用的门槛。",
          "strong": false
        }
      ],
      [
        {
          "text": "对于OpenAI而言，这是通过增强免费用户体验来扩大用户基础、提升产品吸引力的策略，也反映出多模态能力在AI助手中的重要性日益增加。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察此类视觉辅助如何影响用户对信息来源的信任，以及其能否激发更多免费用户升级至付费版本。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bb/cd/85/bbcd8519-7d86-ec84-fad0-5b12880e3efc/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI 上线 Seedance2.0 fast 模型，强化多模态创作体验",
    "market": "中国",
    "date": "2026-05-12",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI最近上线了其Seedance2.0 fast模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此更新旨在提供全新的多模态创作体验，通过自然语言描述即可生成独一无二的图片和视频。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以进行多轮尝试以获得满意的效果，并支持编辑功能，进一步降低了用户创作高质量图片和视频的门槛。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast模型的推出，进一步提升了即梦AI在视觉内容生成方面的速度和效率，降低了用户创作高质量图片和视频的门槛。",
          "strong": false
        }
      ],
      [
        {
          "text": "这反映了中国市场在AI创作工具领域对“快速、便捷、易用”的强烈需求，特别是在短视频和社交媒体内容创作日益增长的背景下，AI正在成为普通用户和创作者的得力助手。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需关注该模型在实际应用中的用户反馈，尤其是生成内容的稳定性和创意性是否能持续满足用户期待，以及如何保持与市场竞品的差异化优势。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d6/2f/0b/d62f0b10-fbf6-d047-47ef-963c7d0a472f/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点 全新上线攻略模式，提供深度生活决策辅助",
    "market": "中国",
    "date": "2026-05-16",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "小红书旗下AI生活助手点点App全新上线“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量的真人经验数据，能够为用户生成专属的深度攻略，覆盖旅行出游、生活兴趣、购物决策、美食探店、笔记总结和知识梳理等多个生活场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "点点支持语音问和带图问，使用户能够以更自然、直观的方式获取信息和决策支持。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此举将AI能力深度融入到用户的生活决策流程中，通过利用UGC社区（如小红书）的真实经验，解决了用户在信息过载时代获取高质量、个性化攻略的痛点，显著提升了生活效率和决策质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "“攻略模式”的推出，展现了AI在整合垂直内容生态、提供精准本地化服务方面的巨大潜力，这对于需要AI辅助生活消费决策的中国用户具有重要价值。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需要观察用户对AI生成攻略的信任度、内容的实时更新机制以及个性化推荐的精准性。同时，其商业化路径（如与商家合作、导流）也值得关注。",
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
    "title": "AI 助手正深度融入用户日常数字生活，向个性化、多模态、无处不在的方向发展",
    "evidence": [
      {
        "text": "Meta AI 通过其Muse Spark模型实现了核心能力升级，支持更自然的语音交互、实时视觉问答和增强的购物功能，并计划将这些智能能力扩展至WhatsApp、Instagram、Facebook、Messenger和Threads等Meta全系应用及AI眼镜。",
        "strong": false
      },
      {
        "text": "ChatGPT为美国Pro用户推出个人财务管理功能，允许安全连接金融账户以提供财务概览和决策支持，同时其移动应用也新增了Codex远程访问，让开发者能随时随地控制AI编程代理。",
        "strong": false
      },
      {
        "text": "中国的小红书旗下AI生活助手点点全新上线“攻略模式”，基于海量真人经验提供深度生活决策辅助。这些进展都表明，AI不再仅仅是独立的对话工具，而是越来越成为集成在现有平台中、能感知多模态信息（语音、视觉、个人数据），并提供深度个性化服务的泛在助手。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美市场在这一趋势上表现出共通性：美国主要科技巨头正在通过自身强大的生态系统，将AI助手能力渗透到更广泛的消费场景中（如Meta AI的社交与购物，ChatGPT的财务与编程）。",
        "strong": false
      },
      {
        "text": "中国市场，以点点为代表的产品，也正通过整合语音、视觉、生态信源（如小红书内容）等能力，提供覆盖学习、工作、生活的全场景服务。双方都在努力通过深度集成和多模态交互，构建用户的AI“搭子”或“管家”体验。",
        "strong": false
      }
    ]
  },
  {
    "title": "多模态交互成为 AI 助手和内容创作领域的核心竞争力",
    "evidence": [
      {
        "text": "Meta AI的Muse Spark模型强调了“更快的声音响应”、“更智能的AI眼镜”以及通过摄像头进行“实时AI”的能力，这直接提升了多模态交互的流畅度和实用性。",
        "strong": false
      },
      {
        "text": "ChatGPT为免费用户提供了更多“内联图片”以帮助理解视觉主题，这使得AI的输出不再局限于文本，而是能够结合图像提供更直观的信息。",
        "strong": false
      },
      {
        "text": "在中国，即梦AI上线了Seedance2.0 fast模型，强调“全新多模态创作体验”，用户可通过自然语言描述生成高质量的图片和视频。",
        "strong": false
      },
      {
        "text": "这些信号共同指向多模态能力在AI产品中的关键作用，无论是理解用户意图还是生成丰富内容。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "无论是在美国还是中国，AI产品都在积极探索和强化多模态能力，这不仅体现在AI助手对用户输入的理解（语音、视觉），也体现在AI输出的丰富性（文本、图片、视频）。",
        "strong": false
      },
      {
        "text": "美国巨头倾向于将多模态能力集成到现有大流量平台（如Meta的应用和硬件），而中国市场则在独立AI创作工具（如即梦AI、豆包的P图和视频生成）和全能AI助手（腾讯元宝的AI绘图和视频生成）中双向发力。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 Meta AI 核心能力升级并扩展至全生态应用与硬件、ChatGPT 推出个人财务管理功能，以及中国的 即梦AI 上线 Seedance2.0 fast 模型，强化多模态创作体验、点点 全新上线攻略模式，提供深度生活决策辅助，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "主流科技公司持续升级其AI助手核心模型，并积极将多模态能力（如语音、实时视觉、图片理解）深度集成到其现有产品生态和硬件中。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国市场在AI图片和视频创作领域展现出极强的活力，头部应用不断推出新模型（如Seedance2.0 fast），强化多模态生成和编辑能力。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国更偏向入口整合和高频场景覆盖",
    "evidence": [
      {
        "text": "中国市场在AI图片和视频创作领域展现出极强的活力，头部应用不断推出新模型（如Seedance2.0 fast），强化多模态生成和编辑能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "观察用户对集成式AI助手的接受度、隐私数据处理方式，以及垂直领域（如购物、金融）的AI辅助功能如何深化。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "ai-assistant-search-us",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "Meta AI",
      "Gemini",
      "ChatGPT",
      "Google AI Edge Eloquent"
    ],
    "pattern": "主流科技公司持续升级其AI助手核心模型，并积极将多模态能力（如语音、实时视觉、图片理解）深度集成到其现有产品生态和硬件中。",
    "opportunity": "开发更具情境感知能力、无缝融入日常工作流、并能处理多模态复杂任务的AI助手插件或垂直应用。",
    "watchNext": "观察用户对集成式AI助手的接受度、隐私数据处理方式，以及垂直领域（如购物、金融）的AI辅助功能如何深化。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai-assistant-search-cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点",
      "千问"
    ],
    "pattern": "中国头部互联网公司正将旗下AI助手打造为“全能型管家”，通过接入先进大模型、打通生态信源（如微信公众号、视频号、小红书内容），提供多样化的辅助功能。",
    "opportunity": "发掘AI助手在特定中国生活场景（如小红书攻略生成、本地化服务搜索）中的细分价值，优化多模态输入（语音、拍照）的准确性和便捷性。",
    "watchNext": "关注各平台AI助手如何平衡功能广度与专业深度，以及用户对其内容生态整合的满意度，尤其是付费模式的接受度。",
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
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "Apple 中国总榜 (千问)",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai-education-learning-us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Gizmo",
      "ChatGPT"
    ],
    "pattern": "AI学习平台获得大额融资，通过游戏化和交互式材料吸引学生用户；通用AI助手也开始涉足特定知识领域，如个人财务规划，提供辅助学习和决策。",
    "opportunity": "开发更专注于个性化学习路径、自适应内容生成和技能评估的AI教育工具，尤其是在细分学科或职业技能培训领域。",
    "watchNext": "关注游戏化学习的长期效果和用户留存率，以及AI在金融知识普及、投资教育等成人学习场景中的渗透程度。（融资 + 产品验证）",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai-education-learning-cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "千问智学",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "头部互联网公司积极布局AI教育，推出专业AI家教应用，提供拍照搜题、作业批改、定制资料、作文辅导和听写背诵等全方位服务，并将其集成到通用AI助手中。",
    "opportunity": "优化AI教育在个性化辅导中的交互体验和内容质量，特别是在深度讲解和举一反三方面。同时，探索AI在素质教育、兴趣培养等非应试教育领域的应用。",
    "watchNext": "观察AI教育产品如何有效提升学生成绩和学习兴趣，解决“减负”与“增效”的矛盾，以及其商业模式的成熟度。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
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
    "id": "ai-companion-social-us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "Character.AI",
      "Replika",
      "Series",
      "ChatGPT"
    ],
    "pattern": "AI伴侣应用持续迭代模型，提升角色一致性和记忆能力；创新社交网络通过AI促成连接；通用AI助手也开始整合安全陪伴功能。",
    "opportunity": "开发更具情感深度和个性化的AI伴侣，探索AI在特定兴趣社交、心理健康支持等领域的应用。同时，确保AI社交产品的隐私和安全。",
    "watchNext": "关注AI伴侣的用户留存和付费意愿，以及AI社交产品如何解决冷启动和用户信任问题。ChatGPT的“信任联系人”功能将如何落地并保护用户安全。（融资 + 产品验证）",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai-companion-social-cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "星野",
      "腾讯元宝"
    ],
    "pattern": "多模态AI智能体社区平台允许用户自由创造和分享AI伴侣，并提供沉浸式交互。一些通用AI助手也开始探索趣味性的社交互动功能。",
    "opportunity": "深入挖掘用户在虚拟陪伴、角色扮演和情感支持方面的细分需求，提升AI伴侣的情商和共情能力。同时，加强社区治理和内容安全。",
    "watchNext": "关注AI伴侣智能体的形象、声音和人设定制自由度对用户创造力的激发，以及这类社区如何构建活跃的用户生态和解决内容合规性问题。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-gaming-entertainment-us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "Gemini"
    ],
    "pattern": "暂无独立的AI原生游戏或互动娱乐应用大规模上线。AI能力更多以辅助或嵌入的形式出现，如音乐生成。",
    "opportunity": "探索AI驱动的叙事游戏、个性化游戏体验（NPC行为、内容生成）或新的互动娱乐形式。",
    "watchNext": "关注独立工作室在AI游戏领域的创新尝试，以及大厂是否会推出重磅AI游戏产品。",
    "sources": [
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "ai-gaming-entertainment-cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "腾讯元宝"
    ],
    "pattern": "大型AI助手产品中开始出现实验性的互动娱乐功能（如元宝派的养龙虾），但尚未形成独立的AI游戏爆发趋势。",
    "opportunity": "研究中国用户对AI生成互动内容、虚拟社交娱乐的需求，开发具有中国文化特色的AI游戏或互动故事。",
    "watchNext": "关注游戏公司与AI技术结合的进展，以及AI在提升游戏可玩性、个性化体验方面的应用。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-creation-us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Gemini",
      "Replika",
      "CapCut",
      "Canva",
      "Picsart AI Photo Editor"
    ],
    "pattern": "AI在音乐生成（Gemini Lyria 3 Pro）和图像生成（Replika）方面持续发展。第三方图片/视频编辑工具也广泛集成AI功能。",
    "opportunity": "开发更专业的AI辅助创意工具，支持更复杂的创作流程和风格定制，同时探索文本到三维模型等新创作范式。",
    "watchNext": "关注AI生成内容的版权问题和商业化路径，以及AI在专业创意领域（如电影、设计）的应用突破。",
    "sources": [
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "ai-creation-cn",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "即梦AI",
      "豆包",
      "腾讯元宝",
      "剪映",
      "醒图"
    ],
    "pattern": "中国市场在AI图片和视频创作领域展现出极强的活力，头部应用不断推出新模型（如Seedance2.0 fast），强化多模态生成和编辑能力。",
    "opportunity": "针对短视频、直播等中国特色内容生态，开发更高效、易用的AI创作工具。探索AI在虚拟偶像、数字藏品等新兴领域的应用。",
    "watchNext": "观察用户对AI生成视频质量的反馈，以及内容平台如何平衡AI创作的效率与原创性。警惕用户对生成质量、价格和排队的抱怨。",
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "ai-efficiency-office-us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT (Codex)",
      "Google AI Edge Eloquent",
      "Granola"
    ],
    "pattern": "AI能力正深度嵌入到专业工作流和日常办公工具中，提升编程效率、文本输入准确性及会议记录管理。融资信号补充了AI会议记录产品（Granola）的快速增长和企业级扩展。",
    "opportunity": "开发针对特定行业或岗位的AI Agent，自动化复杂任务，提高团队协作效率。同时，关注本地化、隐私保护的AI效率工具。",
    "watchNext": "观察AI代码助手、AI会议纪要等产品在企业中的普及率和实际效果，以及如何解决数据安全和合规性问题。（融资 + 产品验证）",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      }
    ]
  },
  {
    "id": "ai-efficiency-office-cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "中国通用AI助手在办公效率方面提供多项服务，包括资料总结、数据分析、代码编写、文档和PPT生成，以及文档精读等，满足用户在学习和工作中的多样化需求。",
    "opportunity": "开发更专注于文档自动化、数据可视化和跨平台协作的AI办公工具，尤其是在企业级部署和定制化服务方面。",
    "watchNext": "观察通用AI助手在细分办公场景的专业性表现，以及企业用户对其数据隐私和安全性的关注。",
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
    "id": "ai-lifestyle-tools-us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Meta AI",
      "Replika"
    ],
    "pattern": "AI助手开始深度介入个人生活管理，如财务规划和购物辅助，并提供更广泛的日常信息探索和推荐。",
    "opportunity": "开发针对特定生活场景（如健康管理、智能家居、个性化旅行规划）的AI工具，提供更精细化的服务。",
    "watchNext": "关注用户对AI介入个人生活领域（尤其是财务）的信任程度，以及AI如何实现跨应用的数据整合以提供更全面的生活服务。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      }
    ]
  },
  {
    "id": "ai-lifestyle-tools-cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "点点",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "中国AI生活工具高度结合本土内容生态（如小红书），提供深度攻略生成、出行规划、美食探店等生活决策辅助，同时通用AI助手也具备全面的生活服务能力。",
    "opportunity": "进一步优化AI在本地化生活服务、消费决策辅助方面的准确性和及时性，探索AI与O2O服务的深度融合。",
    "watchNext": "关注AI生成攻略和推荐的实际用户转化率，以及用户对AI在购物、餐饮等领域“信任度”的建立。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
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
    "id": "ai-hardware-entry-us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta",
      "Oakley Meta",
      "Meta Ray-Ban Display",
      "Rokid Glasses (via Hi Rokid app)"
    ],
    "pattern": "Meta持续推进AI眼镜作为新的AI交互入口，强调实时视觉和语音AI能力；Rokid等厂商也在积极更新其智能眼镜应用，提升AI助手的性能和多模态理解。",
    "opportunity": "探索AI硬件在日常穿戴、特定场景（如导游、辅助）的创新应用，注重用户隐私保护和佩戴舒适性。",
    "watchNext": "关注AI眼镜在消费市场的普及速度，以及Meta和Rokid等厂商在功能、续航、价格等方面的竞争动态，尤其是独立计算能力的提升。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "id": "ai-hardware-entry-cn",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Rokid Glasses (via Rokid AI App)"
    ],
    "pattern": "Rokid等中国厂商积极更新其AI眼镜配套应用，集成国内领先大模型（如通义千问、智谱）的最新视觉和智能体能力，提升语音识别和视觉理解的准确性。",
    "opportunity": "开发结合中国本土生态（如支付宝扫码、高德导航）的AI眼镜应用，探索其在旅游、购物、教育等场景的深度价值。",
    "watchNext": "关注AI眼镜在中国市场的用户反馈和应用落地情况，以及与手机、其他智能设备的协同体验。",
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "Meta AI 核心能力升级并扩展至全生态应用与硬件",
    "bullets": [
      [
        {
          "text": "Meta AI 通过其最新模型Muse Spark进行了全面升级，支持更自然的语音交互，包括打断、切换话题、多语言对话，并能实时生成图像和提供推荐。",
          "strong": false
        }
      ],
      [
        {
          "text": "新功能包括通过AI眼镜实现实时视觉问答，用户可将摄像头指向世界并提问所见内容；以及新的购物功能，Meta AI可在Facebook Marketplace和全网范围内搜索商品，并支持按品牌或创作者浏览。",
          "strong": false
        }
      ],
      [
        {
          "text": "Muse Spark的智能将逐步推广至WhatsApp、Instagram、Facebook、Messenger和Threads等Meta全系应用，涵盖搜索栏、群聊和帖子等多个触点。Meta还在测试群聊中的“侧边聊天”和Threads中的@meta.ai提及功能。",
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
    "title": "ChatGPT 持续拓展个人化与专业化功能",
    "bullets": [
      [
        {
          "text": "OpenAI为美国境内的ChatGPT Pro用户推出了个人财务管理功能，允许安全连接金融账户，在一个集中的仪表板中查看支出、账单、订阅、净资产和投资信息，并基于财务上下文进行问答和决策辅助。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT移动应用现提供Codex远程访问的预览功能，允许用户通过手机远程控制和协作Mac上运行的Codex编程代理，在离开工作台时也能保持工作连接。",
          "strong": false
        }
      ],
      [
        {
          "text": "针对免费用户，ChatGPT现在会提供更多来自网页的内联图片，以帮助用户更直观地理解视觉相关的话题，在全球范围内的网页和iOS平台逐步推出。",
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
    "title": "ChatGPT 推出个人财务管理功能",
    "bullets": [
      [
        {
          "text": "OpenAI正在为美国境内的ChatGPT Pro用户逐步推出一项新的个人财务管理体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过Plaid安全连接其支持的金融账户，从而在一个集中的仪表板中查看支出、账单、订阅、净资产和投资信息。",
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
    "title": "ChatGPT 移动应用支持 Codex 远程访问",
    "bullets": [
      [
        {
          "text": "OpenAI在其ChatGPT移动应用中推出了Codex远程访问的预览功能。这项功能允许用户通过手机，远程连接并控制在Mac主机上运行的Codex编程工作。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以在手机上启动或继续对话、回答问题、改变方向、批准操作、查看Codex的发现，并轻松切换连接的主机，从而在离开工作台时也能保持工作连接。",
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
    "title": "ChatGPT 免费用户获得更多内联图片",
    "bullets": [
      [
        {
          "text": "ChatGPT的免费用户现在将会在AI回答中看到更多来自网页的内联图片。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些图片旨在帮助用户更直观地理解视觉相关的话题，例如著名人物、地点和产品，图片将出现在回答的相关部分旁边。",
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
    "title": "即梦AI 上线 Seedance2.0 fast 模型，强化多模态创作体验",
    "bullets": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI最近上线了其Seedance2.0 fast模型，旨在提供全新的多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过自然语言描述快速生成独一无二的图片和视频，并支持编辑功能，进一步降低了创意表达的门槛。",
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
    "title": "点点 全新上线攻略模式，提供深度生活决策辅助",
    "bullets": [
      [
        {
          "text": "小红书旗下AI生活助手点点App全新上线“攻略模式”，基于小红书海量真人经验，为用户生成专属的深度攻略，覆盖旅行出游、生活兴趣、购物决策、美食探店等多个生活场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "点点支持语音问和带图问，使用户能够以更自然、直观的方式获取信息和决策支持，极大地提升了生活效率和决策质量。",
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
  },
  {
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "中国市场在AI图片和视频创作领域展现出极强的活力，头部应用不断推出新模型（如Seedance2.0 fast），强化多模态生成和编辑能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "针对短视频、直播等中国特色内容生态，开发更高效、易用的AI创作工具。探索AI在虚拟偶像、数字藏品等新兴领域的应用。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：中国方向信号",
    "bullets": [
      [
        {
          "text": "中国头部互联网公司正将旗下AI助手打造为“全能型管家”，通过接入先进大模型、打通生态信源（如微信公众号、视频号、小红书内容），提供多样化的辅助功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "发掘AI助手在特定中国生活场景（如小红书攻略生成、本地化服务搜索）中的细分价值，优化多模态输入（语音、拍照）的准确性和便捷性。",
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
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "Apple 中国总榜 (千问)",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  }
];
