import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-09-14";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 图片生成能力升级至 2.5 版本",
    "market": "美国",
    "date": "2026-09-08",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI 推出了 ChatGPT Images 2.5，大幅提升了图片生成和编辑能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新带来了更清晰的细节、更精准的编辑、更快的生成速度。新功能包括：通过模板生成图像、将手绘草图转化为图像、直接在生成的图片上进行编辑和评论，以及分享生成图片的提示词，方便用户进行再创作。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些功能旨在让用户能以更多样和直观的方式创作和分享 AI 图像。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次更新显著降低了 AI 图像创作的门槛，使得普通用户也能更轻松地实现创意，提升了创作体验的流畅性和互动性。",
          "strong": false
        }
      ],
      [
        {
          "text": "手绘草图到图像、模板创作等功能意味着 AI 创作工具正向更直观、更低技能要求的方向发展，这有助于扩大用户群体并激发更多非专业创作者的潜力。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来可关注这类多模态创作工具如何进一步与社交平台整合，以及是否会催生新的内容形式和创作者生态。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fb/d0/1e/fbd01e50-8973-d53b-9414-bfc5b0b67881/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT Work 和 Codex 迎来企业级深度集成与研究功能",
    "market": "美国",
    "date": "2026-09-10",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT Work 和 Codex 新增了 Data 插件和 Deep Research 功能，并加强了与 Box、Dropbox 和 SharePoint 的文件集成。",
          "strong": false
        }
      ],
      [
        {
          "text": "Data 插件允许用户在 ChatGPT 中分析连接的业务数据、创建报告；Library 功能现在支持浏览和搜索来自 Box、Dropbox 和 SharePoint 的文件，并直接在对话中进行处理。Deep Research 则支持跨网页、文件和连接应用进行复杂问题的研究，并将结果转化为可编辑文档。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些功能主要面向 Go、Plus、Pro、Business、Edu、Healthcare 和 Enterprise 用户，在网页版 Chat 和 Work 中逐步推出，移动端支持后续上线。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这些更新使 ChatGPT 从一个通用对话助手向更深度的企业级生产力工具迈进，为企业用户提供了更强大的数据分析、信息管理和知识生成能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "通过与主流企业文件存储服务的集成，ChatGPT 有望成为企业内部知识管理和协作的关键 AI 枢纽，提升团队的整体工作效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察这些企业级功能在实际应用中的安全性、合规性表现，以及是否能有效解决企业在 AI 落地中面临的定制化和数据隐私挑战。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fb/d0/1e/fbd01e50-8973-d53b-9414-bfc5b0b67881/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 语音助手升级，集成更强模型并简化使用限制",
    "market": "美国",
    "date": "2026-09-09",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "ChatGPT Voice 现在可以根据需要调用更强大的 GPT-5.6 或 GPT-6 Astra 模型进行搜索和复杂推理。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过与文本聊天相同的控制方式选择模型和推理强度。同时，OpenAI 简化了 GPT-Live 的每日使用限制，取消了 Plus 和 Pro 用户在达到语音限制后切换到 Mini 模型的机制，并废弃了 Instant/Medium/High 语音智能等级。",
          "strong": false
        }
      ],
      [
        {
          "text": "更新后的语音服务提供更一致的高级模型体验，并根据不同的订阅计划设定了相应的语音使用时长。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次升级显著提升了 ChatGPT 语音助手的智能水平和响应质量，使其在处理复杂查询和需要深入思考的任务时更加可靠和高效，改善了用户体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "简化使用限制和提供更一致的高级模型访问，体现了 OpenAI 致力于提升核心产品易用性和价值的策略，特别是在语音交互这一重要维度。",
          "strong": false
        }
      ],
      [
        {
          "text": "语音交互是未来 AI 的关键趋势之一，未来可观察语音助手如何进一步整合多模态能力（如视觉），以及与智能硬件的协同效应。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fb/d0/1e/fbd01e50-8973-d53b-9414-bfc5b0b67881/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝接入全新 Hy4 preview 模型， Agent 能力及 AI 精讲功能上线",
    "market": "中国",
    "date": "2026-09-08",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "腾讯元宝最近接入了全新的 Hy4 preview 模型，并上线了「专家模式」和「AI精讲」功能，全面提升了 AI 助手的能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "Hy4 preview 模型使元宝的 Agent 能力全面升级，能够综合多方信源进行深度推理，解决复杂任务，回答更专业易读。「专家模式」专为复杂任务设计。同时，AI 精讲功能允许用户通过拍照或文字输入进行题目讲解，提供动态板书和语音讲解，模拟真人老师一对一教学。",
          "strong": false
        }
      ],
      [
        {
          "text": "目前 Hy4 preview 模型处理复杂任务仅支持专家模式，日常使用仍推荐 Hy3 模型。此外，录音笔新增图片记录，图片模板也支持分享。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "腾讯元宝在模型升级和功能扩展上持续发力，特别是 Agent 能力和 AI 精讲的推出，显示了其在多模态理解和教育场景应用的深入布局，直接提升了用户在学习和复杂问题解决上的效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI 精讲功能以其独特的动态板书和语音讲解形式，提供接近真人教师的个性化辅导体验，有望在 AI 教育领域树立新标准。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注 Hy4 模型在实际应用中的表现及其对用户使用习惯的影响，以及腾讯如何利用其强大的生态系统进一步整合和推广这些 AI 能力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/80/cc/77/80cc77eb-85fe-58bd-a0ac-4d9d64a0cc02/d70ce9940f73eaad66210721e467670d_1.jpg/320x480bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Rokid AI 眼镜助手上线长期记忆能力，并深度整合微信支付等服务",
    "market": "中国",
    "date": "2026-09-08",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Rokid AI 应用更新至 v1.13.0，为 Rokid Glasses 的 AI 助手带来了长期记忆能力，使其能记住用户偏好并成为专属助手。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，眼镜端新增了微信支付功能（仅有显设备），用户可通过语音指令进行支付。支付宝服务也新增了购买电影票的能力。工具箱功能增强，支持手机输入法和第三方应用权限管理，并支持第三方导航应用通过地址分享发起眼镜端导航。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些更新显著提升了 Rokid Glasses 作为 AI 硬件入口的智能化水平和生活服务集成度。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "AI 助手的长期记忆能力是实现更个性化和情境感知交互的关键一步，让 AI 眼镜不再是简单的工具，而是真正理解和适应用户的智能伙伴。",
          "strong": false
        }
      ],
      [
        {
          "text": "与微信支付、支付宝等核心生活服务的深度整合，预示着 AI 眼镜正在加速融入日常消费场景，有望成为继智能手机之后，提供便捷无感支付和信息获取的新一代入口。",
          "strong": false
        }
      ],
      [
        {
          "text": "随着 AI 眼镜生态的不断完善，其在提升生活便利性和效率方面的潜力将进一步释放，未来需关注用户接受度及更多杀手级应用的出现。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App Store",
        "href": "https://apps.apple.com/cn/app/%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      },
      {
        "label": "Hi Rokid - Rokid Glasses App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/db/a2/34dba249-1368-a60e-7eef-760f9c1f6410/_U5bb9_U5668_15013@1x.jpg/320x480bb.jpg",
      "alt": "Rokid AI - 乐奇AI眼镜 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Rokid AI - 乐奇AI眼镜 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564",
      "note": "使用 Rokid AI - 乐奇AI眼镜 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "小红书旗下 AI 应用「点点」同步小红书笔记聊天记录，提升用户体验",
    "market": "中国",
    "date": "2026-09-07",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "小红书旗下 AI 应用「点点」在近期更新（v4.4 及 v4.5）中，实现了与小红书 App 内「点点」聊天记录的同步。",
          "strong": false
        }
      ],
      [
        {
          "text": "现在，用户可以在「点点」独立 App 中查看和继续他们在小红书笔记中的 AI 聊天历史，并且支持搜索聊天记录。此外，应用也优化了最新的功能和回答质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一更新旨在提供更无缝的跨平台 AI 体验，方便用户管理和利用其与 AI 的互动内容。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "聊天记录的同步极大提升了用户体验，解决了跨应用场景下的上下文连贯性问题，让 AI 助手能够更好地理解用户需求并提供个性化服务。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新体现了内容平台（小红书）将 AI 深度整合到用户决策链条中的趋势，通过 AI 助力用户在消费、生活等领域做出更明智的选择。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来可观察「点点」如何利用小红书生态的真实用户经验和海量内容，进一步发展其在生活服务和决策辅助方面的独特价值。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "dots: ai for everyday life App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/93/f9/25/93f92561-1ccb-bd4b-a203-b66f29afd8cc/pic_1.png/392x696bb.png",
      "alt": "dots: ai for everyday life App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "dots: ai for everyday life App Store",
      "sourceHref": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      "note": "使用 dots: ai for everyday life 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI 助手能力边界持续拓展，深度集成与多模态交互成主流",
    "evidence": [
      {
        "text": "美国 OpenAI 的 ChatGPT Images 2.5 提升了图片创作与编辑的细节和速度，并新增手绘草图转图像等功能。",
        "strong": false
      },
      {
        "text": "ChatGPT Voice 集成了更强大的 GPT-5.6/GPT-6 Astra 模型，提升了语音交互的智能水平和复杂问题推理能力。",
        "strong": false
      },
      {
        "text": "中国腾讯元宝接入 Hy4 preview 模型， Agent 能力升级，并推出 AI 精讲等教育垂类多模态功能。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美市场 AI 助手都在向更强的多模态感知与生成能力发展，并致力于将 AI 能力深度集成到用户日常的工作与生活中，从被动问答转向主动服务。",
        "strong": false
      },
      {
        "text": "美国方面更注重通用 AI 平台在企业级和多模态创作场景的深耕，而中国则更强调与本地生态（如微信、小红书）的融合以及特定垂直领域的创新应用。",
        "strong": false
      }
    ]
  },
  {
    "title": "大厂积极布局 AI Agent 能力，从对话到任务执行",
    "evidence": [
      {
        "text": "OpenAI 在 ChatGPT Work 和 Codex 中推出了 Data 插件和 Deep Research 功能，支持连接业务数据进行分析和跨源研究，显示了 Agent 在企业效率方面的应用。",
        "strong": false
      },
      {
        "text": "腾讯元宝的 Hy4 preview 模型升级，特别强调了 Agent 能力的全面提升，能够在复杂任务中综合多方信源进行深度推理，并推出专家模式。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "无论是 OpenAI 针对工作场景的插件和研究工具，还是腾讯元宝在复杂任务处理上的 Agent 升级，都表明头部厂商正将 AI 从单一的对话式交互推向更具自主决策和任务执行能力的 Agent 方向发展。",
        "strong": false
      },
      {
        "text": "这一趋势将改变用户与 AI 的互动模式，使其从辅助工具变为更主动的协作者，为企业和个人带来更高的效率，但同时对模型能力、安全性及用户信任度提出了更高要求。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 硬件入口（如 AR 眼镜）的智能化与生态整合加速",
    "evidence": [
      {
        "text": "Rokid AI 眼镜助手上线了长期记忆能力，使其能够记住用户偏好，提供更个性化的服务。",
        "strong": false
      },
      {
        "text": "Rokid Glasses 深度整合了微信支付、支付宝购买电影票等生活服务功能，并支持第三方导航应用的地址分享，极大地拓展了其在日常场景中的应用范围。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI 眼镜作为下一代计算平台和 AI 硬件入口的潜力正在逐步显现，其智能化水平不再局限于基础功能，而是通过长期记忆和生态集成，开始提供更具沉浸感和无缝衔接的体验。",
        "strong": false
      },
      {
        "text": "中国厂商在 AI 硬件与本地生活服务生态的融合方面表现积极，试图通过高频次的日常使用场景来推动 AI 眼镜的普及和用户粘性。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 图片生成能力升级至 2.5 版本、ChatGPT Work 和 Codex 迎来企业级深度集成与研究功能，以及中国的 腾讯元宝接入全新 Hy4 preview 模型， Agent 能力及 AI 精讲功能上线、Rokid AI 眼镜助手上线长期记忆能力，并深度整合微信支付等服务，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "AI 助手持续深化多模态能力与企业级集成，语音助手获得更强模型支持。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "国内 AI 视频和图片生成模型持续升级，提供更长视频时长、更精细的编辑功能，大厂纷纷加码。",
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
      "ChatGPT",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI 助手持续深化多模态能力与企业级集成，语音助手获得更强模型支持。",
    "opportunity": "提升 AI 助手的任务执行能力和跨平台无缝体验。",
    "watchNext": "语音和视觉 AI 助手的结合，以及更广泛的企业应用。",
    "sources": [
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
      "点点"
    ],
    "pattern": "国内 AI 助手全面升级，模型能力增强，并与生活场景和生态深度融合，Agent 能力快速发展。",
    "opportunity": "通过垂直场景的深度优化和生态联动，建立用户心智和使用习惯。",
    "watchNext": "AI 助手在更多细分领域的落地和商业化探索。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "dots: ai for everyday life App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "id": "ai-education-learning-us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI 学习平台通过游戏化和个性化功能吸引用户，但近期无显著产品更新信号。",
    "opportunity": "结合生成式 AI 创造更沉浸式、互动性强的学习体验。",
    "watchNext": "AI 个性化辅导、智能题库和学习伴侣产品的创新。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "ai-education-learning-cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "腾讯元宝",
      "千问智学"
    ],
    "pattern": "AI 教育产品在多模态讲解、个性化辅导和作业批改等功能上快速迭代，提供全方位的学习支持。",
    "opportunity": "利用 AI 提高学习效率，缓解家长辅导压力。",
    "watchNext": "AI 在 K12 教育中的深度应用，以及与教育内容生态的融合。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "ai-companionship-emotion-social-us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Replika",
      "Series"
    ],
    "pattern": "AI 陪伴和社交应用市场活跃，但近期无重大产品更新，Series 通过 iMessage 探索新型社交。",
    "opportunity": "提升 AI 伴侣的情感理解和长期记忆能力，拓展 AI 社交的新形式。",
    "watchNext": "AI 驱动的虚拟形象社交、个性化伴侣和群组互动。",
    "sources": [
      {
        "label": "Replika - AI Companion Chat App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      }
    ]
  },
  {
    "id": "ai-companionship-emotion-social-cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "星野"
    ],
    "pattern": "用户共创 AI 智能体社区持续发展，但需解决智能体认知连贯性和敏感词过滤等体验问题。",
    "opportunity": "丰富 AI 智能体的人设、技能和交互方式，提升用户创作和沉浸体验。",
    "watchNext": "更自由、安全的 AI 智能体创作与互动平台，以及 AI 社交在 Z 世代中的渗透。",
    "sources": [
      {
        "label": "星野-所建皆你所AI App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "ai-gaming-interactive-entertainment-us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "缺乏明显信号和产品更新。",
    "opportunity": "AI 在游戏内容生成、智能 NPC、个性化体验等方面的潜力巨大。",
    "watchNext": "生成式 AI 在游戏开发和玩家互动中的应用。",
    "sources": []
  },
  {
    "id": "ai-gaming-interactive-entertainment-cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "缺乏明显信号和产品更新。",
    "opportunity": "AI 在游戏内容生成、智能 NPC、个性化体验等方面的潜力巨大。",
    "watchNext": "AI 在中国游戏市场中的创新应用和用户接受度。",
    "sources": []
  },
  {
    "id": "ai-creation-us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT Images",
      "Cantina",
      "Hypic",
      "Momo",
      "Facetune"
    ],
    "pattern": "AI 图像与视频创作工具持续进化，功能更加精细化、易用化，并拓展至手绘草图等多种输入形式。",
    "opportunity": "通过降低创作门槛，赋能更多普通用户进行多模态内容创作。",
    "watchNext": "AI 创作工具与专业设计流程的融合，以及实时生成、编辑能力的突破。",
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
    "id": "ai-creation-cn",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "即梦AI",
      "腾讯元宝",
      "豆包",
      "可灵AI",
      "小云雀"
    ],
    "pattern": "国内 AI 视频和图片生成模型持续升级，提供更长视频时长、更精细的编辑功能，大厂纷纷加码。",
    "opportunity": "满足短视频、社交媒体时代的内容生产需求，赋能创作者和普通用户。",
    "watchNext": "AI 创作工具在影视、广告等专业领域的应用，以及内容版权和伦理的挑战。",
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
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
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT Work",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI 在办公效率领域持续发力，集成更多企业级数据和文档处理能力，并推出端侧高效的语音转文字工具。",
    "opportunity": "提高企业和个人的办公效率，简化复杂工作流程。",
    "watchNext": "AI Agent 在企业协作中的落地，以及定制化 AI 解决方案的发展。",
    "sources": [
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
    "id": "ai-efficiency-office-cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "腾讯元宝",
      "豆包"
    ],
    "pattern": "国内 AI 助手在办公场景深度融合，提供报告撰写、代码生成、文档处理、自动化任务等全方位解决方案。",
    "opportunity": "利用 AI 技术优化日常办公流程，提升职场竞争力。",
    "watchNext": "AI Agent 在中国企业级市场的渗透率，以及对传统办公软件的冲击。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "ai-lifestyle-tools-us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "缺乏明显信号和产品更新。",
    "opportunity": "AI 在智能家居、健康管理、个性化推荐等生活服务领域的潜力。",
    "watchNext": "AI 如何更好地理解和预测用户生活需求，提供主动式服务。",
    "sources": []
  },
  {
    "id": "ai-lifestyle-tools-cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "点点",
      "腾讯元宝"
    ],
    "pattern": "AI 生活工具与小红书等内容平台深度整合，提供基于真实经验的攻略和决策辅助，并拓展至购物、出行等场景。",
    "opportunity": "通过集成线上线下服务，打造全场景智能生活助理。",
    "watchNext": "AI 在本地生活服务、智能消费决策和个性化推荐上的创新。",
    "sources": [
      {
        "label": "dots: ai for everyday life App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
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
      "Rokid Glasses",
      "Ray-Ban Meta"
    ],
    "pattern": "AI 眼镜作为新的硬件入口，其 AI 助手能力和生态集成度持续提升，提供更智能、无感的交互体验。",
    "opportunity": "探索 AI 眼镜在日常工作、生活中的实际应用场景，并拓展开发者生态。",
    "watchNext": "AI 眼镜在 AR 交互、隐私保护和用户普及方面的进展。",
    "sources": [
      {
        "label": "Hi Rokid - Rokid Glasses App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
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
      "Rokid Glasses"
    ],
    "pattern": "国内 AI 眼镜积极融合本地生活服务和支付功能，并强化 AI 助手长期记忆能力，加速构建用户生态。",
    "opportunity": "通过差异化功能和本地化服务，抢占 AI 眼镜市场份额。",
    "watchNext": "中国市场 AI 眼镜的商业模式、用户接受度以及与手机生态的协同。",
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App Store",
        "href": "https://apps.apple.com/cn/app/%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "AI 助手及创作工具持续进化",
    "bullets": [
      [
        {
          "text": "OpenAI 旗下的 ",
          "strong": false
        },
        {
          "text": "ChatGPT Images 2.5 ",
          "strong": true
        },
        {
          "text": "版本带来了图像生成速度与细节的提升，并新增手绘草图转图像等功能，极大降低了 AI 创作门槛。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT Voice ",
          "strong": true
        },
        {
          "text": "语音助手集成更强大的 ",
          "strong": false
        },
        {
          "text": "GPT-5.6/GPT-6 Astra 模型",
          "strong": true
        },
        {
          "text": "，显著提升了复杂问题推理能力和语音交互体验。",
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
    "title": "企业级 AI 效率工具深度集成",
    "bullets": [
      [
        {
          "text": "ChatGPT Work 和 Codex ",
          "strong": true
        },
        {
          "text": "新增了 ",
          "strong": false
        },
        {
          "text": "Data 插件 ",
          "strong": true
        },
        {
          "text": "和 ",
          "strong": false
        },
        {
          "text": "Deep Research ",
          "strong": true
        },
        {
          "text": "功能，支持分析业务数据和进行跨源研究。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，加强与 ",
          "strong": false
        },
        {
          "text": "Box、Dropbox、SharePoint ",
          "strong": true
        },
        {
          "text": "的文件集成，允许用户直接在对话中浏览和处理这些服务中的文件，显著提升了企业办公效率。",
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
    "title": "ChatGPT 图片生成能力升级至 2.5 版本",
    "bullets": [
      [
        {
          "text": "OpenAI 推出了 ChatGPT Images 2.5，大幅提升了图片生成和编辑能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新带来了更清晰的细节、更精准的编辑、更快的生成速度。新功能包括：通过模板生成图像、将手绘草图转化为图像、直接在生成的图片上进行编辑和评论，以及分享生成图片的提示词，方便用户进行再创作。",
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
    "title": "ChatGPT Work 和 Codex 迎来企业级深度集成与研究功能",
    "bullets": [
      [
        {
          "text": "ChatGPT Work 和 Codex 新增了 Data 插件和 Deep Research 功能，并加强了与 Box、Dropbox 和 SharePoint 的文件集成。",
          "strong": false
        }
      ],
      [
        {
          "text": "Data 插件允许用户在 ChatGPT 中分析连接的业务数据、创建报告；Library 功能现在支持浏览和搜索来自 Box、Dropbox 和 SharePoint 的文件，并直接在对话中进行处理。Deep Research 则支持跨网页、文件和连接应用进行复杂问题的研究，并将结果转化为可编辑文档。",
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
    "title": "ChatGPT 语音助手升级，集成更强模型并简化使用限制",
    "bullets": [
      [
        {
          "text": "ChatGPT Voice 现在可以根据需要调用更强大的 GPT-5.6 或 GPT-6 Astra 模型进行搜索和复杂推理。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过与文本聊天相同的控制方式选择模型和推理强度。同时，OpenAI 简化了 GPT-Live 的每日使用限制，取消了 Plus 和 Pro 用户在达到语音限制后切换到 Mini 模型的机制，并废弃了 Instant/Medium/High 语音智能等级。",
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
    "title": "国内 AI 助手全面升级，模型能力与生活场景深度融合",
    "bullets": [
      [
        {
          "text": "腾讯元宝",
          "strong": true
        },
        {
          "text": " 接入全新 ",
          "strong": false
        },
        {
          "text": "Hy4 preview 模型",
          "strong": true
        },
        {
          "text": "， Agent 能力全面提升，并推出 ",
          "strong": false
        },
        {
          "text": "AI 精讲 ",
          "strong": true
        },
        {
          "text": "功能，以动态板书和语音讲解模拟真人教学，同时增加了录音笔图片记录和图片模板分享。",
          "strong": false
        }
      ],
      [
        {
          "text": "小红书旗下 AI 应用「点点」",
          "strong": true
        },
        {
          "text": " 实现与小红书 App 笔记聊天记录的同步，支持聊天历史搜索，提升了用户跨平台使用体验和信息连贯性。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "dots: ai for everyday life App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "title": "AI 硬件入口（AR 眼镜）智能化与生态整合加速",
    "bullets": [
      [
        {
          "text": "Rokid AI ",
          "strong": true
        },
        {
          "text": "应用为 Rokid Glasses 的 AI 助手上线了",
          "strong": false
        },
        {
          "text": " 长期记忆能力",
          "strong": true
        },
        {
          "text": "，使其能够记住用户偏好，成为更个性化的专属助手。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，眼镜端深度整合 ",
          "strong": false
        },
        {
          "text": "微信支付、支付宝购买电影票",
          "strong": true
        },
        {
          "text": " 等生活服务，并支持第三方导航应用的地址分享，加速融入日常消费场景。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App Store",
        "href": "https://apps.apple.com/cn/app/%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "腾讯元宝接入全新 Hy4 preview 模型， Agent 能力及 AI 精讲功能上线",
    "bullets": [
      [
        {
          "text": "腾讯元宝最近接入了全新的 Hy4 preview 模型，并上线了「专家模式」和「AI精讲」功能，全面提升了 AI 助手的能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "Hy4 preview 模型使元宝的 Agent 能力全面升级，能够综合多方信源进行深度推理，解决复杂任务，回答更专业易读。「专家模式」专为复杂任务设计。同时，AI 精讲功能允许用户通过拍照或文字输入进行题目讲解，提供动态板书和语音讲解，模拟真人老师一对一教学。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%AB%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "Rokid AI 眼镜助手上线长期记忆能力，并深度整合微信支付等服务",
    "bullets": [
      [
        {
          "text": "Rokid AI 应用更新至 v1.13.0，为 Rokid Glasses 的 AI 助手带来了长期记忆能力，使其能记住用户偏好并成为专属助手。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，眼镜端新增了微信支付功能（仅有显设备），用户可通过语音指令进行支付。支付宝服务也新增了购买电影票的能力。工具箱功能增强，支持手机输入法和第三方应用权限管理，并支持第三方导航应用通过地址分享发起眼镜端导航。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App Store",
        "href": "https://apps.apple.com/cn/app/%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      },
      {
        "label": "Hi Rokid - Rokid Glasses App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "title": "小红书旗下 AI 应用「点点」同步小红书笔记聊天记录，提升用户体验",
    "bullets": [
      [
        {
          "text": "小红书旗下 AI 应用「点点」在近期更新（v4.4 及 v4.5）中，实现了与小红书 App 内「点点」聊天记录的同步。",
          "strong": false
        }
      ],
      [
        {
          "text": "现在，用户可以在「点点」独立 App 中查看和继续他们在小红书笔记中的 AI 聊天历史，并且支持搜索聊天记录。此外，应用也优化了最新的功能和回答质量。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "dots: ai for everyday life App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  }
];
