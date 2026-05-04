import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-05-04";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 高级账户安全功能上线",
    "market": "美国",
    "date": "2026-04-30",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 为个人 ChatGPT 账户推出了可选的",
          "strong": false
        },
        {
          "text": "“高级账户安全”设置",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能旨在通过",
          "strong": false
        },
        {
          "text": "更强的登录要求和账户保护措施",
          "strong": true
        },
        {
          "text": "，减少账户被盗、未经授权访问和数据泄露的风险。",
          "strong": false
        }
      ],
      [
        {
          "text": "启用后，ChatGPT 将强制使用",
          "strong": false
        },
        {
          "text": "通行密钥或兼容的安全密钥等强登录方式",
          "strong": true
        },
        {
          "text": "，并禁用密码登录、邮箱/短信登录码等弱验证路径。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "随着 AI 助手在用户工作和生活中扮演越来越重要的角色，其账户安全和数据隐私变得至关重要。",
          "strong": false
        }
      ],
      [
        {
          "text": "OpenAI 此次更新反映了行业对安全标准提升的需求",
          "strong": true
        },
        {
          "text": "，可能促使其他 AI 产品提供商也加强账户安全措施，建立用户信任。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来，多重验证和生物识别将成为 AI 产品用户安全保障的标配。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/45/d6/1b45d659-d8bf-94b0-dfa6-0449fc565333/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Google AI Edge Eloquent 上线，提供设备端智能听写",
    "market": "美国",
    "date": "2026-04-26",
    "type": "new app",
    "summary": [
      [
        {
          "text": "Google 推出了一款名为",
          "strong": false
        },
        {
          "text": "AI Edge Eloquent 的 iOS 应用",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "该应用利用 Google 最新的",
          "strong": false
        },
        {
          "text": "Gemma 模型，提供无限免费的设备端听写功能",
          "strong": true
        },
        {
          "text": "。它能够智能地将口语中的犹豫和口吃自动编辑掉，直接输出清晰、专业的文本。",
          "strong": false
        }
      ],
      [
        {
          "text": "所有机器学习处理都在",
          "strong": false
        },
        {
          "text": "本地设备上运行",
          "strong": true
        },
        {
          "text": "，确保用户隐私。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "该应用通过设备端 AI 处理，解决了传统听写软件准确性不足和隐私泄露的痛点",
          "strong": true
        },
        {
          "text": "，尤其对需要高质量文本输出的专业人士有巨大吸引力。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一趋势表明，高性能的端侧 AI 应用正变得可行",
          "strong": true
        },
        {
          "text": "，未来更多对隐私敏感或需要离线功能的场景将出现端侧 AI 解决方案。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Google AI Edge Eloquent App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/27/25/aa/2725aa84-35dd-9777-a191-91f21db50ac6/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-0-85-220.png/512x512bb.jpg",
      "alt": "Google AI Edge Eloquent App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Google AI Edge Eloquent App - App Store for iPhone",
      "sourceHref": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519",
      "note": "使用 Google AI Edge Eloquent 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Character.AI 全新对话模型 PipSqueak 2 向免费用户推出",
    "market": "美国",
    "date": "2026-05-01",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Character.AI 宣布推出全新模型",
          "strong": false
        },
        {
          "text": "PipSqueak 2 (PSQ2)",
          "strong": true
        },
        {
          "text": "，作为对现有 PipSqueak 模型的重大升级。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型在",
          "strong": false
        },
        {
          "text": "角色一致性、记忆与上下文理解以及写作质量方面均有显著提升",
          "strong": true
        },
        {
          "text": "，对话更自然、描述更精准。",
          "strong": false
        }
      ],
      [
        {
          "text": "PSQ2 已于 4 月 14 日向 c.ai+ 会员开放，并计划在",
          "strong": false
        },
        {
          "text": "5 月初逐步向所有免费用户推出",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Character.AI 作为领先的 AI 陪伴/社交平台，其核心竞争力在于模型的对话质量和角色塑造能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "向免费用户开放更强大的 PSQ2 模型，有望进一步提升用户体验和留存率",
          "strong": true
        },
        {
          "text": "，巩固其在市场中的地位。",
          "strong": false
        }
      ],
      [
        {
          "text": "这表明 AI 陪伴产品正持续通过模型迭代来深化用户的情感连接和互动质量，同时也在探索免费增值模式下的可持续发展。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "April Update: New Model, Memory, and Lorebook",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      }
    ]
  },
  {
    "name": "Rokid Hi Rokid AI 眼镜助手核心升级，引入 Gemini 模型能力",
    "market": "美国",
    "date": "2026-05-01",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Rokid 在其 AI 眼镜应用",
          "strong": false
        },
        {
          "text": "Hi Rokid (美国) 推出了核心 AI 助手升级",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次升级包括云服务架构优化，显著提升语音识别速度和准确率。AI 助手现在能",
          "strong": false
        },
        {
          "text": "调用工具",
          "strong": true
        },
        {
          "text": "（如将名片内容加入备忘录），支持连续对话打断。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，集成了",
          "strong": false
        },
        {
          "text": "Gemini 模型，大幅提升了视觉理解和智能体能力",
          "strong": true
        },
        {
          "text": "，减少幻觉。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "AI 眼镜作为重要的 AI 硬件入口，其核心竞争力在于 AI 助手的感知与交互能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid 此次将多模态大模型深度集成，显著增强了眼镜的“看懂”和“理解”世界的能力",
          "strong": true
        },
        {
          "text": "，使其在实际应用场景中更加实用和流畅。",
          "strong": false
        }
      ],
      [
        {
          "text": "这预示着",
          "strong": false
        },
        {
          "text": "AI 硬件正加速融合先进的多模态 AI 技术，以实现更自然的沉浸式交互体验",
          "strong": true
        },
        {
          "text": "，拓宽 AI 的物理边界。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Hi Rokid - Rokid Glasses App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2c/41/50/2c4150ce-6a0b-82db-210c-b540cee5596b/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
      "alt": "Hi Rokid - Rokid Glasses App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Hi Rokid - Rokid Glasses App - App Store for iPhone",
      "sourceHref": "https://apps.apple.com/us/app/hi-rokid/id6749669942",
      "note": "使用 Hi Rokid - Rokid Glasses 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Rokid AI 眼镜助手核心升级，引入国内多模态大模型能力",
    "market": "中国",
    "date": "2026-05-01",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Rokid 在其 AI 眼镜应用",
          "strong": false
        },
        {
          "text": "Rokid AI (中国) 推出了核心 AI 助手升级",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次升级包括云服务架构优化，显著提升语音识别速度和准确率，并支持部分方言识别。AI 助手现在能",
          "strong": false
        },
        {
          "text": "调用工具",
          "strong": true
        },
        {
          "text": "，支持连续对话打断。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，集成了",
          "strong": false
        },
        {
          "text": "通义千问 (Qwen3.6-plus)、智谱 (GLM-5v-turbo) 和豆包 (doubao 2.0) 等最新视觉与基础模型",
          "strong": true
        },
        {
          "text": "，大幅提升了视觉理解和智能体能力，减少幻觉。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "AI 眼镜作为重要的 AI 硬件入口，其核心竞争力在于 AI 助手的感知与交互能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid 此次将多模态大模型深度集成，显著增强了眼镜的“看懂”和“理解”世界的能力",
          "strong": true
        },
        {
          "text": "，使其在实际应用场景中更加实用和流畅。",
          "strong": false
        }
      ],
      [
        {
          "text": "这预示着",
          "strong": false
        },
        {
          "text": "AI 硬件正加速融合先进的多模态 AI 技术，以实现更自然的沉浸式交互体验",
          "strong": true
        },
        {
          "text": "，拓宽 AI 的物理边界。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2a/34/72/2a347299-cac0-90fb-9726-30440d047475/1040g3g831svff01vle2mecoj9s6j637s0us79to.png/392x696bb.png",
      "alt": "点点-你的ai生活小助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Rokid AI - 乐奇AI眼镜 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      "note": "使用 点点-你的ai生活小助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点 AI 生活助手全新上线小红书攻略模式",
    "market": "中国",
    "date": "2026-05-02",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "小红书旗下的 AI 生活助手“点点”在最新的版本中",
          "strong": false
        },
        {
          "text": "全新上线了“攻略模式”",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式",
          "strong": false
        },
        {
          "text": "基于小红书海量的真人经验数据",
          "strong": true
        },
        {
          "text": "，为用户生成专属的深度攻略。",
          "strong": false
        }
      ],
      [
        {
          "text": "功能涵盖",
          "strong": false
        },
        {
          "text": "旅行规划、生活兴趣、购物决策、美食探店、笔记总结和知识梳理",
          "strong": true
        },
        {
          "text": "等多个生活场景。用户可以通过语音或带图提问，快速获得个性化建议和解决方案。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "将 AI 助手与特定垂类内容生态（如小红书的用户生成内容）深度结合，是 AI 应用落地的有效途径。",
          "strong": false
        }
      ],
      [
        {
          "text": "点点利用小红书丰富的真实生活经验数据，提供了高度实用且个性化的生活辅助功能",
          "strong": true
        },
        {
          "text": "，解决了用户在信息获取和决策上的痛点。",
          "strong": false
        }
      ],
      [
        {
          "text": "这标志着 AI 助手正从通用问答向",
          "strong": false
        },
        {
          "text": "场景化、垂直化、经验化方向发展",
          "strong": true
        },
        {
          "text": "，通过结合特定数据优势，打造更具竞争力的产品。",
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
    "title": "AI Agent 成为通用应用主战场",
    "evidence": [
      {
        "text": "2026 年第一季度，OpenClaw 等 AI Agent 异常火爆。",
        "strong": false
      },
      {
        "text": "头部模型厂商的竞争焦点已从单一模型能力转向 Agent 系统和应用场景。",
        "strong": false
      },
      {
        "text": "从 Devin 到“龙虾”（Meta AI 负责人提及的一个复杂任务），一年半的变化显示 Agent 即将带来更多应用突破。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI Agent 被视为 AI 时代的“iPhone 时刻”",
        "strong": true
      },
      {
        "text": "，不仅 Agent 本身是巨大的机会，构建 Agent 的工具链也同样重要。",
        "strong": false
      }
    ]
  },
  {
    "title": "大模型竞争从算力走向平台和生态",
    "evidence": [
      {
        "text": "OpenAI 与 Anthropic 之间展开了“三重对阵”",
        "strong": false
      },
      {
        "text": "，不再仅仅是模型性能的较量，更是开发者生态、企业信任和成本效益的全面竞争。",
        "strong": false
      },
      {
        "text": "大公司纷纷投入“吃龙虾”式（指复杂任务）的 Agent 应用研发，预示着竞争焦点已从底层模型能力转向如何构建和驱动实际应用平台。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "传统编程助手如 Codex 可能是“会编程的弱智”",
        "strong": false
      },
      {
        "text": "，而 Claude Code 则更像是“驱策编程奴隶的主人”，强调模型与应用场景结合的重要性。",
        "strong": true
      }
    ]
  },
  {
    "title": "AI 自进化能力出现端倪，赋能更智能的开发模式",
    "evidence": [
      {
        "text": "AutoResearch 等项目已展现出",
        "strong": false
      },
      {
        "text": "AI 在明确目标的有限搜索空间内的“自进化”能力",
        "strong": true
      },
      {
        "text": "，这使得 AI 不仅能完成任务，还能自我优化和学习。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "持续学习领域出现了“贫穷版外挂”和“更新权重”的新探索",
        "strong": false
      },
      {
        "text": "，标志着 AI 开发正从传统的手动迭代向更智能、自动化方向发展。",
        "strong": true
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 高级账户安全功能上线、Google AI Edge Eloquent 上线，提供设备端智能听写，以及中国的 Rokid AI 眼镜助手核心升级，引入国内多模态大模型能力、点点 AI 生活助手全新上线小红书攻略模式，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "头部 AI 平台持续升级多模态创作能力，特别是图像生成和音乐创作。新模型提升了生成质量和精细控制能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "抖音、腾讯等大厂持续推出多模态 AI 创作工具，涵盖图片编辑、视频生成等，利用 Seedance 2.0 等先进模型，提供沉浸式创作体验。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "ai_assistant_search_us",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "Meta AI",
      "Gemini",
      "Google AI Edge Eloquent"
    ],
    "pattern": "头部厂商持续迭代通用 AI 助手功能，如更强的账户安全、模型选择优化、多模态能力增强及设备端部署，同时推出垂类助手如医疗专用版。",
    "opportunity": "通用 AI 助手在体验优化和垂直场景深耕上仍有空间；设备端 AI 助手在隐私和响应速度上有独特优势，是未来发展方向。",
    "watchNext": "Meta AI 与 Ray-Ban Meta 眼镜的深度整合进展，设备端 AI 助手的性能提升和应用场景扩展。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026"
      },
      {
        "label": "Introducing Muse Spark: Meta's Most Powerful Model Yet",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai_assistant_search_cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "头部 AI 助手在多模态能力和生态整合方面持续发力，但用户对产品体验和功能稳定性提出更高要求，部分 UI 改动可能引发用户反弹。",
    "opportunity": "提升核心功能的用户体验，特别是搜索和智能体管理，同时通过结合腾讯/字节/阿里生态提供独特价值。",
    "watchNext": "厂商如何回应用户反馈，以及不同平台在生态整合方面的进一步动作。",
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "千问 - 阿里AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE-%E9%98%BF%E9%87%8Cal%E5%8A%A9%E6%89%8B/id6450628312"
      }
    ]
  },
  {
    "id": "ai_education_us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Gizmo",
      "ChatGPT for Clinicians"
    ],
    "pattern": "AI 学习平台通过游戏化提升用户参与度，并在垂直领域（如医疗）推出专业级 AI 辅导工具。资本对用户增长快的 AI 教育产品表现出强劲兴趣 (Gizmo 获 $22M 融资)。",
    "opportunity": "结合游戏机制解决学生注意力分散问题，拓宽 AI 在专业知识学习和职业发展中的应用。",
    "watchNext": "Gizmo 在美国大学市场的扩张效果，以及更多细分领域 AI 学习工具的出现。",
    "sources": [
      {
        "label": "AI learning app Gizmo levels up with 13M users and a $22M investment | TechCrunch",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      },
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai_education_cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "千问智学",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "AI 教育产品深度融合大模型，提供拍题、批改作业、作文辅导、定制资料等全方位服务，旨在成为学生的免费 AI 家教。头部科技公司积极布局，争夺市场份额。",
    "opportunity": "在教学辅导、个性化学习和作业效率方面仍有巨大市场，尤其是在线教育与 AI 结合的模式。",
    "watchNext": "用户对 AI 家教的接受度和付费意愿，以及 AI 如何更好地融入 K12 教育体系。",
    "sources": [
      {
        "label": "千问智学 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_companion_social_us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "Character.AI",
      "Replika",
      "Series (融资 + 产品验证)"
    ],
    "pattern": "AI 社交产品通过模型升级增强角色一致性和记忆力，提供更自然、沉浸的对话体验。同时，创新型 AI 社交应用涌现，探索基于消息界面的社交模式 (Series 获 $5.1M 融资)。",
    "opportunity": "在满足用户情感陪伴需求的同时，探索 AI 在拓展人际连接、构建新型社交关系方面的潜力。",
    "watchNext": "AI 社交产品在个性化、多模态交互及用户生成内容方面的发展，以及其商业模式的成熟度。",
    "sources": [
      {
        "label": "April Update: New Model, Memory, and Lorebook",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Replika - AI Friend App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "Two college kids raise a $5.1 million pre-seed to build an AI social network in iMessage | TechCrunch",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      }
    ]
  },
  {
    "id": "ai_companion_social_cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "星野",
      "腾讯元宝 (元宝派)"
    ],
    "pattern": "AI 陪伴产品致力于通过多模态智能体和用户创建内容来丰富用户体验。同时，头部 AI 助手也开始探索内置社交/互动玩法，如“养龙虾”等，吸引年轻用户。",
    "opportunity": "提供更具情感深度、个性化和互动性的 AI 角色，同时探索 AI 在轻社交、陪伴游戏方面的潜力。",
    "watchNext": "用户对虚拟社交的接受程度，以及产品如何平衡技术创新与用户反馈，提升用户忠诚度。",
    "sources": [
      {
        "label": "星野-所建皆你所AI App - App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%8Bai/id6463076337"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_game_entertainment_us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "目前美国市场在特定时间窗内，缺乏明确的 AI 游戏或互动娱乐的头部产品发布或大规模融资信号。但 AI 社交产品在一定程度上提供互动娱乐体验。",
    "opportunity": "利用 AI 生成内容（NPC、剧情、玩法）来创造更沉浸和个性化的游戏体验；探索 AI 驱动的互动叙事和生成艺术。",
    "watchNext": "独立开发者或游戏大厂在 AI 游戏领域的创新尝试，以及生成式 AI 对游戏开发流程的影响。",
    "sources": []
  },
  {
    "id": "ai_game_entertainment_cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "星野",
      "腾讯元宝 (元宝派)"
    ],
    "pattern": "虽然没有纯粹的 AI 游戏应用，但部分 AI 陪伴/社交产品通过角色扮演和互动玩法（如腾讯元宝的“养龙虾”），为用户提供轻量级的互动娱乐体验。星野的智能体内容社区也包含虚拟角色和故事创作。",
    "opportunity": "探索 AI 在虚拟世界、角色扮演、互动剧情创作中的应用，满足用户对个性化和沉浸式娱乐的需求。",
    "watchNext": "中国游戏厂商如何将 AI 大模型融入游戏开发，以及 AI 驱动的互动内容社区的发展。",
    "sources": [
      {
        "label": "星野-所建皆你所AI App - App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%8Bai/id6463076337"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_creation_us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT Images 2.0",
      "Gemini Lyria 3 Pro"
    ],
    "pattern": "头部 AI 平台持续升级多模态创作能力，特别是图像生成和音乐创作。新模型提升了生成质量和精细控制能力。",
    "opportunity": "降低专业创作门槛，赋能普通用户进行图像、音乐等创意表达；探索 AI 辅助创作在电影、游戏等专业领域的应用。",
    "watchNext": "AI 创作工具在长内容生成、多模态融合创作以及版权归属方面的进展。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026"
      }
    ]
  },
  {
    "id": "ai_creation_cn",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "即梦AI",
      "豆包 (P图、视频生成)",
      "腾讯元宝 (AI绘图、视频生成)"
    ],
    "pattern": "抖音、腾讯等大厂持续推出多模态 AI 创作工具，涵盖图片编辑、视频生成等，利用 Seedance 2.0 等先进模型，提供沉浸式创作体验。",
    "opportunity": "在短视频、社交媒体内容创作领域有巨大潜力，满足用户快速、低门槛生成高质量内容的需求。",
    "watchNext": "AI 创作工具如何与现有创作生态（如抖音、剪映）深度整合，以及用户对生成内容质量和真实性的接受度。",
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
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_productivity_us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "Granola (融资 + 产品验证)",
      "ChatGPT (Outlook Integration)",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI 办公工具从单一功能（如会议记录）向企业级应用扩展，提供团队协作和 API 整合能力。头部 AI 助手也强化了与邮件、日历等传统办公工具的连接，同时出现高效的设备端听写工具。",
    "opportunity": "AI 在企业协作、数据管理和自动化工作流方面有巨大潜力，尤其是在开放 API 和 Agentic 工作流方面。",
    "watchNext": "Granola 等产品在企业市场的渗透率，以及更多 AI Agent 整合办公工具的出现。",
    "sources": [
      {
        "label": "Granola raises $125M, hits $1.5B valuation as it expands from meeting notetaker to enterprise AI app | TechCrunch",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      },
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai_productivity_cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "国内 AI 助手在学习、工作和生活场景中提供全能辅助，涵盖资料总结、数据分析、代码编写、文档生成等，旨在提升个人和团队效率。录音笔、文档精读等专业工具逐渐成熟。",
    "opportunity": "在文档处理、会议纪要、编程辅助和跨应用协作方面仍有创新空间，尤其是结合本地化办公软件生态。",
    "watchNext": "国内 AI 助手如何与企业微信、飞书等办公套件深度整合，以及多模态在办公场景中的应用。",
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_life_tools_us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Gemini",
      "ChatGPT"
    ],
    "pattern": "头部 AI 助手通过集成用户个人数据（如邮件、照片、视频）提供个性化的生活规划和信息获取服务。快速问答功能提高了通用信息获取效率。",
    "opportunity": "在健康管理、智能家居、个性化推荐等更多生活场景中拓展应用，通过 Agent 提升自动化和主动服务能力。",
    "watchNext": "AI 生活工具如何更好地理解用户意图并主动提供帮助，以及与更多第三方生活服务平台的整合。",
    "sources": [
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026"
      },
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai_life_tools_cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "点点",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "AI 生活工具与特定内容平台（如小红书）深度结合，提供高度定制化的攻略和决策支持。同时，通用 AI 助手也集成了图片识别、翻译等实用生活功能。",
    "opportunity": "在旅游出行、购物消费、美食探店等高频生活场景中提供更智能、便捷的服务，打造基于用户 UGC 的 AI 生活助手。",
    "watchNext": "点点等产品在内容整合和推荐准确性上的表现，以及更多生活服务垂类 AI 应用的出现。",
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai_hardware_us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta AI glasses",
      "Rokid Hi Rokid"
    ],
    "pattern": "Meta 和 Rokid 等公司持续在 AI 眼镜领域投入，通过集成更强大的多模态 AI 模型，提升设备的感知和交互能力，使其成为更自然的 AI 入口。更新迭代频繁，用户体验逐步提升。",
    "opportunity": "探索 AI 眼镜在日常增强现实、实时翻译、信息获取和智能助手交互等方面的潜力，推动 AI 从手机向更自然的硬件形态扩展。",
    "watchNext": "AI 眼镜在交互范式上的创新，以及用户对可穿戴 AI 设备隐私和社交接受度的变化。",
    "sources": [
      {
        "label": "Introducing Muse Spark: Meta's Most Powerful Model Yet",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Hi Rokid - Rokid Glasses App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "id": "ai_hardware_cn",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid AI 眼镜"
    ],
    "pattern": "Rokid 在中国市场积极推动 AI 眼镜的更新和应用，通过集成国内主流大模型（如通义千问、豆包、智谱），强化 AI 助手能力，并拓展城市伴游、抖音直播等本土化功能。",
    "opportunity": "结合中国本地化生态和用户需求，探索 AI 眼镜在旅游、社交、生活服务等场景的独特价值。",
    "watchNext": "Rokid 在中国市场的用户增长和生态建设，以及其他本土厂商在 AI 硬件领域的布局。",
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "美国 AI 消费产品一周要点回顾 (2026-04-27 至 2026-05-04)",
    "bullets": [
      [
        {
          "text": "OpenAI ChatGPT 推出",
          "strong": false
        },
        {
          "text": "高级账户安全设置",
          "strong": true
        },
        {
          "text": "，加强用户数据保护，并",
          "strong": false
        },
        {
          "text": "优化了模型选择界面",
          "strong": true
        },
        {
          "text": "，提升易用性。",
          "strong": false
        }
      ],
      [
        {
          "text": "Google 发布",
          "strong": false
        },
        {
          "text": "AI Edge Eloquent 应用",
          "strong": true
        },
        {
          "text": "，主打",
          "strong": false
        },
        {
          "text": "设备端智能听写",
          "strong": true
        },
        {
          "text": "，利用 Gemma 模型实现离线、隐私保护的专业文本输出。",
          "strong": false
        }
      ],
      [
        {
          "text": "Character.AI 的",
          "strong": false
        },
        {
          "text": "PipSqueak 2 新模型开始向免费用户全面推出",
          "strong": true
        },
        {
          "text": "，显著提升 AI 角色对话一致性、记忆力和写作质量，增强用户陪伴体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid Hi Rokid 应用更新，其",
          "strong": false
        },
        {
          "text": "AI 眼镜助手核心升级，整合 Gemini 模型",
          "strong": true
        },
        {
          "text": "，提升语音识别和视觉理解能力，为 AI 硬件入口带来更自然的交互。",
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
        "label": "Google AI Edge Eloquent App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "April Update: New Model, Memory, and Lorebook",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Hi Rokid - Rokid Glasses App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "title": "ChatGPT 高级账户安全功能上线",
    "bullets": [
      [
        {
          "text": "OpenAI 为个人 ChatGPT 账户推出了可选的",
          "strong": false
        },
        {
          "text": "“高级账户安全”设置",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能旨在通过",
          "strong": false
        },
        {
          "text": "更强的登录要求和账户保护措施",
          "strong": true
        },
        {
          "text": "，减少账户被盗、未经授权访问和数据泄露的风险。",
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
    "title": "Google AI Edge Eloquent 上线，提供设备端智能听写",
    "bullets": [
      [
        {
          "text": "Google 推出了一款名为",
          "strong": false
        },
        {
          "text": "AI Edge Eloquent 的 iOS 应用",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "该应用利用 Google 最新的",
          "strong": false
        },
        {
          "text": "Gemma 模型，提供无限免费的设备端听写功能",
          "strong": true
        },
        {
          "text": "。它能够智能地将口语中的犹豫和口吃自动编辑掉，直接输出清晰、专业的文本。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Google AI Edge Eloquent App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "title": "Character.AI 全新对话模型 PipSqueak 2 向免费用户推出",
    "bullets": [
      [
        {
          "text": "Character.AI 宣布推出全新模型",
          "strong": false
        },
        {
          "text": "PipSqueak 2 (PSQ2)",
          "strong": true
        },
        {
          "text": "，作为对现有 PipSqueak 模型的重大升级。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型在",
          "strong": false
        },
        {
          "text": "角色一致性、记忆与上下文理解以及写作质量方面均有显著提升",
          "strong": true
        },
        {
          "text": "，对话更自然、描述更精准。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "April Update: New Model, Memory, and Lorebook",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      }
    ]
  },
  {
    "title": "Rokid Hi Rokid AI 眼镜助手核心升级，引入 Gemini 模型能力",
    "bullets": [
      [
        {
          "text": "Rokid 在其 AI 眼镜应用",
          "strong": false
        },
        {
          "text": "Hi Rokid (美国) 推出了核心 AI 助手升级",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次升级包括云服务架构优化，显著提升语音识别速度和准确率。AI 助手现在能",
          "strong": false
        },
        {
          "text": "调用工具",
          "strong": true
        },
        {
          "text": "（如将名片内容加入备忘录），支持连续对话打断。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Hi Rokid - Rokid Glasses App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "中国 AI 消费产品一周要点回顾 (2026-04-27 至 2026-05-04)",
    "bullets": [
      [
        {
          "text": "小红书旗下点点 AI 生活助手全新上线",
          "strong": false
        },
        {
          "text": "“攻略模式”",
          "strong": true
        },
        {
          "text": "，基于小红书真人经验，为用户提供旅行、购物等生活场景的深度定制化解决方案。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid AI 眼镜应用更新，其",
          "strong": false
        },
        {
          "text": "AI 助手核心升级，引入通义千问、豆包、智谱等国内主流大模型",
          "strong": true
        },
        {
          "text": "，增强了 AI 眼镜的视觉理解和智能体能力，并新增城市伴游等本土化功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "抖音旗下即梦AI推出",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，进一步提升多模态创作体验，加强了其在图片和视频生成领域的竞争力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App - App Store for iPhone",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "Rokid AI 眼镜助手核心升级，引入国内多模态大模型能力",
    "bullets": [
      [
        {
          "text": "Rokid 在其 AI 眼镜应用",
          "strong": false
        },
        {
          "text": "Rokid AI (中国) 推出了核心 AI 助手升级",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次升级包括云服务架构优化，显著提升语音识别速度和准确率，并支持部分方言识别。AI 助手现在能",
          "strong": false
        },
        {
          "text": "调用工具",
          "strong": true
        },
        {
          "text": "，支持连续对话打断。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "title": "点点 AI 生活助手全新上线小红书攻略模式",
    "bullets": [
      [
        {
          "text": "小红书旗下的 AI 生活助手“点点”在最新的版本中",
          "strong": false
        },
        {
          "text": "全新上线了“攻略模式”",
          "strong": true
        },
        {
          "text": "。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式",
          "strong": false
        },
        {
          "text": "基于小红书海量的真人经验数据",
          "strong": true
        },
        {
          "text": "，为用户生成专属的深度攻略。",
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
  },
  {
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "抖音、腾讯等大厂持续推出多模态 AI 创作工具，涵盖图片编辑、视频生成等，利用 Seedance 2.0 等先进模型，提供沉浸式创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "在短视频、社交媒体内容创作领域有巨大潜力，满足用户快速、低门槛生成高质量内容的需求。",
          "strong": false
        }
      ]
    ],
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
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：中国方向信号",
    "bullets": [
      [
        {
          "text": "头部 AI 助手在多模态能力和生态整合方面持续发力，但用户对产品体验和功能稳定性提出更高要求，部分 UI 改动可能引发用户反弹。",
          "strong": false
        }
      ],
      [
        {
          "text": "提升核心功能的用户体验，特别是搜索和智能体管理，同时通过结合腾讯/字节/阿里生态提供独特价值。",
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
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "千问 - 阿里AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE-%E9%98%BF%E9%87%8Cal%E5%8A%A9%E6%89%8B/id6450628312"
      }
    ]
  }
];
