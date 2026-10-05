import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-10-05";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 扩展财务功能至免费及Go用户",
    "market": "美国",
    "date": "2026-10-02",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 的财务功能现已向美国地区的免费和Go版ChatGPT用户开放，覆盖网页、iOS和Android平台。"
        }
      ],
      [
        {
          "text": "用户可以安全地连接个人金融账户，以获取储蓄建议、理解消费习惯，并解读投资状况。",
          "strong": true
        }
      ],
      [
        {
          "text": "所有分析和回答均基于用户自身财务数据。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此举显著扩大了AI赋能的个人财务管理服务的用户基础，使AI成为更广泛用户日常理财的工具。"
        }
      ],
      [
        {
          "text": "预示着AI助手从通用问答向深度垂类功能渗透的趋势，提升了AI在用户生活中解决实际问题的能力。",
          "strong": true
        }
      ],
      [
        {
          "text": "接下来需观察用户对AI处理敏感财务数据的信任度及功能实际采用率。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e2/d4/88/e2d488ce-9162-60ae-2cc5-4dd588a25002/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 推出虚拟试穿等购物新功能",
    "market": "美国",
    "date": "2026-10-01",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT在商品列表中新增“试穿”按钮，用户可对服装和配饰进行虚拟试穿。"
        }
      ],
      [
        {
          "text": "用户通过上传自拍，ChatGPT Images可生成虚拟试穿效果图，并可将喜欢的商品保存至收藏夹。",
          "strong": true
        }
      ],
      [
        {
          "text": "该功能可在ChatGPT的移动端和网页端使用。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "AI与电商购物流程深度融合，为消费者提供更加沉浸式和个性化的购物体验，有望降低退货率并提高转化率。"
        }
      ],
      [
        {
          "text": "体现了AI在多模态交互和现实世界应用中的潜力，尤其是将视觉生成能力应用于消费决策。",
          "strong": true
        }
      ],
      [
        {
          "text": "未来需关注该功能与更多品牌和零售商的集成情况，以及用户对其生成效果的满意度。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e2/d4/88/e2d488ce-9162-60ae-2cc5-4dd588a25002/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝上线旅游与饮食专家模式",
    "market": "中国",
    "date": "2026-10-01",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝接入专家模式，推出旅游助手和饮食助手功能。"
        }
      ],
      [
        {
          "text": "旅游助手可一句话生成包含图文的完整行程，并支持直接预订酒店和景点门票。",
          "strong": true
        }
      ],
      [
        {
          "text": "饮食助手支持拍照识别食物计算卡路里，并根据用户饮食情况提供膳食计划。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "AI助手进一步深入日常生活服务，提供更加专业和行动导向的解决方案，提升了用户在旅行规划和健康管理方面的效率。"
        }
      ],
      [
        {
          "text": "多模态能力（如拍照识图）在实际生活场景中的落地，增强了AI的实用性和用户粘性。",
          "strong": true
        }
      ],
      [
        {
          "text": "接下来需关注这些专家模式的用户采纳率、服务闭环的便捷性以及与腾讯生态内其他服务的协同效应。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/80/cc/77/80cc77eb-85fe-58bd-a0ac-4d9d64a0cc02/d70ce9940f73eaad66210721e467670d_1.jpg/320x480bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Rokid AI眼镜App更新多模态会议纪要功能",
    "market": "中国",
    "date": "2026-09-23",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Rokid AI眼镜的配套App更新了会议纪要能力，支持在录音时同步拍照。"
        }
      ],
      [
        {
          "text": "新增的多模态处理能力可结合会议中的照片生成更丰富的纪要，并支持导出PDF文件。",
          "strong": true
        }
      ],
      [
        {
          "text": "此外，还支持通过手机App与AI助手进行文字对话，提升了交互灵活性。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "增强了AR眼镜在专业办公场景中的实用性，利用多模态AI提升了会议记录和信息总结的效率。"
        }
      ],
      [
        {
          "text": "手机App文字对话的加入，弥补了语音交互在特定场景下的不便，使得AI助手的使用更加无缝。",
          "strong": true
        }
      ],
      [
        {
          "text": "这预示着AI硬件在生产力工具方向的深化，未来需关注其在企业用户中的普及度及与现有办公流的整合。"
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/80/cc/77/80cc77eb-85fe-58bd-a0ac-4d9d64a0cc02/d70ce9940f73eaad66210721e467670d_1.jpg/320x480bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Rokid AI - 乐奇AI眼镜 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Google AI Edge Eloquent 持续优化设备端听写体验",
    "market": "美国",
    "date": "2026-10-04",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Google AI Edge Eloquent 发布更新（v1.4.1），改进了麦克风自动检测功能。"
        }
      ],
      [
        {
          "text": "用户现在可以在设置中手动选择麦克风输入，解决了部分用户遇到的麦克风识别问题。",
          "strong": true
        }
      ],
      [
        {
          "text": "该应用以其完全离线、私密、免费且智能的听写能力获得用户广泛好评。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "通过持续的技术优化提升了设备端AI应用的用户体验和可靠性，尤其在效率工具领域。"
        }
      ],
      [
        {
          "text": "强调了隐私保护和离线可用性在AI产品设计中的重要性，满足了用户对数据安全的深层需求。",
          "strong": true
        }
      ],
      [
        {
          "text": "这表明边缘AI在消费级产品中仍有巨大潜力，后续可关注其功能扩展和更多设备的适配。"
        }
      ]
    ],
    "sources": [
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3a/97/70/3a9770d8-8be6-cdd4-6865-72a7e29e4352/APP_IPHONE_67-0.png/320x480bb.jpg",
      "alt": "Google AI Edge Eloquent App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Google AI Edge Eloquent App - App Store",
      "sourceHref": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      "note": "使用 Google AI Edge Eloquent 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI Agent 能力的平台化竞争加剧，大模型厂商加速生态整合",
    "evidence": [
      {
        "text": "OpenAI 推出“Pro 500”计划，提供 Astra Ultrafast 模型和“Dots”常驻代理，后者具备云端计算能力，可执行持续性自动化任务。",
        "strong": true
      },
      {
        "text": "腾讯元宝接入全新Hy4 preview模型，显著提升了其Agent能力，能够进行更深度推理和处理复杂任务。",
        "strong": true
      },
      {
        "text": "Meta AI 的 Muse Spark 模型正逐步集成到其全系产品和AI眼镜中，旨在提供更智能、更快速的跨应用AI体验，例如群聊中的侧边对话和Threads帖子提及功能。"
      }
    ],
    "comparison": [
      {
        "text": "OpenAI 与 Anthropic 在Agent主战场的竞争焦点正从单一模型性能转向开发者生态和企业信任。Anthropic 的 Claude Code 也表现出强劲增长势头，尤其是在编程助手领域。",
        "strong": true
      },
      {
        "text": "中美头部科技公司均致力于将AI助手深度融入自身生态，通过提供平台级Agent能力吸引用户和开发者，从而在多场景下实现AI的普惠化应用。"
      }
    ]
  },
  {
    "title": "多模态AI在消费场景实现深度落地，交互体验更自然高效",
    "evidence": [
      {
        "text": "Meta AI 在应用中引入图像生成、Reels推荐、地图等功能，并能实现更自然的语音对话，甚至在AI眼镜上提供实时视觉问答。",
        "strong": true
      },
      {
        "text": "ChatGPT 推出虚拟试穿、多页文档扫描以及财务账户连接等功能，利用多模态输入（图片、文本）和外部数据连接，扩展了AI在购物、办公、个人理财等方面的应用。",
        "strong": true
      },
      {
        "text": "腾讯元宝上线专家模式的旅游助手和饮食助手，结合图文生成、拍照识别等能力，提供从规划到执行的一站式生活服务。"
      }
    ],
    "comparison": [
      {
        "text": "中美大厂均在积极探索和深化多模态AI在消费级产品中的应用，不再局限于简单的文本对话，而是通过视觉、语音等多感官交互，提供更具沉浸感和实用性的体验。",
        "strong": true
      },
      {
        "text": "这种趋势使得AI助手能够更精准地理解用户意图和实际需求，将AI从辅助工具提升为主动解决问题的智能伙伴。"
      }
    ]
  },
  {
    "title": "边缘AI与设备端AI应用重要性提升，兼顾隐私与效率",
    "evidence": [
      {
        "text": "Google AI Edge Eloquent 是一款完全在iOS设备上本地运行的智能听写应用，提供离线、私密且免费的文本润色功能，广受用户好评。",
        "strong": true
      },
      {
        "text": "Rokid AI眼镜通过设备端处理能力，提升了会议纪要等功能的效率和稳定性，并计划优化AI助手的长期记忆能力，以成为用户的专属助手。",
        "strong": true
      }
    ],
    "comparison": [
      {
        "text": "尽管云端大模型持续发展，但为满足用户对隐私、低延迟和离线使用的需求，设备端AI（边缘AI）正变得日益关键。",
        "strong": true
      },
      {
        "text": "中美两国厂商都在探索将AI能力下沉到终端设备，尤其是在效率办公和智能硬件领域，以提供更安全、更便捷的个性化服务。"
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 扩展财务功能至免费及Go用户、ChatGPT 推出虚拟试穿等购物新功能，以及中国的 腾讯元宝上线旅游与饮食专家模式、Rokid AI眼镜App更新多模态会议纪要功能，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "大厂将AI助手深度融入生态，提供多模态、个性化服务，并扩展边缘AI功能。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI视频/图像生成工具快速迭代，竞争激烈，尤其在短视频生态内，不断提升生成时长和质量。",
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
      "Google AI Edge Eloquent",
      "Gemini App"
    ],
    "pattern": "大厂将AI助手深度融入生态，提供多模态、个性化服务，并扩展边缘AI功能。",
    "opportunity": "边缘AI助手在隐私和离线场景的优势逐渐显现。",
    "watchNext": "AI眼镜的普及程度和Meta AI跨应用集成效果。",
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
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
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
    "pattern": "国内大厂AI助手竞争激烈，积极整合自身生态服务，向生活、工作场景深化。",
    "opportunity": "结合本地生活服务和垂类模型，打造更具粘性的国民级AI助手。",
    "watchNext": "各平台在用户心智和商业化上的突破，以及 Agent 能力的实际落地。",
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
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "us-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI通过游戏化、个性化辅导提升学习效率和兴趣，吸引年轻用户。",
    "opportunity": "针对学生痛点，提供互动性强、能提高专注度的学习方案。",
    "watchNext": "Gizmo在美国大学市场的扩张及用户留存数据。",
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
      "豆神AI"
    ],
    "pattern": "AI家教和智能学习工具竞争白热化，强调个性化辅导和全科覆盖。",
    "opportunity": "结合多模态（拍题、语音讲解）提供沉浸式学习体验，向更低龄用户渗透。",
    "watchNext": "产品解决用户痛点的效果，以及付费转化情况。",
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
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Character.AI",
      "Replika",
      "Series"
    ],
    "pattern": "AI社交产品开始探索更深度的关系维护和基于AI的连接方式。",
    "opportunity": "结合社交平台入口，利用AI进行高效匹配和互动辅助，打破现有社交障碍。",
    "watchNext": "Series在Gen Z和专业人士中的用户增长及留存数据，Character.AI新功能的实际表现。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Replika - AI Companion Chat App - App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
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
      "星野",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "AI智能体定制和社区互动的模式逐渐成熟，但仍面临内容审核和商业化平衡的挑战。",
    "opportunity": "围绕特定兴趣圈层，提供高度个性化和沉浸感的AI陪伴体验。",
    "watchNext": "平台如何平衡内容自由度与安全性，以及用户付费意愿。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%81ai/id6463076337"
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
    "id": "us-ai-game-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明显集中爆发点，AI在游戏内容生成、智能NPC、个性化游戏体验方面仍处于探索阶段。",
    "opportunity": "AI生成式内容（UGC）和智能NPC是未来游戏的重要发展方向。",
    "watchNext": "关注AI原生游戏的推出和大型游戏厂商的AI整合策略。",
    "sources": []
  },
  {
    "id": "cn-ai-game-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明显集中爆发点，AI在游戏内容生成、智能NPC、个性化游戏体验方面仍处于探索阶段。",
    "opportunity": "AI生成式内容（UGC）和智能NPC是未来游戏的重要发展方向。",
    "watchNext": "关注AI原生游戏的推出和大型游戏厂商的AI整合策略。",
    "sources": []
  },
  {
    "id": "us-ai-creation",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Cantina",
      "Shots",
      "Momo",
      "CapCut"
    ],
    "pattern": "AI图像/视频生成工具趋于普及，用户需求旺盛，但多为辅助型工具。",
    "opportunity": "结合专业工具链，提供更高级别的AI创作辅助，或简化复杂创作流程。",
    "watchNext": "AI生成内容的质量提升，以及与主流社交平台的融合，如Meta AI集成Reels推荐。",
    "sources": [
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
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
      "剪映",
      "醒图",
      "可灵AI",
      "小云雀"
    ],
    "pattern": "AI视频/图像生成工具快速迭代，竞争激烈，尤其在短视频生态内，不断提升生成时长和质量。",
    "opportunity": "提升生成质量和效率，降低创作门槛，满足UGC和PGC的双重需求。",
    "watchNext": "头部产品如何解决生成质量、速度和商业化之间的矛盾，以及与抖音、快手等平台的深度融合。",
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
      "ChatGPT Work",
      "Codex Cloud"
    ],
    "pattern": "AI效率工具从个人辅助向企业级Agent和平台化发展，实现复杂任务自动化，并加强本地数据集成。",
    "opportunity": "解决企业数据孤岛问题，提供可定制的Agent和API，赋能特定行业。",
    "watchNext": "Agent的实际落地效果，企业客户的接受度，以及数据安全和隐私保护。",
    "sources": [
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expan`ds-from-meeting-notetaker-to-enterprise-ai-app/"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "晚点聊 LateTalk AI季报26Q1",
        "href": "https://podcast.latepost.com/156"
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
      "腾讯元宝",
      "千问智学"
    ],
    "pattern": "AI正在渗透到办公流程的各个环节，提升个人和团队的工作效率，多模态录音纪要成为亮点。",
    "opportunity": "结合本土办公软件生态，提供更符合中国用户习惯的自动化办公解决方案。",
    "watchNext": "用户对AI辅助决策和自动化流程的信任度，以及数据安全合规性。",
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
    "id": "us-ai-life-tools",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "ChatGPT"
    ],
    "pattern": "AI助手正在成为生活决策和消费行为的入口，提供更便捷的体验。",
    "opportunity": "将AI集成到更多日常场景，提供个性化推荐和自动化服务。",
    "watchNext": "AI在本地生活服务、智能家居等领域的深度融合。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
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
      "豆包",
      "腾讯元宝",
      "点点"
    ],
    "pattern": "国内AI工具深度挖掘生活消费场景，结合内容社区或电商生态提供一体化服务，例如旅游、饮食和购物。",
    "opportunity": "打造基于AI的个性化生活决策平台，从信息获取到交易闭环。",
    "watchNext": "用户对AI推荐的信任度，以及与线下服务的打通效果。",
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
    "id": "us-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Ray-Ban Meta glasses",
      "Oakley Meta glasses",
      "Meta Ray-Ban Display"
    ],
    "pattern": "AI眼镜作为重要的下一代交互入口正在加速发展，将AI助手能力集成到可穿戴设备中。",
    "opportunity": "解决现有产品痛点，提升AI与物理世界的融合感知能力，扩大应用场景。",
    "watchNext": "电池续航、隐私、计算能力提升及杀手级应用的出现，以及更广泛的用户接受度。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Hi Rokid - Rokid Glasses App - App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
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
      "Rokid AI (乐奇AI眼镜)"
    ],
    "pattern": "国内AI眼镜厂商积极拓展功能，从个人助手向生产力工具和生活服务入口演进，并持续优化用户体验。",
    "opportunity": "结合本地化服务，打造更具粘性的AI眼镜生态，提升用户在移动场景下的效率和便利。",
    "watchNext": "产品成熟度、用户接受度及与大模型的深度整合。",
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%81ai/id6463076337"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "OpenAI多模态功能与Agent能力大幅扩展",
    "bullets": [
      [
        {
          "text": "ChatGPT面向",
          "strong": false
        },
        {
          "text": "免费和Go用户开放财务功能",
          "strong": true
        },
        {
          "text": "，可连接金融账户，提供储蓄、支出分析等服务。"
        }
      ],
      [
        {
          "text": "ChatGPT新增",
          "strong": false
        },
        {
          "text": "虚拟试穿功能",
          "strong": true
        },
        {
          "text": "，用户可上传自拍生成服装搭配效果，并保存至收藏夹。"
        }
      ],
      [
        {
          "text": "iOS版ChatGPT相机功能升级，可",
          "strong": false
        },
        {
          "text": "连续扫描多页文档并自动合并为PDF",
          "strong": true
        },
        {
          "text": "，提升效率。"
        }
      ],
      [
        {
          "text": "推出Pro 500计划，包含Astra Ultrafast模型和“",
          "strong": false
        },
        {
          "text": "Dots”常驻代理",
          "strong": true
        },
        {
          "text": "，实现自动化任务处理。"
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
    "title": "边缘AI与AI社交应用获得关注",
    "bullets": [
      [
        {
          "text": "Google AI Edge Eloquent",
          "strong": true
        },
        {
          "text": "持续优化，提供设备端离线、私密且免费的智能听写服务，广受用户好评。"
        }
      ],
      [
        {
          "text": "AI社交应用",
          "strong": false
        },
        {
          "text": "Series获得510万美元种子前融资",
          "strong": true
        },
        {
          "text": "，旨在iMessage中构建AI社交网络，通过AI促成用户连接。"
        }
      ]
    ],
    "sources": [
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      }
    ]
  },
  {
    "title": "ChatGPT 扩展财务功能至免费及Go用户",
    "bullets": [
      [
        {
          "text": "OpenAI 的财务功能现已向美国地区的免费和Go版ChatGPT用户开放，覆盖网页、iOS和Android平台。"
        }
      ],
      [
        {
          "text": "用户可以安全地连接个人金融账户，以获取储蓄建议、理解消费习惯，并解读投资状况。",
          "strong": true
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
    "title": "ChatGPT 推出虚拟试穿等购物新功能",
    "bullets": [
      [
        {
          "text": "ChatGPT在商品列表中新增“试穿”按钮，用户可对服装和配饰进行虚拟试穿。"
        }
      ],
      [
        {
          "text": "用户通过上传自拍，ChatGPT Images可生成虚拟试穿效果图，并可将喜欢的商品保存至收藏夹。",
          "strong": true
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
    "title": "Google AI Edge Eloquent 持续优化设备端听写体验",
    "bullets": [
      [
        {
          "text": "Google AI Edge Eloquent 发布更新（v1.4.1），改进了麦克风自动检测功能。"
        }
      ],
      [
        {
          "text": "用户现在可以在设置中手动选择麦克风输入，解决了部分用户遇到的麦克风识别问题。",
          "strong": true
        }
      ]
    ],
    "sources": [
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "腾讯元宝与小红书点点深化生活服务与跨平台体验",
    "bullets": [
      [
        {
          "text": "腾讯元宝上线",
          "strong": false
        },
        {
          "text": "专家模式的旅游助手和饮食助手",
          "strong": true
        },
        {
          "text": "，提供图文行程规划、卡路里计算和膳食计划。"
        }
      ],
      [
        {
          "text": "小红书",
          "strong": false
        },
        {
          "text": "点点App更新",
          "strong": true
        },
        {
          "text": "，与小红书平台的聊天记录互通，提升AI助手的记忆和跨平台使用体验。",
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
      }
    ]
  },
  {
    "title": "Rokid AI眼镜提升生产力与多模态交互",
    "bullets": [
      [
        {
          "text": "Rokid AI眼镜更新",
          "strong": false
        },
        {
          "text": "会议纪要能力",
          "strong": true
        },
        {
          "text": "，支持录音时拍照，进行多模态会议总结并导出PDF。"
        }
      ],
      [
        {
          "text": "新增通过",
          "strong": false
        },
        {
          "text": "手机App与AI助手进行文字对话",
          "strong": true
        },
        {
          "text": "的功能，提供更灵活的交互方式。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%81ai/id6463076337"
      }
    ]
  },
  {
    "title": "腾讯元宝上线旅游与饮食专家模式",
    "bullets": [
      [
        {
          "text": "腾讯元宝接入专家模式，推出旅游助手和饮食助手功能。"
        }
      ],
      [
        {
          "text": "旅游助手可一句话生成包含图文的完整行程，并支持直接预订酒店和景点门票。",
          "strong": true
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
    "title": "Rokid AI眼镜App更新多模态会议纪要功能",
    "bullets": [
      [
        {
          "text": "Rokid AI眼镜的配套App更新了会议纪要能力，支持在录音时同步拍照。"
        }
      ],
      [
        {
          "text": "新增的多模态处理能力可结合会议中的照片生成更丰富的纪要，并支持导出PDF文件。",
          "strong": true
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "AI视频/图像生成工具快速迭代，竞争激烈，尤其在短视频生态内，不断提升生成时长和质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "提升生成质量和效率，降低创作门槛，满足UGC和PGC的双重需求。",
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
