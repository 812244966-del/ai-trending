import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-07-27";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT",
    "market": "美国",
    "date": "2026-07-23",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT在美国面向18岁及以上用户推出全新的健康体验。",
          "strong": true
        }
      ],
      [
        {
          "text": "用户现在可以安全连接其支持的健康记录和Apple Health数据，在一个统一的仪表板上查看健康信息，并基于个人健康背景提出问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能可在网页版和iOS版ChatGPT上使用，允许用户查看实验室结果、药物、活动、睡眠等数据，并探索趋势、为就诊做准备、理解检测结果、跟踪健康目标。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此举标志着AI助手向更深层次的个人健康管理领域迈进，为用户提供便捷的健康信息整合与初步洞察。",
          "strong": true
        }
      ],
      [
        {
          "text": "它可能改变用户与健康数据的互动方式，但OpenAI强调其仅为辅助工具，不用于诊断或治疗。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察其用户接受度、数据隐私保护的持续实践以及与医疗专业服务的整合潜力。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/02/f0/42/02f0428f-7ab7-59fa-6c9d-b386aa26db60/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT",
    "market": "美国",
    "date": "2026-07-23",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT语音功能现已在桌面应用的Work和Codex模式中推出。",
          "strong": true
        }
      ],
      [
        {
          "text": "用户可以通过自然语音对话启动新任务，在语音模式下进行打断、切换话题，并利用现有工具和权限启动或协调工作。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一功能面向所有付费用户在全球范围内的macOS和Windows桌面应用提供。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这极大地提升了ChatGPT在专业工作场景下的交互效率和便捷性，使AI助手能够更无缝地融入多任务处理流程。",
          "strong": true
        }
      ],
      [
        {
          "text": "语音交互的增强是Agent能力向更自然、更少摩擦方向发展的关键一步，尤其在复杂的办公任务中。",
          "strong": false
        }
      ],
      [
        {
          "text": "后续需要观察用户对其在实际工作流中的采纳情况以及多模态Agent在桌面端的进一步演进。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/02/f0/42/02f0428f-7ab7-59fa-6c9d-b386aa26db60/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝",
    "market": "中国",
    "date": "2026-07-24",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝正式上线Hy3模型，全面提升其智能体验。",
          "strong": true
        }
      ],
      [
        {
          "text": "用户现在可以在元宝应用中切换Hy3模型，进行深度或快速思考，以满足查资料、写文档、做排版等多样化需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "此更新旨在为用户提供更进阶的AI智能能力和更便捷的任务交付体验。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "作为中国头部AI助手之一，腾讯元宝的模型升级反映了国内大模型竞争的白热化和对用户体验的持续投入。",
          "strong": true
        }
      ],
      [
        {
          "text": "Hy3模型更强的深度思考能力将进一步巩固元宝在办公、学习等效率场景的应用价值。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来可关注用户对Hy3模型的反馈及其在实际应用中带来的效率提升效果。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f6/79/f9/f679f9e3-acd2-b573-fce2-d1ac1c49b09b/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "元宝-腾讯全能AI助手 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI",
    "market": "中国",
    "date": "2026-07-22",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI上线Seedance2.0 fast模型，带来全新多模态创作体验。",
          "strong": true
        }
      ],
      [
        {
          "text": "这一模型升级旨在提升图片和视频的生成速度及质量，让用户能更高效地将创意变为现实。",
          "strong": false
        }
      ],
      [
        {
          "text": "即梦AI作为一个专为创意爱好者打造的平台，将持续优化其多模态表达能力。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "多模态创作能力的提升是AIGC领域的核心趋势，Seedance2.0 fast模型的推出有助于降低用户创作门槛，激发更多UGC内容。",
          "strong": true
        }
      ],
      [
        {
          "text": "抖音作为内容平台巨头，其AI创作工具的迭代将直接影响创作者生态和平台内容的多样性与丰富度。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注新模型在视频生成质量、用户使用成本以及与抖音平台生态的深度融合。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/19/8b/bd/198bbda7-1d65-2d13-a8d3-2475967036a7/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI助手向垂直领域和Agent化深化",
    "evidence": [
      {
        "text": "ChatGPT在美国推出健康管理功能，支持连接个人健康数据；同时在桌面版Work和Codex中增强语音交互，使AI能更自然地协调和执行复杂任务。",
        "strong": true
      },
      {
        "text": "这些更新表明AI助手正从通用问答向具体场景的专业化服务和Agent能力发展，提供更深层次的辅助。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "相较于早期通用AI助手，头部产品正通过集成用户数据和多模态交互，试图在健康、办公等垂直场景提供更主动、更具个性化的解决方案。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国大模型平台持续升级多模态创作与基础模型能力",
    "evidence": [
      {
        "text": "腾讯元宝上线Hy3模型，全面提升智能体验，满足查资料、写文档、做排版等需求；即梦AI则推出Seedance2.0 fast模型，优化图片和视频生成体验。",
        "strong": true
      },
      {
        "text": "这反映了中国AI平台对多模态内容生成和底层大模型能力的持续投入与迭代。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美两国在AI发展上均重视多模态能力，中国大厂通过持续推出更强的基础模型和多模态创作工具，试图在消费级AIGC市场抢占先机，并将其整合进现有生态。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT、ChatGPT，以及中国的 腾讯元宝、即梦AI，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "头部AI助手持续提升多模态交互和垂直领域深度服务。ChatGPT引入健康功能，桌面端强化语音Agent能力；Meta AI加速Muse Spark模型在生态内分发；Google AI Edge Eloquent提供高效离线语音转写。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国头部AI助手持续进行大模型升级和功能拓展，尤其是在办公任务自动化、多模态处理和特定信息源整合方面发力。豆包和腾讯元宝相继上线Hy3模型，强化了深度思考和复杂任务处理能力。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国更偏向入口整合和高频场景覆盖",
    "evidence": [
      {
        "text": "中国头部AI助手持续进行大模型升级和功能拓展，尤其是在办公任务自动化、多模态处理和特定信息源整合方面发力。豆包和腾讯元宝相继上线Hy3模型，强化了深度思考和复杂任务处理能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "关注各平台AI助手的跨设备协同能力，以及用户对其在日常工作和生活中的实际采纳程度。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "ai-assistant-us-1",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "Meta AI",
      "Google AI Edge Eloquent"
    ],
    "pattern": "头部AI助手持续提升多模态交互和垂直领域深度服务。ChatGPT引入健康功能，桌面端强化语音Agent能力；Meta AI加速Muse Spark模型在生态内分发；Google AI Edge Eloquent提供高效离线语音转写。",
    "opportunity": "用户对AI助手智能化、个性化和隐私保护的需求旺盛，尤其是在垂直领域的专业辅助和多模态交互方面存在巨大增长空间。",
    "watchNext": "关注各平台AI助手的跨设备协同能力，以及用户对其在日常工作和生活中的实际采纳程度。",
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
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai-assistant-cn-1",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "中国头部AI助手持续进行大模型升级和功能拓展，尤其是在办公任务自动化、多模态处理和特定信息源整合方面发力。豆包和腾讯元宝相继上线Hy3模型，强化了深度思考和复杂任务处理能力。",
    "opportunity": "本土AI助手在整合国内特色生态（如微信、小红书内容源）和提供定制化服务方面具有独特优势，市场对全能型AI助手的需求持续增长。",
    "watchNext": "观察用户对新模型表现的反馈，以及各平台如何通过差异化服务和生态整合来吸引并留存用户。",
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai-education-us-1",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "在过去60天内，美国市场未出现显著的、针对消费者的AI教育/学习产品发布或大规模更新。虽然AI在教育领域有应用潜力，但消费端尚未看到爆发性产品。",
    "opportunity": "学生和终身学习者对个性化、高效的学习辅助工具需求持续存在，但目前尚缺乏能够大规模验证市场需求的产品形态。",
    "watchNext": "关注将AI融入现有教育平台以提升学习体验的尝试，以及是否有创新产品能通过独特交互或内容形式脱颖而出。",
    "sources": []
  },
  {
    "id": "ai-education-cn-1",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "腾讯元宝",
      "千问智学"
    ],
    "pattern": "中国AI教育市场持续活跃，头部AI助手产品积极推出面向学生的学习辅助功能。腾讯元宝推出高考通，支持拍题答疑等，千问智学也凭借AI家教定位获得用户关注。",
    "opportunity": "应试教育和个性化学习辅导的需求巨大，AI在拍题、解题、作业批改、定制学习资料等方面具有显著价值。与大模型结合提供深度讲解和个性化规划是重要方向。",
    "watchNext": "观察AI教育产品如何进一步提升学习效果的量化衡量，以及是否能有效解决AI工具带来的潜在依赖和作弊问题。",
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "千问智学 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "ai-companion-us-1",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Replika"
    ],
    "pattern": "AI伴侣应用持续迭代，注重提升记忆力、主动性和多模态交互。Replika通过改进记忆、主动签到、语音通话和图像生成等功能，致力于提供更接近真实人类的陪伴体验。",
    "opportunity": "用户对情感支持和个性化陪伴的需求日益增长，AI伴侣通过学习用户习惯和偏好，提供定制化互动，具有长期发展潜力。",
    "watchNext": "关注AI伴侣在伦理、隐私和心理健康影响方面的讨论，以及如何平衡技术进步与用户福祉。",
    "sources": [
      {
        "label": "Replika - AI Companion Chat App - App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      }
    ]
  },
  {
    "id": "ai-companion-cn-1",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "星野",
      "豆包"
    ],
    "pattern": "中国市场AI陪伴/社交产品活跃度高，以社区平台和通用AI助手延伸功能为主。星野作为多模态智能体内容社区，支持用户自由创造和分享AI智能体，并持续优化用户体验。",
    "opportunity": "年轻用户群体对虚拟陪伴和定制化角色扮演的需求旺盛，社区驱动的智能体创作模式具有强大的生命力。多模态（形象、声音、人设）的完善是关键。",
    "watchNext": "观察AI陪伴产品如何平衡内容审核与用户创作自由，以及能否形成更具粘性的虚拟社交生态。",
    "sources": [
      {
        "label": "星野-所建皆你所AI App - App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "ai-game-us-1",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "在过去60天内，美国市场未发现面向消费者的AI游戏或互动娱乐领域的显著动态。AI在游戏开发后端可能有所应用，但直接面向用户的创新产品信号不强。",
    "opportunity": "AI在提升游戏NPC智能、生成内容、个性化玩家体验等方面潜力巨大，但目前仍处于早期探索阶段，尚未出现爆款应用。",
    "watchNext": "关注游戏公司如何将AI技术融入游戏玩法，创造更具沉浸感和互动性的体验，以及AI驱动的全新娱乐形式的出现。",
    "sources": []
  },
  {
    "id": "ai-game-cn-1",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国市场在过去60天内，也未出现消费级AI游戏或互动娱乐产品的突出信号。尽管AI技术在游戏行业被广泛讨论，但尚未形成独立的、有影响力的产品类别。",
    "opportunity": "中国庞大的游戏用户群体对创新娱乐体验有高需求，AI在虚拟偶像、互动叙事、游戏内容自动化生成等方面具备潜力，等待杀手级应用出现。",
    "watchNext": "关注国内游戏大厂在AI游戏领域的研发投入，以及独立开发者能否凭借创新玩法突围。",
    "sources": []
  },
  {
    "id": "ai-creation-us-1",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Cantina: AI Video & Characters",
      "AI Video - AI Video Generator"
    ],
    "pattern": "AI视频和图像生成工具持续受到关注，并在App Store榜单上占据一席之地。Cantina和AI Video等产品为用户提供视频生成和角色创作能力，体现了AI在多媒体创作领域的活跃应用。",
    "opportunity": "视频和图像创作门槛的降低，使得更多普通用户和创作者能够通过AI工具实现内容生产。个性化、高质量、易操作的AI创作工具市场潜力巨大。",
    "watchNext": "关注AI模型在视频连贯性、图像细节表现和生成效率上的进步，以及版权和伦理问题的演变。",
    "sources": [
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "ai-creation-cn-1",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "即梦AI",
      "豆包",
      "剪映"
    ],
    "pattern": "中国AIGC市场以抖音系产品为代表，持续在图片和视频生成领域发力。即梦AI上线Seedance2.0 fast模型，豆包也内置了Seedance模型进行图片和视频生成，剪映作为头部视频剪辑工具也融合了AI创作能力。",
    "opportunity": "短视频和内容平台驱动了用户对AI创作工具的巨大需求，高质量、易用、与平台生态深度融合的AIGC工具将是竞争焦点。",
    "watchNext": "关注AI生成内容的真实感、创意性和多样性，以及如何与现有内容生产流程和变现模式相结合。",
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "ai-efficiency-us-1",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT Work",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI在提升办公效率方面的应用持续深化，Agent化工作流和本地化高效工具是两大方向。ChatGPT Work作为Agent处理复杂任务，Google AI Edge Eloquent则提供高效的离线语音转文字和文本润色。",
    "opportunity": "企业和个人用户对提升工作效率、自动化重复性任务的需求巨大，AI Agent和本地化AI工具将进一步渗透到日常办公流程中。",
    "watchNext": "关注AI Agent在跨应用协作、任务调度和安全性方面的进展，以及AI驱动的效率工具能否真正融入现有办公软件生态。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai-efficiency-cn-1",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点"
    ],
    "pattern": "中国AI助手在办公效率方面竞争激烈，持续强化文档处理、内容生成和任务自动化能力。豆包和腾讯元宝通过大模型升级，支持生成报告、文案、代码、PPT等，并提供自动化办公模式。点点也开始提供笔记总结等效率功能。",
    "opportunity": "中国市场对AI办公工具的需求旺盛，尤其是在多格式文档处理、自动化报告生成和跨平台协作方面。与本土办公软件生态的深度整合是关键。",
    "watchNext": "关注各AI助手在企业级市场和个人用户中的渗透率，以及如何通过集成更多办公场景来构建一站式解决方案。",
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "点点-你的ai生活小助手 App - App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "id": "ai-life-us-1",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT"
    ],
    "pattern": "AI开始深度融入个人健康管理，提供基于用户数据的个性化服务。ChatGPT在美国推出健康体验，允许用户连接健康记录，提问并探索趋势，为生活健康提供智能辅助。",
    "opportunity": "消费者对便捷、智能的健康管理工具需求日益增长，AI在此领域能提供数据整合、趋势分析和信息理解等价值，提升生活品质。",
    "watchNext": "关注AI健康工具在数据安全、隐私保护方面的进展，以及能否与医生、健身教练等专业服务形成有效协同。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai-life-cn-1",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "点点",
      "腾讯元宝"
    ],
    "pattern": "AI生活助手在中国市场日益普及，产品功能覆盖旅行、购物、美食、笔记总结等多个方面。点点依托小红书内容推出攻略模式，腾讯元宝则在图片编辑和智能识图方面提供便捷服务。",
    "opportunity": "用户对智能规划、信息整理和创意生活的需求旺盛，AI生活工具通过整合垂直内容和多模态能力，提供个性化解决方案。",
    "watchNext": "关注AI生活工具如何更好地理解用户个性化需求，提供更精准、更具决策支持价值的服务，以及与本地生活服务的深度融合。",
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App - App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-hardware-us-1",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Meta AI glasses",
      "Hi Rokid"
    ],
    "pattern": "AI眼镜作为新的硬件入口，持续推进AI能力集成和用户体验优化。Meta AI眼镜正逐步集成Muse Spark模型，提供更智能的助手服务。Hi Rokid作为AI眼镜的配套应用，也在不断更新AI功能。",
    "opportunity": "智能眼镜有望成为下一代计算平台，提供免手持、沉浸式的AI交互体验。视觉AI、实时翻译、智能助手等是核心应用场景。",
    "watchNext": "关注AI眼镜在计算能力、电池续航、隐私保护以及killer app出现方面的进展，以及能否获得大规模用户采纳。",
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
    "id": "ai-hardware-cn-1",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Rokid AI"
    ],
    "pattern": "中国AI眼镜市场在AI能力和交互体验上积极创新。Rokid AI眼镜应用在60天内进行了多次更新，包括AI助手2.0、视觉模型升级（Qwen 3.6plus）和同声传译能力，显著提升了设备智能化水平。",
    "opportunity": "中国供应链和研发优势有望推动AI眼镜的普及，提供更丰富、更符合本土使用习惯的AI服务。户外骑行、旅游导览等场景是潜在突破口。",
    "watchNext": "关注Rokid等本土厂商在硬件形态创新、核心技术突破以及生态建设方面的进展，以期实现AI眼镜的消费者普及。",
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "AI助手深入个人健康管理",
    "bullets": [
      [
        {
          "text": "ChatGPT在美国向18岁及以上用户推出健康体验，允许连接Apple Health等个人健康记录，并提供健康信息仪表板和基于上下文的问答。",
          "strong": true
        }
      ],
      [
        {
          "text": "此功能旨在辅助用户理解健康数据、准备就诊、追踪健康目标，但明确强调不用于诊断或治疗。",
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
    "title": "桌面端AI助手强化语音Agent能力",
    "bullets": [
      [
        {
          "text": "ChatGPT的语音功能现已在其桌面应用的Work和Codex模式中全面上线。",
          "strong": true
        }
      ],
      [
        {
          "text": "用户现在可以通过自然语音启动和协调复杂任务，实现更流畅、无缝的AI交互体验，提升专业工作效率。",
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
    "title": "ChatGPT",
    "bullets": [
      [
        {
          "text": "ChatGPT在美国面向18岁及以上用户推出全新的健康体验。",
          "strong": true
        }
      ],
      [
        {
          "text": "用户现在可以安全连接其支持的健康记录和Apple Health数据，在一个统一的仪表板上查看健康信息，并基于个人健康背景提出问题。",
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
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "头部AI助手持续提升多模态交互和垂直领域深度服务。ChatGPT引入健康功能，桌面端强化语音Agent能力；Meta AI加速Muse Spark模型在生态内分发；Google AI Edge Eloquent提供高效离线语音转写。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户对AI助手智能化、个性化和隐私保护的需求旺盛，尤其是在垂直领域的专业辅助和多模态交互方面存在巨大增长空间。",
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
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "title": "AI 效率/办公：美国方向信号",
    "bullets": [
      [
        {
          "text": "AI在提升办公效率方面的应用持续深化，Agent化工作流和本地化高效工具是两大方向。ChatGPT Work作为Agent处理复杂任务，Google AI Edge Eloquent则提供高效的离线语音转文字和文本润色。",
          "strong": false
        }
      ],
      [
        {
          "text": "企业和个人用户对提升工作效率、自动化重复性任务的需求巨大，AI Agent和本地化AI工具将进一步渗透到日常办公流程中。",
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
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "腾讯元宝上线Hy3模型，智能体验全面进阶",
    "bullets": [
      [
        {
          "text": "腾讯元宝正式集成Hy3模型，提供深度思考和快速思考两种模式，赋能用户在查资料、写文档、做排版等场景下实现一句话任务交付。",
          "strong": true
        }
      ],
      [
        {
          "text": "此举标志着腾讯在通用AI助手领域持续提升底层大模型能力，以满足用户日益增长的复杂任务处理需求。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "抖音即梦AI推出Seedance2.0 fast模型，强化多模态创作",
    "bullets": [
      [
        {
          "text": "抖音旗下的AI图片和视频工具即梦AI上线Seedance2.0 fast模型，旨在为创意爱好者提供更高效、更优质的多模态内容生成体验。",
          "strong": true
        }
      ],
      [
        {
          "text": "该模型升级将进一步降低用户在图片和视频创作上的门槛，激发平台UGC生态的活力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "腾讯元宝",
    "bullets": [
      [
        {
          "text": "腾讯元宝正式上线Hy3模型，全面提升其智能体验。",
          "strong": true
        }
      ],
      [
        {
          "text": "用户现在可以在元宝应用中切换Hy3模型，进行深度或快速思考，以满足查资料、写文档、做排版等多样化需求。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "即梦AI",
    "bullets": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI上线Seedance2.0 fast模型，带来全新多模态创作体验。",
          "strong": true
        }
      ],
      [
        {
          "text": "这一模型升级旨在提升图片和视频的生成速度及质量，让用户能更高效地将创意变为现实。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：中国方向信号",
    "bullets": [
      [
        {
          "text": "中国头部AI助手持续进行大模型升级和功能拓展，尤其是在办公任务自动化、多模态处理和特定信息源整合方面发力。豆包和腾讯元宝相继上线Hy3模型，强化了深度思考和复杂任务处理能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "本土AI助手在整合国内特色生态（如微信、小红书内容源）和提供定制化服务方面具有独特优势，市场对全能型AI助手的需求持续增长。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%B0%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  }
];
