import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-04-26";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT GPT-5.5 全面推出",
    "market": "美国",
    "date": "2026-04-23",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中推出了迄今为止最智能的 GPT-5.5 前沿模型",
          "strong": true
        },
        {
          "text": "，专为专业工作设计。",
          "strong": false
        }
      ],
      [
        {
          "text": "GPT-5.5 旨在理解复杂目标、使用工具、自我检查工作并更完整地完成多任务。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "新模型在处理混乱、多步骤请求方面更强大",
          "strong": false
        },
        {
          "text": "，在编写和调试代码、在线研究、数据分析和文档创建方面表现出色，是代理式编码的重要一步。",
          "strong": true
        }
      ],
      [
        {
          "text": "GPT-5.5 Pro 可用于需要更深层推理、更强结构和更高置信度的最困难问题。",
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
    "name": "ChatGPT 推出快速回答与医护版",
    "market": "美国",
    "date": "2026-04-22",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 正在推出“快速回答”功能，以更快地响应常见信息查询问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，面向美国经过验证的临床医生推出免费版“ChatGPT for Clinicians”",
          "strong": true
        },
        {
          "text": "，支持临床工作、证据审查、文档编写和医学研究。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "“快速回答”提升了常见问题的响应效率",
          "strong": false
        },
        {
          "text": "，而“ChatGPT for Clinicians”则标志着 AI 在垂直专业领域，尤其是在医疗保健领域，提供了专用工具，有助于提高医护人员的工作效率和准确性。",
          "strong": true
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
    "name": "ChatGPT Images 2.0 发布",
    "market": "美国",
    "date": "2026-04-21",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中引入了新的图像生成模型 ChatGPT Images 2.0，",
          "strong": true
        },
        {
          "text": "并在所有 ChatGPT 计划中可用。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，还推出了“带有思考的图像”（images with thinking）功能，模型在生成前会进行规划和细化。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "新模型和“带有思考的图像”功能极大地提升了 AI 图像生成的质量和可控性",
          "strong": true
        },
        {
          "text": "，为用户提供了更强大、更精确的视觉创作工具，有望进一步推动内容创作和设计自动化。",
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
    "name": "豆包更新 Seedance2.0 fast 模型",
    "market": "中国",
    "date": "2026-04-20",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "字节跳动旗下 AI 助手豆包更新至 2.1.8 版本，",
          "strong": false
        },
        {
          "text": "上线了 Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，带来全新的多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户评价显示，豆包在学习辅导、职业转型规划和日常出行规划等多个场景表现出色，并支持语音输入、P 图和视频生成。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast 模型的引入，强化了豆包在图片和视频生成方面的能力",
          "strong": true
        },
        {
          "text": "，使其成为一个更全能的 AI 助手，能够更好地满足用户在学习、工作和生活中的复杂需求。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c1/93/e1/c193e17f-b5c2-fdb1-5f94-4d2ba6680538/AppIcon-0-0-1x_U007epad-0-8-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "豆包 - 随时帮忙的 AI 助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "豆包 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      "note": "使用 豆包 - 随时帮忙的 AI 助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI 推出 Seedance2.0 fast 模型",
    "market": "中国",
    "date": "2026-04-20",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "抖音旗下 AI 图片和视频工具即梦 AI 更新至 2.1.8 版本，",
          "strong": false
        },
        {
          "text": "上线 Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，带来了全新的多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "该应用旨在为创意爱好者提供 AI 图片和视频创作平台，支持自然语言描述生成内容。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast 模型的加入，显著提升了即梦 AI 在多模态内容创作方面的效率和表现",
          "strong": true
        },
        {
          "text": "，使用户能够更便捷地将创意转化为高质量的图片和视频，尤其是在短视频生态中具有重要意义。",
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
  },
  {
    "name": "腾讯元宝接入 Hy3 preview 模型",
    "market": "中国",
    "date": "2026-04-24",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯全能 AI 助手元宝更新至 2.66.0 版本，",
          "strong": false
        },
        {
          "text": "接入了 Hy3 preview 模型",
          "strong": true
        },
        {
          "text": "，旨在提供全新的智能体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "元宝支持 AI 图片编辑增强、拍题答疑、AI 录音笔、AI 秒写报告文案代码等多种功能。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "接入 Hy3 preview 模型预计将显著提升元宝的 AI 智能水平和能力边界",
          "strong": true
        },
        {
          "text": "，使其在多模态理解和生成方面表现更佳，进一步巩固其在学习、工作和生活效率工具领域的地位。",
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
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI 模型性能与多模态能力持续突破",
    "evidence": [
      {
        "text": "OpenAI 推出了最智能的 GPT-5.5 模型，具备复杂推理和多任务完成能力，尤其在专业工作和代码领域表现突出。",
        "strong": false
      },
      {
        "text": "ChatGPT Images 2.0 新模型支持“带有思考的图像”生成，显著提升了视觉创作质量。",
        "strong": false
      },
      {
        "text": "中国市场的豆包和即梦AI同步更新 Seedance2.0 fast 模型，强化了多模态创作与 AI 助手能力。",
        "strong": false
      },
      {
        "text": "腾讯元宝接入 Hy3 preview 模型，进一步提升智能体验和多模态理解能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "本周，中美两国头部 AI 公司都在模型底层技术上取得了显著进展。与以往注重单一模态或通用能力不同，",
        "strong": false
      },
      {
        "text": "当前趋势更侧重于模型的深度推理能力、多模态整合能力（如图像生成、视觉理解）以及在专业场景下的应用效果。",
        "strong": true
      },
      {
        "text": "这表明 AI 正在从“能用”向“更好用、更智能、更全面”的方向加速发展。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 助手加速垂直化与生态整合",
    "evidence": [
      {
        "text": "OpenAI 推出“ChatGPT for Clinicians”，专为医疗专业人员提供证据审查、文档编写和医学研究支持。",
        "strong": false
      },
      {
        "text": "中国的豆包App近期评价显示，其在学习辅导、职业转型规划和生活出行等多个细分场景中提供定制化服务。",
        "strong": false
      },
      {
        "text": "腾讯元宝App更新至Hy3 preview模型，并持续通过联网搜索公众号、视频号等腾讯生态信源，强化了内容整合能力，覆盖AI图片编辑、拍题答疑、AI录音笔等多种专业功能。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "过去 AI 助手多以通用问答为主，而本周的动态显示，",
        "strong": false
      },
      {
        "text": "AI 助手正快速向垂直领域深化，提供更专业、更精准的解决方案",
        "strong": true
      },
      {
        "text": "。同时，AI 助手与现有产品生态的深度整合也成为主流，旨在为用户提供无缝、多场景的智能体验。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT GPT-5.5 全面推出、ChatGPT 推出快速回答与医护版，以及中国的 豆包更新 Seedance2.0 fast 模型、即梦AI 推出 Seedance2.0 fast 模型，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "AI 创作工具在图像和音频领域持续进化，强调生成质量、智能编辑和多模态转换。头部 AI 模型提供商（如 OpenAI）持续推出更高级的图像生成模型，而图片/视频编辑工具也广泛集成 AI 能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国 AI 创作工具在视频和图像生成方面竞争激烈，强调多模态、易用性和与短视频生态的结合。用户对于生成质量和付费模式的关注度高。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国更偏向入口整合和高频场景覆盖",
    "evidence": [
      {
        "text": "中国 AI 创作工具在视频和图像生成方面竞争激烈，强调多模态、易用性和与短视频生态的结合。用户对于生成质量和付费模式的关注度高。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "关注 AI 在视频生成和音乐创作方面突破，特别是如何实现更长、更复杂、更高质量的 AI 生成内容，以及 AI 在专业设计软件中的集成程度。",
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
      "Meta AI",
      "Gemini",
      "Google AI Edge Eloquent"
    ],
    "pattern": "头部大厂持续推出更强大的基础模型，并将其快速应用于核心 AI 助手产品，强化多模态交互和专业级功能，同时，小型创新公司也在探索隐私保护和离线能力的 niche 市场。",
    "opportunity": "开发基于 GPT-5.5 或 Muse Spark 等新模型的创新应用，尤其关注多模态交互、复杂任务处理和定制化解决方案。同时，离线/本地 AI 助手也是一个值得关注的方向。",
    "watchNext": "观察 Meta AI 在其社交产品和硬件（如 AI 眼镜）中的具体集成效果；Google Gemini Personal Intelligence 的用户采纳情况；以及更多垂直领域 AI 助手产品的出现。",
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
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Google AI Edge Eloquent",
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
      "千问",
      "夸克"
    ],
    "pattern": "中国市场 AI 助手竞争激烈，头部产品持续迭代模型、强化多模态能力和生态整合，以满足学习、工作、生活多场景需求。用户对个性化、专业化的需求日益增长。",
    "opportunity": "专注于提升 AI 助手的个性化、专业化服务，以及更深层次的生态内容整合，构建用户粘性。探索通过 Agent 能力和垂直领域功能创新来拓展用户场景和商业模式。",
    "watchNext": "关注头部 AI 助手在用户增长、活跃度以及商业化方面的表现，以及如何在激烈的市场竞争中形成差异化优势。",
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
    "id": "ai-education-learning-us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "ChatGPT for Clinicians"
    ],
    "pattern": "AI 开始深入垂直的专业教育领域，提供高度定制化的知识辅助和学习支持。",
    "opportunity": "除了医疗领域，可在法律、工程、金融等专业领域开发 AI 驱动的教育和学习工具，以提升专业人士的学习效率和工作质量。",
    "watchNext": "关注 ChatGPT for Clinicians 的用户反馈和功能扩展，以及其他专业领域是否会出现类似的 AI 教育产品。",
    "sources": [
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
      "豆包",
      "腾讯元宝",
      "千问智学",
      "千问",
      "夸克"
    ],
    "pattern": "中国 AI 教育产品围绕“拍题、解题、辅导、批改”等核心需求，深度整合大模型能力，向个性化 AI 家教模式演进。强调全科覆盖和用户追问互动。",
    "opportunity": "针对不同学龄段和学科，开发更精细化、互动性强的 AI 学习工具，提升学习效率和体验。探索 AI 在自适应学习、智能评测和学习路径规划方面的突破。",
    "watchNext": "关注 AI 教育产品如何更好地与 K12 教育体系结合，以及在素质教育和职业培训领域的应用潜力。",
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
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai-companionship-social-us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Replika"
    ],
    "pattern": "AI 陪伴类产品持续关注提升角色一致性、记忆力和对话质量，同时引入“世界观”构建工具以深化用户体验。",
    "opportunity": "开发具有更强情感智能、长期记忆和个性化定制能力的 AI 伴侣，通过引入多模态互动（如语音、图像）和情境感知功能，增强用户的情感连接。",
    "watchNext": "关注 Character.AI Lorebook 功能的正式推出和用户反馈，以及 Replika 等头部产品在主动式互动和多模态能力上的进一步更新。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      }
    ]
  },
  {
    "id": "ai-companionship-social-cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "星野"
    ],
    "pattern": "中国市场 AI 陪伴/社交产品通过允许用户创建和定制 AI 智能体，强化个性化和沉浸式互动体验，并积极构建多模态智能体内容社区。",
    "opportunity": "进一步提升 AI 智能体的情感表达、长期记忆和多模态交互能力，满足用户深层次的情感连接需求，同时鼓励用户共创内容，丰富社区生态。",
    "watchNext": "关注 AI 智能体社区的活跃度、用户创造内容的丰富性以及商业化模式的探索，例如虚拟偶像、虚拟伴侣等新兴形态。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%8Bai/id6463076337"
      }
    ]
  },
  {
    "id": "ai-games-interactive-us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "暂无明显模式。",
    "opportunity": "AI在游戏和互动娱乐领域仍有巨大潜力，例如生成式AI用于游戏内容创作（角色、剧情、场景）、智能NPC行为、个性化玩家体验等。可探索结合 LLM 和生成式 AI 的新游戏玩法。",
    "watchNext": "关注大型游戏公司或创新型独立开发者是否会推出更具颠覆性的AI游戏产品或功能。",
    "sources": []
  },
  {
    "id": "ai-games-interactive-cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "暂无明显模式。",
    "opportunity": "中国游戏市场对 AI 技术有着巨大的需求，尤其是在游戏内容生成（NPC、剧情、美术）、智能玩法设计和玩家个性化体验方面。可探索 AI 驱动的沉浸式剧情和开放世界玩法。",
    "watchNext": "关注头部游戏公司是否会发布 AI 原生游戏或深度整合 AI 技术的更新，特别是与生成式 AI 结合的新游戏形态。",
    "sources": []
  },
  {
    "id": "ai-creation-us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT Images",
      "Lyria 3 Pro",
      "Canva",
      "Picsart",
      "Hypic"
    ],
    "pattern": "AI 创作工具在图像和音频领域持续进化，强调生成质量、智能编辑和多模态转换。头部 AI 模型提供商（如 OpenAI）持续推出更高级的图像生成模型，而图片/视频编辑工具也广泛集成 AI 能力。",
    "opportunity": "专注于提升 AI 创作的精细控制能力、实时交互性，以及与现有创意工作流的无缝整合，尤其在视频和音乐生成方面仍有广阔空间。",
    "watchNext": "关注 AI 在视频生成和音乐创作方面突破，特别是如何实现更长、更复杂、更高质量的 AI 生成内容，以及 AI 在专业设计软件中的集成程度。",
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
      "剪映",
      "醒图",
      "可灵AI"
    ],
    "pattern": "中国 AI 创作工具在视频和图像生成方面竞争激烈，强调多模态、易用性和与短视频生态的结合。用户对于生成质量和付费模式的关注度高。",
    "opportunity": "提升 AI 生成视频的质量、时长和可控性，同时优化用户体验，解决付费模式和模型稳定性问题，进一步拓展在短视频和社交媒体中的应用。",
    "watchNext": "关注 AI 在视频内容创作全流程的整合能力，包括剧本、素材、剪辑、特效的 AI 自动化，以及用户对 AI 生成内容的真实度和版权方面的接受度。",
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
      "ChatGPT",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI 正在成为专业工作的核心驱动力，尤其在代码编写、数据分析、文档处理和高效沟通方面展现出强大能力。同时，针对特定任务的离线 AI 效率工具也开始出现。",
    "opportunity": "开发针对特定行业或职能（如法律、金融、营销）的 AI 效率工具，提供深度定制化解决方案。同时，关注 AI 如何自动化复杂多步骤任务、实现跨应用协作，并提供更深层专业洞察。",
    "watchNext": "观察 AI 在自动化办公流程、智能决策支持和与企业级应用（如 Outlook）深度集成方面的进展。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Google AI Edge Eloquent",
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
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "AI 正成为中国用户在学习和工作中提升效率的重要工具，尤其在文档处理、内容创作、信息总结和代码编写方面。多模态交互和生态整合是提升用户体验的关键。",
    "opportunity": "开发更多针对垂直行业和专业场景的 AI 办公插件和工具，提升 AI 在复杂任务处理中的准确性和可靠性。关注 AI 在自动化办公流程和智能决策支持方面的应用。",
    "watchNext": "观察 AI 办公工具如何更好地与企业微信、钉钉等主流办公平台集成，实现更高效的团队协作和项目管理。",
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
    "id": "ai-life-tools-us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Meta AI",
      "Replika",
      "Rokid Glasses"
    ],
    "pattern": "AI 正通过智能眼镜和集成式助手深入日常生活，提供视觉理解、导航、翻译和个性化生活建议。多模态感知能力是关键。",
    "opportunity": "探索 AI 在智能家居、个人健康管理和无障碍技术中的应用，结合可穿戴设备提供更沉浸和便捷的体验。关注 AI 如何实现更自然的跨设备交互。",
    "watchNext": "关注智能眼镜等硬件入口的普及率和功能丰富度，以及 AI 如何通过多模态感知实现更无缝的现实世界互动。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "id": "ai-life-tools-cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "点点",
      "Rokid AI"
    ],
    "pattern": "AI 生活工具与本地化内容（如小红书经验、抖音直播）和智能硬件（AI 眼镜）深度结合，提供个性化生活建议、信息获取和场景服务。用户对实用性和便捷性有较高要求。",
    "opportunity": "探索 AI 在美食、健康、购物等更多生活场景的应用，并强化与本地服务生态的融合。通过智能硬件实现更无缝、更自然的日常生活辅助。",
    "watchNext": "关注 AI 如何通过多模态交互，实现更智能的家庭管理、个人健康助理等功能，以及用户对于 AI 生成生活攻略的采纳程度。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E8%81%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
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
      "Meta AI glasses",
      "Rokid Glasses"
    ],
    "pattern": "智能眼镜作为 AI 硬件入口的地位日益增强，厂商持续投入以提升其 AI 能力和用户体验，尤其是在多模态交互和生态整合方面。",
    "opportunity": "抓住智能眼镜市场增长机遇，开发适配 AI 眼镜的创新应用，尤其是结合视觉 AI 和 AR 的体验。关注 AI 眼镜的续航、舒适度和核心 AI 功能。",
    "watchNext": "关注新的 AI 眼镜产品发布及其核心 AI 功能，以及现有产品如何通过软件更新提升 AI 体验，例如 Meta AI glasses 的市场表现。",
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
      "Rokid Glasses"
    ],
    "pattern": "中国市场智能眼镜作为 AI 硬件入口持续发展，集成多模态 AI 能力，并积极拓展与主流应用生态的连接（如抖音直播、支付宝）。",
    "opportunity": "提升 AI 眼镜的续航、舒适度和视觉体验，同时开发更多 AI 原生功能，使其成为更具吸引力的日常智能设备。关注 AI 眼镜与手机、AR/VR 等其他智能终端的协同发展。",
    "watchNext": "关注 AI 眼镜在消费市场的普及程度，以及其在垂直行业（如工业、医疗）的应用探索，如何实现更强的场景适应性。",
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E8%81%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "OpenAI 连续发布多项重磅更新",
    "bullets": [
      [
        {
          "text": "GPT-5.5 全面推出",
          "strong": true
        },
        {
          "text": "：OpenAI 在 ChatGPT 中推出了迄今为止最智能的 GPT-5.5 前沿模型，专为专业工作设计，显著提升了理解复杂目标、使用工具和完成多任务的能力，尤其在代码和数据分析方面表现出色。",
          "strong": false
        }
      ],
      [
        {
          "text": "快速回答与医护版上线",
          "strong": true
        },
        {
          "text": "：ChatGPT 引入“快速回答”功能以加快常见信息查询，并推出免费版“ChatGPT for Clinicians”，为美国临床医生提供定制化的 AI 辅助，支持证据审查和医学研究。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT Images 2.0 发布",
          "strong": true
        },
        {
          "text": "：推出新的图像生成模型 ChatGPT Images 2.0 及“带有思考的图像”功能，极大地提升了 AI 图像生成的质量和可控性。",
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
    "title": "ChatGPT GPT-5.5 全面推出",
    "bullets": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中推出了迄今为止最智能的 GPT-5.5 前沿模型",
          "strong": true
        },
        {
          "text": "，专为专业工作设计。",
          "strong": false
        }
      ],
      [
        {
          "text": "GPT-5.5 旨在理解复杂目标、使用工具、自我检查工作并更完整地完成多任务。",
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
    "title": "ChatGPT 推出快速回答与医护版",
    "bullets": [
      [
        {
          "text": "ChatGPT 正在推出“快速回答”功能，以更快地响应常见信息查询问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，面向美国经过验证的临床医生推出免费版“ChatGPT for Clinicians”",
          "strong": true
        },
        {
          "text": "，支持临床工作、证据审查、文档编写和医学研究。",
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
    "title": "ChatGPT Images 2.0 发布",
    "bullets": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中引入了新的图像生成模型 ChatGPT Images 2.0，",
          "strong": true
        },
        {
          "text": "并在所有 ChatGPT 计划中可用。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，还推出了“带有思考的图像”（images with thinking）功能，模型在生成前会进行规划和细化。",
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
          "text": "AI 创作工具在图像和音频领域持续进化，强调生成质量、智能编辑和多模态转换。头部 AI 模型提供商（如 OpenAI）持续推出更高级的图像生成模型，而图片/视频编辑工具也广泛集成 AI 能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "专注于提升 AI 创作的精细控制能力、实时交互性，以及与现有创意工作流的无缝整合，尤其在视频和音乐生成方面仍有广阔空间。",
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
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
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
    "title": "中国头部 AI 助手模型迭代与功能强化",
    "bullets": [
      [
        {
          "text": "豆包和即梦 AI 更新 Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "：字节跳动旗下的豆包和即梦 AI 均上线 Seedance2.0 fast 模型，显著提升了多模态创作（图片和视频生成）和 AI 助手能力，满足用户在学习、工作和生活中的多样化需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "腾讯元宝接入 Hy3 preview 模型",
          "strong": true
        },
        {
          "text": "：腾讯元宝更新并接入 Hy3 preview 模型，旨在提供更智能的 AI 体验，尤其在 AI 图片编辑和视频生成方面进一步强化，并持续整合腾讯生态信源。",
          "strong": false
        }
      ],
      [
        {
          "text": "星野优化用户体验",
          "strong": true
        },
        {
          "text": "：星野通过修复问题和优化用户体验来巩固其 AI 智能体内容社区，提升 AI 伙伴的互动质量和稳定性。",
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
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%8Bai/id6463076337"
      }
    ]
  },
  {
    "title": "豆包更新 Seedance2.0 fast 模型",
    "bullets": [
      [
        {
          "text": "字节跳动旗下 AI 助手豆包更新至 2.1.8 版本，",
          "strong": false
        },
        {
          "text": "上线了 Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，带来全新的多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户评价显示，豆包在学习辅导、职业转型规划和日常出行规划等多个场景表现出色，并支持语音输入、P 图和视频生成。",
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
  },
  {
    "title": "即梦AI 推出 Seedance2.0 fast 模型",
    "bullets": [
      [
        {
          "text": "抖音旗下 AI 图片和视频工具即梦 AI 更新至 2.1.8 版本，",
          "strong": false
        },
        {
          "text": "上线 Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，带来了全新的多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "该应用旨在为创意爱好者提供 AI 图片和视频创作平台，支持自然语言描述生成内容。",
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
    "title": "腾讯元宝接入 Hy3 preview 模型",
    "bullets": [
      [
        {
          "text": "腾讯全能 AI 助手元宝更新至 2.66.0 版本，",
          "strong": false
        },
        {
          "text": "接入了 Hy3 preview 模型",
          "strong": true
        },
        {
          "text": "，旨在提供全新的智能体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "元宝支持 AI 图片编辑增强、拍题答疑、AI 录音笔、AI 秒写报告文案代码等多种功能。",
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
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "中国 AI 创作工具在视频和图像生成方面竞争激烈，强调多模态、易用性和与短视频生态的结合。用户对于生成质量和付费模式的关注度高。",
          "strong": false
        }
      ],
      [
        {
          "text": "提升 AI 生成视频的质量、时长和可控性，同时优化用户体验，解决付费模式和模型稳定性问题，进一步拓展在短视频和社交媒体中的应用。",
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
  }
];
