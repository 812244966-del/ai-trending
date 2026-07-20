import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-07-20";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT桌面应用更新，强化工作流集成",
    "market": "美国",
    "date": "2026-07-16",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI已更新其ChatGPT桌面应用",
          "strong": true
        },
        {
          "text": "，引入了全局切换器，让用户可以在“聊天”和“工作”模式间轻松切换。"
        }
      ],
      [
        {
          "text": "新版本统一了最近对话列表，集成了ChatGPT Projects功能，并支持跨设备同步工作进程",
          "strong": false
        },
        {
          "text": "，确保用户可以在不同设备上无缝衔接任务。"
        }
      ],
      [
        {
          "text": "这些更新已面向macOS和Windows上的所有付费用户推出",
          "strong": false
        },
        {
          "text": "，本地对话仍保留在用户设备上。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次更新旨在大幅提升付费用户的生产力",
          "strong": true
        },
        {
          "text": "，通过更流畅的工作流和跨设备连续性，使用户能更高效地完成复杂任务，例如研究、文档撰写和报告生成。"
        }
      ],
      [
        {
          "text": "它标志着ChatGPT正从一个对话工具向一个全能的智能代理平台演进",
          "strong": false
        },
        {
          "text": "尤其是在个人和企业效率办公领域，这种集成化趋势将成为竞争的关键。"
        }
      ],
      [
        {
          "text": "未来需观察其Work模式与第三方应用和文件系统的深度集成进展，以及对不同用户群体的实际效率提升效果",
          "strong": false
        },
        {
          "text": "。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/b8/66/1bb86608-721f-bc92-5c02-1f2ddf30b055/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT全平台搜索能力升级",
    "market": "美国",
    "date": "2026-07-14",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "ChatGPT在网页、iOS和Android平台推出了全新的搜索功能",
          "strong": true
        },
        {
          "text": "，使用户能够在一个统一的界面中搜索过去的聊天记录、项目、图片和文档。"
        }
      ],
      [
        {
          "text": "用户可以通过侧边栏启动搜索，并利用过滤器按内容类型（如聊天、项目或文件）来细化搜索结果",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "点击搜索结果即可直接打开相应的聊天、项目或文件",
          "strong": false
        },
        {
          "text": "，该功能已向所有ChatGPT用户全球推出。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这一改进极大地提升了用户对历史信息的检索效率",
          "strong": true
        },
        {
          "text": "，使得用户能够更轻松地管理和复用AI生成的各种内容，从而提高工作和学习的效率。"
        }
      ],
      [
        {
          "text": "通过统一的搜索入口，ChatGPT进一步巩固其作为个人知识库和工作中心的角色",
          "strong": false
        },
        {
          "text": "减少用户在不同应用间切换的摩擦。"
        }
      ],
      [
        {
          "text": "未来将观察该搜索功能如何与ChatGPT的“工作”模式进一步融合，以及它是否会激发更多用户创建和管理AI生成内容的需求",
          "strong": false
        },
        {
          "text": "。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/b8/66/1bb86608-721f-bc92-5c02-1f2ddf30b055/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT重返欧洲经济区WhatsApp",
    "market": "美国",
    "date": "2026-07-13",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT已在欧洲经济区（EEA）重新上线WhatsApp服务",
          "strong": true
        },
        {
          "text": "，用户无需ChatGPT账户，只需向验证的联系号码发送消息即可开始使用。"
        }
      ],
      [
        {
          "text": "通过WhatsApp，用户可以发送消息、上传图片、发送语音消息、创建图像，并使用多种语言与ChatGPT互动",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "此功能将根据WhatsApp号码的国家代码逐步推广",
          "strong": false
        },
        {
          "text": "。绑定ChatGPT账户是可选的，并可获得更高的使用限制。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次回归极大地拓宽了ChatGPT在欧洲市场的用户触达范围",
          "strong": true
        },
        {
          "text": "让数亿WhatsApp用户能够更便捷地体验AI服务，尤其是通过用户熟悉的即时通讯平台降低了使用门槛。"
        }
      ],
      [
        {
          "text": "这反映了AI产品向多渠道分发和低门槛易用性发展的趋势",
          "strong": false
        },
        {
          "text": "通过集成到主流社交平台，AI有望触达更广泛的非技术用户群体。"
        }
      ],
      [
        {
          "text": "下一步需要关注用户对此类集成式AI服务的接受度",
          "strong": false
        },
        {
          "text": "以及它如何影响用户对独立AI应用和传统社交工具的依赖。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/b8/66/1bb86608-721f-bc92-5c02-1f2ddf30b055/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Rokid AI乐奇智能眼镜App更新多项新功能",
    "market": "中国",
    "date": "2026-07-16",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Rokid AI乐奇智能眼镜App于近期进行了多项功能更新",
          "strong": true
        },
        {
          "text": "，包括App主页的全新设计，提升了整体设计风格和交互体验。"
        }
      ],
      [
        {
          "text": "新增了“头盔模式”，",
          "strong": false
        },
        {
          "text": "专门针对骑行等佩戴头盔场景优化了唤醒和交互体验，并升级了导航功能，支持智能或简洁播报模式，以及在导航过程中关闭屏幕显示和设置常用地址。"
        }
      ],
      [
        {
          "text": "此外，",
          "strong": false
        },
        {
          "text": "还优化了新手教学流程，增加了眼镜端的新手引导。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次更新显示了Rokid在智能眼镜产品上持续深耕用户体验和场景化应用的决心",
          "strong": true
        },
        {
          "text": "特别是针对特定使用场景（如骑行）进行优化，有助于拓展智能眼镜在日常生活中的实用性边界。"
        }
      ],
      [
        {
          "text": "通过提升基础交互和导航能力，Rokid旨在让其AI眼镜更具吸引力",
          "strong": false
        },
        {
          "text": "满足用户在不同情境下的个性化需求，从而加速AI硬件的普及。"
        }
      ],
      [
        {
          "text": "未来需关注这些场景化功能的用户采纳率",
          "strong": false
        },
        {
          "text": "以及Rokid在智能眼镜生态系统构建方面的进一步动作。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6e/08/59/6e085952-ea37-3552-cf93-d2a9e8f7db1f/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
      "alt": "Rokid AI - 乐奇AI眼镜 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Rokid AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564",
      "note": "使用 Rokid AI - 乐奇AI眼镜 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝接入Hy3模型，智能体验全面进阶",
    "market": "中国",
    "date": "2026-07-18",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯旗下的全能AI助手“元宝”正式上线了Hy3模型",
          "strong": true
        },
        {
          "text": "，标志着其智能体验的全面进阶。"
        }
      ],
      [
        {
          "text": "新模型使元宝在查资料、写文档、做排版等复杂任务上实现“一句话交付”",
          "strong": false
        },
        {
          "text": "大大提升了效率，并支持用户在深度思考和快速思考模式之间切换，以适应不同需求。"
        }
      ],
      [
        {
          "text": "这一更新也进一步强化了元宝在AI图片编辑、拍题答疑、AI秒写报告、文案、代码以及视频生成等现有能力",
          "strong": false
        },
        {
          "text": "。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Hy3模型的接入是腾讯元宝在AI技术底座上的关键升级",
          "strong": true
        },
        {
          "text": "直接提升了其作为AI助手的核心能力，使其能够更精准、高效地理解和执行复杂指令，为用户提供更智能的服务。"
        }
      ],
      [
        {
          "text": "此举将进一步巩固腾讯元宝在AI效率办公和学习领域的竞争力",
          "strong": false
        },
        {
          "text": "特别是在内容创作和信息处理方面，有望吸引更多企业和个人用户。"
        }
      ],
      [
        {
          "text": "接下来需观察Hy3模型在实际应用中的稳定性和用户反馈",
          "strong": false
        },
        {
          "text": "以及腾讯如何利用其生态优势进一步整合和推广这一强大的AI能力。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2d/17/71/2d177116-e6e2-0400-4bf3-b558edaadc7a/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
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
          "text": "抖音旗下的AI图片和视频工具即梦AI正式上线了Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，旨在为用户带来全新的多模态创作体验。"
        }
      ],
      [
        {
          "text": "新模型强化了平台的AI图片和视频生成能力",
          "strong": false
        },
        {
          "text": "用户可以通过自然语言描述想法，快速生成独一无二的图片和视频，并支持编辑功能进行优化。"
        }
      ],
      [
        {
          "text": "该应用强调创作的便捷性与分享功能",
          "strong": false
        },
        {
          "text": "鼓励用户在社区中探索和分享创意作品。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次模型升级提升了AI内容生成的效率和质量",
          "strong": true
        },
        {
          "text": "满足了创作者对快速、高质量视觉内容的需求，尤其在短视频和社交媒体日益普及的背景下，为用户提供了强大的创作工具。"
        }
      ],
      [
        {
          "text": "作为抖音生态内的创作工具，即梦AI有望借助其模型能力和平台优势",
          "strong": false
        },
        {
          "text": "进一步降低创作门槛，激发用户创作热情，推动AI在短视频和社交媒体内容生产中的应用。"
        }
      ],
      [
        {
          "text": "未来需关注新模型在处理复杂创作需求时的表现",
          "strong": false
        },
        {
          "text": "以及其如何在日益激烈的AI创作工具市场中保持竞争优势和吸引力。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/db/41/92/db4192b7-1ec0-f9a6-8e6b-d2a705aafd52/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
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
    "title": "大模型在多模态与智能代理能力上持续进化，并加速渗透至用户多场景交互界面",
    "evidence": [
      {
        "text": "ChatGPT桌面应用更新",
        "strong": true
      },
      {
        "text": "，引入Work模式处理复杂任务、跨设备同步，并统一管理聊天与项目，旨在提升效率。"
      },
      {
        "text": "Meta AI的Muse Spark模型扩展至其全系应用和智能眼镜",
        "strong": true
      },
      {
        "text": "，实现更自然的语音交互、实时AI视觉及购物功能。"
      },
      {
        "text": "腾讯元宝上线Hy3模型",
        "strong": true
      },
      {
        "text": "，强化一句话完成资料查找、文档撰写和排版的能力。"
      },
      {
        "text": "即梦AI推出Seedance2.0 fast模型",
        "strong": true
      },
      {
        "text": "，提升多模态内容创作效率。"
      }
    ],
    "comparison": [
      {
        "text": "相较于早期单纯的对话式AI，中美大厂正从单一模型能力竞争转向更强调系统级集成和多模态应用落地，旨在将AI融入用户的日常工作与生活流。",
        "strong": false
      },
      {
        "text": "美国厂商更侧重生态整合与跨平台通用性，而中国厂商则在提升模型能力的同时，积极探索与自身生态体系的深度融合，并关注特定硬件场景的优化。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI产品分发渠道进一步多元化，且智能硬件成为AI体验的重要入口",
    "evidence": [
      {
        "text": "ChatGPT重新在欧洲经济区WhatsApp上线",
        "strong": true
      },
      {
        "text": "，用户无需账号即可通过消息、语音、图片与AI交互，拓宽了触达范围。"
      },
      {
        "text": "Meta AI通过智能眼镜提供实时AI视觉和语音交互，逐步向Ray-Ban Meta和Oakley Meta眼镜推送",
        "strong": true
      },
      {
        "text": "。"
      },
      {
        "text": "中国Rokid AI智能眼镜App更新，新增头盔模式、导航升级，强化眼镜作为AI助手的应用场景",
        "strong": true
      },
      {
        "text": "。"
      }
    ],
    "comparison": [
      {
        "text": "AI的分发不再局限于独立应用或网页，而是通过嵌入主流社交平台（如WhatsApp）和智能硬件（如眼镜）触达更广泛用户。",
        "strong": false
      },
      {
        "text": "美国市场侧重通过既有社交巨头平台进行AI的广域分发，同时Meta也在积极推动智能眼镜的AI能力。中国厂商则更强调结合AI硬件本身的特性进行场景化创新，以提升用户在物理世界的AI体验。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT桌面应用更新，强化工作流集成、ChatGPT全平台搜索能力升级，以及中国的 Rokid AI乐奇智能眼镜App更新多项新功能、腾讯元宝接入Hy3模型，智能体验全面进阶，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "AI助手正通过深度集成和多模态能力升级，成为更强大的生产力工具，并加速渗透主流社交平台与智能硬件。ChatGPT桌面应用、全平台搜索、Meta AI的Muse Spark模型广泛推广，均显示巨头在提升AI核心交互能力和覆盖范围上的投入。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "抖音系AI创作工具（即梦AI、剪映、醒图、小云雀）持续占据市场主导地位，通过模型升级强化多模态生成能力，满足用户在短视频和图片编辑上的高效率、高质量需求。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国更偏向入口整合和高频场景覆盖",
    "evidence": [
      {
        "text": "抖音系AI创作工具（即梦AI、剪映、醒图、小云雀）持续占据市场主导地位，通过模型升级强化多模态生成能力，满足用户在短视频和图片编辑上的高效率、高质量需求。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "关注ChatGPT Work模式的用户采纳率，Meta AI在现实世界交互中的表现，以及其他大厂在多模态理解和代理功能上的进展。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "US_AI_Assistant_Search",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Meta AI"
    ],
    "pattern": "AI助手正通过深度集成和多模态能力升级，成为更强大的生产力工具，并加速渗透主流社交平台与智能硬件。ChatGPT桌面应用、全平台搜索、Meta AI的Muse Spark模型广泛推广，均显示巨头在提升AI核心交互能力和覆盖范围上的投入。",
    "opportunity": "AI助手向智能代理和跨平台中心化演进，为用户提供更无缝、情境化的AI体验，存在与第三方应用和硬件深度融合的新机会。",
    "watchNext": "关注ChatGPT Work模式的用户采纳率，Meta AI在现实世界交互中的表现，以及其他大厂在多模态理解和代理功能上的进展。",
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
    "id": "CN_AI_Assistant_Search",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "腾讯元宝",
      "豆包",
      "千问"
    ],
    "pattern": "中国大厂AI助手持续模型升级，强化文档处理、内容创作和自动化办公能力，同时注重与自身生态系统的整合，以提供一站式服务。",
    "opportunity": "AI助手在办公和生活场景中的深度自动化是巨大机会，特别是在处理复杂任务和跨应用协作方面。与本地化生态的紧密结合是优势。",
    "watchNext": "观察腾讯元宝Hy3模型在企业级应用中的表现，豆包办公任务模式的用户活跃度，以及更多通用AI助手如何拓展垂直场景功能。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "US_AI_Education_Learning",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Gizmo",
      "Gemini app"
    ],
    "pattern": "AI学习平台通过游戏化机制和个性化内容，旨在提升学生学习兴趣和效率。大模型开始支持更长的对话和跨应用知识整合，为学习规划提供帮助。",
    "opportunity": "AI个性化学习、游戏化教育和高效内容转化仍是潜在机会点，但需持续创新以应对学生注意力分散和学习平台同质化挑战。",
    "watchNext": "关注现有AI学习平台如何通过新的交互模式或内容形式提升用户粘性，以及K-12和高等教育领域是否有新的AI应用模式出现。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "CN_AI_Education_Learning",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "千问智学",
      "腾讯元宝",
      "豆包"
    ],
    "pattern": "中国大厂积极布局AI教育，推出专业化AI家教应用，覆盖拍题解疑、作业批改、作文辅导等全链路学习场景，强调模型能力和个性化服务。",
    "opportunity": "AI家教市场潜力巨大，通过深度模型讲解、错题分析和定制化学习资料，可以有效提升学习效率，缓解家长辅导压力。",
    "watchNext": "观察“千问智学”等AI家教应用的用户增长和付费转化情况，以及如何平衡AI辅导与传统教育模式的结合。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%81%8B%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "US_AI_Companion_Social",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Replika",
      "Series"
    ],
    "pattern": "AI陪伴应用持续迭代核心模型能力，强化角色连贯性和记忆力，提供更深度的情感连接和互动。同时，产品开始探索更丰富的交互形式和长程记忆功能，AI社交网络也在新兴。",
    "opportunity": "用户对个性化、长久记忆的AI陪伴需求强烈，尤其在角色扮演、情感支持和生活建议方面。AI社交利用AI促进“暖连接”是新方向。",
    "watchNext": "关注Character.AI的Lorebook等新功能如何提升世界观构建能力，Replika在多模态交互（通话、图片生成）上的用户反馈，以及AI社交应用Series如何平衡开放性与安全性。",
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
    "id": "CN_AI_Companion_Social",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "星野",
      "豆包"
    ],
    "pattern": "中国AI陪伴社交社区用户活跃，注重AI智能体创建的自由度和多模态交互。平台通过持续优化模型和功能，提升用户与AI伙伴的沉浸式体验。",
    "opportunity": "用户对个性化AI角色的创作和互动需求旺盛，尤其是在社区内分享和发现不同智能体。多模态（形象、声音、人设）和高自由度是吸引用户的关键。",
    "watchNext": "观察星野等平台如何处理用户创建内容的质量和安全审核，以及其是否能通过AI技术进一步提升AI角色的独特性和情感深度。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%81%8B%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "US_AI_Gaming_InteractiveEntertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内，美国市场在AI游戏或互动娱乐领域暂无明确的新品或重大更新信号。AI技术更多体现在内容创作工具而非直接的互动娱乐应用。",
    "opportunity": "AI生成内容（NPC、剧情、世界）在游戏中的应用仍有巨大潜力，个性化、自适应的娱乐体验将是未来方向。",
    "watchNext": "关注游戏开发商如何将LLM和AIGC技术融入游戏开发流程，以及是否会出现结合AI的角色扮演或模拟游戏。",
    "sources": []
  },
  {
    "id": "CN_AI_Gaming_InteractiveEntertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内，中国市场在AI游戏或互动娱乐领域暂无明确的新品或重大更新信号。AI技术主要集中在创作工具或通用助手。",
    "opportunity": "AI在游戏内容生成、智能NPC、个性化游戏体验等方面具有广阔前景。探索将AI能力与现有热门游戏类型结合的机会。",
    "watchNext": "关注国内游戏大厂在AI游戏研发上的投入，以及是否有新兴AI游戏工作室推出创新产品。",
    "sources": []
  },
  {
    "id": "US_AI_Creation",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "AI Video - AI Video Generator",
      "Cantina: AI Video & Characters",
      "Canva: AI Video & Photo Editor",
      "Picsart AI Photo Editor"
    ],
    "pattern": "美国市场AI创作工具需求稳定，特别是在图片和视频生成领域。新应用开始专注于特定创作场景，如视频故事叙述和角色创作，同时主流编辑工具也集成AI能力。",
    "opportunity": "AI赋能的创意工具市场持续增长，尤其在视频生成和个性化内容创作方面。用户更倾向于易用且功能聚焦的工具。",
    "watchNext": "关注这些新兴AI创作工具如何提升生成质量和用户体验，以及是否能形成独特的内容生态或社区。",
    "sources": [
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "CN_AI_Creation",
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
    "pattern": "抖音系AI创作工具（即梦AI、剪映、醒图、小云雀）持续占据市场主导地位，通过模型升级强化多模态生成能力，满足用户在短视频和图片编辑上的高效率、高质量需求。",
    "opportunity": "AI内容生成是短视频和社交媒体内容创作的核心驱动力，易用、高效、多功能的AI创作工具仍有巨大市场。与平台生态的深度融合是成功关键。",
    "watchNext": "关注即梦AI的Seedance2.0 fast模型实际效果和用户反馈，以及其他竞争者如何在特定创作风格或垂直领域寻求突破。",
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
    "id": "US_AI_Efficiency_Office",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT Work",
      "Google AI Edge Eloquent",
      "Granola"
    ],
    "pattern": "AI效率工具向更强大的智能代理（Agent）方向发展，强调跨应用、跨设备协作，并能处理复杂、长时间的任务，生成高质量的完成品。同时，本地化、隐私友好的AI工具也受到关注。",
    "opportunity": "企业和专业人士对自动化、集成化的AI办公工具需求日益增长，Agent化趋势将解锁更多高效工作场景，如自动研究、报告撰写和项目管理。本地运行的AI工具在隐私和响应速度方面有独特优势。",
    "watchNext": "关注ChatGPT Work在多应用集成和任务自动化方面的进展，以及企业客户对其数据安全和定制化能力的需求。同时观察Google AI Edge Eloquent等本地AI工具的用户体验和市场接受度。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
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
    "id": "CN_AI_Efficiency_Office",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "腾讯元宝",
      "豆包"
    ],
    "pattern": "中国大厂AI办公工具通过大模型升级，提供自动化办公、文档处理、内容创作和智能排版等全面能力，旨在提升用户在工作和学习中的效率。",
    "opportunity": "AI在文档处理、报告生成和会议纪要等传统办公场景中具有巨大的效率提升空间。与企业微信、腾讯文档等生态的深度整合是竞争优势。",
    "watchNext": "观察腾讯元宝Hy3模型和豆包办公任务模式在提升用户实际效率方面的效果，以及它们如何应对企业级数据安全和定制化需求。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "US_AI_Life_Tools",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "本周期内，美国市场在通用AI生活工具领域暂无明确的新品发布或重大功能更新信号，AI能力更多集成在现有助手和效率工具中。",
    "opportunity": "AI在个性化生活规划、智能家居控制、健康管理等领域仍有待深度挖掘，用户期待更主动、更贴近生活场景的AI辅助。",
    "watchNext": "关注生活服务类应用如何集成AI提供更智能的推荐和决策支持，以及是否有颠覆性的AI生活工具出现。",
    "sources": []
  },
  {
    "id": "CN_AI_Life_Tools",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "点点",
      "腾讯元宝",
      "豆包"
    ],
    "pattern": "中国AI生活助手结合本地化内容平台（如小红书），提供基于真人经验的深度攻略和决策辅助，满足用户在旅行、兴趣探索、购物等方面的需求。大厂AI助手也提供丰富的生活工具能力。",
    "opportunity": "结合用户UGC内容和AI能力，可以为用户提供更精准、个性化的生活建议和攻略。多模态交互（语音、图片）是提升用户体验的关键。",
    "watchNext": "关注“点点”攻略模式的用户采纳度和内容质量，以及其如何进一步拓展与其他生活服务平台的合作。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%81%8B%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "US_AI_Hardware_Entry",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta",
      "Oakley Meta",
      "Rokid Glasses"
    ],
    "pattern": "科技巨头和智能眼镜厂商持续推进AI与可穿戴硬件的深度融合，通过模型升级和配套应用，提升智能眼镜的实时AI视觉和语音交互能力。",
    "opportunity": "AI智能眼镜作为下一代计算平台，在无屏交互、实时环境感知和增强现实方面潜力巨大，是AI走向物理世界的重要入口。",
    "watchNext": "关注Meta AI眼镜的Muse Spark模型集成效果，Hi Rokid App的持续更新，以及用户对这些AI眼镜在日常使用场景中的接受度。",
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
    "id": "CN_AI_Hardware_Entry",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid AI 乐奇智能眼镜"
    ],
    "pattern": "国产AI眼镜硬件及配套应用快速迭代，通过模型升级（Qwen 3.6plus / GLM-5v-turbo）和场景化功能（头盔模式、导航升级），持续强化AI视觉和智能体能力，提升用户体验。",
    "opportunity": "中国市场对AI智能眼镜的创新需求旺盛，特别是在多模态识别、场景适配和用户交互优化方面。AI眼镜有望成为日常生活的智能助理。",
    "watchNext": "关注Rokid AI眼镜在AI视觉模型（如Qwen 3.6plus）升级后的实际效果，以及其如何通过工具箱、Agent Store等功能构建更丰富的应用生态。",
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "核心AI产品功能与分发能力持续增强",
    "bullets": [
      [
        {
          "text": "ChatGPT桌面应用更新",
          "strong": true
        },
        {
          "text": "，引入Chat、Work全局切换、统一最近对话、项目管理及跨设备同步能力，提升复杂任务处理效率。"
        }
      ],
      [
        {
          "text": "ChatGPT在WhatsApp欧洲经济区重新上线",
          "strong": true
        },
        {
          "text": "，支持无需账号进行消息、语音、图片交互，极大拓展了AI助手的触达范围。"
        }
      ],
      [
        {
          "text": "ChatGPT全平台搜索功能升级",
          "strong": true
        },
        {
          "text": "，允许用户快速检索聊天、项目、图片和文档，提高信息查找效率。"
        }
      ],
      [
        {
          "text": "Meta AI的Muse Spark模型加速在WhatsApp、Instagram、Facebook、Messenger、Threads及Ray-Ban Meta智能眼镜上的推广",
          "strong": true
        },
        {
          "text": "，实现更智能、快速的语音和视觉AI交互。"
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
    "title": "ChatGPT桌面应用更新，强化工作流集成",
    "bullets": [
      [
        {
          "text": "OpenAI已更新其ChatGPT桌面应用",
          "strong": true
        },
        {
          "text": "，引入了全局切换器，让用户可以在“聊天”和“工作”模式间轻松切换。"
        }
      ],
      [
        {
          "text": "新版本统一了最近对话列表，集成了ChatGPT Projects功能，并支持跨设备同步工作进程",
          "strong": false
        },
        {
          "text": "，确保用户可以在不同设备上无缝衔接任务。"
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
    "title": "ChatGPT全平台搜索能力升级",
    "bullets": [
      [
        {
          "text": "ChatGPT在网页、iOS和Android平台推出了全新的搜索功能",
          "strong": true
        },
        {
          "text": "，使用户能够在一个统一的界面中搜索过去的聊天记录、项目、图片和文档。"
        }
      ],
      [
        {
          "text": "用户可以通过侧边栏启动搜索，并利用过滤器按内容类型（如聊天、项目或文件）来细化搜索结果",
          "strong": false
        },
        {
          "text": "。"
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
    "title": "ChatGPT重返欧洲经济区WhatsApp",
    "bullets": [
      [
        {
          "text": "ChatGPT已在欧洲经济区（EEA）重新上线WhatsApp服务",
          "strong": true
        },
        {
          "text": "，用户无需ChatGPT账户，只需向验证的联系号码发送消息即可开始使用。"
        }
      ],
      [
        {
          "text": "通过WhatsApp，用户可以发送消息、上传图片、发送语音消息、创建图像，并使用多种语言与ChatGPT互动",
          "strong": false
        },
        {
          "text": "。"
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
          "text": "AI助手正通过深度集成和多模态能力升级，成为更强大的生产力工具，并加速渗透主流社交平台与智能硬件。ChatGPT桌面应用、全平台搜索、Meta AI的Muse Spark模型广泛推广，均显示巨头在提升AI核心交互能力和覆盖范围上的投入。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI助手向智能代理和跨平台中心化演进，为用户提供更无缝、情境化的AI体验，存在与第三方应用和硬件深度融合的新机会。",
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
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "国产AI大模型持续迭代，智能硬件和创作工具积极创新",
    "bullets": [
      [
        {
          "text": "腾讯元宝正式接入Hy3模型",
          "strong": true
        },
        {
          "text": "，显著提升了AI在资料处理、文档撰写、排版等方面的能力，支持深度与快速思考模式切换。"
        }
      ],
      [
        {
          "text": "Rokid AI乐奇智能眼镜App进行重大更新",
          "strong": true
        },
        {
          "text": "，包括全新的App主页设计、新增头盔模式、导航功能升级及AI助手能力提升，进一步优化智能眼镜的用户体验。"
        }
      ],
      [
        {
          "text": "抖音旗下即梦AI上线Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，强化多模态创作能力，提供更高效的图片和视频生成体验。"
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      },
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "Rokid AI乐奇智能眼镜App更新多项新功能",
    "bullets": [
      [
        {
          "text": "Rokid AI乐奇智能眼镜App于近期进行了多项功能更新",
          "strong": true
        },
        {
          "text": "，包括App主页的全新设计，提升了整体设计风格和交互体验。"
        }
      ],
      [
        {
          "text": "新增了“头盔模式”，",
          "strong": false
        },
        {
          "text": "专门针对骑行等佩戴头盔场景优化了唤醒和交互体验，并升级了导航功能，支持智能或简洁播报模式，以及在导航过程中关闭屏幕显示和设置常用地址。"
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
    "title": "腾讯元宝接入Hy3模型，智能体验全面进阶",
    "bullets": [
      [
        {
          "text": "腾讯旗下的全能AI助手“元宝”正式上线了Hy3模型",
          "strong": true
        },
        {
          "text": "，标志着其智能体验的全面进阶。"
        }
      ],
      [
        {
          "text": "新模型使元宝在查资料、写文档、做排版等复杂任务上实现“一句话交付”",
          "strong": false
        },
        {
          "text": "大大提升了效率，并支持用户在深度思考和快速思考模式之间切换，以适应不同需求。"
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
    "title": "即梦AI上线Seedance2.0 fast模型",
    "bullets": [
      [
        {
          "text": "抖音旗下的AI图片和视频工具即梦AI正式上线了Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，旨在为用户带来全新的多模态创作体验。"
        }
      ],
      [
        {
          "text": "新模型强化了平台的AI图片和视频生成能力",
          "strong": false
        },
        {
          "text": "用户可以通过自然语言描述想法，快速生成独一无二的图片和视频，并支持编辑功能进行优化。"
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
          "text": "抖音系AI创作工具（即梦AI、剪映、醒图、小云雀）持续占据市场主导地位，通过模型升级强化多模态生成能力，满足用户在短视频和图片编辑上的高效率、高质量需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI内容生成是短视频和社交媒体内容创作的核心驱动力，易用、高效、多功能的AI创作工具仍有巨大市场。与平台生态的深度融合是成功关键。",
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
