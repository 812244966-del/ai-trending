import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-04-27";

export const topFindings: Finding[] = [
  {
    "name": "OpenAI 在 ChatGPT 中推出 GPT-5.5",
    "market": "美国",
    "date": "2026-04-23",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI 正逐步在 ChatGPT 中推出其最新的前沿模型 GPT-5.5，旨在处理复杂的专业工作。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型能够理解复杂目标、运用工具、自我检查并完成更多任务，尤其在撰写和调试代码、在线研究、数据分析、文档与表格创建以及跨工具工作流方面表现出色。",
          "strong": false
        }
      ],
      [
        {
          "text": "GPT-5.5 Pro 版本专为需要深度推理和高准确性的最困难任务设计，适用于 Plus、Pro、Business、Enterprise 和 Edu 等付费计划用户。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "GPT-5.5 的发布标志着 AI 在处理复杂、多步骤专业任务方面迈出了重要一步，预示着 AI 代理（agentic AI）能力的进一步成熟，能够更自主地完成工作。",
          "strong": false
        }
      ],
      [
        {
          "text": "其在编码和专业知识工作方面的强化，将极大地提升开发人员和知识工作者的效率，推动 AI 从辅助工具向更智能的协作者转变。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来，我们将观察 GPT-5.5 如何改变现有工作流程，以及用户对其“代理式”能力的接受度和信任程度。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/45/d6/1b45d659-d8bf-94b0-dfa6-0449fc565333/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "OpenAI 推出 ChatGPT for Clinicians",
    "market": "美国",
    "date": "2026-04-22",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 宣布推出 ChatGPT for Clinicians，这是一个面向美国认证临床医生的免费版 ChatGPT。",
          "strong": false
        }
      ],
      [
        {
          "text": "该版本专门为支持临床工作而设计，功能包括循证审查、文档撰写、医学研究，并提供可信的临床搜索、引用、可复用技能以及医学文献深度研究，甚至支持获得 CME 学分。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以使用现有 ChatGPT 账户登录，并在单独的工作空间中访问这些临床专业功能。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此举代表 AI 在特定专业领域应用的深化和垂直化，旨在满足医疗保健等高风险行业对准确性、可靠性和专业知识的严格需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "为临床医生提供定制化 AI 工具，有望提升医疗效率和研究能力，但也引发了关于 AI 在医疗决策中角色和伦理的讨论。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需观察该产品在实际临床环境中的表现、用户采纳率、以及它如何与现有医疗信息系统整合。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/45/d6/1b45d659-d8bf-94b0-dfa6-0449fc565333/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "OpenAI 在 ChatGPT 中推出 ChatGPT Images 2.0",
    "market": "美国",
    "date": "2026-04-21",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 正式在 ChatGPT 中推出全新的图像生成模型 ChatGPT Images 2.0，所有 ChatGPT 计划用户均可使用。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，付费计划用户还可体验“images with thinking”功能，该功能允许 AI 在生成图像前进行规划和精修。",
          "strong": false
        }
      ],
      [
        {
          "text": "此功能在选择“Thinking”和“Pro”模型时可用，提供更高级的图像创作控制。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这一更新提升了 AI 图像生成的质量和可控性，特别是“images with thinking”功能，意味着 AI 在创意过程中的参与度更深，能更好地理解并实现用户的复杂视觉需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "通过提供更精细的创作工具，OpenAI 旨在吸引更多专业创作者和普通用户，进一步拓展 AI 在艺术、设计和内容创作领域的应用边界。",
          "strong": false
        }
      ],
      [
        {
          "text": "我们将持续关注这一模型如何改变用户与 AI 图像工具的互动方式，以及其在多模态创作领域的未来发展潜力。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/45/d6/1b45d659-d8bf-94b0-dfa6-0449fc565333/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝接入Hy3 preview模型",
    "market": "中国",
    "date": "2026-04-24",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯旗下的全能 AI 助手“元宝”在其 iOS 应用中更新至 2.66.0 版本，宣布接入 “Hy3 preview” 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次模型升级旨在为用户带来全新的智能体验，预计将提升其在问答、搜索、图像编辑、拍题答疑等核心功能上的表现。",
          "strong": false
        }
      ],
      [
        {
          "text": "具体更新日志显示该版本优化了若干使用体验，并且此次模型接入是其持续迭代的一部分。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "腾讯元宝积极接入前沿模型，表明中国头部科技公司在 AI 大模型领域的竞争持续升级，致力于通过底层技术迭代来提升产品竞争力。",
          "strong": false
        }
      ],
      [
        {
          "text": "模型能力的增强将有助于元宝在学习、办公和生活等多个场景提供更智能、高效的辅助，尤其是在其依托的微信公众号、视频号等腾讯生态信源的搜索优势上。",
          "strong": false
        }
      ],
      [
        {
          "text": "后续需观察 Hy3 preview 模型如何具体赋能元宝，并解决用户反馈中的“模拟用户视角提问”等体验问题，以赢得用户信任和市场份额。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d3/1a/bc/d31abc3a-ca51-baba-03f6-b444279677dc/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "豆包接入Hy3 preview模型",
    "market": "中国",
    "date": "2026-04-24",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "字节跳动旗下的 AI 助手“豆包”在其 iOS 应用中更新至 2.66.0 版本，宣布接入 “Hy3 preview” 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次模型升级旨在为用户带来全新的智能体验，预计将提升其在问答、搜索、P 图、写作、翻译和 PPT 生成等核心 AI 能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "该更新日志表明，此次接入是“豆包”持续优化底层 AI 模型能力、丰富用户体验的重要举措。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "“豆包”紧随竞争对手接入新模型，凸显了中国 AI 助手市场在底层技术上的快速迭代和激烈竞争，各家都在努力通过更强的模型提供差异化服务。",
          "strong": false
        }
      ],
      [
        {
          "text": "作为一款“全能搭子”，模型升级有望进一步巩固其在学习辅导、职业转型规划、日常琐事处理等多个场景的应用优势，提升用户粘性。",
          "strong": false
        }
      ],
      [
        {
          "text": "下一步需要观察 Hy3 preview 模型如何在“豆包”中具体体现其“全新智能体验”，并关注用户对功能稳定性和准确性的反馈，尤其是在面对复杂专业推理时的表现。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8B%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c1/93/e1/c193e17f-b5c2-fdb1-5f94-4d2ba6680538/AppIcon-0-0-1x_U007epad-0-8-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "豆包 - 随时帮忙的 AI 助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "豆包 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8B%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      "note": "使用 豆包 - 随时帮忙的 AI 助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI 上线 Seedance2.0 fast 模型",
    "market": "中国",
    "date": "2026-04-20",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下的 AI 图片和视频工具“即梦AI”在其 iOS 应用中更新至 2.1.8 版本，宣布“上线 Seedance2.0 fast 模型”。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次模型升级旨在提供“全新多模态创作体验”，重点提升了图片和视频的生成速度和质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型支持用户通过自然语言描述来生成独一无二的图片和视频，并支持编辑功能，以实现更满意的创意效果。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast 模型的推出，反映了中国在 AI 多模态内容创作领域的技术进步，尤其是在满足短视频和社交媒体创作者对快速、高质量内容的需求方面。",
          "strong": false
        }
      ],
      [
        {
          "text": "提升生成速度和体验对于字节跳动旗下产品生态至关重要，有助于巩固其在内容创作工具市场的领先地位。",
          "strong": false
        }
      ],
      [
        {
          "text": "然而，用户反馈中也存在对会员价格上涨和生成质量下滑的担忧，未来需观察如何在技术提升的同时平衡商业化与用户体验。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8d/a5/6c/8da56c4e-17ef-4c5c-6ce3-3153df851e46/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "美国AI市场聚焦垂直专业化与Agentic能力，中国市场模型迭代加速主攻多模态创作",
    "evidence": [
      {
        "text": "美国方面，OpenAI 近期发布 ",
        "strong": false
      },
      {
        "text": "GPT-5.5",
        "strong": true
      },
      {
        "text": "，旨在处理复杂的专业工作流和实现 ",
        "strong": true
      },
      {
        "text": "Agentic Coding",
        "strong": true
      },
      {
        "text": "，并推出专门面向临床医生的 ",
        "strong": true
      },
      {
        "text": "ChatGPT for Clinicians",
        "strong": true
      },
      {
        "text": "，深入医疗领域提供专业支持。同时，Google 也推出了基于 Gemma 模型的设备端离线听写应用 ",
        "strong": true
      },
      {
        "text": "Google AI Edge Eloquent",
        "strong": true
      },
      {
        "text": "，强调隐私和效率。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "与中国市场 AI 助手普遍侧重普适性能力提升和多模态内容创作不同，美国头部 AI 公司在通用模型能力提升的同时，更注重 AI 在特定专业领域（如医疗、编码）的深度应用和自主完成复杂任务的能力。",
        "strong": false
      },
      {
        "text": "中国方面，腾讯元宝和字节跳动的豆包相继接入 ",
        "strong": true
      },
      {
        "text": "Hy3 preview",
        "strong": true
      },
      {
        "text": " 模型，即梦 AI 也上线了 ",
        "strong": true
      },
      {
        "text": "Seedance2.0 fast",
        "strong": true
      },
      {
        "text": " 模型，全面提升多模态创作体验，旨在为用户提供更快速、更丰富的 AI 创作能力，以满足社交媒体和内容平台的强大需求。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 OpenAI 在 ChatGPT 中推出 GPT-5.5、OpenAI 推出 ChatGPT for Clinicians，以及中国的 腾讯元宝接入Hy3 preview模型、豆包接入Hy3 preview模型，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "OpenAI 推出了新的图像生成模型 ChatGPT Images 2.0，并增加了“images with thinking”功能，让 AI 在生成图像前能进行规划和优化。这一功能显著提升了 AI 图像生成的可控性和质量。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "抖音旗下的即梦 AI 上线 Seedance2.0 fast 模型，提供全新多模态创作体验，尤其专注于图片和视频生成。字节系的其他创作工具如剪映和醒图也持续整合 AI 能力，巩固其在摄影与录像榜单的领先地位。然而，即梦 AI 在用户反馈中也存在付费机制和生成质量的争议。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国更偏向入口整合和高频场景覆盖",
    "evidence": [
      {
        "text": "抖音旗下的即梦 AI 上线 Seedance2.0 fast 模型，提供全新多模态创作体验，尤其专注于图片和视频生成。字节系的其他创作工具如剪映和醒图也持续整合 AI 能力，巩固其在摄影与录像榜单的领先地位。然而，即梦 AI 在用户反馈中也存在付费机制和生成质量的争议。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "观察“images with thinking”等功能如何改变用户与 AI 图像生成工具的互动模式，以及其在多模态创作领域的进一步发展，例如文本到视频或 3D 内容的生成能力。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "ai_assistant_search_us",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Gemini",
      "Meta AI",
      "Google AI Edge Eloquent"
    ],
    "pattern": "美国头部 AI 助手市场竞争激烈，主要体现在基础模型能力的深度提升、特定专业领域功能的垂直化以及多模态感知能力的拓展。OpenAI 发布了更强大的 GPT-5.5 模型以应对复杂专业任务，并推出“Fast answers”功能优化快速信息查询。Google 的 Gemini 在用户数据迁移、个性化智能（Personal Intelligence）和语音交互（Gemini Live 3.1）方面进行了升级。Meta AI 通过 Muse Spark 模型增强了复杂推理和多模态理解能力，并计划集成到 AI 眼镜中。",
    "opportunity": "市场机会在于开发高度专业化的 AI 代理（agents）和与现有工作流深度集成的解决方案，特别是在隐私保护和设备端算力优化方面。同时，提升 AI 的多模态感知和理解真实世界的能力，将是未来竞争的关键。",
    "watchNext": "持续关注 GPT-5.5 等新模型在实际应用中实现“Agentic”能力的程度，以及 Meta AI 在 AI 眼镜等新硬件入口上的用户反馈和迭代速度。此外，设备端 AI 的普及程度和开发者生态也将是重要观察点。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai_assistant_search_cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问智学"
    ],
    "pattern": "中国主流 AI 助手持续进行底层模型迭代和功能升级。字节跳动旗下的豆包和腾讯元宝近期均宣布接入 Hy3 preview 模型，致力于提升通用智能和多模态能力。豆包App 用户反馈其在学习辅导、职业规划、生活规划等多个场景表现出色。腾讯元宝则强调其在腾讯生态信源（公众号、视频号）上的联网搜索优势，以及图片编辑和拍题答疑等能力。",
    "opportunity": "结合本地生态优势，提供更深度、场景化的 AI 服务，特别是在信息检索、教育辅导和生活规划方面。在模型升级的同时，需重点关注用户体验和个性化功能，解决用户反馈中的痛点（如腾讯元宝的“模拟用户视角提问”问题）。",
    "watchNext": "观察各家 AI 助手模型迭代的速度及其在实际用户场景中的落地效果，尤其是在内容质量、理解能力和用户反馈处理方面的持续优化。同时关注它们如何将 AI 能力与各自的社交、内容、办公生态深度整合。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8B%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_education_learning_us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "ChatGPT for Clinicians"
    ],
    "pattern": "OpenAI 推出面向临床医生的 ChatGPT 版本，专注于医疗文献审查、文档和研究，并支持获取 CME 学分。这表明 AI 在专业教育领域的垂直化应用日益成熟，正从通用知识辅助转向高门槛专业领域的深度赋能。",
    "opportunity": "市场机会在于针对特定专业领域（如法律、金融、工程）开发高度专业化的 AI 学习工具，提供认证和实践支持。这些工具需要具备高准确性、可靠性和可信赖的知识源。",
    "watchNext": "观察此类专业 AI 教育工具的用户采纳率、专业效用评估以及监管机构的认可情况，特别是在知识更新、隐私保护和伦理合规方面的挑战。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai_education_learning_cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "千问智学",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "阿里旗下的“夸克学习APP”已全面升级为“千问智学”，接入阿里千问全新学习大模型，主打 AI 家教功能，提供拍题、解题、批改作业、作文辅导、听写、背诵等全面服务。豆包和腾讯元宝作为综合 AI 助手，也提供拍题答疑、知识讲解等学习辅助功能，显示出 AI 在中国教育市场的广泛应用。",
    "opportunity": "结合中国学生和家长对个性化辅导的强烈需求，提供更具针对性的 AI 学习方案，尤其是针对薄弱环节的定制化练习和举一反三。同时，需确保 AI 在复杂推理、知识准确性方面的表现，避免误导。",
    "watchNext": "关注 AI 在 K12 教育领域的渗透率和用户对其学习效果及付费意愿的反馈。同时，观察教育部门对 AI 辅助学习工具的政策导向，以及 AI 如何更好地适应不同年龄段学生的学习习惯。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8B%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_companionship_emotion_social_us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Replika"
    ],
    "pattern": "Character.AI 在 4 月 14 日推出了 PipSqueak 2 模型，显著提升了 AI 角色的在性格、记忆力和写作质量方面的一致性，并预告了旨在增强世界观构建的 Lorebook 功能。Replika 在此前的一次重大更新中也加强了记忆功能、增加了主动签到、电话、互联网访问和图像生成等多样化互动能力。",
    "opportunity": "市场机会在于持续提升 AI 角色的情感深度、记忆持久性和多模态互动能力，以提供更沉浸、个性化的陪伴体验。同时，通过 Lorebook 等工具增强用户共创世界的可能，将进一步丰富 AI 陪伴的生态。",
    "watchNext": "观察 Lorebook 等新功能如何提升用户 UGC 的质量和深度，以及用户对 AI 陪伴的情感依赖和伦理考量如何演变。此外，AI 角色如何更自然地进行长期对话和情境感知也是关键。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      }
    ]
  },
  {
    "id": "ai_companionship_emotion_social_cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "星野"
    ],
    "pattern": "星野作为一个多模态 AI 智能体内容社区，用户可以自由创建和分享 AI 智能体，并通过多重交互方式与智能体互动。近期更新主要集中在常规的 bug 修复和用户体验优化。尽管持续更新，但用户反馈中仍提及对朋友圈、好感度模块、语音功能优化以及 AI 记忆力、逻辑清晰度和重复性等核心问题的需求。",
    "opportunity": "中国 AI 社交市场在社区生态和 UGC 方面仍有巨大潜力。开发商需要通过解决 AI 智能体在互动中的核心痛点（如长期记忆、逻辑连贯性和情感表达的自然度）来提升用户满意度和产品竞争力。",
    "watchNext": "观察星野是否会推出针对 AI 智能体核心互动体验的重大功能更新，例如增强记忆和情境感知能力。同时，关注其 UGC 生态的活跃度和高质量内容产出，以及其如何平衡用户自由创造与平台内容监管。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "ai_gaming_interactive_entertainment_us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "在过去 60 天内，美国市场尚未出现明确的 AI 游戏或互动娱乐产品有重大更新或发布。当前 AI 的应用更多集中在辅助创作、效率工具和通用助手领域。",
    "opportunity": "探索 AI 在游戏剧情生成、NPC 行为智能、个性化游戏内容定制以及新颖互动模式方面的应用。利用大型语言模型和多模态能力创造更具沉浸感和动态响应的游戏体验。",
    "watchNext": "关注大型游戏工作室和独立开发者如何将最新的 AI 模型整合到游戏开发和玩家体验中，以及是否有新的 AI 驱动游戏类型出现。",
    "sources": []
  },
  {
    "id": "ai_gaming_interactive_entertainment_cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "在过去 60 天内，中国市场也未出现明确的 AI 游戏或互动娱乐产品有重大更新或发布。App Store 游戏榜单主要仍是传统游戏，AI 主要在辅助创作和通用工具中发挥作用。",
    "opportunity": "与美国市场类似，AI 在游戏内的应用有巨大空间，尤其是在互动叙事、角色智能和个性化体验方面。结合中国庞大的游戏玩家基础，可以探索 AI 驱动的创新游戏模式。",
    "watchNext": "关注中国头部游戏厂商（如腾讯、网易）在 AI 技术整合方面的进展，以及是否有专注于 AI 玩法的创新型游戏产品进入市场。",
    "sources": []
  },
  {
    "id": "ai_creation_us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT Images 2.0"
    ],
    "pattern": "OpenAI 推出了新的图像生成模型 ChatGPT Images 2.0，并增加了“images with thinking”功能，让 AI 在生成图像前能进行规划和优化。这一功能显著提升了 AI 图像生成的可控性和质量。",
    "opportunity": "随着图像生成质量和可控性的提升，AI 创作工具将吸引更多创意专业人士和普通用户。市场对高质量、可编辑的 AI 生成内容需求旺盛，尤其是在广告、设计、内容营销等领域。",
    "watchNext": "观察“images with thinking”等功能如何改变用户与 AI 图像生成工具的互动模式，以及其在多模态创作领域的进一步发展，例如文本到视频或 3D 内容的生成能力。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "ai_creation_cn",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "即梦AI",
      "剪映",
      "醒图"
    ],
    "pattern": "抖音旗下的即梦 AI 上线 Seedance2.0 fast 模型，提供全新多模态创作体验，尤其专注于图片和视频生成。字节系的其他创作工具如剪映和醒图也持续整合 AI 能力，巩固其在摄影与录像榜单的领先地位。然而，即梦 AI 在用户反馈中也存在付费机制和生成质量的争议。",
    "opportunity": "中国市场对短视频和内容创作的巨大需求为 AI 创作工具提供了广阔空间。开发商需提供更快速、更智能、更高质量的 AI 视频和图片生成及编辑工具，同时解决用户对付费模式和产品质量下滑的痛点。",
    "watchNext": "关注 Seedance2.0 fast 模型在实际创作中的表现，以及字节跳动旗下各产品在 AI 创作领域的协同效应。同时，观察用户对付费和质量问题的反馈是否会影响其市场份额和长期发展。",
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
    "id": "ai_efficiency_office_us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Google AI Edge Eloquent",
      "ChatGPT",
      "Gemini"
    ],
    "pattern": "美国 AI 效率工具市场呈现出设备端 AI 和现有办公工具深度整合的趋势。Google 发布了 Google AI Edge Eloquent，一款基于 Gemma 的免费、离线、设备端听写 App，能智能优化口语为专业文本。ChatGPT 增强了 Outlook 邮件和日历的整合，支持处理共享邮箱和日历。Gemini 也强化了与 Gmail、Photos、YouTube 的连接，提供个性化帮助。",
    "opportunity": "离线、设备端 AI 应用在隐私和响应速度上有独特优势，是未来重要的发展方向。AI 与现有办公工具的深度整合能显著提升工作效率，尤其是在数据管理、日程安排和内容创作方面。",
    "watchNext": "关注离线 AI 在企业应用中的普及程度，以及 AI 助手如何更智能地管理和利用用户在不同应用中的数据，同时确保数据隐私和安全性。此外，AI 在复杂、多步骤办公任务自动化方面的进展也值得关注。",
    "sources": [
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "ai_efficiency_office_cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "中国 AI 效率办公工具持续发力，豆包和腾讯元宝等通用 AI 助手都在不断强化其在办公场景下的功能。豆包在资料总结、数据分析、代码编写、文档和 PPT 生成方面提供高效辅助。腾讯元宝则强调与腾讯文档的深度集成，支持录音笔转写、秒写报告、文案、代码等实用功能，满足职场用户多方面的效率需求。",
    "opportunity": "针对中国职场用户痛点，提供更贴近实际工作流的 AI 解决方案，特别是与本地化办公软件和生态的深度整合。在 AI 辅助创作、数据处理和任务自动化方面，仍有巨大的市场空间。",
    "watchNext": "观察 AI 在复杂办公任务处理中的准确性和可靠性，以及企业用户对其集成度、安全性、定制化能力的需求。此外，AI 如何更好地协同团队协作、提升会议效率也将是未来发展的重点。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8B%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_life_tools_us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Meta AI",
      "Gemini",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI 生活工具正从文本交互走向多模态感知，更好地理解真实世界。Meta AI 通过 Muse Spark 模型增强了多模态感知能力，能“看懂”用户所看，实现机场零食识别、产品对比等功能。Gemini 的 Personal Intelligence 能连接 Gmail、Photos、YouTube 协助用户规划旅行或项目。Google AI Edge Eloquent 提供免费、隐私友好的离线听写服务。",
    "opportunity": "开发商可专注于提升 AI 的多模态感知和上下文理解能力，提供更个性化、更贴近真实生活场景的服务。同时，兼顾隐私保护和设备端处理，将是赢得用户信任的关键。",
    "watchNext": "多模态 AI 在日常场景中的普及度，以及用户对 AI 主动提供帮助的接受程度和隐私边界如何界定。此外，AI 如何更无缝地融入智能家居和可穿戴设备生态，也是重要趋势。",
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
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai_life_tools_cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "点点",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "小红书旗下的“点点”App 推出“攻略模式”，基于平台海量真人经验，生成旅行、购物、美食等生活场景的深度攻略。豆包和腾讯元宝作为综合 AI 助手，也提供查资料、规划出行、整理生活等功能。尽管功能丰富，但点点在 App Store 评论中，有用户反映登录问题，表明用户体验仍需打磨。",
    "opportunity": "结合中国特有的生活服务生态和用户内容平台（如小红书），AI 生活助手能提供高度定制化、本地化的信息和建议。重点在于将 AI 能力与具体生活场景深度融合，提供解决实际问题的方案。",
    "watchNext": "观察点点等垂类 AI 生活助手的用户增长和留存情况，以及其能否将平台内容优势转化为 AI 服务的核心竞争力。同时，解决用户体验问题（如登录、功能稳定性）将对其长期发展至关重要。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8B%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_hardware_entrance_us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Ray-Ban Meta Smart Glasses",
      "Rokid AI Glasses"
    ],
    "pattern": "AI 眼镜作为新的交互入口正在受到关注。Meta AI 将通过 Muse Spark 模型集成到 AI 眼镜中，使其能更好地“看懂”用户周围的世界，提供更自然的交互体验。Rokid AI Glasses 的配套 App Hi Rokid 在 3 月份更新后支持 Gemini 模型，提升了 AI 体验和 Google Maps 导航等功能，并在此前增加了 AR 屏幕录制等。",
    "opportunity": "AI 眼镜通过多模态感知和集成 AI 助手，将现实与数字信息无缝融合，提供解放双手的 AI 体验，有望成为下一代计算平台。硬件与软件的深度结合是关键。",
    "watchNext": "AI 眼镜的形态创新、用户接受度，以及 AI 模型在眼镜端实现低延迟、高准确度的多模态交互能力。此外，隐私保护和电池续航等技术挑战的解决也将是其普及的关键。",
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
    "id": "ai_hardware_entrance_cn",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid AI Glasses"
    ],
    "pattern": "Rokid AI Glasses 的配套 App Rokid AI 持续更新，在 3 月份的更新中，豆包、通义千问、智谱等主流模型均升级到最新版本，显著提升了视觉理解和智能体能力。此外，还新增了抖音直播、AR 录屏等功能，并优化了翻译和导航体验，显示出中国厂商在 AI 眼镜领域的积极探索和本地化创新。",
    "opportunity": "中国厂商在 AI 眼镜领域通过集成国内主流 AI 模型和结合本地化应用（如抖音直播），打造差异化竞争力。提升多模态能力和丰富应用场景是吸引用户的关键。",
    "watchNext": "AI 眼镜在国内市场的普及速度，以及本地 AI 模型在硬件端集成后的性能表现和用户体验，尤其是在多场景下的实用性。同时，关注其在 AR 内容生态建设和隐私保护方面的进展。",
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
    "title": "美国AI大模型走向专业化与 Agentic 能力，多模态交互和设备端智能持续发展",
    "bullets": [
      [
        {
          "text": "OpenAI 发布了其最智能的前沿模型 ",
          "strong": false
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": "，显著增强其处理复杂专业任务和实现自主代理（Agentic Coding）的能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "OpenAI 推出面向美国认证临床医生的免费版 ",
          "strong": true
        },
        {
          "text": "ChatGPT for Clinicians",
          "strong": true
        },
        {
          "text": "，将 AI 应用垂直化到医疗领域，提供专业的证据审查、文档辅助和医学研究支持。",
          "strong": false
        }
      ],
      [
        {
          "text": "Google 发布了 ",
          "strong": true
        },
        {
          "text": "Google AI Edge Eloquent",
          "strong": true
        },
        {
          "text": "，这是一款基于 Gemma 模型的免费、离线、设备端听写 App，能够智能优化口语表达为专业文本，提升隐私和效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "Meta AI 将其新的 ",
          "strong": true
        },
        {
          "text": "Muse Spark",
          "strong": true
        },
        {
          "text": " 模型整合进 ",
          "strong": true
        },
        {
          "text": "Ray-Ban Meta Smart Glasses",
          "strong": true
        },
        {
          "text": " 等 AI 眼镜中，使其具备更强的多模态感知能力，能够“看懂”用户周围的世界。",
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
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "title": "OpenAI 在 ChatGPT 中推出 GPT-5.5",
    "bullets": [
      [
        {
          "text": "OpenAI 正逐步在 ChatGPT 中推出其最新的前沿模型 GPT-5.5，旨在处理复杂的专业工作。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型能够理解复杂目标、运用工具、自我检查并完成更多任务，尤其在撰写和调试代码、在线研究、数据分析、文档与表格创建以及跨工具工作流方面表现出色。",
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
    "title": "OpenAI 推出 ChatGPT for Clinicians",
    "bullets": [
      [
        {
          "text": "OpenAI 宣布推出 ChatGPT for Clinicians，这是一个面向美国认证临床医生的免费版 ChatGPT。",
          "strong": false
        }
      ],
      [
        {
          "text": "该版本专门为支持临床工作而设计，功能包括循证审查、文档撰写、医学研究，并提供可信的临床搜索、引用、可复用技能以及医学文献深度研究，甚至支持获得 CME 学分。",
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
    "title": "OpenAI 在 ChatGPT 中推出 ChatGPT Images 2.0",
    "bullets": [
      [
        {
          "text": "OpenAI 正式在 ChatGPT 中推出全新的图像生成模型 ChatGPT Images 2.0，所有 ChatGPT 计划用户均可使用。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，付费计划用户还可体验“images with thinking”功能，该功能允许 AI 在生成图像前进行规划和精修。",
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
    "title": "AI 创作：美国方向信号",
    "bullets": [
      [
        {
          "text": "OpenAI 推出了新的图像生成模型 ChatGPT Images 2.0，并增加了“images with thinking”功能，让 AI 在生成图像前能进行规划和优化。这一功能显著提升了 AI 图像生成的可控性和质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "随着图像生成质量和可控性的提升，AI 创作工具将吸引更多创意专业人士和普通用户。市场对高质量、可编辑的 AI 生成内容需求旺盛，尤其是在广告、设计、内容营销等领域。",
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
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "中国AI大模型加速迭代，多模态创作与场景融合，但用户体验挑战仍在",
    "bullets": [
      [
        {
          "text": "腾讯元宝和字节跳动旗下的豆包，近期均宣布接入 ",
          "strong": true
        },
        {
          "text": "Hy3 preview",
          "strong": true
        },
        {
          "text": " 模型，旨在探索和提供全新的智能体验，显示出国内大模型竞争的白热化。",
          "strong": false
        }
      ],
      [
        {
          "text": "抖音旗下的 ",
          "strong": true
        },
        {
          "text": "即梦AI",
          "strong": true
        },
        {
          "text": " 上线 ",
          "strong": true
        },
        {
          "text": "Seedance2.0 fast",
          "strong": true
        },
        {
          "text": " 模型，特别针对图片和视频生成能力进行提升，以满足内容创作者的需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "阿里“夸克学习APP”全面升级为“",
          "strong": false
        },
        {
          "text": "千问智学",
          "strong": true
        },
        {
          "text": "”，接入阿里千问大模型，提供全面的 AI 家教服务，涵盖拍题、解题、批改作业、作文辅导等。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户反馈显示，中国 AI 产品在提供丰富功能的同时，仍需关注基础用户体验问题，如腾讯元宝的“模拟用户提问”功能争议、即梦 AI 的会员服务与质量问题、星野的 AI 记忆和逻辑连贯性等。",
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
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8B%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%93%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "title": "腾讯元宝接入Hy3 preview模型",
    "bullets": [
      [
        {
          "text": "腾讯旗下的全能 AI 助手“元宝”在其 iOS 应用中更新至 2.66.0 版本，宣布接入 “Hy3 preview” 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次模型升级旨在为用户带来全新的智能体验，预计将提升其在问答、搜索、图像编辑、拍题答疑等核心功能上的表现。",
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
    "title": "豆包接入Hy3 preview模型",
    "bullets": [
      [
        {
          "text": "字节跳动旗下的 AI 助手“豆包”在其 iOS 应用中更新至 2.66.0 版本，宣布接入 “Hy3 preview” 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次模型升级旨在为用户带来全新的智能体验，预计将提升其在问答、搜索、P 图、写作、翻译和 PPT 生成等核心 AI 能力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8B%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "title": "即梦AI 上线 Seedance2.0 fast 模型",
    "bullets": [
      [
        {
          "text": "抖音旗下的 AI 图片和视频工具“即梦AI”在其 iOS 应用中更新至 2.1.8 版本，宣布“上线 Seedance2.0 fast 模型”。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次模型升级旨在提供“全新多模态创作体验”，重点提升了图片和视频的生成速度和质量。",
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
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "抖音旗下的即梦 AI 上线 Seedance2.0 fast 模型，提供全新多模态创作体验，尤其专注于图片和视频生成。字节系的其他创作工具如剪映和醒图也持续整合 AI 能力，巩固其在摄影与录像榜单的领先地位。然而，即梦 AI 在用户反馈中也存在付费机制和生成质量的争议。",
          "strong": false
        }
      ],
      [
        {
          "text": "中国市场对短视频和内容创作的巨大需求为 AI 创作工具提供了广阔空间。开发商需提供更快速、更智能、更高质量的 AI 视频和图片生成及编辑工具，同时解决用户对付费模式和产品质量下滑的痛点。",
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
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  }
];
