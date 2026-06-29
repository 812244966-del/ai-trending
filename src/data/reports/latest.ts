import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-06-29";

export const topFindings: Finding[] = [
  {
    "name": "GPT-5.5 Instant 模型更新",
    "market": "美国",
    "date": "2026-06-24",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI 对其最常用的 ChatGPT 模型 GPT-5.5 Instant 进行了更新，旨在提升对话质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新尤其改进了模型在用户进行决策、寻求建议、规划、研究选项或购物时的表现，能够更好地识别问题背后的潜在目标，并在多轮对话中保持上下文。",
          "strong": false
        }
      ],
      [
        {
          "text": "模型现在能更可靠地遵循复杂指令，当请求包含多个约束或要求时，响应更有可能解决所有问题并清晰解释推荐理由。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "更智能、更理解用户意图的 AI 助手将大幅提高用户解决复杂问题的效率和体验，尤其在需要深度思考和多步交互的场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "这预示着大模型在理解用户意图、保持上下文以及遵循复杂指令方面的持续进步，使其更接近通用人工智能的目标，并为更个性化的服务奠定基础。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需要观察模型在实际应用中如何进一步降低用户操作负担，以及其在不同垂类任务上的泛化能力。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/59/ed/2259edf9-6bd5-a17a-c035-074aac0954d2/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "个人理财功能拓展与听写能力增强",
    "market": "美国",
    "date": "2026-06-26",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 的个人理财体验现已拓展至美国区的 Plus 用户（网页、iOS）和 Pro/Plus Android 用户。",
          "strong": false
        }
      ],
      [
        {
          "text": "符合条件的用户可以安全地连接受支持的金融账户，查看财务仪表盘，并向 ChatGPT 提出基于其财务背景的问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，ChatGPT 的听写功能也进行了改进，采用了新的语音转文本模型，显著提升了多语言和不同口音的转录准确性，并在嘈杂公共空间和职场环境中表现更稳定。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "ChatGPT 开始深入专业领域，通过连接真实数据源提供个性化服务而非泛泛的回答，代表了 AI 助手从通用走向垂类深度集成的趋势。",
          "strong": false
        }
      ],
      [
        {
          "text": "听写功能的改进大幅提升了用户在多场景下的交互便利性和效率，使其更具通用性和无障碍性，有助于拓宽用户群体。",
          "strong": false
        }
      ],
      [
        {
          "text": "这标志着 AI 助手在数据安全、隐私保护下的实际应用落地，也预示着更多与个人生活数据相关的 AI 助理服务将出现。",
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
    "name": "Meta AI 基于 Muse Spark 全面升级及功能扩展",
    "market": "美国",
    "date": "2026-05-12",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Meta AI 的最新模型 Muse Spark 正逐步推广到 WhatsApp、Instagram、Facebook、Messenger 和 Threads 等 Meta 旗下应用，以及 Ray-Ban Meta 和 Oakley Meta 智能眼镜（美国和加拿大市场）。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新带来了多项功能增强，包括 Meta AI 应用中更快的语音响应、支持通过摄像头实时提问的 Live AI 功能，以及新的购物功能（可在 Facebook Marketplace 上搜索商品）。",
          "strong": false
        }
      ],
      [
        {
          "text": "Meta AI 在群聊中测试“侧边聊天”功能，允许用户私下提问，并在 Threads 帖子和回复中支持 @meta.ai 提及。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Meta 正在其全生态产品中深度整合 AI 能力，旨在通过统一的 AI 模型提升用户在社交、购物、内容消费等日常场景的体验，并强化 AI 在硬件入口（智能眼镜）上的应用潜力。",
          "strong": false
        }
      ],
      [
        {
          "text": "这表明了科技巨头在多模态、实时交互和跨应用场景下打造“超级助手”的决心，寻求将 AI 渗透到用户数字生活的每一个角落，形成强大的生态壁垒。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察 Muse Spark 在实际用户中的采纳情况，以及 Meta 在 AI 硬件和平台生态上的竞争优势是否能进一步扩大。",
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
    "name": "Rokid Glasses 伴侣应用 Hi Rokid 1.9.0 更新",
    "market": "中国",
    "date": "2026-06-27",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Rokid Glasses 的伴侣应用 Hi Rokid 更新至 1.9.0 版本。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新新增了“工具箱”功能，支持眼镜端本地应用安装、Wi-Fi 连接管理及全新的遥控功能，提升了设备的独立性和可控性。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，AI 聊天支持 A2UI 渲染，能够根据场景自动生成 UI 页面，提供更可视化的 AI 交互体验，并优化了翻译准确性和整体 AI 助手体验，新增实时同声传译功能。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这次更新显著提升了 Rokid AI 眼镜作为 AI 硬件入口的独立性和易用性，通过本地应用支持和更智能的 AI 交互（如 A2UI），向“AI 个人终端”迈进。",
          "strong": false
        }
      ],
      [
        {
          "text": "实时翻译、场景化 UI 等功能增强了 AI 眼镜的实用价值，预示着 AI 硬件在日常生活中扮演更重要角色的潜力，特别是对于提升生产力和无障碍体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来观察重点在于 Rokid 如何构建围绕眼镜的 AI 生态，吸引更多开发者，以及其在多模态交互上的进一步创新。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e1/c1/3a/e1c13a22-5be8-25e7-00f6-4a4750fde840/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
      "alt": "Hi Rokid - Rokid Glasses App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Hi Rokid App Store",
      "sourceHref": "https://apps.apple.com/us/app/hi-rokid/id6749669942",
      "note": "使用 Hi Rokid - Rokid Glasses 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Codex Remote 全面开放给 ChatGPT 用户",
    "market": "美国",
    "date": "2026-06-25",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 宣布 Codex Remote 功能现已全面向所有 ChatGPT 计划的用户开放。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过 ChatGPT 移动应用，在连接的 Mac 或 Windows 主机上开始或继续开发工作，并远程审查进度和批准操作。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，还新增了 DigitalOcean Droplet Workspace 插件，允许 Codex 预置 DigitalOcean Droplet、配置 SSH 访问，并将其连接到 Codex 应用作为远程工作区。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这标志着 ChatGPT 在从对话式 AI 助手向更强大的 AI Agent 演进方面迈出了重要一步，使其能够直接介入用户的计算环境并执行复杂任务。",
          "strong": false
        }
      ],
      [
        {
          "text": "它为开发者和高级用户提供了在移动设备上管理和控制远程开发工作流的能力，极大地提升了 AI 在效率办公和代码辅助领域的应用深度和便捷性。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察此类 AI Agent 功能的稳定性和安全性，以及其如何与其他开发工具链深度整合，推动软件开发方式的变革。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/59/ed/2259edf9-6bd5-a17a-c035-074aac0954d2/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI 助手向多模态超级应用演进，硬件入口价值凸显",
    "evidence": [
      {
        "text": "Meta AI 的 Muse Spark 全面集成到其所有社交应用和智能眼镜中，提供语音、实时视觉（Live AI）、购物等多种能力。",
        "strong": false
      },
      {
        "text": "ChatGPT 拓展个人理财、增强听写，GPT-5.5 Instant 提升多轮对话能力。",
        "strong": false
      },
      {
        "text": "Rokid Glasses 的伴侣应用更新，支持 A2UI 渲染和实时翻译，强化眼镜的 AI 交互能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美巨头均在将 AI 助手打造成无处不在的“超级应用”，通过多模态交互（语音、视觉）和跨平台集成，渗透用户日常生活的方方面面。",
        "strong": false
      },
      {
        "text": "尤其是在硬件入口上的竞争，如 Meta 和 Rokid 的智能眼镜，显示出 AI 终端化和“AI Everywhere”的趋势。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI Agent 化加速，深入垂类工作流和代码执行",
    "evidence": [
      {
        "text": "OpenAI 推出 Codex Remote 通用可用，允许用户通过手机控制远程 Mac/Windows 进行开发工作，并支持 DigitalOcean 插件。",
        "strong": false
      },
      {
        "text": "《晚点聊 LateTalk》提及 OpenClaw 案例，强调“Coding→Agent 大主线明细，从模型的竞争到系统的竞争”，以及 OpenAI 与 Anthropic 在 Coding 产品上的竞争。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "美国的 AI Agent 发展正从通用辅助转向更具体、可执行的“工作流代理”，尤其是在开发者工具和效率办公领域，通过实际操作提升工作流效率。",
        "strong": false
      },
      {
        "text": "中国市场虽然直接的 Agent 独立产品提及较少，但豆包和腾讯元宝等助手开始集成更复杂的文档处理、代码生成等能力，暗示了 Agent 逻辑的渗透，预示着未来本土 Agent 产品的快速发展。",
        "strong": false
      }
    ]
  },
  {
    "title": "内容创作与生活服务 AI 化，注重用户体验与个性化",
    "evidence": [
      {
        "text": "中国的即梦 AI 推出 Seedance 2.0 fast 模型，提升图像视频创作效率。",
        "strong": false
      },
      {
        "text": "点点 APP 基于小红书数据提供“攻略模式”，解决旅行、生活兴趣、购物决策等问题。",
        "strong": false
      },
      {
        "text": "Replika 等陪伴类 AI 不断提升记忆和个性化互动，旨在帮助用户找到前行的方向。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美两地 AI 产品在内容创作和生活服务领域均注重用户体验优化，通过 AI 降低创作门槛、提供便捷生活决策。",
        "strong": false
      },
      {
        "text": "中国产品更强调与本土内容生态（如小红书、微信）的结合，提供贴近国人生活习惯的垂直服务。",
        "strong": false
      },
      {
        "text": "美国产品则在通用能力增强的同时，向更深层次的情感陪伴和个性化互动发展。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 GPT-5.5 Instant 模型更新、个人理财功能拓展与听写能力增强，以及中国的 Rokid Glasses 伴侣应用 Hi Rokid 1.9.0 更新，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "GPT-5.5 Instant 模型更新，提升通用对话质量、上下文理解和指令遵循能力；个人理财功能拓展至 Plus 和 Android 用户，支持连接金融账户；听写功能升级，多语言识别更准确。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "字节跳动旗下即梦AI App （版本2.2.4，6月22日更新）上线 Seedance 2.0 fast 模型，大幅提升图片和视频创作体验，支持用自然语言描述想法生成独一无二的图片和视频，并提供编辑和分享功能。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "US-AI-Assistant-ChatGPT",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT"
    ],
    "pattern": "GPT-5.5 Instant 模型更新，提升通用对话质量、上下文理解和指令遵循能力；个人理财功能拓展至 Plus 和 Android 用户，支持连接金融账户；听写功能升级，多语言识别更准确。",
    "opportunity": "传统AI助手通过模型升级和深度集成，向更智能、更个性化、更实用的方向发展，尤其在专业垂类数据连接方面，存在巨大用户价值和商业化空间。",
    "watchNext": "观察其在专业领域的进一步拓展，以及多模态交互的深化，例如更自然的视觉问答和更强的行动执行能力。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "CN-AI-Assistant-Doubao",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包"
    ],
    "pattern": "字节跳动旗下豆包APP持续迭代，最新版本（2.2.4）上线Seedance2.0 fast模型以提供全新多模态创作体验，并强化其在学习辅导、生活规划、图片编辑、视频生成等全能型AI助手功能，稳居效率榜前列。",
    "opportunity": "本土AI助手依托平台生态和技术模型优势，快速占据用户心智，并通过多模态能力和场景化服务满足日益增长的泛生活需求，有望成为国民级AI入口。",
    "watchNext": "关注豆包在多模态技术（如视频生成）上的持续领先性，及其在垂直领域的深耕，以及用户留存和商业化模式的探索。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "US-AI-Education-Gizmo",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI学习平台Gizmo完成2200万美元A轮融资（约合1.6亿元人民币），用户数达1300万。该平台将学生笔记转化为互动学习材料，并通过游戏化机制提升学习效率和参与度。融资+产品验证的补充信号。",
    "opportunity": "AI通过游戏化和个性化辅助，有效解决学生学习动力和效率问题，特别是在传统教育表现下降的背景下。市场对寓教于乐的AI学习产品需求旺盛。",
    "watchNext": "观察其如何拓展大学市场，以及更多教育场景下的 AI 创新模式，特别是针对不同年龄段学生的个性化学习路径设计。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "CN-AI-Education-TencentYuanbao",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "腾讯元宝"
    ],
    "pattern": "腾讯元宝App近期推出“高考志愿通”功能，提供查分、选校选专业、填报、录取等一站式AI辅助咨询。同时，其拍题答疑和AI讲解功能也持续优化，为学生和家长提供学习支持。",
    "opportunity": "AI助手向特定教育场景深化，解决学生和家长在升学决策等关键环节的信息不对称和效率痛点，具有较强的实用价值和市场需求。",
    "watchNext": "观察其在高考后期的用户反馈和转化，以及未来在其他教育垂类场景的拓展，例如职业规划、兴趣学习等。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "US-AI-Companion-CharacterAI",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI"
    ],
    "pattern": "Character.AI 在4月发布了 PipSqueak 2 模型更新，大幅提升了角色一致性、记忆力和对话质量，并改进了 Memory 页面和即将上线的 Lorebook 功能，增强用户与虚拟角色的沉浸式互动体验。",
    "opportunity": "AI在情感陪伴和虚拟社交领域持续创新，通过提升模型“人格”的稳定性与上下文理解能力，满足用户对深度、个性化互动的需求，市场潜力巨大。",
    "watchNext": "观察 Lorebook 功能上线后的用户反馈，以及更多提升沉浸感的交互方式，例如更逼真的语音、表情和动作集成。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      }
    ]
  },
  {
    "id": "CN-AI-Companion-Xingye",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "星野"
    ],
    "pattern": "星野作为多模态智能体内容社区，持续优化用户创建和分享AI智能体的体验，近期更新修复了问题并优化用户体验（2.54.000版本，6月17日）。其通过高自由度定制智能体，满足用户在娱乐、工作、学习等多场景的陪伴社交需求。",
    "opportunity": "中国市场对AI虚拟陪伴和角色扮演需求旺盛，平台通过降低创作门槛、丰富互动方式和维护社区生态，激发用户创造力，构建繁荣的UGC AI社交生态。",
    "watchNext": "关注其在多模态（如语音、形象）交互上的持续优化，以及社区内容的质量管理和商业化路径。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "US-AI-Game-None",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明确的AI游戏或互动娱乐类产品在近期有显著更新或发布。",
    "opportunity": "市场仍处于探索期，期待更多AI驱动的创新游戏或娱乐体验出现，特别是在AI生成内容、智能NPC、个性化剧情等方面。",
    "watchNext": "关注现有游戏平台的AI功能集成，以及独立AI游戏工作室的动向，特别是AI与元宇宙、XR技术的结合。",
    "sources": []
  },
  {
    "id": "CN-AI-Game-None",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明确的AI游戏或互动娱乐类产品在近期有显著更新或发布。",
    "opportunity": "中国游戏市场庞大，AI在NPC智能化、内容生成、个性化体验方面有巨大潜力。期待更多本土创新。",
    "watchNext": "关注游戏大厂或新兴团队在AI游戏技术和产品上的突破，尤其是结合中国文化和IP的创新。",
    "sources": []
  },
  {
    "id": "US-AI-Creation-MetaAI",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Meta AI"
    ],
    "pattern": "Meta AI 的 Muse Spark 全面推出，支持图像生成功能，使用户可以在对话中将想法、情绪和记忆转化为图像，降低了视觉内容创作的门槛。",
    "opportunity": "AI创作能力作为通用AI助手的一部分，将进一步普及，使普通用户能更便捷地进行视觉内容的表达，提升社交媒体内容多样性。",
    "watchNext": "观察 Meta AI 在创作功能上的进一步专业化和多模态融合，例如视频生成、3D内容创作等。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "CN-AI-Creation-JImengAI",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "即梦AI"
    ],
    "pattern": "字节跳动旗下即梦AI App （版本2.2.4，6月22日更新）上线 Seedance 2.0 fast 模型，大幅提升图片和视频创作体验，支持用自然语言描述想法生成独一无二的图片和视频，并提供编辑和分享功能。",
    "opportunity": "中国市场对AI短视频和图像创作需求旺盛，AI工具通过模型升级和优化用户体验，赋能普通用户快速生成高质量创意内容，抢占内容生产高地。",
    "watchNext": "关注其在视频生成领域的质量提升和功能扩展，以及如何更好地与抖音生态融合，形成更强大的创作闭环。",
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "id": "US-AI-Efficiency-ChatGPT",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "ChatGPT"
    ],
    "pattern": "OpenAI 宣布 Codex Remote 全面开放给所有 ChatGPT 用户（6月25日），允许从移动应用远程控制 Mac/Windows 主机进行开发工作，并推出 DigitalOcean 插件，强化 AI 在编程和远程协作中的应用。",
    "opportunity": "AI Agent 化工具在编程、远程办公等专业效率场景中展现潜力，通过自动化和集成提升开发者的工作流效率，改变传统工作模式。",
    "watchNext": "观察更多 AI Agent 专注于特定办公场景的落地和集成，以及其对传统软件的替代性影响，例如在项目管理、数据分析等领域。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "CN-AI-Efficiency-DianDian",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "点点"
    ],
    "pattern": "点点APP上线全新“攻略模式”（版本3.26，6月25日更新），基于小红书海量真人经验，生成深度旅行、生活兴趣、购物决策、美食探店等攻略，并支持笔记总结和知识梳理，提升信息获取和整理效率。",
    "opportunity": "AI在信息整合和内容摘要方面提升用户获取和管理信息的效率，尤其是在个性化知识管理和决策辅助方面，具有广阔的应用前景。",
    "watchNext": "关注其在企业级或更复杂办公场景中的应用潜力，例如自动化报告生成、会议纪要整理等。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "id": "US-AI-LifeTool-ChatGPT",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "ChatGPT"
    ],
    "pattern": "ChatGPT 个人理财功能拓展至美国 Plus 和 Android 用户（6月26日），允许用户连接金融账户并提问，提供个性化财务洞察。GPT-5.5 Instant 也提升了购物和本地查询的实用性。",
    "opportunity": "AI助手向生活服务领域渗透，通过连接个人数据和增强通用能力，提供个性化和便捷的日常决策支持，有望成为用户管理个人生活的入口。",
    "watchNext": "观察其在更广泛生活服务（如健康、出行）领域的集成，以及如何处理敏感数据和提供高价值服务。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "CN-AI-LifeTool-DianDian",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "点点"
    ],
    "pattern": "点点APP上线全新“攻略模式”（版本3.26，6月25日更新），基于小红书海量真人经验，一键生成旅行、生活兴趣、购物、美食等深度攻略，极大地提升了用户在日常生活决策中的效率和体验。",
    "opportunity": "AI深度融合本土内容生态（如小红书），通过高质量内容整合，成为用户生活决策的“智能参谋”，满足个性化、场景化的生活需求，具有独特的市场竞争力。",
    "watchNext": "关注其如何进一步提升攻略内容的实时性和深度，以及与其他生活服务平台的联动，形成更全面的生活服务闭环。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "id": "US-AI-Hardware-MetaAIGlasses",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta",
      "Oakley Meta"
    ],
    "pattern": "Meta AI 的 Muse Spark 模型全面推广到 Ray-Ban Meta 和 Oakley Meta 智能眼镜（5月12日更新），提升了语音响应速度和 AI 智能性，并支持 Meta AI 应用中的 Live AI 功能，通过摄像头实时提问。",
    "opportunity": "智能眼镜作为 AI 硬件的自然入口，正通过大模型集成和多模态交互（视觉、语音）实现更自然的感知和交互，逐渐成为用户数字生活的延伸，具备替代智能手机的潜力。",
    "watchNext": "关注 Meta AI 眼镜在更多市场和功能上的拓展，以及用户接受度，特别是其在AR体验和日常应用中的表现。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "CN-AI-Hardware-RokidAIGlasses",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid Glasses"
    ],
    "pattern": "Rokid AI 伴侣应用更新至 1.9.0 版本（6月27日），为 Rokid Glasses 引入工具箱（本地应用安装、Wi-Fi、遥控），AI 聊天支持 A2UI 渲染，慧眼视觉模型升级到 Qwen 3.6plus，并优化翻译功能（实时同声传译），显著提升智能眼镜的AI能力和独立性。",
    "opportunity": "中国智能眼镜厂商积极整合最新大模型技术，通过提升多模态感知和交互，探索AI在真实世界中的落地应用，为用户带来更智能、便捷的体验，有望成为新的计算平台。",
    "watchNext": "关注 Rokid 在 AI 硬件生态建设、本地应用支持以及更多垂直场景解决方案上的进展，以及其与国内主流 AI 模型的深度融合。",
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
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
    "title": "美国市场：AI 助手深化集成与多模态交互升级",
    "bullets": [
      [
        {
          "text": "AI 助手功能持续强化与扩展，例如 ",
          "strong": false
        },
        {
          "text": "ChatGPT ",
          "strong": true
        },
        {
          "text": "新增个人理财功能并改进听写，而 ",
          "strong": false
        },
        {
          "text": "Meta AI ",
          "strong": true
        },
        {
          "text": "的 ",
          "strong": false
        },
        {
          "text": "Muse Spark ",
          "strong": true
        },
        {
          "text": "模型在全系应用及智能眼镜上推出更快的语音响应、实时 AI 识别和新的购物功能，显示出 AI 助理向“超级应用”方向发展。",
          "strong": false
        }
      ],
      [
        {
          "text": "工作流自动化和专业工具出现新进展，例如 ",
          "strong": false
        },
        {
          "text": "OpenAI ",
          "strong": true
        },
        {
          "text": "的 ",
          "strong": false
        },
        {
          "text": "Codex Remote ",
          "strong": true
        },
        {
          "text": "全面开放，允许用户从移动应用控制远程开发工作，预示着 AI Agent 在效率办公领域的深入应用。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI 语音交互和多模态能力显著提升，无论是 ",
          "strong": false
        },
        {
          "text": "ChatGPT ",
          "strong": true
        },
        {
          "text": "更准确的多语言听写，还是 ",
          "strong": false
        },
        {
          "text": "Meta AI ",
          "strong": true
        },
        {
          "text": "的 ",
          "strong": false
        },
        {
          "text": "Live AI ",
          "strong": true
        },
        {
          "text": "功能（通过摄像头实时提问），都让 AI 更自然地融入用户日常交互，增强了实际可用性。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "title": "GPT-5.5 Instant 模型更新",
    "bullets": [
      [
        {
          "text": "OpenAI 对其最常用的 ChatGPT 模型 GPT-5.5 Instant 进行了更新，旨在提升对话质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新尤其改进了模型在用户进行决策、寻求建议、规划、研究选项或购物时的表现，能够更好地识别问题背后的潜在目标，并在多轮对话中保持上下文。",
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
    "title": "个人理财功能拓展与听写能力增强",
    "bullets": [
      [
        {
          "text": "ChatGPT 的个人理财体验现已拓展至美国区的 Plus 用户（网页、iOS）和 Pro/Plus Android 用户。",
          "strong": false
        }
      ],
      [
        {
          "text": "符合条件的用户可以安全地连接受支持的金融账户，查看财务仪表盘，并向 ChatGPT 提出基于其财务背景的问题。",
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
    "title": "Meta AI 基于 Muse Spark 全面升级及功能扩展",
    "bullets": [
      [
        {
          "text": "Meta AI 的最新模型 Muse Spark 正逐步推广到 WhatsApp、Instagram、Facebook、Messenger 和 Threads 等 Meta 旗下应用，以及 Ray-Ban Meta 和 Oakley Meta 智能眼镜（美国和加拿大市场）。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新带来了多项功能增强，包括 Meta AI 应用中更快的语音响应、支持通过摄像头实时提问的 Live AI 功能，以及新的购物功能（可在 Facebook Marketplace 上搜索商品）。",
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
    "title": "Codex Remote 全面开放给 ChatGPT 用户",
    "bullets": [
      [
        {
          "text": "OpenAI 宣布 Codex Remote 功能现已全面向所有 ChatGPT 计划的用户开放。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过 ChatGPT 移动应用，在连接的 Mac 或 Windows 主机上开始或继续开发工作，并远程审查进度和批准操作。",
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
    "title": "中国市场：本土AI助手多模态创新与硬件结合提速",
    "bullets": [
      [
        {
          "text": "本土 AI 助手在多模态交互和垂类场景持续发力，例如 ",
          "strong": false
        },
        {
          "text": "豆包 ",
          "strong": true
        },
        {
          "text": "和 ",
          "strong": false
        },
        {
          "text": "腾讯元宝 ",
          "strong": true
        },
        {
          "text": "在图片编辑、视频生成、拍题答疑、高考志愿咨询等功能上持续迭代，显示出对用户多元化需求的快速响应。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI 内容创作工具不断优化，字节跳动旗下的 ",
          "strong": false
        },
        {
          "text": "即梦 AI ",
          "strong": true
        },
        {
          "text": "上线 ",
          "strong": false
        },
        {
          "text": "Seedance 2.0 fast ",
          "strong": true
        },
        {
          "text": "模型，提供更快的图像和视频创作体验，降低了内容创作门槛。",
          "strong": false
        }
      ],
      [
        {
          "text": "智能硬件与 AI 助手的融合进一步提速，",
          "strong": false
        },
        {
          "text": "Rokid AI ",
          "strong": true
        },
        {
          "text": "眼镜伴侣应用更新，提升 AI 助手的视觉识别、翻译及交互体验，并支持 A2UI 协议实现场景化 UI 渲染，进一步强化 AI 硬件的实用性。",
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
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "Rokid Glasses 伴侣应用 Hi Rokid 1.9.0 更新",
    "bullets": [
      [
        {
          "text": "Rokid Glasses 的伴侣应用 Hi Rokid 更新至 1.9.0 版本。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新新增了“工具箱”功能，支持眼镜端本地应用安装、Wi-Fi 连接管理及全新的遥控功能，提升了设备的独立性和可控性。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "字节跳动旗下即梦AI App （版本2.2.4，6月22日更新）上线 Seedance 2.0 fast 模型，大幅提升图片和视频创作体验，支持用自然语言描述想法生成独一无二的图片和视频，并提供编辑和分享功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "中国市场对AI短视频和图像创作需求旺盛，AI工具通过模型升级和优化用户体验，赋能普通用户快速生成高质量创意内容，抢占内容生产高地。",
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
    "title": "AI 助手/搜索：中国方向信号",
    "bullets": [
      [
        {
          "text": "字节跳动旗下豆包APP持续迭代，最新版本（2.2.4）上线Seedance2.0 fast模型以提供全新多模态创作体验，并强化其在学习辅导、生活规划、图片编辑、视频生成等全能型AI助手功能，稳居效率榜前列。",
          "strong": false
        }
      ],
      [
        {
          "text": "本土AI助手依托平台生态和技术模型优势，快速占据用户心智，并通过多模态能力和场景化服务满足日益增长的泛生活需求，有望成为国民级AI入口。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  }
];
