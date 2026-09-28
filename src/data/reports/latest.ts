import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-09-28";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 推出金融信用评分追踪功能",
    "market": "美国",
    "date": "2026-09-21",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 为 Plus 和 Pro 用户在美国市场推出了信用评分追踪功能，允许用户安全连接 Experian 信用报告和 VantageScore 3.0 信用评分。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能在 ChatGPT 的 Finances 部分上线，提供个性化洞察，解释影响用户信用评分的因素，并关联财务目标。",
          "strong": false
        }
      ],
      [
        {
          "text": "信用评分和报告每月更新，信用监控会提醒用户重要变化，如新查询、账户或地址变动。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此举将 AI 助手拓展到更深度的个人金融管理领域，为用户提供便捷的信用健康监测工具，进一步提升 AI 的实用性。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI 助手通过集成第三方金融服务，逐渐成为个人数据的集成中心和决策辅助工具，预示着 AI 在敏感个人数据管理上的信任建设日益重要。",
          "strong": false
        }
      ],
      [
        {
          "text": "后续需观察此类深度集成如何平衡用户数据隐私与个性化服务的需求，以及其在多市场推广的潜力。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/99/5a/b4/995ab402-cdb4-c977-7a7a-dd94892e200d/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 语音模式集成插件和工作功能",
    "market": "美国",
    "date": "2026-09-23",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 语音模式现在支持在 Web、iOS 和 Android 平台上使用插件及连接的应用程序。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以在语音对话中通过插件完成任务，并在聊天中查看文字回复。此外，语音功能也扩展到 ChatGPT Work，用户可以通过语音创建文档、演示文稿和电子表格。",
          "strong": false
        }
      ],
      [
        {
          "text": "这项功能适用于所有 ChatGPT 计划用户，但 Work 语音功能需要 Work 访问权限，并遵循现有的应用程序连接、权限和使用限制。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "语音与插件的结合极大地提升了 AI 助手的交互效率和多任务处理能力，使用户可以通过自然语言命令直接调用外部服务，进一步无缝融入日常工作流。",
          "strong": false
        }
      ],
      [
        {
          "text": "这将加速语音交互在生产力场景中的普及，挑战传统基于界面的操作模式，也为插件生态带来新的增长点。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注语音识别的准确性、多模态指令的理解能力以及企业级应用的安全性与合规性。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/99/5a/b4/995ab402-cdb4-c977-7a7a-dd94892e200d/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "豆包和腾讯元宝上线AI旅游与饮食助手",
    "market": "中国",
    "date": "2026-09-27",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "豆包和腾讯元宝均在近期更新中推出了 AI 旅游助手和饮食助手，集成专家模式。",
          "strong": false
        }
      ],
      [
        {
          "text": "旅游助手支持一句话生成完整的图文行程，用户可点击查看景点详情和交通，并直接跳转预订酒店和门票。",
          "strong": false
        }
      ],
      [
        {
          "text": "饮食助手则允许用户饭前拍照或描述食物，AI 即可计算卡路里、分析一周饮食缺口，并提供个性化膳食计划和菜谱。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "两大主流 AI 助手同时强化生活服务功能，表明 AI 在解决用户具体生活决策（如旅行规划、健康饮食）方面的应用日益深入，提供了一站式、智能化解决方案。",
          "strong": false
        }
      ],
      [
        {
          "text": "此类功能将提升用户粘性，使 AI 助手从通用问答工具转向更具体的垂直服务入口，进一步模糊工具与平台间的界限。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注 AI 在生成内容的准确性、个性化推荐的精准度，以及与第三方服务（如预订平台）的无缝集成体验。",
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
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a0/21/08/a0210869-9719-1f42-0dfb-752e2a379bcb/oYI33ACgayloVIZqAIsviJBAAABivn21ZUwVE.jpg/320x480bb.jpg",
      "alt": "豆包 - 生活工作 AI 助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "豆包 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      "note": "使用 豆包 - 生活工作 AI 助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Rokid AI 眼镜应用提升会议纪要能力",
    "market": "中国",
    "date": "2026-09-23",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Rokid AI App 近期更新至 v1.14.0，全面提升了会议纪要能力，服务已切换为 Rokid 自研。",
          "strong": false
        }
      ],
      [
        {
          "text": "新版本支持录音时拍照，会议中的照片能同步被 AI 理解，实现多模态处理会议纪要，并支持导出 PDF 和保存可视化图文纪要为图片。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，更新还支持通过手机 App 与 AI 助手进行文字对话，确保乐奇眼镜始终在线提供帮助。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此更新显著增强了 AI 眼镜在商务和学习场景下的实用性，通过多模态融合（语音、图像、文本），提供了更精准、更丰富的会议记录与总结，将解放用户的双手和大脑。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid 自研服务的推出表明其在 AI 硬件生态中进一步深耕核心技术，力求提供更垂直、更专业的 AI 解决方案。",
          "strong": false
        }
      ],
      [
        {
          "text": "这将推动 AI 硬件在专业场景下的普及，并促使其他厂商在多模态理解和垂直功能上进行创新竞争。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/db/a2/34dba249-1368-a60e-7eef-760f9c1f6410/_U5bb9_U5668_15013@1x.jpg/320x480bb.jpg",
      "alt": "Rokid AI - 乐奇AI眼镜 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Rokid AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564",
      "note": "使用 Rokid AI - 乐奇AI眼镜 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI App 再次强调 Seedance 2.5 模型",
    "market": "中国",
    "date": "2026-09-17",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下的即梦AI App 在最新版本 2.3.5 中，再次强调了全新 Seedance 2.5 模型的上线，该模型支持生成 30 秒超长视频。",
          "strong": false
        }
      ],
      [
        {
          "text": "即梦AI 作为一个专为创意爱好者打造的 AI 表达平台，旨在将用户的想象力变为现实，满足日常娱乐和技术探索需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "该应用提供 AI 图片和视频创作功能，用户可以通过自然语言描述想法，生成并编辑独特的图片和视频作品。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance 2.5 模型对 30 秒超长视频的支持，意味着 AI 在视频生成领域的时长和复杂性上持续进步，为用户提供了更丰富的创作可能性。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型在抖音生态中的推广，将加速 AI 视频创作的普及，让更多普通用户也能尝试制作专业的短视频内容。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注模型在生成质量、风格多样性、以及与用户互动编辑效率上的进一步提升，以满足日益增长的创作需求。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/be/5e/a1/be5ea172-87c5-9e74-72aa-4bcc92d0fde4/osPAIBFLXQADGTAAaVm2GXAOH4ylGefEGeSUvx.jpg/320x480bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点 App 同步小红书聊天记录",
    "market": "中国",
    "date": "2026-09-21",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "小红书旗下的 AI 生活助手“点点” App 近期更新至版本 4.6，其在小红书（rednote）上的聊天记录已同步至点点 App。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以在点点 App 中继续之前的对话，并且支持搜索聊天历史记录，方便用户回顾和管理信息。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新旨在提升用户在多平台间的连贯使用体验，并强调了 AI 助手的功能体验和回答质量的改进。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "小红书点点 App 的这一更新，体现了平台方在用户体验连贯性上的努力，打通了其在主应用内嵌 AI 功能与独立 AI App 之间的数据壁垒，方便用户管理跨平台 AI 互动。",
          "strong": false
        }
      ],
      [
        {
          "text": "这预示着超级应用内部的 AI 功能可能逐步独立成更专业的 AI 助手，同时通过数据同步保持生态内的一致性。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注这种数据同步是否能真正提升用户粘性，以及用户对 AI 助手处理个人跨平台数据的隐私顾虑。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/93/f9/25/93f92561-1ccb-bd4b-a203-b66f29afd8cc/pic_1.png/392x696bb.png",
      "alt": "dots: ai for everyday life App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "点点 App Store",
      "sourceHref": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      "note": "使用 dots: ai for everyday life 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI 助手向垂直化、生活化和深度集成发展",
    "evidence": [
      {
        "text": "ChatGPT 推出信用评分追踪功能，将 AI 触角延伸至个人金融领域。",
        "strong": false
      },
      {
        "text": "中国的豆包和腾讯元宝同步上线 AI 旅游助手和饮食助手，覆盖出行规划、健康管理等具体生活场景。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "这表明中美两国的 AI 助手正从通用问答向更具体的垂直服务和生活场景深度集成，通过连接第三方数据或提供一站式解决方案，提升用户在日常生活中的决策效率和体验。",
        "strong": false
      },
      {
        "text": "相较于早期的泛用型 AI，当前的趋势是让 AI 更“懂行”、“会生活”，解决用户痛点。",
        "strong": false
      }
    ]
  },
  {
    "title": "多模态与 Agent 能力在生产力场景深化",
    "evidence": [
      {
        "text": "ChatGPT 语音模式现在支持使用插件，并将其工作功能整合到语音对话中，实现通过语音指令创建文档等复杂任务。",
        "strong": false
      },
      {
        "text": "Rokid AI 眼镜应用显著提升会议纪要能力，支持录音时拍照，并通过多模态 AI 理解图像和语音，生成图文纪要。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "语音和多模态交互在生产力场景中的应用日益成熟，不仅限于简单的问答，而是能够执行更复杂、更“智能体（Agent）”化的任务。",
        "strong": false
      },
      {
        "text": "硬件入口如 AI 眼镜也正通过多模态融合，提供更自然的交互体验，使 AI 助手更好地融入用户的真实工作流和环境。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 创作工具持续演进，聚焦视频生成时长",
    "evidence": [
      {
        "text": "即梦AI App 持续推广其 Seedance 2.5 模型，主打生成 30 秒超长视频的能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI 创作，特别是视频生成领域，正不断突破时长限制，提供更具叙事潜力的生成作品。",
        "strong": false
      },
      {
        "text": "中国市场对短视频创作的热衷推动了相关 AI 工具的快速发展，这与美国市场在 AI 图像生成上的早期爆发有异曲同工之处，但更注重实际内容生产的落地应用。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 推出金融信用评分追踪功能、ChatGPT 语音模式集成插件和工作功能，以及中国的 豆包和腾讯元宝上线AI旅游与饮食助手、Rokid AI 眼镜应用提升会议纪要能力，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "AI 助手功能持续扩展，向个人生活和专业场景深度集成，特别是多模态交互能力增强，以及与第三方服务的结合。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国的 AI 图片和视频生成工具竞争激烈，不断提升模型能力和生成时长，头部产品持续获得关注。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "AI_Assistant_Search_US",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Meta AI",
      "Gemini"
    ],
    "pattern": "AI 助手功能持续扩展，向个人生活和专业场景深度集成，特别是多模态交互能力增强，以及与第三方服务的结合。",
    "opportunity": "开发更多特定场景的 AI 插件或 Agent，利用开放平台优势构建定制化解决方案。",
    "watchNext": "关注 Meta AI 在社交场景的集成深度，以及 Gemini 在 Google 生态内的整合进展。",
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
      }
    ]
  },
  {
    "id": "AI_Assistant_Search_CN",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点"
    ],
    "pattern": "中国 AI 助手加速向生活服务和跨应用数据集成发展，强化本地化和个性化体验。",
    "opportunity": "结合本地生活服务（如团购、本地推荐），打造更贴近用户日常需求的 AI 助手。",
    "watchNext": "关注豆包和腾讯元宝在生态内其他产品（如小红书、微信）的深度融合，以及用户数据隐私的处理。",
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
      }
    ]
  },
  {
    "id": "AI_Education_Learning_US",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Gizmo",
      "ChatGPT"
    ],
    "pattern": "AI 驱动的学习平台通过游戏化和个性化策略吸引用户，融资活跃，功能上注重互动式学习材料和快速知识获取。",
    "opportunity": "探索 AI 在教育评估、个性化辅导和沉浸式学习体验中的创新应用。",
    "watchNext": "关注 Gizmo 等平台的用户增长和营收模式的可持续性，以及 ChatGPT 在教育场景中更深层次的应用潜力。",
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
    "id": "AI_Education_Learning_CN",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "千问智学"
    ],
    "pattern": "AI 学习工具持续存在，但近期缺乏显著的产品更新或市场爆发信号。千问智学作为阿里旗下产品，此前已接入千问大模型。",
    "opportunity": "结合中国教育场景的特殊需求，如K12作业辅导、考试准备等，开发更精准的 AI 学习产品。",
    "watchNext": "关注头部科技公司在教育领域的投入，以及是否有新的 AI 学习模式出现。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "AI_Companion_Social_Emotional_US",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Replika",
      "Series"
    ],
    "pattern": "AI 陪伴和社交应用在模型能力、记忆、角色一致性上持续迭代，并有创新社交形式涌现。",
    "opportunity": "深耕情感陪伴的真实性、社交网络的安全性与互动性，拓展更多元化的 AI 社交场景。",
    "watchNext": "关注 Character.AI 的 Lorebook 功能推出后的用户反馈，以及 Series 这类 iMessage AI 社交网络的增长势头。",
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
      }
    ]
  },
  {
    "id": "AI_Companion_Social_Emotional_CN",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "星野"
    ],
    "pattern": "AI 陪伴社交产品持续存在，但近期缺乏大型功能创新，更多是维持和优化用户体验。",
    "opportunity": "探索符合中国社交文化的新型 AI 陪伴模式，尤其是在虚拟人设、多模态互动上的创新。",
    "watchNext": "关注用户对 AI 陪伴产品情感深度和隐私保护的持续需求，以及是否有新的产品形态出现。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "AI_Gaming_Interactive_Entertainment_US",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "近期缺乏明确的 AI 游戏或互动娱乐消费产品更新或重要发布。",
    "opportunity": "AI 在游戏领域潜力巨大，可关注 AI NPC、AI 叙事生成和个性化游戏体验。",
    "watchNext": "关注游戏巨头或独立开发者在 AI 游戏内容生成和玩家互动方面的探索。",
    "sources": []
  },
  {
    "id": "AI_Gaming_Interactive_Entertainment_CN",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "近期缺乏明确的 AI 游戏或互动娱乐消费产品更新或重要发布。",
    "opportunity": "中国游戏市场庞大，AI 在游戏内容生成、智能 NPC 和个性化玩家体验上存在巨大机会。",
    "watchNext": "关注国内游戏大厂在 AI 游戏领域的研发投入和产品落地情况。",
    "sources": []
  },
  {
    "id": "AI_Creation_US",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Momo: AI Photo & Video Maker",
      "Shots: Photo & Video Generator"
    ],
    "pattern": "AI 图像和视频生成工具市场活跃，App Store 排行榜显示多款 AI 创作应用受到用户欢迎。",
    "opportunity": "在多模态创作（如文生图、图生视频）方面继续创新，提升生成质量和用户编辑体验。",
    "watchNext": "关注新兴的 AI 视频生成工具如何突破时长和细节限制，以及商业化模式的探索。",
    "sources": [
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "AI_Creation_CN",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "即梦AI",
      "剪映",
      "可灵AI",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "中国的 AI 图片和视频生成工具竞争激烈，不断提升模型能力和生成时长，头部产品持续获得关注。",
    "opportunity": "深耕视频生成技术，提供更长的生成时长、更精细的控制和更多样的风格选择，结合短视频生态优势。",
    "watchNext": "关注字节跳动、腾讯等大厂在 AI 创作工具上的投入，以及 Seedance 等核心模型的进一步突破。",
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
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
    "id": "AI_Efficiency_Office_US",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Granola",
      "ChatGPT"
    ],
    "pattern": "AI 效率工具从会议记录向企业级应用拓展，强化 API 集成和团队协作功能。",
    "opportunity": "开发更智能的企业级 AI Agent，实现复杂工作流的自动化和协同优化。",
    "watchNext": "关注 Granola 在企业市场中的客户增长，以及 ChatGPT Work 在大型企业中的普及程度。",
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
    "id": "AI_Efficiency_Office_CN",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "中国 AI 助手在工作场景持续发力，集成文档处理、数据分析、代码生成等多元化功能。",
    "opportunity": "结合中国企业软件生态和办公习惯，打造更符合本地需求的 AI 办公套件。",
    "watchNext": "关注各大 AI 助手在自动化办公、跨应用协作方面的创新，以及企业用户采纳度。",
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
    "id": "AI_Life_Tools_US",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "ChatGPT",
      "Gemini",
      "Meta AI"
    ],
    "pattern": "AI 助手将个人金融、购物、出行等生活场景深度集成，提供更智能的决策辅助。",
    "opportunity": "开发更多与个人日常习惯、偏好紧密结合的 AI 生活服务，提升用户体验。",
    "watchNext": "关注 AI 在个性化推荐和跨平台数据整合方面的进展，以及用户对隐私的接受度。",
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
      }
    ]
  },
  {
    "id": "AI_Life_Tools_CN",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点"
    ],
    "pattern": "中国 AI 助手在吃喝玩乐、购物送礼、旅游规划等生活服务领域实现快速迭代和深度融合，结合本地生态优势。",
    "opportunity": "利用微信、小红书等生态数据，提供更精准、更个性化的本地生活服务。",
    "watchNext": "关注 AI 助手如何更好地与线下服务融合，实现从线上决策到线下消费的全链条打通。",
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
      }
    ]
  },
  {
    "id": "AI_Hardware_Entry_US",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Meta AI glasses",
      "Rokid Glasses"
    ],
    "pattern": "AI 眼镜作为硬件入口持续发展，但用户体验和地区稳定性仍需提升。",
    "opportunity": "解决硬件 AI 的关键技术挑战，如视觉 AI 的准确性、区域限制和持续稳定性。",
    "watchNext": "关注 Meta AI 眼镜在 Muse Spark 模型加持下的市场表现，以及 Rokid 等厂商如何优化其在全球市场的用户体验。",
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
    "id": "AI_Hardware_Entry_CN",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid AI - 乐奇AI眼镜"
    ],
    "pattern": "中国 AI 眼镜在核心 AI 服务（如长期记忆、多模态会议纪要）和本地化生活支付功能上加速集成。",
    "opportunity": "在 AI 眼镜中集成更多符合中国用户习惯的生活服务和生产力工具，提升生态互联性。",
    "watchNext": "关注 Rokid 等厂商在 AI 硬件交互、续航、以及与手机生态打通上的进一步创新。",
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
    "title": "AI 助手深入个人金融与工作流",
    "bullets": [
      [
        {
          "text": "OpenAI ChatGPT 在 9 月 21 日推出了",
          "strong": false
        },
        {
          "text": "金融信用评分追踪功能",
          "strong": true
        },
        {
          "text": "，允许美国 Plus 和 Pro 用户连接 Experian 信用报告，获取个性化洞察，显示 AI 助手在处理敏感个人数据方面的能力提升。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT 在 9 月 23 日将",
          "strong": false
        },
        {
          "text": "插件功能扩展到语音模式",
          "strong": true
        },
        {
          "text": "，并在 Work 版本中支持语音进行文档、演示文稿等任务创建，大幅提升了 AI 助手的交互效率和在生产力场景中的应用深度。",
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
    "title": "ChatGPT 推出金融信用评分追踪功能",
    "bullets": [
      [
        {
          "text": "ChatGPT 为 Plus 和 Pro 用户在美国市场推出了信用评分追踪功能，允许用户安全连接 Experian 信用报告和 VantageScore 3.0 信用评分。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能在 ChatGPT 的 Finances 部分上线，提供个性化洞察，解释影响用户信用评分的因素，并关联财务目标。",
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
    "title": "ChatGPT 语音模式集成插件和工作功能",
    "bullets": [
      [
        {
          "text": "ChatGPT 语音模式现在支持在 Web、iOS 和 Android 平台上使用插件及连接的应用程序。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以在语音对话中通过插件完成任务，并在聊天中查看文字回复。此外，语音功能也扩展到 ChatGPT Work，用户可以通过语音创建文档、演示文稿和电子表格。",
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
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "AI 助手功能持续扩展，向个人生活和专业场景深度集成，特别是多模态交互能力增强，以及与第三方服务的结合。",
          "strong": false
        }
      ],
      [
        {
          "text": "开发更多特定场景的 AI 插件或 Agent，利用开放平台优势构建定制化解决方案。",
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
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "title": "AI 效率/办公：美国方向信号",
    "bullets": [
      [
        {
          "text": "AI 效率工具从会议记录向企业级应用拓展，强化 API 集成和团队协作功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "开发更智能的企业级 AI Agent，实现复杂工作流的自动化和协同优化。",
          "strong": false
        }
      ]
    ],
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
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "AI 助手加速融合生活服务与多模态能力",
    "bullets": [
      [
        {
          "text": "豆包和腾讯元宝在 9 月 27 日前后同步上线了",
          "strong": false
        },
        {
          "text": "AI 旅游助手和饮食助手",
          "strong": true
        },
        {
          "text": "，通过专家模式提供个性化行程规划、卡路里计算和膳食建议，标志着 AI 助手在本地生活服务领域的深度拓展。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid AI 眼镜应用在 9 月 23 日的更新中，",
          "strong": false
        },
        {
          "text": "全面提升了会议纪要能力",
          "strong": true
        },
        {
          "text": "，支持录音时拍照并进行多模态处理，同时新增手机 App 文字对话功能，强化了 AI 硬件在专业场景下的实用性。",
          "strong": false
        }
      ],
      [
        {
          "text": "小红书旗下的 AI 助手“点点” App 在 9 月 21 日实现了",
          "strong": false
        },
        {
          "text": "与小红书平台聊天记录的同步",
          "strong": true
        },
        {
          "text": "，提升了用户跨平台使用 AI 助手的连贯性和数据管理便利性。",
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
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "豆包和腾讯元宝上线AI旅游与饮食助手",
    "bullets": [
      [
        {
          "text": "豆包和腾讯元宝均在近期更新中推出了 AI 旅游助手和饮食助手，集成专家模式。",
          "strong": false
        }
      ],
      [
        {
          "text": "旅游助手支持一句话生成完整的图文行程，用户可点击查看景点详情和交通，并直接跳转预订酒店和门票。",
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
      }
    ]
  },
  {
    "title": "Rokid AI 眼镜应用提升会议纪要能力",
    "bullets": [
      [
        {
          "text": "Rokid AI App 近期更新至 v1.14.0，全面提升了会议纪要能力，服务已切换为 Rokid 自研。",
          "strong": false
        }
      ],
      [
        {
          "text": "新版本支持录音时拍照，会议中的照片能同步被 AI 理解，实现多模态处理会议纪要，并支持导出 PDF 和保存可视化图文纪要为图片。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "即梦AI App 再次强调 Seedance 2.5 模型",
    "bullets": [
      [
        {
          "text": "抖音旗下的即梦AI App 在最新版本 2.3.5 中，再次强调了全新 Seedance 2.5 模型的上线，该模型支持生成 30 秒超长视频。",
          "strong": false
        }
      ],
      [
        {
          "text": "即梦AI 作为一个专为创意爱好者打造的 AI 表达平台，旨在将用户的想象力变为现实，满足日常娱乐和技术探索需求。",
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
    "title": "点点 App 同步小红书聊天记录",
    "bullets": [
      [
        {
          "text": "小红书旗下的 AI 生活助手“点点” App 近期更新至版本 4.6，其在小红书（rednote）上的聊天记录已同步至点点 App。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以在点点 App 中继续之前的对话，并且支持搜索聊天历史记录，方便用户回顾和管理信息。",
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
