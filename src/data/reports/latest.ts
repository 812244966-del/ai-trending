import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-08-10";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 模型更新至 GPT-5.6",
    "market": "美国",
    "date": "2026-08-06",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "ChatGPT 对其核心模型进行了升级，Plus 和 Pro 用户现在可以使用更可靠、回答更专注的 GPT-5.6 Sol 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "新模型还引入了一个滑动条，允许用户选择 ChatGPT 在生成回复时投入的“思考”程度。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，免费和 Go 用户本周将默认使用 GPT-5.6 Luna 模型，并从下周开始获得无限文本聊天和“思考”按钮访问权限（文件、图片等工具仍受限制）。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次更新显示 OpenAI 致力于提升模型的精确度和用户控制度，通过分级服务满足不同用户群体的需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "“思考”滑块为用户提供了更精细的交互方式，有助于在效率和深度之间取得平衡。",
          "strong": false
        }
      ],
      [
        {
          "text": "对免费用户开放无限文本聊天将显著扩大用户基础和使用场景，推动 AI 助手成为更普及的日常工具，未来需观察其对用户活跃度和付费转化率的影响。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8d/59/4d/8d594d34-8a41-dafc-abdf-daeff152211b/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT Voice 新增文件上传和项目支持",
    "market": "美国",
    "date": "2026-08-07",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT Voice 现在允许用户在语音对话中上传文件，并对文件内容进行分析或提问。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能同时支持 Projects，用户可以在语音模式下引用近期项目聊天记录、来源和项目指令。",
          "strong": false
        }
      ],
      [
        {
          "text": "这极大地扩展了语音交互的应用场景，使其不仅仅停留在口头问答，而是能深入到具体工作和数据处理中。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "结合语音与文件、项目管理，ChatGPT 正将 AI 助手从单一对话工具转变为更强大的生产力平台。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一进展为用户提供了更自然、更高效的多模态交互方式，尤其是在需要快速处理文档、数据或协同工作的场景中，语音输入将成为重要入口。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察其在企业协作和个人效率提升方面的实际效果，以及与其他办公工具的集成潜力。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8d/59/4d/8d594d34-8a41-dafc-abdf-daeff152211b/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Meta AI 基于 Muse Spark 模型在生态系统内加速部署",
    "market": "美国",
    "date": "2026-08-03",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Meta 正在持续推进其最强大的模型 Muse Spark 在 Ray-Ban Meta 和 Oakley Meta 眼镜上的逐步推出，以及在 Meta Ray-Ban Display 上的夏季部署。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，Muse Spark 的智能能力也正推广至 WhatsApp、Instagram、Facebook、Messenger 和 Threads 等 Meta 旗下核心应用。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些集成包括搜索栏、群聊、帖子，并测试了群聊中的“侧边聊天”和 Threads 中的 @meta.ai 提及功能。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Meta 旨在通过 Muse Spark 实现其生态系统内 AI 体验的无缝融合和智能化升级，覆盖从增强现实硬件到社交媒体和通讯应用的广泛场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次部署强化了 Meta 在多模态 AI 交互和跨平台整合上的战略，预示着 AI 将更深入地渗透到用户的日常沟通和信息获取中。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需要关注 Muse Spark 如何通过实时视觉、上下文理解和跨应用数据引用，真正提升用户体验和建立差异化竞争优势。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ],
    "image": {
      "url": "https://about.fb.com/wp-content/uploads/2026/04/01_Subagent-1.gif?resize=960%2C836",
      "alt": "Meta AI 在官方新闻稿中的产品演示图",
      "type": "official newsroom",
      "sourceLabel": "Meta 官方新闻稿",
      "sourceHref": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      "note": "官方新闻稿里的 Meta AI 产品演示图，用来对应 Muse Spark 带动的消费端入口更新。"
    }
  },
  {
    "name": "即梦AI 上线 Seedance 2.5 模型，支持 30 秒超长视频生成",
    "market": "中国",
    "date": "2026-08-03",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "抖音旗下 AI 图片和视频工具即梦AI 正式上线 Seedance 2.5 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新的核心是支持用户直接生成长达 30 秒的视频内容。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能旨在为创意爱好者提供更强大的视频创作能力，满足日常娱乐和技术探索需求。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "长视频生成能力的推出标志着 AI 创作工具在实用性和内容复杂度上的显著提升，将极大降低个人和创作者制作高质量视频的门槛。",
          "strong": false
        }
      ],
      [
        {
          "text": "在短视频平台流量见顶的背景下，抖音通过即梦AI探索 AI 辅助长内容生产，有望开启新的创作生态和用户消费模式。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注 Seedance 2.5 在视频质量、风格多样性及用户付费意愿方面的表现，以及其在专业创作领域的渗透潜力。",
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
    "name": "点点 App 全新上线攻略模式并同步小红书聊天记录",
    "market": "中国",
    "date": "2026-08-08",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "小红书 AI 生活助手“点点”的独立 App 正式更新，核心亮点是引入了“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量的真实用户经验和全网信息，能为用户生成个性化的深度攻略，涵盖旅行、生活兴趣、购物、美食探店等多个方面。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，点点 App 已实现与小红书点点聊天记录的无缝同步，并提升了整体功能体验和回答效果，方便用户在手机桌面随时召唤使用。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "点点 App 的更新体现了 AI 助手在生活服务和决策辅助领域的深化应用，通过整合垂直社区内容，提供了更具针对性和实用性的价值。",
          "strong": false
        }
      ],
      [
        {
          "text": "将 AI 助手与小红书强大的“种草”内容生态结合，有望构建独特的消费决策入口和用户粘性。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察其在用户采纳率、攻略生成质量及商业化路径上的表现，以及如何进一步拓展服务边界。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/10/02/f3/1002f3b8-e90a-7c24-b5e3-26f788fcb97e/pic_2.png/392x696bb.png",
      "alt": "点点-你的ai生活小助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "点点 App Store",
      "sourceHref": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      "note": "使用 点点-你的ai生活小助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI 助手深入融合用户工作与生活流",
    "evidence": [
      {
        "text": "OpenAI 的 ChatGPT Voice 现在支持直接上传文件和管理 Projects，将语音交互从简单的问答扩展到深度工作场景。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "早期 AI 助手更多是独立的对话或任务工具，而近期趋势显示，中美厂商都在将 AI 嵌入到用户已有的高频使用场景中，无论是办公协作、健康管理还是生活决策，力求提供更无缝、上下文感知的智能体验。",
        "strong": false
      },
      {
        "text": "这标志着 AI 从“工具”向“平台”和“入口”的转变，竞争焦点从单一模型能力转向生态集成和用户价值深挖。",
        "strong": false
      }
    ]
  },
  {
    "title": "大模型能力迭代与精细化用户体验并进",
    "evidence": [
      {
        "text": "OpenAI 发布了升级后的 GPT-5.6 模型，为 Plus/Pro 用户提供更可靠、专注的回答，并首次引入“思考”程度调节滑块。",
        "strong": false
      },
      {
        "text": "同时，免费用户也将默认使用新模型并获得无限文本聊天。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI 发展至今，核心模型能力持续突破的同时，头部厂商正更注重用户体验的精细化设计和差异化服务。",
        "strong": false
      },
      {
        "text": "通过分级模型和可调节的交互选项，厂商试图在提供强大能力的同时，兼顾不同用户群体的需求和偏好，并探索更可持续的商业模式，而非仅追求模型的绝对性能上限。",
        "strong": false
      }
    ]
  },
  {
    "title": "多模态 AI 创作工具迈向更长的内容形式",
    "evidence": [
      {
        "text": "中国的即梦AI 率先上线 Seedance 2.5 模型，实现了 30 秒超长视频的直接生成，显著提升了 AI 创作的时长和复杂度。",
        "strong": false
      },
      {
        "text": "豆包也基于 Seedance 模型提供图片和视频生成能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "此前 AI 创作主要集中在短文本、图像或短视频片段，而现在中国市场正出现向中长视频内容生成突破的趋势。",
        "strong": false
      },
      {
        "text": "这反映出 AI 创作工具正在满足用户对更复杂、叙事性更强内容的需求，可能重新定义数字内容的生产流程和创作者生态。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 模型更新至 GPT-5.6、ChatGPT Voice 新增文件上传和项目支持，以及中国的 即梦AI 上线 Seedance 2.5 模型，支持 30 秒超长视频生成、点点 App 全新上线攻略模式并同步小红书聊天记录，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "ChatGPT 模型升级至 GPT-5.6，为付费用户提供更可靠、可控的回复，并为免费用户提供无限文本聊天。同时，Voice 功能也支持文件上传和项目管理，极大扩展了 AI 助手的应用深度。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "抖音旗下的即梦AI和豆包均上线 Seedance 2.5 模型，支持生成 30 秒超长视频。剪映、可灵AI、小云雀等产品也持续活跃在 AI 图片和视频创作领域。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "us-ai-assistant-search-chatgpt",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT"
    ],
    "pattern": "ChatGPT 模型升级至 GPT-5.6，为付费用户提供更可靠、可控的回复，并为免费用户提供无限文本聊天。同时，Voice 功能也支持文件上传和项目管理，极大扩展了 AI 助手的应用深度。",
    "opportunity": "提升 AI 助手在专业工作流和日常通用场景中的核心竞争力，通过模型分级和功能拓展满足更广泛用户需求。",
    "watchNext": "观察新模型性能的用户反馈，以及语音+文件功能在实际工作场景中的采纳率和效率提升效果。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-assistant-search-doubao",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "豆包、腾讯元宝、千问等通用 AI 助手在核心能力上持续迭代，如豆包的“办公任务模式”、腾讯元宝的 Hy3 模型上线（7月24日）以及深度生态整合（微信、QQ音乐等），全面覆盖问答、搜索、P图、写作、办公等场景。",
    "opportunity": "抢占用户入口，通过丰富的多模态功能和深度生态集成，将 AI 助手打造为一站式超级应用。",
    "watchNext": "关注各平台在用户留存、付费转化以及生态开放度上的竞争态势。",
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
    "id": "us-ai-education-chatgpt",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT for Academic Researchers"
    ],
    "pattern": "OpenAI 推出面向学术研究者的 ChatGPT 专属工作区，提供 12 个月的免费访问权限和业务数据保护，支持团队协作。",
    "opportunity": "针对特定专业群体提供定制化 AI 服务，提升 AI 在科研领域的渗透率和价值。",
    "watchNext": "观察学术研究者对定制工作区的采纳情况及对其研究效率的实际影响。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-education-qwenstudy",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "千问智学",
      "腾讯元宝"
    ],
    "pattern": "原夸克学习 App 全面升级为“千问智学”，接入阿里千问大模型，提供拍题解题、作业批改、定制学习资料、作文辅导、听写陪练和无痛背诵等一站式 AI 家教服务。腾讯元宝也提供拍题答疑和 AI 讲解功能。",
    "opportunity": "抢占 AI 教育市场，通过多功能集成和深度 AI 赋能，提升学生的学习效率和个性化体验。",
    "watchNext": "关注用户反馈中对 AI 讲解深度、批改准确率的评价，以及其在K12及高等教育领域的市场份额变化。",
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
    "id": "us-ai-companion-replika",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Replika"
    ],
    "pattern": "Replika 持续提供 AI 伴侣服务，强调更好的记忆力、主动式签到、语音通话、互联网访问和图像生成等功能，旨在与用户建立深层情感连接，并帮助用户实现生活目标。",
    "opportunity": "满足用户对情感支持和个性化陪伴的需求，通过 AI 提供持续、非评判性的互动。",
    "watchNext": "观察其记忆力提升和主动式功能对用户粘性的影响，以及新功能如何平衡用户体验和隐私。",
    "sources": [
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      }
    ]
  },
  {
    "id": "cn-ai-companion-xingye",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "星野"
    ],
    "pattern": "星野作为多模态智能体内容社区，支持用户自由创造和分享 AI 智能体，提供丰富的角色选择和沉浸式交互，并不断优化用户体验（如 7 月份的多项问题修复）。",
    "opportunity": "抓住 Z 世代和泛二次元群体对虚拟陪伴和角色扮演的需求，通过 UCG (用户生成内容) 驱动的 AI 智能体社区形成独特优势。",
    "watchNext": "关注用户创造智能体的活跃度、社区生态的健康发展，以及如何有效应对内容安全和用户体验（如敏感词过滤）的挑战。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%8Bai/id6463076337"
      }
    ]
  },
  {
    "id": "us-ai-game-weak",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "暂无明确的、在过去 60 天内有重大进展的 AI 游戏/互动娱乐产品信息。市场可能处于早期探索或低调发展阶段。",
    "opportunity": "AI 在游戏剧情生成、NPC 智能、个性化体验和新型交互模式方面仍有巨大潜力。",
    "watchNext": "关注头部游戏公司或独立工作室在 AI 驱动的游戏设计和用户体验创新。",
    "sources": []
  },
  {
    "id": "cn-ai-game-yuanbao",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "腾讯元宝"
    ],
    "pattern": "腾讯元宝在其平台中开启“元宝派”公测，支持用户“养龙虾”等 AI 互动玩法，将 AI 助手与休闲娱乐、社交元素结合。",
    "opportunity": "通过 AI 宠物养成、互动故事等轻量级游戏化功能，提升 AI 助手的趣味性和用户粘性。",
    "watchNext": "观察“元宝派”的用户活跃度和新玩法拓展，以及 AI 游戏化功能在通用 AI 平台中的集成效果。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "us-ai-creation-chatgpt-images",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "ChatGPT Images"
    ],
    "pattern": "OpenAI 宣布将于 8 月 30 日停用官方 DALL·E GPT，鼓励用户转用 ChatGPT Images 进行图像创建和编辑。此举旨在将图像生成能力统一到核心 ChatGPT 体验中。",
    "opportunity": "简化 AI 创作工具的使用路径，将多模态能力更紧密地整合到主流 AI 助手中。",
    "watchNext": "观察 ChatGPT Images 的更新迭代，以及其与第三方图像生成 GPTs 的生态发展。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-creation-jimeng-doubao",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "即梦AI",
      "豆包",
      "剪映",
      "可灵AI",
      "小云雀"
    ],
    "pattern": "抖音旗下的即梦AI和豆包均上线 Seedance 2.5 模型，支持生成 30 秒超长视频。剪映、可灵AI、小云雀等产品也持续活跃在 AI 图片和视频创作领域。",
    "opportunity": "推动 AI 视频生成技术从短片段向更长、更复杂叙事内容的演进，降低内容创作门槛，激发用户和专业创作者的潜力。",
    "watchNext": "关注长视频生成质量的提升、用户在不同场景下的采纳率以及商业化模式的创新。",
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
    "id": "us-ai-productivity-chatgpt",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT"
    ],
    "pattern": "ChatGPT 持续优化其在办公场景下的使用体验，例如将大段粘贴内容自动转换为附件（8月4日），以及推出“Sign in with ChatGPT”功能，简化与 Airtable、Notion 等合作伙伴应用的账户连接流程（7月29日）。",
    "opportunity": "提升 AI 助手在企业和个人办公环境中的集成度与便利性，解决传统工作流中的痛点。",
    "watchNext": "关注这些功能在团队协作和跨应用工作流中的实际效率提升，以及更多第三方应用的集成。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-productivity-doubao-yuanbao",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "豆包提供“办公任务模式”，内置 Office 技能，支持自动执行和定时任务。腾讯元宝则在文档处理、报告撰写、代码生成等方面持续发力，并支持导出到腾讯文档。",
    "opportunity": "满足中国用户在日常办公和专业领域的效率提升需求，通过 AI 大模型和生态集成，构建一站式智能办公解决方案。",
    "watchNext": "关注这些产品在处理复杂办公任务时的准确性和稳定性，以及用户对其自动化能力的接受度。",
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
    "id": "us-ai-life-tools-chatgpt-health",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT Health"
    ],
    "pattern": "ChatGPT 推出全新健康功能（7月23日），允许用户安全连接健康记录和 Apple Health 数据，查看健康仪表盘，并基于个人健康背景提问。",
    "opportunity": "拓展 AI 助手在个人健康管理领域的应用，提供个性化、数据驱动的健康辅助工具。",
    "watchNext": "关注用户对隐私保护的接受度、健康信息解读的准确性以及其与专业医疗服务的结合方式。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-life-tools-diandian",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "点点",
      "腾讯元宝"
    ],
    "pattern": "点点 App 全新上线攻略模式（7月多次更新，8月8日最新版），基于小红书真人经验，生成深度生活攻略，覆盖旅行、购物、美食等。腾讯元宝则提供秒搜热搜话题、QQ音乐合作等生活服务。",
    "opportunity": "利用 AI 深度挖掘内容社区价值，提供从信息获取到决策辅助的一站式生活解决方案，打造强用户粘性的生活入口。",
    "watchNext": "观察攻略模式的泛用性、用户生成内容与 AI 辅助内容的融合效果，以及其在不同生活场景中的用户满意度。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "us-ai-hardware-meta-rokid",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "Ray-Ban Meta glasses",
      "Oakley Meta glasses",
      "Meta Ray-Ban Display",
      "Rokid Glasses"
    ],
    "pattern": "Meta AI 搭载 Muse Spark 模型持续在 Ray-Ban Meta、Oakley Meta 眼镜以及 Meta Ray-Ban Display 上逐步推出。Rokid Glasses 的伴侣应用 Hi Rokid 也更新 Vision 功能（7月31日），提供实时 AI 视觉辅助。",
    "opportunity": "智能眼镜作为新的 AI 交互入口，通过多模态 AI 提供上下文感知、实时辅助和无缝数字体验，将成为下一代计算平台的重要组成部分。",
    "watchNext": "关注 Meta 和 Rokid 在智能眼镜市场的产品迭代速度、用户采纳率和杀手级应用的出现。",
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
    "id": "cn-ai-hardware-rokid",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Rokid Glasses"
    ],
    "pattern": "Rokid AI App (中国区) 更新慧眼服务（7月31日），显著提升识别准确度并降低延迟，同时慧眼在线视觉模型升级为 Qwen 3.6plus，增强视觉理解和智能体能力。",
    "opportunity": "中国智能眼镜市场在视觉 AI 和多模态交互方面持续投入，通过提升核心技术能力，探索 AI 硬件的实用场景和用户价值。",
    "watchNext": "关注 Rokid 等本土厂商在视觉 AI 技术上的突破，以及其在日常生活和工作场景中的用户渗透率。",
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
    "title": "OpenAI 强化核心模型与语音交互能力",
    "bullets": [
      [
        {
          "text": "ChatGPT 对其 Plus 和 Pro 用户升级至更可靠、专注的 GPT-5.6 Sol 模型，并引入了“思考”程度调节滑块。",
          "strong": false
        }
      ],
      [
        {
          "text": "免费和 Go 用户本周也将默认使用 GPT-5.6 Luna 模型，并从下周起享受无限文本聊天和“思考”按钮。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，ChatGPT Voice 新增文件上传和项目管理支持，显著拓宽了 AI 助手在深度工作和数据处理场景的应用。",
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
    "title": "Meta AI 加速 Muse Spark 模型在生态系统内的全面部署",
    "bullets": [
      [
        {
          "text": "Meta 持续将 Muse Spark 模型推广至 Ray-Ban Meta 和 Oakley Meta 智能眼镜，以及即将推出的 Meta Ray-Ban Display。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，Muse Spark 的智能能力也正在 WhatsApp、Instagram、Facebook、Messenger 和 Threads 等 Meta 核心应用中普及，包括搜索栏、群聊和帖子。",
          "strong": false
        }
      ],
      [
        {
          "text": "新的体验如群聊“侧边聊天”和 Threads 中的 @meta.ai 提及功能正在测试中。",
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
    "title": "ChatGPT 推出个人健康管理功能",
    "bullets": [
      [
        {
          "text": "ChatGPT 针对美国 18 岁以上用户推出全新健康功能，允许用户安全连接健康记录和 Apple Health 数据。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以查看健康仪表盘，并基于个人健康背景向 ChatGPT 提问，以理解实验室结果、药物、活动和睡眠等信息，或准备就医问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能注重隐私和安全，连接的医疗记录和相关对话不用于模型训练或广告。",
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
    "title": "ChatGPT 模型更新至 GPT-5.6",
    "bullets": [
      [
        {
          "text": "ChatGPT 对其核心模型进行了升级，Plus 和 Pro 用户现在可以使用更可靠、回答更专注的 GPT-5.6 Sol 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "新模型还引入了一个滑动条，允许用户选择 ChatGPT 在生成回复时投入的“思考”程度。",
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
    "title": "ChatGPT Voice 新增文件上传和项目支持",
    "bullets": [
      [
        {
          "text": "ChatGPT Voice 现在允许用户在语音对话中上传文件，并对文件内容进行分析或提问。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能同时支持 Projects，用户可以在语音模式下引用近期项目聊天记录、来源和项目指令。",
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
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "多款 AI 创作应用升级长视频生成能力",
    "bullets": [
      [
        {
          "text": "抖音旗下的即梦AI和豆包均于 8 月 3 日上线全新 Seedance 2.5 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次升级的核心功能是支持用户直接生成长达 30 秒的视频内容，显著提升了 AI 创作的时长上限和内容复杂度。",
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
      }
    ]
  },
  {
    "title": "点点 App 深度整合小红书内容并升级生活辅助功能",
    "bullets": [
      [
        {
          "text": "小红书 AI 生活助手“点点”的独立 App 发布最新版本（8 月 8 日），全新上线“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量真实经验和全网信息，能为用户生成个性化的深度生活攻略，涵盖旅行、购物、美食等多种场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，点点 App 已实现与小红书点点聊天记录的无缝同步，方便用户持续进行对话和查询。",
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
  },
  {
    "title": "Rokid AI 眼镜伴侣应用慧眼服务升级",
    "bullets": [
      [
        {
          "text": "Rokid AI App（乐奇 AI 眼镜伴侣应用）于 7 月 31 日更新，慧眼服务显著提升识别准确度和降低延迟。",
          "strong": false
        }
      ],
      [
        {
          "text": "慧眼在线视觉模型已升级为 Qwen 3.6plus，全面增强了视觉理解和智能体能力，为用户提供更精准的实时 AI 辅助。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "即梦AI 上线 Seedance 2.5 模型，支持 30 秒超长视频生成",
    "bullets": [
      [
        {
          "text": "抖音旗下 AI 图片和视频工具即梦AI 正式上线 Seedance 2.5 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新的核心是支持用户直接生成长达 30 秒的视频内容。",
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
    "title": "点点 App 全新上线攻略模式并同步小红书聊天记录",
    "bullets": [
      [
        {
          "text": "小红书 AI 生活助手“点点”的独立 App 正式更新，核心亮点是引入了“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量的真实用户经验和全网信息，能为用户生成个性化的深度攻略，涵盖旅行、生活兴趣、购物、美食探店等多个方面。",
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
