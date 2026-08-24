import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-08-24";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 全面优化插件、对话及桌面应用",
    "market": "美国",
    "date": "2026-08-21",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI对ChatGPT进行了多项更新，包括改进网页和移动端的插件发现机制、提供更贴合用户本地时间的答案，以及提升网页版长对话的加载效率和交互内容逐步显示的速度。",
          "strong": false
        }
      ],
      [
        {
          "text": "iOS应用优化了近期照片附件的访问，Android应用则改进了生成图片的显示效果和侧边栏会话浏览体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，桌面应用新增Apple Messages插件（支持iMessage、SMS、RCS对话的读写和发送），为Pro用户在更多地区开放了Computer History功能，并支持共享Codex聊天的只读快照及桌面与iOS版固定聊天的同步。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这些更新旨在深化ChatGPT作为多功能AI助手的角色，尤其在信息获取、跨应用协作和个人效率方面。",
          "strong": false
        }
      ],
      [
        {
          "text": "通过优化插件和桌面集成，ChatGPT正试图将AI能力更无缝地融入用户的日常工作流和通信场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注其跨设备、跨平台的体验一致性，以及与更多第三方应用的集成效果。",
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
    "name": "Google AI Edge Eloquent 发布，实现端侧智能听写",
    "market": "美国",
    "date": "2026-08-22",
    "type": "new app",
    "summary": [
      [
        {
          "text": "Google推出了全新的iOS应用Google AI Edge Eloquent，这是一款由Google最新Gemma技术驱动的高级听写应用。",
          "strong": false
        }
      ],
      [
        {
          "text": "它利用AI智能地将口语转化为专业的、即用文本，能够自动编辑掉“嗯”、“啊”等填充词和语句中的自我修正。",
          "strong": false
        }
      ],
      [
        {
          "text": "该应用支持在设备本地运行，无需服务器连接即可提供响应式语音转文本服务，保障用户隐私，并支持创建个性化词典以提高准确性。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Eloquent的发布标志着端侧AI在效率工具领域的重大进展，它通过本地处理解决了传统云端听写在隐私和响应速度上的痛点。",
          "strong": false
        }
      ],
      [
        {
          "text": "其智能文本润色功能，有望大幅提升用户口述内容的专业性和可用性，降低手动编辑成本。",
          "strong": false
        }
      ],
      [
        {
          "text": "这为个人用户提供了一个免费且私密的AI效率工具，预示着更多依赖设备本地算力的AI应用将出现。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3a/97/70/3a9770d8-8be6-cdd4-6865-72a7e29e4352/APP_IPHONE_67-0.png/320x480bb.jpg",
      "alt": "Google AI Edge Eloquent App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Google AI Edge Eloquent App Store",
      "sourceHref": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      "note": "使用 Google AI Edge Eloquent 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "豆包 App 上线 Seedance 2.5 模型，支持30秒超长视频生成",
    "market": "中国",
    "date": "2026-08-22",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "豆包App在最新的2.3.3版本中上线了全新的Seedance 2.5模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新的核心亮点是支持生成长达30秒的超长视频，显著提升了AI视频创作的时长和表现力。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一功能将使用户能够制作更具叙事性和电影质感的视频内容。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance 2.5模型的推出，特别是30秒长视频能力的实现，代表了国内AI视频生成技术的重要突破，有望降低视频创作门槛，激发更多用户的内容创作热情。",
          "strong": false
        }
      ],
      [
        {
          "text": "在短视频主导的中国市场，长视频生成能力的提升，为创作者提供了更多元的表达形式，也可能催生新的内容生态和商业模式。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需关注该模型在生成视频的质量、连贯性以及对复杂指令的理解能力，以及用户对其付费模式的接受度。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a0/21/08/a0210869-9719-1f42-0dfb-752e2a379bcb/oYI33ACgayloVIZqAIsviJBAAABivn21ZUwVE.jpg/320x480bb.jpg",
      "alt": "豆包 - 随时帮忙的 AI 助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "豆包 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      "note": "使用 豆包 - 随时帮忙的 AI 助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点 App 同步小红书聊天记录，深化AI生活服务体验",
    "market": "中国",
    "date": "2026-08-22",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "点点App在最新版本中实现了与小红书（rednote）聊天记录的同步，用户现在可以在点点App内查看并搜索他们在小红书点点的历史对话。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一更新旨在让用户能够继续之前的AI对话，并且提升了App的回答质量和整体响应效果。",
          "strong": false
        }
      ],
      [
        {
          "text": "通过数据打通，点点能够更全面地理解用户在小红书场景下的需求和偏好，提供更个性化的生活决策辅助。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此次更新深化了点点App与小红书生态的结合，将AI助手能力更紧密地融入用户的真实生活和内容消费场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户无需在不同应用间切换即可管理AI对话历史，提升了使用便捷性和AI服务的连续性，有利于构建更强的用户粘性。",
          "strong": false
        }
      ],
      [
        {
          "text": "此举也为AI生活工具如何利用UGC平台数据提供个性化服务提供了范本，未来可观察其在购物、旅行等决策辅助方面的实际效果。",
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
    "title": "AI助手与多模态能力深度融合，持续提升用户生产力与创作体验",
    "evidence": [
      {
        "text": "OpenAI的",
        "strong": false
      },
      {
        "text": "ChatGPT",
        "strong": true
      },
      {
        "text": "在插件生态更新和多平台效率优化，以及中国",
        "strong": false
      },
      {
        "text": "豆包",
        "strong": true
      },
      {
        "text": "App推出的Seedance 2.5模型支持30秒长视频生成，均展现了AI助手在生产力工具和多模态内容创作方面的显著进步。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "相比纯文本对话，当前AI发展趋势更侧重于结合特定应用场景和多媒体能力，实现从简单问答到复杂任务（如视频生成、跨应用协作）的跃升，为用户带来更直观、更高效的体验。",
        "strong": false
      }
    ]
  },
  {
    "title": "端侧AI与生活服务深度结合，强化隐私保护与本地化体验",
    "evidence": [
      {
        "text": "Google AI Edge Eloquent",
        "strong": true
      },
      {
        "text": "应用以端侧AI技术提供智能听写，强调数据本地处理和隐私保护。同时，",
        "strong": false
      },
      {
        "text": "点点",
        "strong": true
      },
      {
        "text": "App通过与小红书聊天记录的深度同步，为用户提供更个性化、更贴近真实生活场景的AI辅助，例如智能攻略生成和消费决策。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "市场正从单一的云端AI服务，向兼顾本地化处理（如端侧AI）和隐私的混合模式发展。尤其在生活服务领域，AI与特定内容平台或用户数据更紧密结合，旨在提供更精准、更私密的个性化帮助，区别于通用大模型的泛化能力。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 全面优化插件、对话及桌面应用、Google AI Edge Eloquent 发布，实现端侧智能听写，以及中国的 豆包 App 上线 Seedance 2.5 模型，支持30秒超长视频生成、点点 App 同步小红书聊天记录，深化AI生活服务体验，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "主流平台持续强化其AI助手能力，通过插件生态和多场景集成深化用户粘性。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国市场在AI图片和视频生成领域持续投入，大模型（如Seedance 2.5）不断迭代，推动长视频生成能力大幅提升。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国更偏向入口整合和高频场景覆盖",
    "evidence": [
      {
        "text": "中国市场在AI图片和视频生成领域持续投入，大模型（如Seedance 2.5）不断迭代，推动长视频生成能力大幅提升。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "关注ChatGPT插件生态的发展，以及Meta AI在智能硬件上的表现。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "AIAS-US-ChatGPT",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Meta AI",
      "Gemini App"
    ],
    "pattern": "主流平台持续强化其AI助手能力，通过插件生态和多场景集成深化用户粘性。",
    "opportunity": "探索垂直领域AI助手，或为现有AI助手提供定制化插件服务。",
    "watchNext": "关注ChatGPT插件生态的发展，以及Meta AI在智能硬件上的表现。",
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
    "id": "AIAS-CN-DouBao",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "头部厂商AI助手不断更新，加强多模态能力与核心体验，尽管用户反馈显示仍有进步空间。",
    "opportunity": "提升多轮对话的连贯性和准确性，深耕特定场景的AI助手功能。",
    "watchNext": "关注用户对AI助手实际使用体验的反馈，尤其是上下文理解和稳定性。",
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
    "id": "AIEL-US-ChatGPT",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "ChatGPT",
      "Gizmo"
    ],
    "pattern": "AI正在通过互动测验等形式融入学习过程，以提升用户参与度。",
    "opportunity": "开发更多教育场景下的AI互动工具，提供个性化学习路径。",
    "watchNext": "关注AI如何解决教育公平性问题，以及实际学习效果的评估。",
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
    "id": "AIEL-CN-QianWenZhixue",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "弱",
    "products": [
      "千问智学",
      "腾讯元宝"
    ],
    "pattern": "AI教育应用致力于提供拍题答疑、个性化辅导等功能，但缺乏近期显著功能更新。",
    "opportunity": "深耕AI教育的互动性与内容质量，解决用户痛点，如批改作业、作文辅导等。",
    "watchNext": "关注AI在个性化学习、学习效率提升方面的实际效果，以及用户反馈。",
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
    "id": "AICES-US-CharacterAI",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Character.AI",
      "Replika"
    ],
    "pattern": "AI社交/陪伴应用通过提升模型记忆、角色一致性和世界构建能力，增强用户沉浸感和长期互动意愿。",
    "opportunity": "深耕AI角色的情感理解与回应能力，探索更自然的社交互动模式。",
    "watchNext": "关注用户对AI陪伴关系的接受程度，以及隐私和伦理挑战。",
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
    "id": "AICES-CN-XingYe",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "星野"
    ],
    "pattern": "AI智能体内容社区致力于提供自由创造和分享AI伙伴的平台，注重多模态AIGC技术支持下的沉浸式交互。",
    "opportunity": "提升AI智能体的人设性格记忆与语音表现，优化敏感词审核机制，增加用户创作自由度。",
    "watchNext": "关注用户对AI角色的个性化需求，以及平台如何平衡内容安全与用户表达自由。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "AIGIE-US-None",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "暂无明显AI游戏/互动娱乐领域的产品更新或融资信号。",
    "opportunity": "探索AI生成游戏内容、智能NPC或个性化游戏体验的新机会。",
    "watchNext": "关注大型游戏工作室的AI战略，以及独立开发者在AI游戏创新方面的尝试。",
    "sources": []
  },
  {
    "id": "AIGIE-CN-None",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "暂无明显AI游戏/互动娱乐领域的产品更新或融资信号。",
    "opportunity": "探索AI生成游戏内容、智能NPC或个性化游戏体验的新机会。",
    "watchNext": "关注中国游戏厂商如何将AI技术融入游戏开发与运营中，提升用户体验。",
    "sources": []
  },
  {
    "id": "AICR-US-Cantina",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Cantina: AI Video & Characters",
      "AI Video - AI Video Generator"
    ],
    "pattern": "AI视频生成工具持续活跃，在榜单上占据一席之地，表明用户对AI辅助创作的需求旺盛。",
    "opportunity": "提升AI生成视频的质量、多样性和编辑灵活性，满足专业创作者需求。",
    "watchNext": "关注AI视频工具如何降低创作门槛，以及其在UGC平台上的普及情况。",
    "sources": [
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "AICR-CN-JiMengAI",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "即梦AI",
      "小云雀",
      "可灵AI"
    ],
    "pattern": "中国市场在AI图片和视频生成领域持续投入，大模型（如Seedance 2.5）不断迭代，推动长视频生成能力大幅提升。",
    "opportunity": "解决用户反馈的生成质量不稳定、收费模式不合理等问题，提升用户体验和性价比。",
    "watchNext": "关注Seedance模型在更长视频、更高分辨率、更精准控制方面的进展，以及头部平台对AI创作工具的集成策略。",
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%B7%E5%85%B7/id6503676563"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "AIPO-US-Eloquent",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Google AI Edge Eloquent",
      "ChatGPT",
      "Granola"
    ],
    "pattern": "AI正在赋能办公效率工具，从会议记录到文本生成，强调本地化处理、隐私和跨平台支持。",
    "opportunity": "开发更智能的AI Agents，实现复杂办公任务的自动化，并加强与其他办公软件的集成。",
    "watchNext": "关注企业级AI办公解决方案的部署情况，以及个人用户对AI工具的接受度。",
    "sources": [
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expan`ds-from-meeting-notetaker-to-enterprise-ai-app/"
      }
    ]
  },
  {
    "id": "AIPO-CN-DouBao",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "扣子"
    ],
    "pattern": "中国头部AI助手在效率办公领域持续发力，提供文档处理、报告撰写、代码生成等自动化功能，并尝试推出工作任务模式。",
    "opportunity": "提升AI在复杂办公场景下的专业度和稳定性，解决用户反馈的上下文丢失、误解需求等问题。",
    "watchNext": "关注AI办公工具如何与企业微信、钉钉等现有办公生态深度融合，以及Agent能力的落地情况。",
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
    "id": "AILT-US-MetaAI",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Meta AI"
    ],
    "pattern": "AI助手开始深度融入购物等生活场景，提供个性化搜索和推荐，简化用户决策流程。",
    "opportunity": "将AI能力扩展到更多生活服务领域，如智能家居、健康管理等，提升用户体验。",
    "watchNext": "关注AI购物体验的实际转化率，以及用户对AI推荐的接受度。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "AILT-CN-Dots",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "点点",
      "支付宝"
    ],
    "pattern": "AI生活工具深入结合内容社区，通过攻略模式、聊天记录同步等功能，提供基于真实用户经验的智能决策辅助。",
    "opportunity": "持续优化AI在生活场景中的数据整合和个性化服务能力，提升用户粘性。",
    "watchNext": "关注点点App如何利用小红书的UGC内容优势，构建独特的AI生活服务生态。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "AIHI-US-Rokid",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Hi Rokid",
      "Ray-Ban Meta glasses"
    ],
    "pattern": "智能眼镜作为AI硬件入口持续演进，通过实时视觉识别和AI助手，提供免手操作的创新体验。",
    "opportunity": "提升AI眼镜的视觉理解、交互流畅性和电池续航，扩展更多实用场景应用。",
    "watchNext": "关注AI眼镜的市场接受度，以及更多主流厂商进入该领域的动向。",
    "sources": [
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "AIHI-CN-Rokid",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid AI 乐奇AI眼镜"
    ],
    "pattern": "中国厂商积极布局AI眼镜，通过提升视觉模型能力和AI助手体验，强化硬件入口的智能化水平。",
    "opportunity": "探索AI眼镜在工业、教育、旅游等垂直领域的应用，打造更具中国特色的创新功能。",
    "watchNext": "关注AI眼镜生态的建设，以及与国内大模型的深度融合效果。",
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
    "title": "ChatGPT功能深化，Google推出端侧AI语音助手",
    "bullets": [
      [
        {
          "text": "OpenAI的",
          "strong": false
        },
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": "在插件发现、时间感知应答、长对话加载效率、交互内容显示等方面进行了多项更新，并在iOS和Android应用中优化了照片附件和聊天浏览体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT桌面应用新增了",
          "strong": false
        },
        {
          "text": "Apple Messages插件",
          "strong": true
        },
        {
          "text": "，支持iMessage、SMS、RCS对话的读写，以及多区域的",
          "strong": false
        },
        {
          "text": "Computer History",
          "strong": true
        },
        {
          "text": "功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "Google发布了",
          "strong": false
        },
        {
          "text": "Google AI Edge Eloquent",
          "strong": true
        },
        {
          "text": "，一款基于Gemma技术的iOS端侧AI听写应用，无需服务器连接即可智能处理口语，自动去除冗余词，生成专业文本，强调隐私保护。",
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
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "title": "ChatGPT 全面优化插件、对话及桌面应用",
    "bullets": [
      [
        {
          "text": "OpenAI对ChatGPT进行了多项更新，包括改进网页和移动端的插件发现机制、提供更贴合用户本地时间的答案，以及提升网页版长对话的加载效率和交互内容逐步显示的速度。",
          "strong": false
        }
      ],
      [
        {
          "text": "iOS应用优化了近期照片附件的访问，Android应用则改进了生成图片的显示效果和侧边栏会话浏览体验。",
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
    "title": "Google AI Edge Eloquent 发布，实现端侧智能听写",
    "bullets": [
      [
        {
          "text": "Google推出了全新的iOS应用Google AI Edge Eloquent，这是一款由Google最新Gemma技术驱动的高级听写应用。",
          "strong": false
        }
      ],
      [
        {
          "text": "它利用AI智能地将口语转化为专业的、即用文本，能够自动编辑掉“嗯”、“啊”等填充词和语句中的自我修正。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "主流平台持续强化其AI助手能力，通过插件生态和多场景集成深化用户粘性。",
          "strong": false
        }
      ],
      [
        {
          "text": "探索垂直领域AI助手，或为现有AI助手提供定制化插件服务。",
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
          "text": "AI正在赋能办公效率工具，从会议记录到文本生成，强调本地化处理、隐私和跨平台支持。",
          "strong": false
        }
      ],
      [
        {
          "text": "开发更智能的AI Agents，实现复杂办公任务的自动化，并加强与其他办公软件的集成。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expan`ds-from-meeting-notetaker-to-enterprise-ai-app/"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "头部AI助手强化多模态创作与生活服务能力",
    "bullets": [
      [
        {
          "text": "豆包",
          "strong": true
        },
        {
          "text": "App上线全新Seedance 2.5模型，支持生成30秒超长视频，进一步提升AI视频创作能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "点点",
          "strong": true
        },
        {
          "text": "App实现与小红书（rednote）聊天记录的同步，用户可在App内查看并搜索历史对话，同时优化了回答质量，提供更连贯的AI生活决策辅助。",
          "strong": false
        }
      ],
      [
        {
          "text": "腾讯元宝",
          "strong": true
        },
        {
          "text": "App也持续优化使用体验。",
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
    "title": "豆包 App 上线 Seedance 2.5 模型，支持30秒超长视频生成",
    "bullets": [
      [
        {
          "text": "豆包App在最新的2.3.3版本中上线了全新的Seedance 2.5模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新的核心亮点是支持生成长达30秒的超长视频，显著提升了AI视频创作的时长和表现力。",
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
    "title": "点点 App 同步小红书聊天记录，深化AI生活服务体验",
    "bullets": [
      [
        {
          "text": "点点App在最新版本中实现了与小红书（rednote）聊天记录的同步，用户现在可以在点点App内查看并搜索他们在小红书点点的历史对话。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一更新旨在让用户能够继续之前的AI对话，并且提升了App的回答质量和整体响应效果。",
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
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "中国市场在AI图片和视频生成领域持续投入，大模型（如Seedance 2.5）不断迭代，推动长视频生成能力大幅提升。",
          "strong": false
        }
      ],
      [
        {
          "text": "解决用户反馈的生成质量不稳定、收费模式不合理等问题，提升用户体验和性价比。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%B7%E5%85%B7/id6503676563"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：中国方向信号",
    "bullets": [
      [
        {
          "text": "头部厂商AI助手不断更新，加强多模态能力与核心体验，尽管用户反馈显示仍有进步空间。",
          "strong": false
        }
      ],
      [
        {
          "text": "提升多轮对话的连贯性和准确性，深耕特定场景的AI助手功能。",
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
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  }
];
