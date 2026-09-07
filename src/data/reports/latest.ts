import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-09-07";

export const topFindings: Finding[] = [
  {
    "name": "OpenAI 推出 GPT-6 Astra 模型",
    "market": "美国",
    "date": "2026-09-03",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI 宣布推出其最新的核心模型 GPT-6 Astra，该模型在编码、研究、计算机使用和处理复杂多步骤任务方面实现了显著改进。",
          "strong": false
        }
      ],
      [
        {
          "text": "Astra 能够根据用户提供的模板和指令，自动创建文档、电子表格和演示文稿，并能灵活适应后续的需求变化或方向调整。",
          "strong": false
        }
      ],
      [
        {
          "text": "目前，该模型正向有限的组织逐步开放访问权限，计划在未来几天内实现更广泛的可用性。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "GPT-6 Astra 的推出预示着 AI 在执行复杂、多步骤工作流方面的能力达到了新高度，将大幅提升企业和专业用户的生产力。",
          "strong": false
        }
      ],
      [
        {
          "text": "尤其在内容创作、数据分析和项目管理等领域，Astra 自动化生成和适应性强的特点将带来变革。",
          "strong": false
        }
      ],
      [
        {
          "text": "其安全监控机制也反映了业界对高级 AI 系统潜在误用和风险的关注，旨在确保其负责任地部署。",
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
    "name": "ChatGPT 推出面向美国临床医生的医疗公共数据插件",
    "market": "美国",
    "date": "2026-09-01",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 为符合条件的美国临床医生用户推出了“医疗公共数据”插件，该插件整合了九个应用程序，用于搜索公开的医疗保健信息来源。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些信息源包括生物医学研究、临床试验、药物信息、Medicare 数据和提供者记录等。",
          "strong": false
        }
      ],
      [
        {
          "text": "该插件为只读模式，不访问患者病历，并提醒用户在搜索时避免包含受保护的健康信息。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这一功能将大幅提升临床医生获取最新医疗信息和研究的效率，辅助决策过程。",
          "strong": false
        }
      ],
      [
        {
          "text": "它展示了 AI 在垂直领域专业化应用的潜力，通过整合特定行业数据源，为专业人士提供定制化服务。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来，AI 将在更多专业领域扮演关键信息检索和分析的角色，但数据隐私和准确性仍是核心挑战。",
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
    "name": "ChatGPT 全球移动端上线个性化贴纸包功能",
    "market": "美国",
    "date": "2026-08-31",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 在全球移动端面向所有用户推出了全新的个性化贴纸包功能，允许用户将自己的想法或照片转化为独特的贴纸。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过提供提示词或选择模板，让 ChatGPT 制作一套贴纸，并可下载或直接添加到 iMessage 或 WhatsApp 等消息应用中进行分享。",
          "strong": false
        }
      ],
      [
        {
          "text": "此功能旨在通过 AI 驱动的创作，丰富用户在消息交流中的个性化表达。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "该功能降低了普通用户进行个性化内容创作的门槛，让 AI 成为日常生活中小创意的实现者。",
          "strong": false
        }
      ],
      [
        {
          "text": "它将 AI 能力融入到社交和娱乐场景中，提升了用户互动的趣味性和表现力。",
          "strong": false
        }
      ],
      [
        {
          "text": "此举也可能促使其他消息和社交应用探索更多 AI 驱动的个性化内容生成功能。",
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
    "name": "腾讯元宝上线 Hy4 preview 模型、专家模式与 AI 精讲功能",
    "market": "中国",
    "date": "2026-08-31",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝接入全新 Hy4 preview 模型，全面升级其 Agent 能力，尤其在综合多方信源进行深度推理和处理复杂任务方面表现更可靠。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，元宝同步上线了“专家模式”，专为需要深度思考和逻辑优化的复杂任务设计。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，还推出了“AI 精讲”功能，用户可拍题或输入文字，获得动态板书和语音讲解，提供一对一的专属教学体验。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "核心模型的升级和专家模式的引入，标志着腾讯元宝在处理复杂、高要求任务方面迈出了重要一步，提升了其作为全能 AI 助手的竞争力。",
          "strong": false
        }
      ],
      [
        {
          "text": "“AI 精讲”功能直击教育痛点，利用 AI 提供个性化、互动式的学习辅导，有望变革传统学习方式。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些更新体现了中国 AI 产品在基础模型能力、垂直应用创新和用户体验优化上的持续投入。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/80/cc/77/80cc77eb-85fe-58bd-a0ac-4d9d64a0cc02/d70ce9940f73eaad66210721e467670d_1.jpg/320x480bb.jpg",
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
    "title": "AI 助手/模型能力持续向复杂任务深化",
    "evidence": [
      {
        "text": "美国 OpenAI 发布 ",
        "strong": false
      },
      {
        "text": "GPT-6 Astra",
        "strong": true
      },
      {
        "text": "，侧重编码、研究、计算机使用和复杂的、多步骤工作，能够创建符合模板的文档、表格和演示文稿。",
        "strong": false
      },
      {
        "text": "此外，",
        "strong": false
      },
      {
        "text": "ChatGPT",
        "strong": true
      },
      {
        "text": " 新增了 ",
        "strong": false
      },
      {
        "text": "Zendesk",
        "strong": true
      },
      {
        "text": " 和 ",
        "strong": true
      },
      {
        "text": "OneNote",
        "strong": true
      },
      {
        "text": " 插件，进一步拓展了其在企业级应用中的复杂任务处理能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国腾讯元宝上线 ",
        "strong": false
      },
      {
        "text": "Hy4 preview",
        "strong": true
      },
      {
        "text": " 模型及专家模式，显著提升了处理复杂任务的逻辑推理能力，并支持多方信源深度推理，使得其在内容生成和问题解决上更为可靠和专业。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 教育与个性化学习工具创新加速",
    "evidence": [
      {
        "text": "中国腾讯元宝推出“",
        "strong": false
      },
      {
        "text": "AI 精讲",
        "strong": true
      },
      {
        "text": "”功能，支持用户拍题或文字输入，通过动态板书和语音讲解，像专属老师一样逐步教解题，实现了高度个性化的学习辅导体验。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "美国市场本周未见直接的 AI 教育领域强信号，但 ",
        "strong": false
      },
      {
        "text": "ChatGPT",
        "strong": true
      },
      {
        "text": " 针对临床医生的医疗公共数据插件，也体现了 AI 在垂直专业知识获取方面的辅助能力，间接支持了专业领域的学习。",
        "strong": false
      }
    ]
  },
  {
    "title": "消费级 AI 注重个性化创作与生态融合",
    "evidence": [
      {
        "text": "美国 ",
        "strong": false
      },
      {
        "text": "ChatGPT",
        "strong": true
      },
      {
        "text": " 发布全球移动端个性化贴纸包功能，让用户能将想法或照片转化为贴纸，并通过主流消息应用分享，极大地丰富了用户在社交互动中的个性化表达。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国腾讯元宝持续深化与微信生态（如公众号、视频号、腾讯文档）的融合，提升了其在信息获取、内容创作和协作上的便捷性，通过生态协同增强用户粘性。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 OpenAI 推出 GPT-6 Astra 模型、ChatGPT 推出面向美国临床医生的医疗公共数据插件，以及中国的 腾讯元宝上线 Hy4 preview 模型、专家模式与 AI 精讲功能，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "OpenAI 的 GPT-6 Astra 模型在文档、表格、演示文稿的创作能力上有所提升，并能适应用户修改需求。Gemini 的 Lyria 3 Pro 也支持生成长达3分钟的音乐曲目。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "国内短视频/修图巨头持续迭代 AI 创作工具，如抖音旗下的即梦 AI、小云雀等，腾讯元宝也支持 AI 图片编辑、AI 生成视频、AI 绘图，丰富了消费级 AI 创作生态。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "US-AS-1",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "GPT-6 Astra"
    ],
    "pattern": "OpenAI 发布核心模型 GPT-6 Astra，并持续强化 ChatGPT 的企业级应用能力及插件生态，将 AI 助手向更复杂的任务处理和专业化方向推进。",
    "opportunity": "关注通用 AI 模型在复杂任务处理和专业领域（如医疗、企业工具集成）的深化应用，以及其与现有 SaaS 服务的无缝融合。",
    "watchNext": "GPT-6 Astra 的更广泛可用性及企业采用情况，以及更多专业领域插件的推出。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "CN-AS-1",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "腾讯元宝"
    ],
    "pattern": "腾讯元宝核心模型升级至 Hy4 preview，并引入专家模式，显著提升复杂任务处理能力，同时深度整合腾讯生态，强化信息获取和生成能力。",
    "opportunity": "关注国内头部 AI 助手在模型能力提升、生态深度融合及垂直场景（如教育）的创新，以实现差异化竞争和用户增长。",
    "watchNext": "腾讯元宝 Hy4 模型的全面开放及用户反馈，以及其在多模态搜索和跨应用协作方面的进一步突破。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "US-EL-1",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "Gizmo"
    ],
    "pattern": "本周美国市场无直接针对 AI 教育/学习的强信号，但 ChatGPT 的通用能力及专业插件可间接赋能学习和研究。AI 学习平台 Gizmo 获得高额融资，其游戏化学习模式受青睐。",
    "opportunity": "留意 AI 助手在个性化学习、研究辅助和语言学习（如发音改进）方面的潜在应用，将现有 AI 能力整合到教育场景中。同时关注游戏化、互动性强的 AI 学习产品。",
    "watchNext": "观察是否有新的 AI 教育应用或现有 AI 助手推出明确的学习功能，以及 K12 领域的 AI 辅助工具发展。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "CN-EL-1",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "腾讯元宝"
    ],
    "pattern": "腾讯元宝推出“AI 精讲”功能，通过动态板书和语音讲解，提供专属老师一对一解题体验，显著提升了 AI 在教育场景的实用性和互动性。",
    "opportunity": "AI 在 K12 及高等教育领域的互动式、个性化辅导存在巨大潜力，特别是在解决痛点和提升学习效率方面。",
    "watchNext": "用户对 AI 精讲功能的接受度及其他平台跟进类似功能的情况，以及 AI 在教育内容生成和评估方面的进一步应用。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "US-CES-1",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Character.AI",
      "ChatGPT",
      "Series"
    ],
    "pattern": "ChatGPT 推出个性化贴纸包功能，用户可将想法或照片转化为贴纸，增强社交互动中的个性表达。AI 驱动的社交产品 Series 通过 iMessage 平台，利用 AI 促进用户连接。",
    "opportunity": "AI 驱动的个性化内容生成能丰富社交互动形式，提升用户表达乐趣，并为 AI 陪伴和虚拟社交带来更多可能性。",
    "watchNext": "更多 AI 生成内容在主流社交平台中的应用与普及，以及 AI 角色在情感交互和多模态沟通上的突破。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      }
    ]
  },
  {
    "id": "CN-CES-1",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "星野",
      "腾讯元宝"
    ],
    "pattern": "星野持续通过用户创建的 AI 智能体构建多模态内容社区，腾讯元宝推出“元宝派”养龙虾等娱乐互动，探索 AI 陪伴和社交的新形态。",
    "opportunity": "关注 UGC 模式下 AI 智能体的多样化发展及 AI 在休闲娱乐、陪伴社交场景中的创新，尤其是在虚拟形象和情感交互方面。",
    "watchNext": "星野用户留存和内容多样性，元宝派等 AI 互动游戏的用户参与度及商业化探索。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "US-GIE-1",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "本周美国市场无直接 AI 游戏或互动娱乐的强信号。",
    "opportunity": "关注 AI 在游戏 NPC 智能、内容生成（如剧情、任务、道具）及个性化体验方面的潜力，提升游戏的沉浸感和可玩性。",
    "watchNext": "市场是否有新的 AI 游戏或大型游戏集成 AI 功能，以及 AI 在电竞和虚拟世界中的应用。",
    "sources": []
  },
  {
    "id": "CN-GIE-1",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "腾讯元宝"
    ],
    "pattern": "腾讯元宝在其“元宝派”功能中上线了养龙虾等 AI 新玩法，探索 AI 互动娱乐的边界，将 AI 融入休闲游戏化体验。",
    "opportunity": "AI 游戏化互动可以提高用户粘性和产品趣味性，特别是与现有主流应用结合，更容易触达用户。",
    "watchNext": "腾讯元宝及其他平台在 AI 互动游戏方面的进一步尝试及用户反馈，以及独立 AI 游戏产品的市场表现。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "US-CRE-1",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "GPT-6 Astra",
      "Gemini",
      "Lyria 3 Pro"
    ],
    "pattern": "OpenAI 的 GPT-6 Astra 模型在文档、表格、演示文稿的创作能力上有所提升，并能适应用户修改需求。Gemini 的 Lyria 3 Pro 也支持生成长达3分钟的音乐曲目。",
    "opportunity": "AI 模型在多模态、多步骤内容创作上的能力将是未来竞争的关键，特别是在设计、文案和代码生成等专业领域。",
    "watchNext": "GPT-6 Astra 在实际内容创作场景中的表现及用户接受度，以及 Adobe 等创意软件巨头在 AI 集成上的进展。",
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
    "id": "CN-CRE-1",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "剪映",
      "像素蛋糕",
      "醒图",
      "即梦AI",
      "腾讯元宝"
    ],
    "pattern": "国内短视频/修图巨头持续迭代 AI 创作工具，如抖音旗下的即梦 AI、小云雀等，腾讯元宝也支持 AI 图片编辑、AI 生成视频、AI 绘图，丰富了消费级 AI 创作生态。",
    "opportunity": "丰富多样的 AI 创作工具正降低创作门槛，提升内容生产效率和趣味性，尤其是在短视频、图片处理等大众消费领域。",
    "watchNext": "头部平台 AI 创作工具的功能创新及用户增长，以及 AI 辅助创作工具的商业模式探索。",
    "sources": [
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "US-PRO-1",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "GPT-6 Astra",
      "Granola"
    ],
    "pattern": "ChatGPT 通过 GPT-6 Astra 提升多步任务处理能力，并新增 Zendesk、OneNote 插件及支持连接多个 Google 账户，大幅强化企业和个人效率。Granola 在会议记录和企业 AI 应用方面获得大额融资。",
    "opportunity": "AI 与现有办公流程和 SaaS 工具的深度集成是提升效率的关键，特别是通过开放平台和丰富的插件生态。",
    "watchNext": "ChatGPT 在企业级市场渗透率和插件生态的拓展，以及其他 AI 办公助手的竞争态势。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      }
    ]
  },
  {
    "id": "CN-PRO-1",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "腾讯元宝"
    ],
    "pattern": "腾讯元宝强化 AI 秒写报告、文案、代码，并升级文档精读助手，深度对接腾讯文档，提升办公效率，满足国内用户对全能型 AI 办公工具的需求。",
    "opportunity": "国内 AI 助手在文档处理、内容生成和生态协作方面持续发力，有望在企业级和个人效率市场取得突破。",
    "watchNext": "腾讯元宝在企业级和个人效率市场的实际应用效果和用户反馈，以及与其他主流办公软件的集成度。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "US-DT-1",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "ChatGPT",
      "Gemini"
    ],
    "pattern": "ChatGPT 的浏览器扩展支持更多浏览器，并能使用网站工具，同时改进了发音帮助，使其成为更便捷的日常工具，无缝融入用户日常工作流。Gemini 提供了个性化智能服务，可连接 Gmail、Photos、YouTube。",
    "opportunity": "将 AI 能力无缝融入日常网页浏览、语言学习等场景，提升用户体验，并通过集成实现更广泛的应用。",
    "watchNext": "AI 助手在智能家居、个人助理等更广泛生活场景的落地，以及多模态交互在日常工具中的应用。",
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
    "id": "CN-DT-1",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "腾讯元宝",
      "Rokid AI"
    ],
    "pattern": "腾讯元宝支持语音通话、精准识图、拍照翻译等功能，Rokid AI 眼镜更新双向翻译播报模式，提升日常语言障碍处理能力和信息获取效率。",
    "opportunity": "AI 在图像识别、实时翻译、语音交互等生活实用工具领域的创新，有望解决日常生活中的实际问题，提升便利性。",
    "watchNext": "Rokid AI 眼镜等硬件 AI 在实际生活场景中的普及率和用户满意度，以及 AI 驱动的个性化生活服务发展。",
    "sources": [
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
    "id": "US-HW-1",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Ray-Ban Meta Smart Glasses"
    ],
    "pattern": "Meta AI 持续在 AI 眼镜上部署智能功能，未来有望成为重要的硬件入口，通过隐形计算改变人机交互。",
    "opportunity": "智能眼镜等可穿戴设备结合 AI，提供无缝、自然的交互体验，有望成为下一代计算平台的重要组成部分。",
    "watchNext": "Meta 等厂商 AI 眼镜的功能拓展和市场接受度，以及其他科技巨头在 AI 硬件领域的布局。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "CN-HW-1",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Rokid Glasses"
    ],
    "pattern": "Rokid AI 眼镜 App 持续更新，提升慧眼服务、导航功能及引入双向翻译播报模式，不断强化 AI 硬件的实用性和交互体验，以提升产品竞争力。",
    "opportunity": "国内厂商在 AR 眼镜等 AI 硬件领域积极探索，通过 AI 功能提升产品竞争力，旨在打造更自然、更便捷的下一代人机交互界面。",
    "watchNext": "Rokid Glasses 等国产 AI 眼镜的销量和应用生态发展，以及 AI 硬件在垂直场景（如工业、旅游）的落地情况。",
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
    "title": "AI 助手与核心模型能力持续深化",
    "bullets": [
      [
        {
          "text": "OpenAI 推出其最新核心模型 ",
          "strong": false
        },
        {
          "text": "GPT-6 Astra",
          "strong": true
        },
        {
          "text": "，显著提升了在编码、研究、计算机使用和处理复杂多步骤任务方面的能力，能够创建适应性强的文档、表格和演示文稿，目前正逐步向有限组织开放。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": " 新增了 ",
          "strong": false
        },
        {
          "text": "Zendesk",
          "strong": true
        },
        {
          "text": " 和 ",
          "strong": true
        },
        {
          "text": "OneNote",
          "strong": true
        },
        {
          "text": " 插件（Beta 版），旨在帮助团队在 ",
          "strong": true
        },
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": " 和 ",
          "strong": true
        },
        {
          "text": "Codex",
          "strong": true
        },
        {
          "text": " 中处理支持票据、客户历史记录、查找知识并准备回复，以及管理笔记和行动项。",
          "strong": false
        }
      ],
      [
        {
          "text": "面向美国临床医生，",
          "strong": true
        },
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": " 现已推出“医疗公共数据”插件，整合了九个公开医疗保健信息源，包括生物医学研究、临床试验、药物信息和 Medicare 数据等，以辅助专业查询。",
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
    "title": "消费级 AI 体验与日常工具集成",
    "bullets": [
      [
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": " 在全球移动端上线了“创建和分享个性化贴纸包”功能，用户可以将想法或照片转化为一套贴纸，并在消息应用中分享。",
          "strong": false
        }
      ],
      [
        {
          "text": "对于 ",
          "strong": false
        },
        {
          "text": "iPhone",
          "strong": true
        },
        {
          "text": " 用户，",
          "strong": false
        },
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": " 的 Live voice 对话内容现在可以在锁屏界面和灵动岛上显示，提升了在应用外的互动便捷性。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": " 的桌面应用内置浏览器现在支持直接使用网站提供的工具，无需额外连接，同时其浏览器扩展也新增支持 ",
          "strong": true
        },
        {
          "text": "Microsoft Edge",
          "strong": true
        },
        {
          "text": "、",
          "strong": true
        },
        {
          "text": "Brave",
          "strong": true
        },
        {
          "text": "、",
          "strong": true
        },
        {
          "text": "Opera",
          "strong": true
        },
        {
          "text": " 和 ",
          "strong": true
        },
        {
          "text": "Vivaldi",
          "strong": true
        },
        {
          "text": " 浏览器。",
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
    "title": "OpenAI 推出 GPT-6 Astra 模型",
    "bullets": [
      [
        {
          "text": "OpenAI 宣布推出其最新的核心模型 GPT-6 Astra，该模型在编码、研究、计算机使用和处理复杂多步骤任务方面实现了显著改进。",
          "strong": false
        }
      ],
      [
        {
          "text": "Astra 能够根据用户提供的模板和指令，自动创建文档、电子表格和演示文稿，并能灵活适应后续的需求变化或方向调整。",
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
    "title": "ChatGPT 推出面向美国临床医生的医疗公共数据插件",
    "bullets": [
      [
        {
          "text": "ChatGPT 为符合条件的美国临床医生用户推出了“医疗公共数据”插件，该插件整合了九个应用程序，用于搜索公开的医疗保健信息来源。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些信息源包括生物医学研究、临床试验、药物信息、Medicare 数据和提供者记录等。",
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
    "title": "ChatGPT 全球移动端上线个性化贴纸包功能",
    "bullets": [
      [
        {
          "text": "ChatGPT 在全球移动端面向所有用户推出了全新的个性化贴纸包功能，允许用户将自己的想法或照片转化为独特的贴纸。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过提供提示词或选择模板，让 ChatGPT 制作一套贴纸，并可下载或直接添加到 iMessage 或 WhatsApp 等消息应用中进行分享。",
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
    "title": "腾讯元宝核心能力与垂直应用升级",
    "bullets": [
      [
        {
          "text": "腾讯元宝接入全新的 ",
          "strong": false
        },
        {
          "text": "Hy4 preview",
          "strong": true
        },
        {
          "text": " 模型，全面升级了 Agent 能力，提升了在综合多方信源深度推理和处理复杂任务上的可靠性和专业度。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，元宝上线了“专家模式”，专为复杂任务设计，以及“",
          "strong": false
        },
        {
          "text": "AI 精讲",
          "strong": true
        },
        {
          "text": "”功能，提供拍题/文字输入后的动态板书和语音讲解，实现个性化教学辅导。",
          "strong": false
        }
      ],
      [
        {
          "text": "腾讯元宝持续深化与腾讯生态的联动，支持联网搜索公众号、视频号等优质信源，并强化了 AI 图片编辑、AI 生成视频、AI 绘图、AI 秒写报告/文案/代码等创作和效率工具。",
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
    "title": "AI 社交与硬件产品持续优化",
    "bullets": [
      [
        {
          "text": "星野 App",
          "strong": true
        },
        {
          "text": " 持续进行版本优化和 bug 修复，作为多模态智能体内容社区，其核心价值在于用户可自由创造和分享 AI 智能体，并通过沉浸式交互建立伙伴关系。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid AI",
          "strong": true
        },
        {
          "text": " 眼镜 App 在 ",
          "strong": false
        },
        {
          "text": "8",
          "strong": false
        },
        {
          "text": " 月底的更新中，新增了双向翻译播报模式，佩戴者说的话可以自动翻译并用手机喇叭播报给对方，提升了跨语言交流的便捷性。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid AI",
          "strong": true
        },
        {
          "text": " 眼镜 App 还在近期更新中提升了慧眼服务识别准确度、降低延迟，并优化了 App 功能页面设计和交互易用性，增强了 AI 硬件的实用体验。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "腾讯元宝上线 Hy4 preview 模型、专家模式与 AI 精讲功能",
    "bullets": [
      [
        {
          "text": "腾讯元宝接入全新 Hy4 preview 模型，全面升级其 Agent 能力，尤其在综合多方信源进行深度推理和处理复杂任务方面表现更可靠。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，元宝同步上线了“专家模式”，专为需要深度思考和逻辑优化的复杂任务设计。",
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
          "text": "国内短视频/修图巨头持续迭代 AI 创作工具，如抖音旗下的即梦 AI、小云雀等，腾讯元宝也支持 AI 图片编辑、AI 生成视频、AI 绘图，丰富了消费级 AI 创作生态。",
          "strong": false
        }
      ],
      [
        {
          "text": "丰富多样的 AI 创作工具正降低创作门槛，提升内容生产效率和趣味性，尤其是在短视频、图片处理等大众消费领域。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：中国方向信号",
    "bullets": [
      [
        {
          "text": "腾讯元宝核心模型升级至 Hy4 preview，并引入专家模式，显著提升复杂任务处理能力，同时深度整合腾讯生态，强化信息获取和生成能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "关注国内头部 AI 助手在模型能力提升、生态深度融合及垂直场景（如教育）的创新，以实现差异化竞争和用户增长。",
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
  }
];
