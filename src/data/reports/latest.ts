import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-04-26";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 推出 GPT-5.5 模型",
    "market": "美国",
    "date": "2026-04-23",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中推出了迄今为止最智能的前沿模型 ",
          "strong": false
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": "，专门针对专业工作场景进行了优化。",
          "strong": false
        }
      ],
      [
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": " 擅长理解复杂目标、使用工具、检查自身工作，并能更好地完成多步骤任务，尤其在代码编写与调试、在线研究、数据分析、文档与表格创建以及跨工具协作方面表现出色。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型还大幅提升了 Agentic Coding 能力",
          "strong": true
        },
        {
          "text": "，能够更好地处理复杂的终端工作流和长期编码任务。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": " 代表了通用 AI 模型在处理专业级复杂任务方面的重大飞跃，将极大地提升开发者和知识工作者的效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "其强大的 Agentic Coding 能力预示着 AI 在软件开发领域的自主性将进一步增强，可能变革开发流程。",
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
    "name": "ChatGPT 推出“快速回答”和“面向临床医生”版本",
    "market": "美国",
    "date": "2026-04-22",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 新增“快速回答”功能",
          "strong": true
        },
        {
          "text": "，能更快地响应常见的、信息查询类问题，在有高置信度答案时提供即时且深入的回复，且不参考过往聊天或记忆。",
          "strong": false
        }
      ],
      [
        {
          "text": "同步推出了“ChatGPT for Clinicians”",
          "strong": true
        },
        {
          "text": "，这是一个面向美国认证临床医生的免费版本，旨在支持临床工作，包括证据审查、文档编写和医学研究。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "“快速回答”功能提高了用户获取信息的效率，优化了ChatGPT在日常查询场景下的用户体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "“ChatGPT for Clinicians”标志着 AI 助手开始针对特定专业领域提供定制化、高可靠性的解决方案，有望显著提升医疗行业的效率和研究水平。",
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
    "name": "ChatGPT Images 2.0 发布，支持“带思考的图像生成”",
    "market": "美国",
    "date": "2026-04-21",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 引入了全新的图像生成模型 ",
          "strong": true
        },
        {
          "text": "ChatGPT Images 2.0",
          "strong": true
        },
        {
          "text": "，所有 ChatGPT 套餐用户均可使用。",
          "strong": false
        }
      ],
      [
        {
          "text": "新模型还加入了“带思考的图像生成”（images with thinking）功能",
          "strong": true
        },
        {
          "text": "，允许模型在生成图像前进行规划和细化，从而产出更高质量的图像。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "图像生成质量的提升和“思考”能力的引入",
          "strong": false
        },
        {
          "text": "将使用户能更精确地控制 AI 创作过程，获得更符合预期的视觉内容，进一步拓展 AI 在创意领域的应用边界。",
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
    "name": "即梦AI上线Seedance2.0 fast模型，强化多模态创作体验",
    "market": "中国",
    "date": "2026-04-20",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI发布2.1.8版本",
          "strong": false
        },
        {
          "text": "，上线了全新的 ",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，为用户带来了全新的多模态创作体验。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast",
          "strong": true
        },
        {
          "text": " 模型的引入，预计将显著提升即梦AI在图片和视频生成方面的速度和质量，进一步巩固其在短视频AI创作领域的领先地位，满足用户对高效创意内容的需求。",
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
    "name": "腾讯元宝接入Hy3 preview模型",
    "market": "中国",
    "date": "2026-04-24",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯全能AI助手元宝发布2.66.0版本",
          "strong": false
        },
        {
          "text": "，接入了 ",
          "strong": false
        },
        {
          "text": "Hy3 preview 模型",
          "strong": true
        },
        {
          "text": "，为用户带来全新的智能体验。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "接入新的大模型通常意味着 AI 能力的全面提升",
          "strong": false
        },
        {
          "text": "，包括理解、生成和推理等方面，这将使得元宝在问答、创作、图片视频处理等多个功能上更加强大和智能化，提升用户的使用满意度。",
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
    "name": "Meta 推出 Muse Spark 模型，强化 AI 助手能力",
    "market": "美国",
    "date": "2026-04-08",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "Meta Superintelligence Labs 发布了其首个大语言模型 ",
          "strong": true
        },
        {
          "text": "Muse Spark",
          "strong": true
        },
        {
          "text": "，旨在为 Meta 产品提供更智能、更快速的 Meta AI 体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "Muse Spark",
          "strong": true
        },
        {
          "text": " 具有强大的复杂推理和多模态感知能力",
          "strong": true
        },
        {
          "text": "，能够理解图片和现实世界场景。它已应用于 Meta AI 应用和网站，并将逐步推广至 WhatsApp、Instagram、Facebook、Messenger 和 AI 眼镜。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Muse Spark",
          "strong": true
        },
        {
          "text": " 的推出标志着 Meta 在构建“个人超级智能”方面迈出了重要一步，将为用户提供更无缝、更智能的跨平台 AI 体验，尤其在多模态交互和 AI 硬件集成方面具有巨大潜力。",
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
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "大模型能力持续突破，向专业化、多模态演进",
    "evidence": [
      {
        "text": "OpenAI 的 GPT-5.5 模型显著提升了在专业工作和 Agentic Coding 上的能力，并推出了“ChatGPT for Clinicians”服务。",
        "strong": false
      },
      {
        "text": "Meta 的 Muse Spark 模型具备强大的复杂推理和多模态理解能力，并计划集成到 AI 眼镜中。",
        "strong": false
      },
      {
        "text": "即梦 AI 和腾讯元宝也相继发布了新的模型版本，强化了多模态创作和智能体验。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI 大模型正从通用能力向更深层次的专业化和精细化发展，同时多模态交互能力成为新的竞争焦点，预示着 AI 应用将更加贴合实际场景需求。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 助手深入生活与工作，定制化场景加速落地",
    "evidence": [
      {
        "text": "ChatGPT 推出“快速回答”和“ChatGPT for Clinicians”，分别优化了通用信息查询和医疗专业支持。",
        "strong": false
      },
      {
        "text": "Meta AI 通过 Muse Spark 提升了家庭旅行规划等复杂任务的并行处理能力。",
        "strong": false
      },
      {
        "text": "中国市场的豆包、元宝、千问智学等 AI 助手则在学习辅导、作业批改、文档处理等具体场景中不断深化功能。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI 助手不再局限于简单的问答，而是通过更强的理解力和与特定场景的融合，提供更精准、更个性化的服务，成为用户在学习、工作和生活中的得力助手。",
        "strong": false
      }
    ]
  },
  {
    "title": "多模态创作工具爆发，AI 硬件入口加速普及",
    "evidence": [
      {
        "text": "ChatGPT Images 2.0 的发布和“带思考的图像生成”功能，以及即梦 AI 的 Seedance2.0 fast 模型，都体现了 AI 在图片和视频创作领域的强大能力。",
        "strong": false
      },
      {
        "text": "Meta AI 计划集成到 AI 眼镜，Rokid AI 眼镜也持续更新多模态翻译和 AI 助手功能。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI 不仅在软件层面推动创作效率提升，更通过智能眼镜等硬件载体，将多模态交互能力带入真实世界，为用户提供沉浸式的 AI 体验，加速 AI 从屏幕走向生活。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "us-ai-assistant",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Meta AI",
      "Gemini",
      "ChatGPT",
      "Google AI Edge Eloquent"
    ],
    "pattern": "大模型持续升级，多模态能力深化，专业化场景加速落地。",
    "opportunity": "AI助手正在变得更智能、更专业、更个性化，与用户日常工作生活深度融合。",
    "watchNext": "模型迭代速度、多模态交互体验、与第三方应用的生态整合。",
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
        "label": "Google AI Edge Eloquent",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "cn-ai-assistant",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "元宝",
      "千问",
      "点点",
      "Rokid AI"
    ],
    "pattern": "头部AI助手平台竞争激烈，大模型持续迭代，并积极整合生态内容和多模态能力。",
    "opportunity": "AI助手向更智能化、个性化、生态整合方向发展，深度嵌入用户生活与工作。",
    "watchNext": "各大厂模型能力竞争、垂直领域应用突破、用户体验优化。",
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
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "id": "us-ai-education",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "ChatGPT for Clinicians"
    ],
    "pattern": "AI开始进入专业学习和辅助领域，专注于高精度、高可信度场景。",
    "opportunity": "针对特定职业群体的AI学习工具潜力巨大，能有效提升效率和专业能力。",
    "watchNext": "其他专业领域AI教育工具的出现、现有工具的普及和效果验证。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-education",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "元宝",
      "千问智学"
    ],
    "pattern": "AI教育工具深度融入学习场景，提供个性化辅导、作业批改和资料定制。",
    "opportunity": "AI家教模式潜力巨大，有望提升学习效率，缓解家长辅导压力。",
    "watchNext": "AI在个性化学习路径规划、智能评测、素质教育中的应用。",
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
      }
    ]
  },
  {
    "id": "us-ai-companionship",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Replika"
    ],
    "pattern": "AI伴侣类产品持续强化核心交互体验，深化记忆和个性化，拓展多模态交互。",
    "opportunity": "满足用户深层情感和社交需求，通过技术提升互动沉浸感和真实感。",
    "watchNext": "模型情感理解能力、记忆长期性、虚拟形象和声音的真实感。",
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
    "id": "cn-ai-companionship",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "星野"
    ],
    "pattern": "AI智能体社区通过提升交互体验和内容创造自由度，满足用户情感和社交需求。",
    "opportunity": "虚拟社交和情感陪伴的市场需求持续增长，AI智能体有望提供更丰富的互动体验。",
    "watchNext": "AI智能体的记忆、情感理解、个性化深度和虚拟世界构建能力。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "us-ai-gaming-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明显集中动态，零星创新多集中在内容生成辅助方面。",
    "opportunity": "AI在游戏和互动娱乐领域仍有待爆发，可能从NPC智能、个性化内容生成切入。",
    "watchNext": "新一代AI游戏公司动向、AI驱动的沉浸式体验产品。",
    "sources": []
  },
  {
    "id": "cn-ai-gaming-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明显集中动态，可能处于探索或早期阶段。",
    "opportunity": "AI在游戏内容生成、NPC智能、个性化体验方面有广阔空间。",
    "watchNext": "游戏公司引入AI大模型的实际案例、AI生成游戏内容的质量和效率。",
    "sources": []
  },
  {
    "id": "us-ai-creation",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT Images 2.0",
      "Gemini Lyria 3 Pro"
    ],
    "pattern": "多模态创作工具趋向智能化和精细化，提供更高质量、更可控的生成能力。",
    "opportunity": "降低专业创作门槛，赋能普通用户生成高质量图片、音乐等内容。",
    "watchNext": "视频生成、3D内容生成、实时互动创作工具。",
    "sources": [
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
    "id": "cn-ai-creation",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "即梦AI",
      "豆包",
      "元宝",
      "剪映",
      "醒图"
    ],
    "pattern": "视频、图片AI创作工具迭代迅速，多模态生成能力增强，头部产品通过AI功能巩固市场。",
    "opportunity": "AI赋能普通用户进行高质量内容创作，短视频平台生态驱动。",
    "watchNext": "视频生成质量与效率、长视频AI创作、多模态融合创作体验。",
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
    "id": "us-ai-productivity",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "GPT-5.5 in ChatGPT",
      "Google AI Edge Eloquent",
      "ChatGPT Outlook integration"
    ],
    "pattern": "AI工具深入办公协作流程，提升复杂任务处理能力，注重效率和数据隐私。",
    "opportunity": "自动化重复性工作，辅助专业人士处理复杂信息，提升整体办公效率。",
    "watchNext": "AI Agent在办公场景的深度应用、跨应用自动化能力。",
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
    "id": "cn-ai-productivity",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "元宝"
    ],
    "pattern": "AI办公助手功能覆盖广泛，从文档生成到数据分析，旨在提升多场景效率。",
    "opportunity": "满足用户在工作学习中对效率工具的刚性需求，市场前景广阔。",
    "watchNext": "AI Agent在复杂办公流程中的应用、与企业SaaS的集成。",
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
      "Gemini",
      "Meta AI"
    ],
    "pattern": "AI助手通过多模态和个性化能力，更好地融入日常生活，提供实用帮助。",
    "opportunity": "AI成为日常决策和信息获取的便利工具，提升生活品质。",
    "watchNext": "AI与智能家居、车载系统的集成，更主动的个性化服务。",
    "sources": [
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "cn-ai-life-tools",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "点点",
      "豆包",
      "元宝"
    ],
    "pattern": "AI生活助手倾向于结合UGC内容平台数据，提供个性化、实用性强的攻略和决策辅助。",
    "opportunity": "AI通过深度整合生活服务数据，成为用户衣食住行的智能参谋。",
    "watchNext": "AI与本地生活服务、消费决策的深度融合、个性化推荐的精准度。",
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
    "id": "us-ai-hardware",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta AI glasses",
      "Rokid Glasses"
    ],
    "pattern": "智能眼镜作为AI新入口持续迭代，强调多模态交互和AI助手整合。",
    "opportunity": "视觉AI与可穿戴设备结合，提供无缝、沉浸式的AI体验。",
    "watchNext": "其他科技巨头在AI硬件领域的布局、用户接受度和创新应用。",
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
    "id": "cn-ai-hardware",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid AI 乐奇AI眼镜"
    ],
    "pattern": "智能眼镜作为AI重要入口持续升级，强化多模态交互和生态整合。",
    "opportunity": "视觉AI与可穿戴设备结合，提供更自然、沉浸式的AI交互体验。",
    "watchNext": "智能眼镜的C端普及度、生态应用拓展、技术创新。",
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "OpenAI 大模型能力升级与专业化应用拓展",
    "bullets": [
      [
        {
          "text": "OpenAI 于 ",
          "strong": false
        },
        {
          "text": "2026年4月23日",
          "strong": true
        },
        {
          "text": " 在 ChatGPT 中发布了迄今为止最智能的 ",
          "strong": false
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": " 模型，显著提升了处理专业工作和 Agentic Coding 的能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "4月22日",
          "strong": true
        },
        {
          "text": "，推出了“快速回答”功能以加快常见问题响应，并上线了面向美国认证临床医生的免费版本“ChatGPT for Clinicians”，深入医疗专业领域。",
          "strong": false
        }
      ],
      [
        {
          "text": "4月21日",
          "strong": true
        },
        {
          "text": "，发布了 ",
          "strong": false
        },
        {
          "text": "ChatGPT Images 2.0",
          "strong": true
        },
        {
          "text": " 图像生成模型，并引入“带思考的图像生成”功能以提升创作质量。",
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
    "title": "Meta AI 强化多模态能力并深入硬件集成",
    "bullets": [
      [
        {
          "text": "Meta 于 ",
          "strong": false
        },
        {
          "text": "2026年4月8日",
          "strong": true
        },
        {
          "text": " 推出其首个由 Meta Superintelligence Labs 开发的大语言模型 ",
          "strong": false
        },
        {
          "text": "Muse Spark",
          "strong": true
        },
        {
          "text": "，具备强大的复杂推理和多模态感知能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "Muse Spark",
          "strong": true
        },
        {
          "text": " 将不仅赋能 Meta AI 应用和网站，还将在未来几周内逐步推广至 WhatsApp、Instagram、Facebook、Messenger 和 ",
          "strong": false
        },
        {
          "text": "AI 眼镜",
          "strong": true
        },
        {
          "text": "，强调了 AI 在多模态交互和硬件入口上的深度融合。",
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
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "中国头部AI助手持续模型升级与功能拓展",
    "bullets": [
      [
        {
          "text": "腾讯元宝于 ",
          "strong": false
        },
        {
          "text": "2026年4月24日",
          "strong": true
        },
        {
          "text": " 发布2.66.0版本，接入了 ",
          "strong": false
        },
        {
          "text": "Hy3 preview 模型",
          "strong": true
        },
        {
          "text": "，旨在提供全新的智能体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "即梦AI",
          "strong": true
        },
        {
          "text": " 于 ",
          "strong": false
        },
        {
          "text": "2026年4月20日",
          "strong": true
        },
        {
          "text": " 上线 ",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，全面提升多模态创作体验，进一步巩固其在图片和视频生成领域的优势。",
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
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "智能眼镜作为AI新入口持续强化生态整合",
    "bullets": [
      [
        {
          "text": "Rokid AI - 乐奇AI眼镜 App 在 ",
          "strong": false
        },
        {
          "text": "2026年4月10日",
          "strong": true
        },
        {
          "text": " 发布1.5.0版本，新增音频流转功能，优化了翻译能力、提升了速度和准确度，并新增语音播报消息通知功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，3月11日的更新还包括将豆包、通义千问、智谱等主流大模型升级到最新版本，并新增了抖音直播能力，显示出智能眼镜作为多模态AI入口的快速进化和生态整合能力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  }
];
