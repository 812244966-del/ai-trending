import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-07-13";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT Work, Sites 与桌面应用",
    "market": "美国",
    "date": "2026-07-09",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 推出了 ",
          "strong": false
        },
        {
          "text": "ChatGPT Work",
          "strong": true
        },
        {
          "text": "，这是一个旨在处理更长、更复杂任务的 AI 代理，能够进行信息研究与分析，并跨应用和文件工作，生成文档、表格、演示文稿和报告。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，",
          "strong": false
        },
        {
          "text": "ChatGPT Sites",
          "strong": true
        },
        {
          "text": " 也进入公开测试阶段，用户无需离开 ChatGPT 即可创建交互式网站或轻量级应用。",
          "strong": false
        }
      ],
      [
        {
          "text": "全新的 ",
          "strong": false
        },
        {
          "text": "ChatGPT 桌面应用",
          "strong": true
        },
        {
          "text": "整合了 Chat、Work 和 Codex 功能，支持 macOS 和 Windows，允许 Work 功能在用户授权下访问本地文件和桌面应用，并内置浏览器进行网络信息收集。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这些更新将显著提升用户处理复杂任务的效率和自动化程度，使 ChatGPT 从一个对话工具转变为一个更全面的生产力平台。",
          "strong": false
        }
      ],
      [
        {
          "text": "桌面应用的发布，特别是其与本地文件和应用程序的集成能力，预示着 AI 代理将更深入地融入操作系统和个人工作流。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察这些代理功能在实际复杂场景中的表现、用户采纳度以及对现有生产力工具生态的影响。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d5/b7/88/d5b788b5-b8d7-19c9-a510-46719008a3e9/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝接入Hy3模型",
    "market": "中国",
    "date": "2026-07-11",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝正式上线了其",
          "strong": false
        },
        {
          "text": "Hy3模型",
          "strong": true
        },
        {
          "text": "，提供“深度思考”和“快速思考”两种模式，全面提升了AI助手的智能体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型增强了查资料、写文档、做排版等办公与学习场景下的能力，并能“一句话交付”复杂任务。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过元宝应用切换模型，体验更进阶的AI功能，进一步强化了其全能AI助手的定位。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Hy3模型的引入，特别是其深度思考能力，表明腾讯在大模型应用层持续发力，旨在提供更精准、更复杂的任务处理能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "快慢思考模式的切换满足了用户在不同场景下的效率需求，提升了用户体验，也加剧了国内AI助手产品间的技术竞争。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注Hy3模型在实际应用中的稳定性和用户反馈，以及其如何与其他腾讯生态信源深度结合，形成独特的竞争优势。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%85%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/32/d8/32/32d83290-0905-f2bf-acc9-d1b9fde49d7f/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "元宝-腾讯全能AI助手 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%85%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI上线Seedance2.0 fast模型",
    "market": "中国",
    "date": "2026-07-13",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下AI图片和视频工具",
          "strong": false
        },
        {
          "text": "即梦AI",
          "strong": true
        },
        {
          "text": "，最新版本上线了",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，为用户带来全新的多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型旨在提升AI图片和视频的生成速度与质量，使用户能更快地将创意转化为视觉内容。",
          "strong": false
        }
      ],
      [
        {
          "text": "作为一款专为创意爱好者打造的AI表达平台，即梦AI持续迭代其核心模型，支持自然语言描述生成独一无二的图片和视频。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "“fast”模型的推出直接响应了用户对AIGC工具效率的需求，降低了创作门槛和等待时间，有望吸引更多用户。",
          "strong": false
        }
      ],
      [
        {
          "text": "字节跳动在多模态内容创作领域的持续投入，显示了其在消费级AIGC市场抢占先机的决心，尤其是在图片和视频生成方面。",
          "strong": false
        }
      ],
      [
        {
          "text": "后续可观察Seedance2.0 fast模型在用户反馈中的生成质量、内容多样性，以及其是否能进一步巩固即梦AI在AIGC工具领域的地位。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/db/41/92/db4192b7-1ec0-f9a6-8e6b-d2a705aafd52/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点上线“攻略模式”",
    "market": "中国",
    "date": "2026-07-10",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "AI生活助手“",
          "strong": false
        },
        {
          "text": "点点",
          "strong": true
        },
        {
          "text": "”最新版本中推出了全新的“",
          "strong": false
        },
        {
          "text": "攻略模式",
          "strong": true
        },
        {
          "text": "”，该模式基于小红书海量真人经验，为用户生成专属的深度攻略。",
          "strong": false
        }
      ],
      [
        {
          "text": "功能覆盖了旅行出游、兴趣入门、探店逛街、笔记总结、知识梳理等多个生活场景，旨在帮助用户全面解决生活中的疑问。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过语音或带图提问，获得个性化的路线建议、入门指导、店铺评价总结等信息。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "“攻略模式”将AI能力与UGC社区（小红书）的真实生活经验相结合，解决了用户在信息过载时代获取可靠、个性化建议的痛点。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一更新体现了AI生活工具向更深层、更场景化的方向发展，从单一问答转向提供综合解决方案。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察该模式在不同生活场景中的实际准确性和实用性，以及能否有效转化小红书的用户基础。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2a/34/72/2a347299-cac0-90fb-9726-30440d047475/1040g3g831svff01vle2mecoj9s6j637s0us79to.png/392x696bb.png",
      "alt": "点点-你的ai生活小助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "点点-你的ai生活小助手 App - App Store for iPhone",
      "sourceHref": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      "note": "使用 点点-你的ai生活小助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "Agentic AI 的应用落地加速",
    "evidence": [
      {
        "text": "OpenAI 推出 ChatGPT Work，能够研究、分析信息、跨应用处理任务并生成文档等，并将其与桌面应用整合，深入操作系统层面。",
        "strong": false
      },
      {
        "text": "Meta AI 的 Muse Spark 模型持续在 Meta 旗下多款应用和 AI 眼镜中部署，提供更智能、更快的助理功能和新的购物体验。",
        "strong": false
      },
      {
        "text": "腾讯元宝升级至 Hy3 模型，提供“深度思考”能力，旨在处理更复杂的任务和报告。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "与过去以单轮对话或简单查询为主的 AI 助手相比，当前 AI 产品正向能够理解并执行复杂、多步骤、跨工具任务的“代理”方向快速演进。",
        "strong": false
      },
      {
        "text": "这一趋势标志着 AI 不再仅仅是信息提供者，更是任务执行者，将显著改变用户与数字工具的交互方式和生产力模式。",
        "strong": false
      }
    ]
  },
  {
    "title": "多模态内容创作工具持续深化与提速",
    "evidence": [
      {
        "text": "即梦AI 上线 Seedance2.0 fast 模型，显著提升图片和视频的生成速度与质量，满足用户对高效创意表达的需求。",
        "strong": false
      },
      {
        "text": "Meta AI 也在其应用中提供图像生成和实时 AI 视觉问答能力。",
        "strong": false
      },
      {
        "text": "ChatGPT Sites 允许用户通过 AI 直接创建交互式网站和轻量级应用。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AIGC 正在从单一文本或图像生成，向更复杂、更快速的多模态内容（如视频、互动网页、音乐）创作发展。",
        "strong": false
      },
      {
        "text": "竞争焦点从“能否生成”转向“生成质量”和“生成速度”，同时向更广泛的应用场景（如网站构建）延伸。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 硬件作为入口的生态建设加速",
    "evidence": [
      {
        "text": "Meta AI 持续在 Ray-Ban Meta 和 Oakley Meta 眼镜上推广 Muse Spark 模型，提供实时视觉 AI 功能。",
        "strong": false
      },
      {
        "text": "Rokid AI 应用持续更新，为 Rokid Glasses 提供工具箱、A2UI 渲染、实时同声传译和蚂蚁智能服务等功能，不断丰富眼镜端的 AI 体验。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美市场均在积极探索和完善 AI 眼镜等硬件作为 AI 服务的下一代入口，不再局限于手机或电脑屏幕。",
        "strong": false
      },
      {
        "text": "这一趋势使得 AI 能够更自然地融入物理世界，提供实时、情境感知和无需手动操作的交互体验，未来有望成为重要的 AI 分发渠道。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT Work, Sites 与桌面应用，以及中国的 腾讯元宝接入Hy3模型、即梦AI上线Seedance2.0 fast模型，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "OpenAI 推出 ChatGPT Sites，允许用户直接创建交互式网站。Google Gemini Lyria 3 Pro 能够创作长达 3 分钟的音乐。App Store 榜单上出现多款 AI 视频和图像生成应用。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "抖音旗下即梦AI 上线 Seedance2.0 fast 模型，大幅提升图片和视频创作效率。豆包提供 P 图和视频生成功能。剪映和可灵AI等工具在榜单表现突出，持续推动 AIGC 普惠化。",
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
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Meta AI",
      "Gemini"
    ],
    "pattern": "OpenAI 推出 ChatGPT Work 和桌面应用，Meta AI 在多应用和眼镜中集成 Muse Spark，Google Gemini 推出个人智能功能。巨头持续投入，AI 助手能力边界不断拓展。",
    "opportunity": "提升复杂任务处理效率，结合多模态输入和平台集成，打造全能型智能助理。",
    "watchNext": "Agentic AI 任务执行的稳定性与安全性，多平台数据整合能力。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "ai-assistant-search-cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "腾讯元宝接入Hy3模型，强化深度思考和多模态处理；豆包优化联网搜索、语音和识图能力；千问作为阿里AI助手也持续迭代。国内大厂竞争激烈，聚焦场景化能力提升和生态集成。",
    "opportunity": "结合本土生态优势（微信、抖音、支付宝等），深耕特定场景（如高考通、生活攻略），提供差异化服务。",
    "watchNext": "大模型在复杂推理和多任务调度上的突破，与本地化服务的深度结合。",
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%85%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai-education-us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI 学习平台 Gizmo 获得 $22M Series A 融资，用户规模达 1300 万，通过游戏化机制提升学生学习参与度。",
    "opportunity": "结合游戏化设计和个性化 AI 辅导，解决学生注意力分散和学习动力不足的问题，尤其是在中学和大学市场。",
    "watchNext": "用户留存与学习效果的长期验证，内容质量和覆盖学科的深度拓展。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "ai-education-cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "千问智学",
      "腾讯元宝"
    ],
    "pattern": "千问智学（原夸克学习）接入阿里千问大模型，提供全科AI家教、作业批改、定制资料等。腾讯元宝推出高考通功能，辅助志愿填报。巨头入局，注重全链路学习辅助。",
    "opportunity": "围绕 K12 和高考等核心教育场景，利用大模型提供个性化、精准化的教学辅导和学习工具。",
    "watchNext": "AI 在学科教育中的深度应用效果，用户对 AI 辅助学习的信任度和付费意愿。",
    "sources": [
      {
        "label": "千问智学 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%85%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-companion-social-us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Replika",
      "Series"
    ],
    "pattern": "Character.AI 升级模型增强角色一致性和记忆，并推出 Lorebook 进行世界构建。Replika 持续迭代记忆、主动互动等功能。Series 获得 $5.1M pre-seed 融资，探索基于 iMessage 的 AI 社交网络。",
    "opportunity": "满足用户对深度情感连接和创新社交模式的需求，通过 AI 创造更沉浸、个性化的互动体验。",
    "watchNext": "AI 陪伴的伦理与安全挑战，社交产品中 AI 介导的互动模式的用户接受度。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Replika - AI Companion Chat App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      }
    ]
  },
  {
    "id": "ai-companion-social-cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "星野"
    ],
    "pattern": "星野作为多模态智能体内容社区，支持用户自由创建和分享 AI 智能体，并提供高自由度的形象、声音、人设定制，用户互动活跃。",
    "opportunity": "满足年轻人对虚拟伙伴和个性化角色扮演的需求，构建由用户驱动的 AI 智能体生态。",
    "watchNext": "智能体生成内容的质量和多样性，用户隐私与安全管理，商业化模式的探索。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "ai-gaming-entertainment-us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明确的面向大众市场的 AI 游戏或互动娱乐产品在近期有重大进展或融资。Google Gemini 提到了 Lyria 3 Pro 可以生成长达3分钟的音乐曲目，但这更偏向创作工具而非互动娱乐。",
    "opportunity": "探索 AI 在游戏内容生成（NPC、剧情）、个性化体验、互动叙事中的应用，提升娱乐产品的沉浸感。",
    "watchNext": "新兴 AI 游戏工作室的出现，现有游戏巨头在 AI 领域的布局和产品发布。",
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
    "products": [],
    "pattern": "暂无明确的面向大众市场的 AI 游戏或互动娱乐产品在近期有重大进展或融资。",
    "opportunity": "结合国内丰富的游戏和娱乐内容生态，利用 AI 提升游戏的可玩性、个性化体验和角色互动性。",
    "watchNext": "游戏大厂在 AI 游戏内容生成和互动体验上的投入，独立工作室的创新产品。",
    "sources": []
  },
  {
    "id": "ai-creation-us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT Sites",
      "Gemini Lyria 3 Pro",
      "Cantina",
      "AI Video"
    ],
    "pattern": "OpenAI 推出 ChatGPT Sites，允许用户直接创建交互式网站。Google Gemini Lyria 3 Pro 能够创作长达 3 分钟的音乐。App Store 榜单上出现多款 AI 视频和图像生成应用。",
    "opportunity": "赋能专业和业余创作者，通过 AI 降低创作门槛，拓展内容形式（网站、长音频、视频），提升创作效率和多样性。",
    "watchNext": "AI 生成内容的原创性与版权问题，多模态生成模型的技术突破与应用。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
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
    "signalLabel": "强",
    "products": [
      "即梦AI",
      "豆包",
      "剪映",
      "可灵AI"
    ],
    "pattern": "抖音旗下即梦AI 上线 Seedance2.0 fast 模型，大幅提升图片和视频创作效率。豆包提供 P 图和视频生成功能。剪映和可灵AI等工具在榜单表现突出，持续推动 AIGC 普惠化。",
    "opportunity": "结合短视频、社交媒体生态，满足用户在图像、视频和多模态内容创作上的海量需求，实现快速、低门槛的创意表达。",
    "watchNext": "AI 生成内容在社交平台上的传播效果，用户对不同风格和精细化控制的需求。",
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai-efficiency-office-us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT Work",
      "Google AI Edge Eloquent",
      "Granola"
    ],
    "pattern": "OpenAI 推出 ChatGPT Work 及其桌面应用，将 AI 代理能力扩展到文档、报告生成和跨应用协作。Google AI Edge Eloquent 提供本地运行的智能听写。Granola 获得 $125M 融资，从会议记录工具发展为企业 AI 应用，但仍有个人 API 满足专业用户需求。",
    "opportunity": "提升个人和团队的办公效率，实现复杂任务的自动化，特别是文档处理、信息分析和协作。",
    "watchNext": "AI 代理在企业级应用中的安全性和合规性，用户对本地 AI 处理的隐私关注。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Google AI Edge Eloquent",
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
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "扣子"
    ],
    "pattern": "豆包和腾讯元宝均提供强大的报告、文案、代码生成及文档处理能力。扣子作为字节跳动旗下AI办公伙伴，支持多人多Agent协作。国内巨头持续投入，强调一站式和多模态办公能力。",
    "opportunity": "结合中国企业和个人用户对效率工具的独特需求，打造与微信、飞书等生态深度融合的 AI 办公解决方案。",
    "watchNext": "AI 办公工具在实际工作场景中的接受度，数据安全与隐私保护。",
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%85%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai-lifestyle-us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Meta AI",
      "Gemini"
    ],
    "pattern": "Meta AI 推出新的购物功能，能搜索 Facebook Marketplace 和其他在线商品，并能 @ 品牌或创作者。Google Gemini 推出个人智能，连接 Gmail、Photos、YouTube 辅助规划。",
    "opportunity": "将 AI 融入日常消费决策、个人日程管理和信息整理，提供更智能、便捷的生活服务。",
    "watchNext": "用户对 AI 接入个人数据（邮件、照片）的隐私担忧，AI 推荐的精准度和实用性。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "ai-lifestyle-cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "点点",
      "腾讯元宝"
    ],
    "pattern": "点点推出基于小红书真人经验的“攻略模式”，覆盖旅行、购物、美食等生活场景。腾讯元宝具备拍题答疑、AI图片编辑、视频生成等功能，并有高考通等垂直生活服务。",
    "opportunity": "利用 AI 解决中国用户在社交媒体信息洪流中的决策困扰，提供个性化、本地化的生活服务和信息总结。",
    "watchNext": "AI 在处理复杂、非标准化生活问题上的表现，用户对 AI 辅助决策的信任度。",
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%85%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-hardware-entry-us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta glasses",
      "Oakley Meta glasses",
      "Rokid Glasses"
    ],
    "pattern": "Meta AI 在 Ray-Ban Meta 和 Oakley Meta 眼镜上逐步推广 Muse Spark 模型，实现实时 AI 交互。Rokid Glasses 的配套应用 Hi Rokid 持续更新，提供工具箱、A2UI 渲染、实时翻译等功能。",
    "opportunity": "将 AI 能力嵌入可穿戴设备，实现更自然、解放双手的交互体验，拓展 AI 应用场景。",
    "watchNext": "AI 眼镜的硬件普及率，用户隐私保护，以及杀手级应用场景的出现。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Google AI Edge Eloquent",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
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
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid Glasses"
    ],
    "pattern": "Rokid AI App 持续为 Rokid Glasses 更新，提升慧眼视觉模型识别准确率、降低延迟，支持实时同声传译、支付宝集成等功能，生态建设加速。",
    "opportunity": "探索 AI 眼镜在本地生活服务、旅游、辅助沟通等领域的创新应用，满足特定垂直场景的需求。",
    "watchNext": "中国市场在 AI 眼镜硬件制造和软件生态上的协同发展，语音交互和视觉理解的进一步提升。",
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
    "title": "AI 代理和生产力工具的融合",
    "bullets": [
      [
        {
          "text": "OpenAI 推出了 ",
          "strong": false
        },
        {
          "text": "ChatGPT Work",
          "strong": true
        },
        {
          "text": "，这是一个面向更长、更复杂任务的 AI 代理，支持研究、分析信息、跨应用和文件工作，并能创建文档、表格和演示文稿等。",
          "strong": false
        }
      ],
      [
        {
          "text": "新的 ",
          "strong": false
        },
        {
          "text": "ChatGPT 桌面应用",
          "strong": true
        },
        {
          "text": "整合了 Chat、Work 和 Codex 功能，在用户授权下可访问本地文件和桌面应用，内置浏览器支持网页信息收集。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT Sites",
          "strong": true
        },
        {
          "text": " 进入公开测试，用户无需离开 ChatGPT 即可创建交互式网站和轻量级应用。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "AI 助手在多模态与集成场景的持续进化",
    "bullets": [
      [
        {
          "text": "Meta AI 的 Muse Spark 模型",
          "strong": true
        },
        {
          "text": "正持续推广到 WhatsApp、Instagram、Facebook、Messenger 和 AI 眼镜等 Meta 旗下产品中。",
          "strong": false
        }
      ],
      [
        {
          "text": "Meta AI 增强了语音交互",
          "strong": true
        },
        {
          "text": "能力，允许更自然的打断和话题切换，并能实时生成图片和提供来自 Reels、地图的推荐。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI 眼镜",
          "strong": true
        },
        {
          "text": "也开始逐步获得 Muse Spark 的智能加持，支持实时视觉 AI 问答。",
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
    "title": "ChatGPT Work, Sites 与桌面应用",
    "bullets": [
      [
        {
          "text": "OpenAI 推出了 ",
          "strong": false
        },
        {
          "text": "ChatGPT Work",
          "strong": true
        },
        {
          "text": "，这是一个旨在处理更长、更复杂任务的 AI 代理，能够进行信息研究与分析，并跨应用和文件工作，生成文档、表格、演示文稿和报告。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，",
          "strong": false
        },
        {
          "text": "ChatGPT Sites",
          "strong": true
        },
        {
          "text": " 也进入公开测试阶段，用户无需离开 ChatGPT 即可创建交互式网站或轻量级应用。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "AI 创作：美国方向信号",
    "bullets": [
      [
        {
          "text": "OpenAI 推出 ChatGPT Sites，允许用户直接创建交互式网站。Google Gemini Lyria 3 Pro 能够创作长达 3 分钟的音乐。App Store 榜单上出现多款 AI 视频和图像生成应用。",
          "strong": false
        }
      ],
      [
        {
          "text": "赋能专业和业余创作者，通过 AI 降低创作门槛，拓展内容形式（网站、长音频、视频），提升创作效率和多样性。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
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
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "OpenAI 推出 ChatGPT Work 和桌面应用，Meta AI 在多应用和眼镜中集成 Muse Spark，Google Gemini 推出个人智能功能。巨头持续投入，AI 助手能力边界不断拓展。",
          "strong": false
        }
      ],
      [
        {
          "text": "提升复杂任务处理效率，结合多模态输入和平台集成，打造全能型智能助理。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "国内AI助手核心能力与生态深度融合",
    "bullets": [
      [
        {
          "text": "腾讯元宝",
          "strong": true
        },
        {
          "text": " 正式接入 ",
          "strong": false
        },
        {
          "text": "Hy3模型",
          "strong": true
        },
        {
          "text": "，全面提升智能体验，提供“深度思考”和“快速思考”模式，增强了文档处理、报告撰写等办公学习场景下的能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "豆包",
          "strong": true
        },
        {
          "text": " 持续优化联网搜索、语音输入输出、拍照识图功能，并强化其在工作、学习和创意表达方面的多模态能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid AI 应用",
          "strong": true
        },
        {
          "text": " 为 Rokid Glasses 提供工具箱、A2UI 渲染、实时同声传译和蚂蚁智能服务等功能，加速硬件入口的生态建设。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%85%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "消费级多模态创作与生活服务AI创新活跃",
    "bullets": [
      [
        {
          "text": "即梦AI",
          "strong": true
        },
        {
          "text": " 上线 ",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，大幅提升AI图片和视频的生成速度与质量，强化其在多模态创作领域的竞争力。",
          "strong": false
        }
      ],
      [
        {
          "text": "点点",
          "strong": true
        },
        {
          "text": " 推出全新的“攻略模式”，基于小红书海量真人经验，为用户提供旅行、购物、美食等领域的深度个性化生活攻略。",
          "strong": false
        }
      ],
      [
        {
          "text": "剪映",
          "strong": true
        },
        {
          "text": " 等抖音系创作工具持续保持榜单高位，显示出国内AIGC在短视频创作领域的强大应用需求。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "点点-你的ai生活小助手 App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "title": "腾讯元宝接入Hy3模型",
    "bullets": [
      [
        {
          "text": "腾讯元宝正式上线了其",
          "strong": false
        },
        {
          "text": "Hy3模型",
          "strong": true
        },
        {
          "text": "，提供“深度思考”和“快速思考”两种模式，全面提升了AI助手的智能体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型增强了查资料、写文档、做排版等办公与学习场景下的能力，并能“一句话交付”复杂任务。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%85%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "即梦AI上线Seedance2.0 fast模型",
    "bullets": [
      [
        {
          "text": "抖音旗下AI图片和视频工具",
          "strong": false
        },
        {
          "text": "即梦AI",
          "strong": true
        },
        {
          "text": "，最新版本上线了",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，为用户带来全新的多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型旨在提升AI图片和视频的生成速度与质量，使用户能更快地将创意转化为视觉内容。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "点点上线“攻略模式”",
    "bullets": [
      [
        {
          "text": "AI生活助手“",
          "strong": false
        },
        {
          "text": "点点",
          "strong": true
        },
        {
          "text": "”最新版本中推出了全新的“",
          "strong": false
        },
        {
          "text": "攻略模式",
          "strong": true
        },
        {
          "text": "”，该模式基于小红书海量真人经验，为用户生成专属的深度攻略。",
          "strong": false
        }
      ],
      [
        {
          "text": "功能覆盖了旅行出游、兴趣入门、探店逛街、笔记总结、知识梳理等多个生活场景，旨在帮助用户全面解决生活中的疑问。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  }
];
