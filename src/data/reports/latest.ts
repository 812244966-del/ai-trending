import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-10-26";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT推出“锁定对话”功能",
    "market": "美国",
    "date": "2026-10-20",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT发布了名为“锁定对话”（locked chats）的新功能，允许用户选择性地隐藏特定对话。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些锁定的对话将从常规聊天历史、置顶聊天和搜索中隐藏，但仍保留在用户账户中。",
          "strong": false
        },
        {
          "text": "用户可以通过4位账户PIN码或支持的设备身份验证来访问这些对话。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能正在逐步向所有付费和免费用户推出，覆盖网页端、iOS和Android应用以及新的macOS和Windows桌面应用。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此功能显著提升了用户对个人对话的隐私控制，特别适用于涉及敏感信息或需保密的讨论场景。",
          "strong": true
        }
      ],
      [
        {
          "text": "它反映了AI助手在日益普及的同时，对用户数据安全和隐私管理需求的响应，有助于建立用户信任。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来可观察该功能如何影响用户在个人和专业场景中对AI助手的深度使用，以及其他AI产品是否会跟进类似隐私保护措施。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e2/d4/88/e2d488ce-9162-60ae-2cc5-4dd588a25002/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT新增演示文稿创建与协作功能",
    "market": "美国",
    "date": "2026-10-16",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT推出了名为“ChatGPT Slides”的新功能，允许用户在Space中创建和协作演示文稿。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以从对话、文件或大纲开始，可以直接编辑文本、图像、形状和图表，或要求ChatGPT进行修改，并生成自定义图像。",
          "strong": false
        }
      ],
      [
        {
          "text": "团队成员可以实时协作编辑同一演示文稿并留下共享评论。完成后可直接从ChatGPT进行演示，或导出为PowerPoint、PDF或Google Slides。此功能面向符合条件的Pro、Business和Enterprise用户推出。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这将显著提升团队在工作场景下的效率，尤其是对需要频繁制作演示文稿的职场人士和学生。",
          "strong": true
        }
      ],
      [
        {
          "text": "它标志着AI助手从单一的文本生成工具向多模态、协作式生产力平台的演进，进一步模糊了传统办公软件与AI工具的界限。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需要关注其在实际团队协作中的表现，以及对现有演示文稿工具市场格局的影响。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e2/d4/88/e2d488ce-9162-60ae-2cc5-4dd588a25002/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "字节跳动旗下即梦AI上线Seedance 2.5模型，支持30秒超长视频",
    "market": "中国",
    "date": "2026-10-26",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "字节跳动旗下的AI图片和视频工具“即梦AI”上线了全新的Seedance 2.5模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新最大亮点是支持生成长达30秒的超长视频，大幅提升了视频创作的时长和表现力。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能已在即梦AIApp上线，旨在为创意爱好者提供更强大的视频创作能力。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance 2.5模型的推出大大拓宽了AI视频创作的叙事空间和表现力，使用户能够制作更完整、更具故事性的内容，满足了短视频平台用户对高质量、长时长AI生成视频的需求。",
          "strong": true
        }
      ],
      [
        {
          "text": "这表明中国市场在AI视频生成领域正持续投入，不断提升模型能力以支持更复杂的创作需求，为普通用户和创作者带来了更多便利和可能性。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来可观察Seedance 2.5在用户中的普及程度和实际应用效果，以及它如何进一步推动AI视频生成技术在短视频生态中的融合。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/be/5e/a1/be5ea172-87c5-9e74-72aa-4bcc92d0fde4/osPAIBFLXQADGTAAaVm2GXAOH4ylGefEGeSUvx.jpg/320x480bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Rokid AI眼镜App新增打车功能，深化生活服务集成",
    "market": "中国",
    "date": "2026-10-19",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "Rokid AI眼镜的配套应用更新至v1.15.0，新增了打车功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能与腾讯出行服务合作，用户可以通过语音指令“乐奇，打车去xxx”直接叫车。",
          "strong": false
        }
      ],
      [
        {
          "text": "此更新进一步将AI眼镜融入日常出行场景，提升了其作为生活助手的实用性。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "将打车服务集成到AI眼镜中，为用户提供了更便捷、无缝的出行体验，无需掏出手机即可完成叫车，尤其适用于双手不便或追求沉浸式体验的场景。",
          "strong": true
        }
      ],
      [
        {
          "text": "这体现了中国市场AI硬件厂商正在积极探索与本地生活服务生态的深度融合，通过开放合作拓宽AI硬件的应用边界和用户价值。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需关注此类生活服务集成在AI硬件上的用户接受度，以及未来是否会有更多本地化服务接入，形成更丰富的生态。",
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
    "name": "腾讯元宝App支持引用提问，提升多轮对话效率",
    "market": "中国",
    "date": "2026-10-23",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝App在最新版本（v2.90.0，随后v2.90.10）中，新增了支持引用提问的功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户现在可以选中AI回答中的特定文字进行追问，使讨论更加聚焦。",
          "strong": false
        }
      ],
      [
        {
          "text": "此功能旨在优化用户在与AI进行复杂多轮对话时的交互体验和效率。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "引用提问功能显著提升了多轮对话的精准度和效率，减少了用户重复解释上下文的需求，让AI助手能够更准确地理解用户的意图，带来更流畅的交互体验。",
          "strong": true
        }
      ],
      [
        {
          "text": "这反映了AI助手产品在持续优化核心对话能力，从简单的问答向更深层、更上下文感知的交互模式发展，以满足用户在复杂任务处理中的需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能有望提高用户对AI助手的依赖性和满意度，未来其他竞品也可能效仿，进一步提升通用AI助手的实用性。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bb/34/0f/bb340f7c-eb86-da2f-9db3-26f4bd94955d/95c80fa7ed5624d2ed940bb54a256b22_1.jpg/320x480bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI助手产品普遍走向更深度、多模态的集成与协作",
    "evidence": [
      {
        "text": "ChatGPT推出",
        "strong": true
      },
      {
        "text": "Slides功能，支持用户直接在聊天中创建和协作演示文稿，并更新GPT-6 Pro模型，提升插件工具使用和多智能体并行任务处理能力。",
        "strong": false
      },
      {
        "text": "腾讯元宝新增引用提问功能，优化多轮对话体验，同时提供文档精读、拍题答疑等能力。",
        "strong": true
      },
      {
        "text": "Meta AI也在其应用和智能眼镜中整合了Muse Spark，提供更智能的语音交互、实时图像识别和购物功能。",
        "strong": true
      }
    ],
    "comparison": [
      {
        "text": "无论是美国市场的ChatGPT还是中国市场的腾讯元宝和豆包，AI助手都超越了简单的问答，开始深度集成办公、学习、创作等多模态功能。",
        "strong": false
      },
      {
        "text": "美国产品更强调工作流中的协作和隐私控制（如ChatGPT的Slides和锁定对话），而中国产品则更注重本地生活服务（如元宝的旅游饮食助手）和更自然高效的对话交互。",
        "strong": false
      },
      {
        "text": "这种趋势预示着AI助手将成为个人和团队工作、生活中的“中枢”，而非仅仅是辅助工具。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI硬件加速与本地生活服务及创作生态的融合",
    "evidence": [
      {
        "text": "Rokid AI眼镜App近期更新，新增与腾讯出行合作的打车功能，并优化会议纪要体验，支持照片同步理解。",
        "strong": true
      },
      {
        "text": "Meta AI眼镜也在逐步推广Muse Spark模型，提供更智能的语音和视觉交互能力，包括实时图像识别、购物等。",
        "strong": true
      }
    ],
    "comparison": [
      {
        "text": "中美两国在AI硬件入口的探索上，都呈现出将AI与现实生活场景深度结合的趋势。",
        "strong": false
      },
      {
        "text": "中国市场的Rokid更快地将AI眼镜与出行、支付等本地化服务打通，旨在提供无缝的日常便利。",
        "strong": true
      },
      {
        "text": "美国市场虽然也有Meta AI眼镜的持续铺开，但其重点更多在于增强型感知和通用AI交互，逐步拓展实用场景，相对更加谨慎。",
        "strong": false
      },
      {
        "text": "这种差异可能反映了两国在消费市场和基础设施建设上的不同侧重。",
        "strong": false
      }
    ]
  },
  {
    "title": "生成式AI在多模态创作领域的迭代加速",
    "evidence": [
      {
        "text": "字节跳动旗下即梦AI上线Seedance 2.5模型，支持生成30秒超长视频，大幅提升了视频创作的时长和表现力。",
        "strong": true
      },
      {
        "text": "OpenAI的ChatGPT也推出了GPT-6 with Intelligent UI，能结合文本、视觉和互动元素生成内容，并支持在对话中直接使用计算器等工具。",
        "strong": true
      }
    ],
    "comparison": [
      {
        "text": "中美两国在AI创作领域均加速了多模态模型的迭代，特别是视频生成方面，正从短片段向更长、更复杂的叙事能力迈进。",
        "strong": false
      },
      {
        "text": "中国的产品如即梦AI通过提升视频生成时长来满足短视频生态的需求，强调内容的丰富性和用户参与度。",
        "strong": true
      },
      {
        "text": "美国的产品如ChatGPT则更注重交互体验的智能化和多工具的集成，旨在提升创作过程的灵活性和效率。",
        "strong": false
      },
      {
        "text": "这表明双方都在推动AI创作从技术演示走向实用化和生产力工具，以赋能更广泛的创作者群体。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT推出“锁定对话”功能、ChatGPT新增演示文稿创建与协作功能，以及中国的 字节跳动旗下即梦AI上线Seedance 2.5模型，支持30秒超长视频、Rokid AI眼镜App新增打车功能，深化生活服务集成，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "美国AI 创作方向本期暂无足够可验证的新信号。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国AI 创作方向本期暂无足够可验证的新信号。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "ai-助手-搜索-美国",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国AI 助手/搜索方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-助手-搜索-中国",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国AI 助手/搜索方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-教育-学习-美国",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国AI 教育/学习方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-教育-学习-中国",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国AI 教育/学习方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-陪伴-情感-社交-美国",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国AI 陪伴/情感/社交方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-陪伴-情感-社交-中国",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国AI 陪伴/情感/社交方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-游戏-互动娱乐-美国",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国AI 游戏/互动娱乐方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-游戏-互动娱乐-中国",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国AI 游戏/互动娱乐方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-创作-美国",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国AI 创作方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-创作-中国",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国AI 创作方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-效率-办公-美国",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国AI 效率/办公方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-效率-办公-中国",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国AI 效率/办公方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-生活工具-美国",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国AI 生活工具方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-生活工具-中国",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国AI 生活工具方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-硬件入口-美国",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国AI 硬件入口方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  },
  {
    "id": "ai-硬件入口-中国",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国AI 硬件入口方向本期暂无足够可验证的新信号。",
    "opportunity": "先保持观察，等待更明确的消费者级发布或分发变化。",
    "watchNext": "继续跟踪官方发布、应用商店排名和代表产品更新。",
    "sources": []
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "ChatGPT持续强化生产力与隐私控制",
    "bullets": [
      [
        {
          "text": "OpenAI在本周为ChatGPT推出了多项重要更新。",
          "strong": false
        },
        {
          "text": "新上线的“锁定对话”功能（Locked Chats）允许用户将选定的对话隐藏起来，并通过PIN码或设备认证访问，",
          "strong": true
        },
        {
          "text": "显著提升了用户对隐私对话的控制力。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，",
          "strong": true
        },
        {
          "text": "ChatGPT Slides功能支持在Space中创建和实时协作演示文稿，并能导出为多种格式。",
          "strong": true
        },
        {
          "text": "GPT-6 Pro模型也得到更新，带来了更快的响应速度、更优的插件工具使用和多智能体并行任务处理能力。",
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
    "title": "AI在生产力工具和辅助功能方面取得进展",
    "bullets": [
      [
        {
          "text": "除了核心聊天功能的增强，ChatGPT还引入了",
          "strong": true
        },
        {
          "text": "GPT-Live-1.1模型和新的语音选项，以提供更自然的跨语言交流体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "它还支持音频上传，可以将会议、采访或讲座转录、总结并进行内容提问，",
          "strong": true
        },
        {
          "text": "极大地提高了信息处理效率。",
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
    "title": "ChatGPT推出“锁定对话”功能",
    "bullets": [
      [
        {
          "text": "ChatGPT发布了名为“锁定对话”（locked chats）的新功能，允许用户选择性地隐藏特定对话。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些锁定的对话将从常规聊天历史、置顶聊天和搜索中隐藏，但仍保留在用户账户中。",
          "strong": false
        },
        {
          "text": "用户可以通过4位账户PIN码或支持的设备身份验证来访问这些对话。",
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
    "title": "ChatGPT新增演示文稿创建与协作功能",
    "bullets": [
      [
        {
          "text": "ChatGPT推出了名为“ChatGPT Slides”的新功能，允许用户在Space中创建和协作演示文稿。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以从对话、文件或大纲开始，可以直接编辑文本、图像、形状和图表，或要求ChatGPT进行修改，并生成自定义图像。",
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
    "title": "AI 创作：美国方向信号",
    "bullets": [
      [
        {
          "text": "美国AI 创作方向本期暂无足够可验证的新信号。",
          "strong": false
        }
      ],
      [
        {
          "text": "先保持观察，等待更明确的消费者级发布或分发变化。",
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
    "title": "中国AI产品深化多模态创作与生活服务集成",
    "bullets": [
      [
        {
          "text": "本周中国市场在AI创作和AI硬件集成方面表现活跃。",
          "strong": false
        },
        {
          "text": "字节跳动旗下",
          "strong": true
        },
        {
          "text": "即梦AI上线了Seedance 2.5模型，支持生成长达30秒的超长视频，",
          "strong": true
        },
        {
          "text": "显著提升了AI视频的叙事能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，",
          "strong": true
        },
        {
          "text": "Rokid AI眼镜App新增了与腾讯出行合作的打车功能，",
          "strong": true
        },
        {
          "text": "进一步将AI硬件融入日常出行场景，提供了更便捷的语音叫车体验。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%92%9A%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "AI助手持续优化交互体验和功能覆盖",
    "bullets": [
      [
        {
          "text": "腾讯元宝App更新后支持引用提问，",
          "strong": true
        },
        {
          "text": "用户可选中AI回答中的文字进行追问，大幅提高了多轮对话的精准度和效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，元宝还对录音总结和视觉体验进行了升级，豆包也持续迭代其工作任务模式和生活服务能力，",
          "strong": true
        },
        {
          "text": "显示出国内AI助手在提升用户交互体验和扩展功能覆盖上的不懈努力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "title": "字节跳动旗下即梦AI上线Seedance 2.5模型，支持30秒超长视频",
    "bullets": [
      [
        {
          "text": "字节跳动旗下的AI图片和视频工具“即梦AI”上线了全新的Seedance 2.5模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新最大亮点是支持生成长达30秒的超长视频，大幅提升了视频创作的时长和表现力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "Rokid AI眼镜App新增打车功能，深化生活服务集成",
    "bullets": [
      [
        {
          "text": "Rokid AI眼镜的配套应用更新至v1.15.0，新增了打车功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能与腾讯出行服务合作，用户可以通过语音指令“乐奇，打车去xxx”直接叫车。",
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
    "title": "腾讯元宝App支持引用提问，提升多轮对话效率",
    "bullets": [
      [
        {
          "text": "腾讯元宝App在最新版本（v2.90.0，随后v2.90.10）中，新增了支持引用提问的功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户现在可以选中AI回答中的特定文字进行追问，使讨论更加聚焦。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  }
];
