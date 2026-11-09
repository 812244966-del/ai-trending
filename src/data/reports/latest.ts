import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-11-09";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT推出图像生成2.6模型与GIF创建功能",
    "market": "美国",
    "date": "2026-11-04",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI于2026年11月4日发布了ChatGPT图像生成2.6模型，显著提升了图像生成速度和编辑时的细节保留能力。"
        }
      ],
      [
        {
          "text": "此次更新还引入了GIF创建功能，用户可以要求生成循环动画或上传草图并让ChatGPT为其角色制作动作。"
        }
      ],
      [
        {
          "text": "此外，新增的保存参考图像功能允许用户在后续对话中重复使用已保存的照片，无需再次上传。"
        }
      ],
      [
        {
          "text": "这些功能将逐步向Plus、Pro、Business、Enterprise和Edu计划的用户推出。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "新模型和功能使得ChatGPT在视觉创作方面更加强大和灵活，能够满足用户对动态图像和个性化图像编辑的需求。"
        }
      ],
      [
        {
          "text": "GIF创建的加入拓宽了AI在日常交流和内容创作中的应用边界，降低了用户制作动图的门槛。"
        }
      ],
      [
        {
          "text": "保存参考图像功能优化了用户的工作流，减少了重复操作，提高了效率。"
        }
      ],
      [
        {
          "text": "这些迭代表明AI助手正向更丰富的多模态交互和更便捷的创意工具方向发展，预示着未来AI将在更多创意场景中扮演核心角色。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a1/39/1d/a1391d37-04ea-8ead-62eb-d925b773ed4a/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝Hy4模型全量上线并支持引用提问",
    "market": "中国",
    "date": "2026-11-02",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝于2026年11月2日更新至2.91.10版本，正式全量上线Hy4模型，全面提升长程任务表现并首次引入视觉理解能力，此前该模型已于9月接入预览版。"
        }
      ],
      [
        {
          "text": "该版本新增“引用提问”功能，用户可选中回答中文字直接追问，使讨论更聚焦。"
        }
      ],
      [
        {
          "text": "同期版本还升级录音笔总结功能，可在录音完成后自动生成结构化图文纪要。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Hy4模型的全量上线增强了元宝在处理复杂任务和视觉内容方面的能力，使其作为全能AI助手更加可靠和专业。"
        }
      ],
      [
        {
          "text": "引用提问功能显著优化了对话交互体验，提高了用户获取精确信息的效率，减少了上下文重复和误解。"
        }
      ],
      [
        {
          "text": "这些更新体现了中国大厂在AI助手能力竞赛中对模型深度和用户体验细节的持续投入。"
        }
      ],
      [
        {
          "text": "未来可观察其在多模态理解和复杂任务处理上的进一步应用场景拓展。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/63/c5/da63c5c2-2490-d8a0-c5ef-9244512cc66e/e7486997d98808089d7f274fe098adfa_1.jpg/320x480bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "豆包上线工作任务模式与“双十一”购物助手",
    "market": "中国",
    "date": "2026-11-02",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "字节跳动旗下AI助手豆包在2026年11月2日发布的最新版本中，重点强调了“工作任务模式”的上线，该模式支持智能化自动办公，内置Office和专业技能，可理解需求并自动执行，甚至支持定时任务。"
        }
      ],
      [
        {
          "text": "同时，豆包还推出了“双十一”活动，打通购物全链路，提供购前对比、成分参数分析、好价提醒等服务，购后支持订单售后管理，并提供补贴。"
        }
      ],
      [
        {
          "text": "此外，其描述中提及的“豆包P图”和基于Seedance模型的图片/视频生成功能也在此次版本更新中得到强调。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "豆包新推出的工作任务模式，将AI的应用从被动问答拓展到主动执行和自动化办公，极大地提升了用户在工作场景中的效率。"
        }
      ],
      [
        {
          "text": "“双十一”购物助手的上线，显示出AI与电商、生活服务深度融合的趋势，旨在为用户提供更智能、更省心的消费体验。"
        }
      ],
      [
        {
          "text": "这些更新展现了豆包在生活和工作两大核心场景中打造全能AI助手的决心，尤其是在中国市场，AI正加速渗透到用户日常的方方面面。"
        }
      ],
      [
        {
          "text": "下一步可关注其AI Agent能力在更复杂、跨应用场景下的表现和用户采纳情况。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/95/cf/83/95cf8380-a3f3-d69d-0f42-6646340a1aad/oYI33ACgayloVIZqAIsviJBAAABivn21ZUwVE.jpg/320x480bb.jpg",
      "alt": "豆包 - 生活工作 AI 助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "豆包 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      "note": "使用 豆包 - 生活工作 AI 助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI上线Seedance 2.5模型，支持30秒超长视频直出",
    "market": "中国",
    "date": "2026-11-02",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI，于2026年11月2日更新至2.4.0版本，核心亮点为全新Seedance 2.5模型的上线。"
        }
      ],
      [
        {
          "text": "该模型首次支持30秒超长视频的直接生成，显著提升了AI视频创作的时长上限和表现力。"
        }
      ],
      [
        {
          "text": "即梦AI旨在通过自然语言描述实现图片和视频创作，并支持编辑、分享和探索用户作品。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance 2.5模型将AI视频生成从短片提升到更具叙事潜力的中等长度，极大地扩展了用户在AI辅助下进行视频创作的可能性。"
        }
      ],
      [
        {
          "text": "此举降低了视频制作的专业门槛，让更多普通用户和创作者能够通过AI工具实现高质量、长时长的视频内容输出。"
        }
      ],
      [
        {
          "text": "这表明中国市场在AI创作领域，特别是视频生成方面，正加速追赶和突破技术瓶颈，以满足用户日益增长的内容创作需求。"
        }
      ],
      [
        {
          "text": "未来应观察其视频质量、内容控制力和商业化路径的进一步发展。"
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
    "name": "小红书AI助手“点点”App同步小红书聊天记录",
    "market": "中国",
    "date": "2026-11-02",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "小红书AI助手“点点”App于2026年11月2日更新至4.11版本，核心功能更新是其与小红书主App上的聊天记录实现了同步。"
        }
      ],
      [
        {
          "text": "用户现在可以在“点点”App中继续在小红书上与“点点”的对话，并且支持搜索聊天历史记录，方便用户回顾和管理信息。"
        }
      ],
      [
        {
          "text": "此次更新旨在优化跨平台的使用连贯性，并提升用户在独立App中的体验。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "聊天记录的无缝同步解决了用户在不同应用间切换时的断点问题，提升了AI助手在小红书生态内的使用便利性。"
        }
      ],
      [
        {
          "text": "这一举措强化了“点点”作为独立AI生活助手的地位，并利用小红书丰富的社区内容和用户数据，为用户提供更个性化、场景化的AI服务。"
        }
      ],
      [
        {
          "text": "它反映了中国互联网公司在现有核心产品基础上，通过独立AI应用延伸服务触角，提升用户粘性的策略。"
        }
      ],
      [
        {
          "text": "未来可关注“点点”如何进一步整合小红书内容优势，拓展其在生活决策和内容消费领域的AI价值。"
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
    "title": "多模态能力持续深化，视觉创作与理解成为AI助手新增长点",
    "evidence": [
      {
        "text": "ChatGPT推出图像生成2.6模型，提升生成速度和细节保留，并新增GIF创建功能。",
        "strong": false
      },
      {
        "text": "即梦AI上线Seedance 2.5模型，支持30秒超长视频直出，显著提升视频生成时长和表现力。",
        "strong": false
      },
      {
        "text": "腾讯元宝Hy4模型全量上线，首次引入视觉理解能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "过去AI助手主要侧重文本对话，而近期更新表明，视觉内容的生成、编辑和理解已成为各平台竞争的新焦点。",
        "strong": false
      },
      {
        "text": "美国市场在GIF和参考图像管理等细节上发力，中国市场则在长视频生成和多模态模型能力上取得突破，两国都在探索更自然、更强大的视觉交互。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI助手与应用生态深度融合，加速渗透用户生活与工作流",
    "evidence": [
      {
        "text": "腾讯元宝Hy4模型支持引用提问，并持续优化文档处理、录音笔等功能，且深度整合微信生态。",
        "strong": false
      },
      {
        "text": "豆包推出“工作任务模式”和“双十一”购物助手，将AI能力嵌入自动化办公和消费决策。",
        "strong": false
      },
      {
        "text": "小红书AI助手“点点”App实现与小红书主App的聊天记录同步，优化跨平台使用体验。",
        "strong": false
      },
      {
        "text": "ChatGPT上线iCloud Mail和Calendar插件，将AI能力接入个人工作流。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI助手不再是独立的聊天工具，而是通过插件、模式和生态联动，深度融入用户现有的应用和工作流中。",
        "strong": false
      },
      {
        "text": "中美两国都在推动AI助手从通用型向专业化、场景化发展，以解决用户特定场景下的痛点，提升效率和便利性。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国AI应用竞争激烈，大厂密集加码生活与效率场景",
    "evidence": [
      {
        "text": "豆包、腾讯元宝、点点等中国大厂AI产品在同期内密集发布重要功能更新。",
        "strong": false
      },
      {
        "text": "这些更新普遍围绕生活助手（购物、旅行）、效率办公（任务模式、文档处理）和多模态创作展开。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "相比美国市场由单一头部产品引领的趋势，中国市场呈现出多方大厂齐头并进、相互竞争的态势。",
        "strong": false
      },
      {
        "text": "这种竞争促使中国AI应用在功能广度、生态融合和本地化服务上快速迭代，以抢占用户心智和市场份额。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT推出图像生成2.6模型与GIF创建功能，以及中国的 腾讯元宝Hy4模型全量上线并支持引用提问、豆包上线工作任务模式与“双十一”购物助手，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "ChatGPT在图像和GIF生成、演示文稿制作方面持续增强多模态创作能力，Cantina和Runway等AI创作工具保持市场活跃。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国AI创作市场在视频生成领域爆发，即梦AI、豆包等产品推出长视频生成、P图等功能，剪映等传统工具也深度融合AI。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "heatmap-ai-assistant-us",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT"
    ],
    "pattern": "ChatGPT持续迭代其核心模型与交互功能，提升AI助手的智能化和实用性，尤其是在多模态理解和跨应用集成方面。",
    "opportunity": "提供更强大的上下文理解和跨平台集成能力，是AI助手未来发展的关键。",
    "watchNext": "观察ChatGPT在个人助理和主动推荐场景下的用户渗透和反馈。",
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "heatmap-ai-assistant-cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点",
      "Rokid AI"
    ],
    "pattern": "中国大厂AI助手密集更新，强化模型能力、场景化应用和生态融合，旨在打造全能型智能助理。",
    "opportunity": "通过深度融合本地生活服务和工作流，提升用户粘性和使用频率。",
    "watchNext": "观察豆包、腾讯元宝等在“AI Agent”方向上的进一步落地和用户接受度。",
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
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "id": "heatmap-ai-education-us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI学习平台在用户增长和融资方面表现活跃，但近期缺乏显著的产品更新或功能发布。",
    "opportunity": "AI教育应进一步结合个性化学习路径、互动式教学和多模态辅导，以应对学生注意力和学习效果下降的挑战。",
    "watchNext": "关注AI如何与传统教育体系深度融合，提供更具创新性和实效性的学习解决方案。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "heatmap-ai-education-cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "千问智学"
    ],
    "pattern": "阿里旗下“千问智学”专注于AI家教模式，提供拍题、批改作业、定制资料等功能，但近期更新主要为稳定性提升。",
    "opportunity": "中国教育市场对AI辅导需求旺盛，结合大模型能力提供个性化、全科辅导具有巨大潜力。",
    "watchNext": "观察千问智学如何提升用户交互体验，尤其是在复杂问题的深度讲解和举一反三能力方面。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "heatmap-ai-companion-us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Replika",
      "ChatGPT",
      "Series"
    ],
    "pattern": "AI陪伴和社交领域产品不断涌现，ChatGPT通过“Texting your dot”功能将AI陪伴融入日常信息流，Series探索iMessage AI社交。",
    "opportunity": "用户对AI情感连接和社交新模式的需求增长，隐私保护和关系深度是关键。",
    "watchNext": "关注AI陪伴在情感支持、互动方式及用户信任建立上的突破，以及AI社交如何平衡虚拟与真实互动。",
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
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
    "id": "heatmap-ai-companion-cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "星野",
      "点点"
    ],
    "pattern": "中国AI陪伴和社交产品如“星野”构建多模态智能体社区，小红书“点点”也探索社交场景。",
    "opportunity": "结合中国用户独特的社交和情感需求，打造更具沉浸感和个性化的AI伙伴关系。",
    "watchNext": "观察这些平台在智能体人设、多模态交互以及用户社区活跃度方面的进展。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "id": "heatmap-ai-gaming-us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "近期缺乏美国市场在AI游戏或互动娱乐领域的显著产品发布或更新信号。",
    "opportunity": "AI在游戏领域的潜力巨大，尤其是在NPC智能化、内容生成和个性化体验方面。",
    "watchNext": "关注AI技术在主流游戏产品中的集成和创新玩法。",
    "sources": []
  },
  {
    "id": "heatmap-ai-gaming-cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "近期缺乏中国市场在AI游戏或互动娱乐领域的显著产品发布或更新信号。",
    "opportunity": "中国游戏市场规模庞大，AI技术可用于提升游戏可玩性、丰富故事情节和优化玩家体验。",
    "watchNext": "关注国内游戏大厂或独立工作室在AI游戏化方向的探索。",
    "sources": []
  },
  {
    "id": "heatmap-ai-creation-us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "Cantina",
      "Runway"
    ],
    "pattern": "ChatGPT在图像和GIF生成、演示文稿制作方面持续增强多模态创作能力，Cantina和Runway等AI创作工具保持市场活跃。",
    "opportunity": "AI创作工具正向更精细化、更易用的方向发展，满足专业和大众用户的创意表达需求。",
    "watchNext": "观察AI在视频、3D内容生成以及与现有创作工具的无缝集成方面的新进展。",
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "heatmap-ai-creation-cn",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "即梦AI",
      "豆包",
      "可灵AI",
      "剪映"
    ],
    "pattern": "中国AI创作市场在视频生成领域爆发，即梦AI、豆包等产品推出长视频生成、P图等功能，剪映等传统工具也深度融合AI。",
    "opportunity": "短视频和直播生态繁荣驱动AI创作工具需求，提供高效、低门槛的专业级创作能力是关键。",
    "watchNext": "关注AI视频生成模型的质量、内容可控性以及与商业内容生产的结合。",
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
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "heatmap-ai-efficiency-us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Google AI Edge Eloquent",
      "Granola"
    ],
    "pattern": "ChatGPT通过整合iCloud邮件/日历和演示文稿功能，持续深化其在办公场景的应用；Google AI Edge Eloquent提供离线智能听写服务。",
    "opportunity": "AI正在重塑办公协作和个人效率工具，提供自动化、智能化的工作助手是主要方向。",
    "watchNext": "关注AI如何实现更深度的跨应用自动化，以及在企业级应用中的安全性和定制性。",
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      }
    ]
  },
  {
    "id": "heatmap-ai-efficiency-cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "Rokid AI"
    ],
    "pattern": "中国AI大厂在效率办公领域密集布局，豆包推出工作任务模式，腾讯元宝强化文档处理和录音总结，Rokid AI眼镜也接入会议纪要功能。",
    "opportunity": "中国企业和个人对AI提效工具需求旺盛，尤其是在自动化办公、信息处理和多模态辅助方面。",
    "watchNext": "观察这些产品如何实现更复杂的跨任务协调，以及与本土办公软件生态的深度集成。",
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
      }
    ]
  },
  {
    "id": "heatmap-ai-life-us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "ChatGPT",
      "Google AI Edge Eloquent"
    ],
    "pattern": "ChatGPT通过短信和iCloud插件拓展个人生活管理能力，Google AI Edge Eloquent提供隐私保护的离线听写，显示AI在个人助理和生活记录方面的应用。",
    "opportunity": "AI生活工具市场广阔，提供便捷、个性化且注重隐私的解决方案将获得用户青睐。",
    "watchNext": "关注AI如何更主动地提供生活建议和自动化服务，同时平衡用户隐私。",
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "heatmap-ai-life-cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点",
      "Rokid AI"
    ],
    "pattern": "中国AI产品积极渗透生活场景，豆包推出购物助手，腾讯元宝上线旅游/饮食助手，点点整合小红书攻略，Rokid AI眼镜也引入打车、微信支付等功能。",
    "opportunity": "AI与本地生活服务的深度结合，提供一站式、个性化的消费和决策体验，是中国市场的突出特点。",
    "watchNext": "观察这些AI生活工具如何提升服务精准度、用户采纳率和商业化变现能力。",
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
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "id": "heatmap-ai-hardware-us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Ray-Ban Meta glasses",
      "Oakley Meta glasses",
      "Hi Rokid"
    ],
    "pattern": "Meta AI眼镜持续推广其内置AI能力，Rokid眼镜在美国市场虽有更新但用户反馈存在问题。",
    "opportunity": "AI眼镜作为下一代计算平台，仍处于早期探索阶段，需解决硬件体验、AI能力和应用生态的协同问题。",
    "watchNext": "关注AI眼镜在增强现实体验、多模态交互以及用户日常实用性方面的改进。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6756505519"
      }
    ]
  },
  {
    "id": "heatmap-ai-hardware-cn",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Rokid AI"
    ],
    "pattern": "Rokid AI眼镜App持续更新，增强影像能力、AI交互、支付功能及与QQ音乐等生态的集成。",
    "opportunity": "中国AI硬件市场快速发展，将AI能力与可穿戴设备结合，提供多场景智能服务具有巨大潜力。",
    "watchNext": "观察Rokid AI眼镜在用户体验、AI响应速度和第三方应用生态拓展上的表现，以及其他厂商的入局情况。",
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
    "title": "ChatGPT多模态与生产力工具持续迭代",
    "bullets": [
      [
        {
          "text": "OpenAI于11月4日推出ChatGPT图像生成2.6模型，显著提升图像生成速度和细节保留能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "新增GIF创建功能和保存参考图像功能，使视觉创作更便捷、更具表现力。",
          "strong": false
        }
      ],
      [
        {
          "text": "此前一周内，ChatGPT还陆续推出了iOS/Android账户切换、Pro用户“Texting your dot”功能测试、iCloud邮件/日历插件以及GPT-6.1 Terra模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些更新表明ChatGPT正全面提升其多模态交互和与个人工作流的集成能力，以满足用户在创作、沟通和效率提升方面的多元需求。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "ChatGPT推出图像生成2.6模型与GIF创建功能",
    "bullets": [
      [
        {
          "text": "OpenAI于2026年11月4日发布了ChatGPT图像生成2.6模型，显著提升了图像生成速度和编辑时的细节保留能力。"
        }
      ],
      [
        {
          "text": "此次更新还引入了GIF创建功能，用户可以要求生成循环动画或上传草图并让ChatGPT为其角色制作动作。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "AI 创作：美国方向信号",
    "bullets": [
      [
        {
          "text": "ChatGPT在图像和GIF生成、演示文稿制作方面持续增强多模态创作能力，Cantina和Runway等AI创作工具保持市场活跃。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI创作工具正向更精细化、更易用的方向发展，满足专业和大众用户的创意表达需求。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
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
          "text": "ChatGPT持续迭代其核心模型与交互功能，提升AI助手的智能化和实用性，尤其是在多模态理解和跨应用集成方面。",
          "strong": false
        }
      ],
      [
        {
          "text": "提供更强大的上下文理解和跨平台集成能力，是AI助手未来发展的关键。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "本土AI助手全面进化，强化模型、生态与场景融合",
    "bullets": [
      [
        {
          "text": "腾讯元宝于11月2日全量上线Hy4模型，首次引入视觉理解，并推出引用提问功能，显著提升了对话的精确性和模型处理复杂任务的能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "豆包同期上线“工作任务模式”，将AI能力拓展至自动化办公，并推出“双十一”购物助手，深度介入本地生活消费。",
          "strong": false
        }
      ],
      [
        {
          "text": "小红书AI助手“点点”App实现与小红书主App的聊天记录同步，优化了用户在多平台间的连贯使用体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些头部产品的密集更新，显示中国大厂正全面发力，通过模型升级、生态融合和场景化应用，打造更强大、更贴近用户日常需求的AI助手。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "title": "AI创作工具视频能力升级，迈向长内容生成",
    "bullets": [
      [
        {
          "text": "抖音旗下即梦AI于11月2日上线全新Seedance 2.5模型，首次支持30秒超长视频的直接生成。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一突破性进展将AI视频生成从短片提升到更具叙事潜力的中等长度，极大地扩展了用户在AI辅助下进行视频创作的可能性。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，豆包的图片/视频生成功能也在此次版本更新中得到强调。",
          "strong": false
        }
      ],
      [
        {
          "text": "这标志着中国在AI创作领域，特别是视频生成方面，正加速技术突破，以满足用户对高质量、长时长内容创作日益增长的需求。",
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
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%88%8B/id6459478672"
      }
    ]
  },
  {
    "title": "腾讯元宝Hy4模型全量上线并支持引用提问",
    "bullets": [
      [
        {
          "text": "腾讯元宝于2026年11月2日更新至2.91.10版本，正式全量上线Hy4模型，全面提升长程任务表现并首次引入视觉理解能力，此前该模型已于9月接入预览版。"
        }
      ],
      [
        {
          "text": "该版本新增“引用提问”功能，用户可选中回答中文字直接追问，使讨论更聚焦。"
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
    "title": "豆包上线工作任务模式与“双十一”购物助手",
    "bullets": [
      [
        {
          "text": "字节跳动旗下AI助手豆包在2026年11月2日发布的最新版本中，重点强调了“工作任务模式”的上线，该模式支持智能化自动办公，内置Office和专业技能，可理解需求并自动执行，甚至支持定时任务。"
        }
      ],
      [
        {
          "text": "同时，豆包还推出了“双十一”活动，打通购物全链路，提供购前对比、成分参数分析、好价提醒等服务，购后支持订单售后管理，并提供补贴。"
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
    "title": "即梦AI上线Seedance 2.5模型，支持30秒超长视频直出",
    "bullets": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI，于2026年11月2日更新至2.4.0版本，核心亮点为全新Seedance 2.5模型的上线。"
        }
      ],
      [
        {
          "text": "该模型首次支持30秒超长视频的直接生成，显著提升了AI视频创作的时长上限和表现力。"
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  }
];
