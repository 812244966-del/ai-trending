import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-10-19";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 推出演示文稿制作和协作功能 (Slides)",
    "market": "美国",
    "date": "2026-10-16",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中推出了全新的 Slides 功能，允许 Pro、Business 和 Enterprise 用户在 Space 工作区内直接创建和协作演示文稿。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过对话、文件或大纲启动演示文稿制作，也可以上传示例幻灯片来指导风格和布局。该功能支持直接编辑文本、图像、形状和图表，并可邀请团队成员实时协作和评论。",
          "strong": false
        }
      ],
      [
        {
          "text": "完成的演示文稿可以直接在 ChatGPT 中展示，或导出为 PowerPoint、PDF 或 Google Slides 格式（桌面应用支持直接在 PowerPoint 或 Keynote 中打开）。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这项功能极大扩展了 ChatGPT 在专业工作流中的应用，特别是对于需要频繁制作和协作演示文稿的商业和企业用户。",
          "strong": false
        }
      ],
      [
        {
          "text": "它标志着 AI 助手从单纯的文本生成工具，向更复杂的、多模态的、集成协作能力的生产力平台演进，提升了用户从构思到成品的全链路效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来可观察该功能如何进一步集成其他 AI 创作能力，以及其在企业级应用中的普及度和用户反馈。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
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
    "name": "ChatGPT GPT-6 Pro 模型升级：更快响应与多智能体并行处理",
    "market": "美国",
    "date": "2026-10-16",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "ChatGPT 的 GPT-6 Pro 模型获得了重大更新，主要提升包括更快的响应速度和改进的插件与工具使用能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "最值得注意的是，新版本引入了多智能体并行处理任务的功能。这意味着 AI 可以将一个复杂任务分解为多个部分，并由不同的智能体同时执行，用户可以在对话中追踪它们的进展。",
          "strong": false
        }
      ],
      [
        {
          "text": "此更新目前正面向符合条件的 Pro 用户逐步推出。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "多智能体并行处理代表着 AI 助手迈向更高级自治和复杂任务管理的关键一步，能够显著提升用户在处理复杂项目时的效率和体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "通过并行执行和进度可视化，用户可以更好地理解 AI 的工作方式，并减少等待时间，这对于高强度使用场景尤其有价值。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需观察多智能体系统在实际复杂任务中的稳定性和效果，以及其对通用 Agent 发展的影响。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
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
    "name": "腾讯元宝 2.89.0 版本更新：录音总结与视觉体验全面升级",
    "market": "中国",
    "date": "2026-10-16",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝发布 2.89.0 版本更新，带来了录音总结功能的显著提升和视觉体验的全面优化。",
          "strong": false
        }
      ],
      [
        {
          "text": "新版支持在录音过程中查看阶段性重点，并在结束后自动生成完整的总结。同时，界面设计更加清爽，功能更易查找，Agent 能力获得增强，并支持将文件导出为 PDF、DOCX 等常用格式，方便微信分享。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新体现了元宝在多模态输入处理和用户工作流集成方面的持续投入。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "增强的录音总结功能和多格式文件导出，极大地提升了用户在会议、访谈、学习等场景下的信息处理和分享效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "结合腾讯生态的深度集成（如微信分享），元宝正逐步成为一个更加无缝和高效的个人及办公 AI 助手，尤其符合中国用户的协作习惯。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来值得关注元宝 Agent 能力在复杂任务中的表现，以及与其他腾讯系应用的进一步联动。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/80/cc/77/80cc77eb-85fe-58bd-a0ac-4d9d64a0cc02/d70ce9940f73eaad66210721e467670d_1.jpg/320x480bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "‎元宝-腾讯全能AI助手 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI 全新 Seedance 2.5 模型上线，支持 30 秒超长视频直出",
    "market": "中国",
    "date": "2026-10-15",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下 AI 图片和视频工具即梦AI，于近日上线了全新 Seedance 2.5 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新的最大亮点是支持生成长达 30 秒的超长视频，相比之前极大地扩展了视频创作的时长限制。",
          "strong": false
        }
      ],
      [
        {
          "text": "此功能旨在满足用户对更具叙事性和表现力 AI 生成视频的需求。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "30 秒超长视频的生成能力显著降低了用户制作复杂视频内容的门槛，使得 AI 视频创作更具实用性和艺术表现力，有望催生更多创意应用场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "这标志着 AIGC 在视频生成领域的技术成熟度进一步提升，也反映了中国市场对短视频内容创作工具的旺盛需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需关注 Seedance 2.5 在视频质量、风格控制、多模态输入（如文本+图像+音频）方面的实际表现，以及用户如何利用这一能力进行创新。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "‎即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/be/5e/a1/be5ea172-87c5-9e74-72aa-4bcc92d0fde4/osPAIBFLXQADGTAAaVm2GXAOH4ylGefEGeSUvx.jpg/320x480bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "‎即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Rokid AI 眼镜新增打车功能，与腾讯出行服务合作",
    "market": "中国",
    "date": "2026-10-19",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "Rokid AI 眼镜配套应用 Rokid AI 推出 1.15.0 版本更新，新增了打车功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "此功能通过与腾讯出行服务合作实现，用户可在主页选择“打车”并绑定账号后，通过语音指令“乐奇，打车去xxx”即可直接叫车。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，新版本还优化了会议纪要体验，进一步提升了实用性。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "将打车服务集成到 AI 眼镜中，标志着 AI 硬件入口在日常生活场景中的深度渗透，为用户提供了更加便捷、无感知的出行体验，体现了AI硬件与生活服务的融合趋势。",
          "strong": false
        }
      ],
      [
        {
          "text": "与腾讯出行服务的合作，利用了现有成熟的生态服务，加速了 AI 硬件的功能落地，也展现了国内头部互联网公司在 AI 硬件生态布局中的协同效应。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来可观察其他生活服务（如支付、导航、购物）在 AI 眼镜中的集成情况，以及用户对其便捷性和隐私性的接受度。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "‎Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/db/a2/34dba249-1368-a60e-7eef-760f9c1f6410/_U5bb9_U5668_15013@1x.jpg/320x480bb.jpg",
      "alt": "Rokid AI - 乐奇AI眼镜 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "‎Rokid AI - 乐奇AI眼镜 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564",
      "note": "使用 Rokid AI - 乐奇AI眼镜 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 推出 GPT-Live-1.1 模型和多语言新语音",
    "market": "美国",
    "date": "2026-10-15",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI 在 ChatGPT Voice 中推出了 GPT-Live-1.1 模型及其迷你版本 GPT-Live-1.1 Quip，显著提升了语音交互的自然度和流畅性。",
          "strong": false
        }
      ],
      [
        {
          "text": "新模型支持更自然的口音，并扩大了搜索时使用的短语范围，让对话体验更像真人。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，新增了法语、德语、印地语、日语、韩语和墨西哥西班牙语等多种语言的 Live 语音选项，以及英文 Bubbie 语音。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "更自然、多语言的语音交互能力，极大地提升了用户与 AI 沟通的沉浸感和便捷性，降低了语言障碍，使得 AI 助手在全球范围内的普及和使用体验更佳。",
          "strong": false
        }
      ],
      [
        {
          "text": "这反映了 AI 语音技术正向更精细化、个性化的方向发展，以满足用户对“类人”交互体验的更高期待，尤其是在国际化和多语言支持方面。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来可观察这些新语音在用户接受度、不同文化背景下的适应性，以及它们如何促进 AI 语音应用进一步拓展市场。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
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
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI 助手向多模态、Agent 化和生态集成方向深化",
    "evidence": [
      {
        "text": "美国 OpenAI ChatGPT 的 GPT-6 Pro 模型更新，引入了",
        "strong": false
      },
      {
        "text": "多智能体并行处理任务",
        "strong": true
      },
      {
        "text": "的能力，显著提升复杂任务效率。同时，",
        "strong": false
      },
      {
        "text": "GPT-Live-1.1 带来更自然的语音交互和多语言支持",
        "strong": true
      },
      {
        "text": "。",
        "strong": false
      },
      {
        "text": "中国腾讯元宝 2.89.0 版本",
        "strong": false
      },
      {
        "text": "升级了录音总结与视觉体验，Agent 能力也获得增强，并深度集成了腾讯生态服务",
        "strong": true
      },
      {
        "text": "，如文件导出和微信分享。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美头部 AI 助手都在朝着",
        "strong": false
      },
      {
        "text": "更智能、更主动的 Agent 能力演进",
        "strong": true
      },
      {
        "text": "，通过多模态（语音、视觉）输入和输出，以及深度融入平台生态，提供更无缝、更强大的用户体验。",
        "strong": false
      },
      {
        "text": "美国在通用 Agent 技术探索上可能更为前沿，而中国则更侧重于",
        "strong": false
      },
      {
        "text": "结合现有超级应用生态，快速实现功能落地和用户覆盖",
        "strong": true
      },
      {
        "text": "。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 创作工具向长内容、高精度和易用性发展",
    "evidence": [
      {
        "text": "中国即梦AI 上线",
        "strong": false
      },
      {
        "text": "全新 Seedance 2.5 模型，支持 30 秒超长视频直出",
        "strong": true
      },
      {
        "text": "，极大地扩展了 AI 视频创作的时长限制。",
        "strong": false
      },
      {
        "text": "美国 ChatGPT 推出 ",
        "strong": false
      },
      {
        "text": "Slides 功能，让用户可以直接在 AI 助手内创建和协作演示文稿",
        "strong": true
      },
      {
        "text": "，从文本到结构化视觉内容，提升了创作的便捷性和专业度。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI 创作正从短内容、简单生成向",
        "strong": false
      },
      {
        "text": "更复杂、更长形式的内容（如演示文稿、长视频）发展",
        "strong": true
      },
      {
        "text": "，同时注重提升创作的精度、易用性和协作性。中国市场在视频生成方面进步显著，而美国则在",
        "strong": false
      },
      {
        "text": "传统办公文档的 AI 辅助创作方面取得突破",
        "strong": true
      },
      {
        "text": "。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 硬件入口加速与线下生活服务场景融合",
    "evidence": [
      {
        "text": "中国 Rokid AI 眼镜配套应用新增",
        "strong": false
      },
      {
        "text": "打车功能，与腾讯出行服务深度合作",
        "strong": true
      },
      {
        "text": "，用户可通过语音直接叫车。这表明 AI 硬件正积极拓展在真实世界中的实用场景。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI 硬件不再仅仅是信息获取或娱乐设备，正通过与本地生活服务的集成，",
        "strong": false
      },
      {
        "text": "成为连接数字世界与物理世界的重要交互入口",
        "strong": true
      },
      {
        "text": "。中国在这一领域通过与现有生态（如腾讯）的快速对接，展现出较强的落地能力。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 推出演示文稿制作和协作功能 (Slides)、ChatGPT GPT-6 Pro 模型升级：更快响应与多智能体并行处理，以及中国的 腾讯元宝 2.89.0 版本更新：录音总结与视觉体验全面升级、即梦AI 全新 Seedance 2.5 模型上线，支持 30 秒超长视频直出，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "头部厂商持续加码基础模型和多模态交互。ChatGPT GPT-6 Pro 更新带来更快响应和多智能体并行处理；GPT-Live-1.1 提供更自然的语音交互和多语言支持。Google AI Edge Eloquent 提供离线智能听写。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中国 AI 创作领域竞争激烈，头部产品在视频生成、图片编辑方面不断突破。即梦AI Seedance 2.5 (10月15日) 支持 30 秒超长视频；豆包和腾讯元宝也强化了图片 P 图、视频生成能力。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "ai-assistant-search-us",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "Meta AI",
      "Google Gemini",
      "Google AI Edge Eloquent"
    ],
    "pattern": "头部厂商持续加码基础模型和多模态交互。ChatGPT GPT-6 Pro 更新带来更快响应和多智能体并行处理；GPT-Live-1.1 提供更自然的语音交互和多语言支持。Google AI Edge Eloquent 提供离线智能听写。",
    "opportunity": "提升复杂任务处理效率，拓展多语言用户群体，构建更智能的Agent系统。",
    "watchNext": "观察多智能体任务拆解与执行的实际效果，以及多语言用户反馈。",
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Introducing Muse Spark: Meta's Most Powerful Model Yet",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "‎Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai-assistant-search-cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "腾讯元宝",
      "豆包",
      "点点",
      "千问"
    ],
    "pattern": "国内大厂 AI 助手持续更新，强化多模态能力、Agent 特性及生态集成。腾讯元宝 2.89.0 升级录音总结、视觉体验和 Agent 能力；豆包持续优化工作任务和生活服务功能；点点强化小红书内容总结与攻略模式。千问作为阿里AI助手在总榜表现活跃。",
    "opportunity": "在日常工作、生活决策和信息消费领域提供更个性化、智能化的帮助。",
    "watchNext": "观察大厂 AI 助手在用户留存和商业化上的表现，以及 Agent 功能的实际普及率。",
    "sources": [
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "‎豆包 - 生活工作 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "‎dots: ai for everyday life App - App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "‎iPhone 热门游戏和 App - App Store",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai-education-learning-us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "OpenAI Rosalind Academic Plan",
      "Gizmo"
    ],
    "pattern": "OpenAI 推出 Rosalind Academic Plan (10月15日)，免费提供 ChatGPT Business Standard 席位给美国大学的生命科学研究实验室，旨在支持学术研究。近60天内，Gizmo 在4月15日获得 $22M Series A 融资，用户达 13M，但无近期产品更新信号。",
    "opportunity": "为学术研究提供 AI 辅助工具，提升效率。观察未来更多 AI 在个性化学习、教育辅助方面的创新模式。",
    "watchNext": "关注 Rosalind Academic Plan 的实际应用效果，以及其对学术研究的推动作用。",
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "AI learning app Gizmo levels up with 13M users and a $22M investment | TechCrunch",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "ai-education-learning-cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "腾讯元宝",
      "千问智学"
    ],
    "pattern": "AI 教育产品在答疑解惑、作业批改和资料定制方面持续发力。腾讯元宝推出 AI 精讲和拍题答疑功能。千问智学作为夸克学习的升级版，专注于 AI 家教，但近60天无明确更新信号。",
    "opportunity": "利用 AI 提供个性化、高效的学习辅导，解决学生和家长痛点。",
    "watchNext": "关注 AI 教学质量的提升，以及用户对 AI 家教的接受度。",
    "sources": [
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "‎千问智学 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "ai-companionship-emotion-social-us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Replika",
      "Character.AI",
      "Series"
    ],
    "pattern": "美国 AI 陪伴和社交应用市场存在，如 Replika 和 Character.AI，其中 Character.AI 在4月更新了模型和记忆功能。同时，iMessage 上的 AI 社交网络 Series 在 4 月获得 $5.1M pre-seed 融资，用户已覆盖 750+ 校园，但近60天内无明确产品更新信号。",
    "opportunity": "满足用户情感需求和虚拟社交体验，但仍需探索新的增长点和用户价值。",
    "watchNext": "观察 AI 陪伴类产品的伦理挑战和用户心理影响，以及如何通过创新保持用户粘性。",
    "sources": [
      {
        "label": "‎Replika - AI Companion Chat App - App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "April Update: New Model, Memory, and Lorebook",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Two college kids raise a $5.1 million pre-seed to build an AI social network in iMessage | TechCrunch",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      }
    ]
  },
  {
    "id": "ai-companionship-emotion-social-cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "星野",
      "腾讯元宝"
    ],
    "pattern": "中国 AI 陪伴和社交领域活跃，强调用户创造和多模态交互。星野作为多模态智能体内容社区，频繁更新修复问题，增强用户体验；腾讯元宝的“元宝派”养龙虾功能也增加了趣味互动性。",
    "opportunity": "通过提供高自由度的 AI 智能体和社区互动，满足用户的虚拟情感寄托和创造需求。",
    "watchNext": "观察用户自定义智能体的生态繁荣度，以及其在用户粘性方面的表现。",
    "sources": [
      {
        "label": "‎星野-所建皆你所AI App - App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-gaming-interactive-entertainment-us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "ChatGPT"
    ],
    "pattern": "AI 开始融入互动娱乐场景，例如 ChatGPT 的 Intelligent UI (10月7日发布) 可以结合互动元素（如游戏）来回答问题，但近60天内独立 AI 游戏或互动娱乐应用未出现强信号。",
    "opportunity": "探索 AI 在游戏设计、内容生成和个性化互动方面的潜力，提升娱乐体验。",
    "watchNext": "关注更多原生 AI 游戏和互动叙事产品的出现，以及用户对其新颖性的接受度。",
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai-gaming-interactive-entertainment-cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "星野",
      "腾讯元宝"
    ],
    "pattern": "国内市场在 AI 互动娱乐方面，主要体现在 AI 角色互动和趣味功能上。星野的智能体社区允许用户与 AI 角色互动，腾讯元宝的“元宝派”养龙虾提供了轻量级的 AI 游戏体验。",
    "opportunity": "利用 AI 提升游戏的可玩性和个性化互动，满足用户在虚拟世界中的娱乐需求。",
    "watchNext": "关注 AI 驱动的沉浸式游戏和互动内容的创新，以及其商业化潜力。",
    "sources": [
      {
        "label": "‎星野-所建皆你所AI App - App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-creation-us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT Slides",
      "Cantina: AI Video & Characters",
      "Momo: AI Photo & Video Maker",
      "Runway: AI Image & Video",
      "AI Video Generator - Vixel"
    ],
    "pattern": "AI 创作工具在专业场景和多媒体内容生成方面持续发展。ChatGPT 推出 Slides 功能，支持演示文稿制作 (10月16日)。App Store 上也涌现出多种 AI 视频和图像生成工具获得关注。",
    "opportunity": "降低专业内容创作门槛，赋能普通用户进行图像、视频和演示文稿等各类创作。",
    "watchNext": "关注 AI 创作工具在生成质量、原创性和版权方面的进展，以及其与主流创作软件的集成。",
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "‎Best Photo & Video Apps for iPhone",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "ai-creation-cn",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "即梦AI",
      "豆包",
      "腾讯元宝",
      "剪映",
      "醒图"
    ],
    "pattern": "中国 AI 创作领域竞争激烈，头部产品在视频生成、图片编辑方面不断突破。即梦AI Seedance 2.5 (10月15日) 支持 30 秒超长视频；豆包和腾讯元宝也强化了图片 P 图、视频生成能力。",
    "opportunity": "满足庞大内容创作者和普通用户的多元化创作需求，尤其在短视频、图像美化和个性化表达方面。",
    "watchNext": "关注 AI 视频生成模型在时长、流畅度、风格控制方面的进一步突破，以及 AIGC 在商业内容创作中的应用。",
    "sources": [
      {
        "label": "‎即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "‎豆包 - 生活工作 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "‎适用于 iPhone 的精选摄影与录像 App",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "ai-efficiency-office-us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT Slides",
      "GPT-6 Pro",
      "Google AI Edge Eloquent",
      "Granola"
    ],
    "pattern": "AI 效率工具在文档协作、智能代理和语音转文本方面持续创新。ChatGPT 推出 Slides 协作功能 (10月16日)，GPT-6 Pro (10月16日) 强化多智能体处理；Google AI Edge Eloquent (9月前发布) 提供免费离线智能听写。Granola 在3月获得 $125M Series C 融资，估值达 $1.5B，从会议记录扩展到企业级 AI 应用，并在近60天内无明确产品更新信号。",
    "opportunity": "通过 AI 提高个人和团队的办公效率，简化复杂任务，提供无感知的辅助。",
    "watchNext": "关注 AI 在企业级应用中的安全性、合规性，以及与现有办公软件的深度集成。",
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "‎Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "Granola raises $125M, hits $1.5B valuation as it expands from meeting notetaker to enterprise AI app | TechCrunch",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      }
    ]
  },
  {
    "id": "ai-efficiency-office-cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "中国 AI 办公效率工具全面覆盖写作、文档处理、录音纪要等场景，并强调自动化和生态集成。豆包上线“工作任务模式”，实现自动化办公；腾讯元宝提供 AI 秒写报告、代码、录音笔和文档精读；千问也作为阿里 AI 助手提供类似服务。",
    "opportunity": "在个人和企业层面大幅提升工作效率，将 AI 嵌入日常办公流程。",
    "watchNext": "观察 AI Agent 在复杂工作流中的执行能力，以及各产品如何建立用户粘性和差异化竞争优势。",
    "sources": [
      {
        "label": "‎豆包 - 生活工作 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "‎iPhone 热门游戏和 App - App Store",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai-life-tools-us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI 生活工具在智能决策和语音输入方面提供便利。ChatGPT 的 Intelligent UI (10月7日发布) 可提供计算器等工具，Finances 功能 (10月2日扩展) 已扩展至免费用户。Google AI Edge Eloquent 提供免费离线智能听写服务。",
    "opportunity": "利用 AI 简化日常琐事，提升生活质量，实现更便捷的智能生活。",
    "watchNext": "关注 AI 如何更深度地融入家庭、健康等更广泛的生活场景，以及用户数据隐私保护。",
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "‎Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai-life-tools-cn",
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
    "pattern": "中国 AI 生活工具深入衣食住行购等各个方面，强调“一站式”解决和与硬件的结合。豆包提供吃喝玩乐和购物助手；腾讯元宝接入旅游和饮食助手、拍照翻译；点点强化生活攻略；Rokid AI 眼镜新增打车功能 (10月19日)。",
    "opportunity": "通过深度整合线上线下服务，构建全场景智能生活助手，提升用户生活便利度。",
    "watchNext": "观察 AI 在本地生活服务中的用户渗透率，以及不同平台之间的竞争与合作模式。",
    "sources": [
      {
        "label": "‎豆包 - 生活工作 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "‎dots: ai for everyday life App - App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "‎Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "id": "ai-hardware-entry-us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Meta AI glasses",
      "Rokid Glasses"
    ],
    "pattern": "AI 眼镜等硬件产品持续迭代，Meta AI glasses 已在美国和加拿大市场推出。Rokid Glasses 的 Hi Rokid App 在 9 月份有用户反馈 Vision AI 区域错误和稳定性问题，表明技术落地仍面临挑战。",
    "opportunity": "AI 硬件作为新一代交互入口，有望在增强现实、无感知交互方面带来革新。",
    "watchNext": "关注 AI 眼镜核心功能的稳定性、用户体验改进，以及应用生态的建设情况。",
    "sources": [
      {
        "label": "Introducing Muse Spark: Meta's Most Powerful Model Yet",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "‎Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai-hardware-entry-cn",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "Rokid AI 眼镜"
    ],
    "pattern": "中国 AI 硬件入口在功能集成和本地化服务方面进展迅速。Rokid AI 眼镜在近 60 天内持续更新，新增打车功能 (10月19日)、优化会议纪要、上线长期记忆 (9月8日)、集成微信支付/支付宝、升级慧眼视觉模型 (6月27日)。",
    "opportunity": "AI 眼镜作为个人助理和生活服务中心，有望成为重要的移动智能终端，连接更多本地化服务。",
    "watchNext": "关注 Rokid AI 眼镜在实际用户场景中的普及率、用户反馈，以及更多创新功能的加入。",
    "sources": [
      {
        "label": "‎Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "OpenAI ChatGPT 在生产力工具和核心模型能力上持续发力",
    "bullets": [
      [
        {
          "text": "2026年10月16日，ChatGPT 推出",
          "strong": false
        },
        {
          "text": "Slides 功能",
          "strong": true
        },
        {
          "text": "，允许 Pro、Business 和 Enterprise 用户在 Space 工作区内创建和协作演示文稿，并支持导出和实时编辑。",
          "strong": false
        }
      ],
      [
        {
          "text": "同日，GPT-6 Pro 模型迎来更新，提供",
          "strong": false
        },
        {
          "text": "更快响应和多智能体并行处理任务",
          "strong": true
        },
        {
          "text": "的能力，提升了复杂任务的执行效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "2026年10月15日，ChatGPT Voice 上线 ",
          "strong": false
        },
        {
          "text": "GPT-Live-1.1 模型和多语言新语音",
          "strong": true
        },
        {
          "text": "，包括法语、德语、日语等，使得语音交互更加自然和全球化。",
          "strong": false
        }
      ],
      [
        {
          "text": "OpenAI 还开放了 ",
          "strong": false
        },
        {
          "text": "Rosalind Academic Plan 申请",
          "strong": true
        },
        {
          "text": "，为美国大学的生命科学实验室提供免费的 ChatGPT Business Standard 席位，以支持学术研究。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "ChatGPT 推出演示文稿制作和协作功能 (Slides)",
    "bullets": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中推出了全新的 Slides 功能，允许 Pro、Business 和 Enterprise 用户在 Space 工作区内直接创建和协作演示文稿。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过对话、文件或大纲启动演示文稿制作，也可以上传示例幻灯片来指导风格和布局。该功能支持直接编辑文本、图像、形状和图表，并可邀请团队成员实时协作和评论。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "ChatGPT GPT-6 Pro 模型升级：更快响应与多智能体并行处理",
    "bullets": [
      [
        {
          "text": "ChatGPT 的 GPT-6 Pro 模型获得了重大更新，主要提升包括更快的响应速度和改进的插件与工具使用能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "最值得注意的是，新版本引入了多智能体并行处理任务的功能。这意味着 AI 可以将一个复杂任务分解为多个部分，并由不同的智能体同时执行，用户可以在对话中追踪它们的进展。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "ChatGPT 推出 GPT-Live-1.1 模型和多语言新语音",
    "bullets": [
      [
        {
          "text": "OpenAI 在 ChatGPT Voice 中推出了 GPT-Live-1.1 模型及其迷你版本 GPT-Live-1.1 Quip，显著提升了语音交互的自然度和流畅性。",
          "strong": false
        }
      ],
      [
        {
          "text": "新模型支持更自然的口音，并扩大了搜索时使用的短语范围，让对话体验更像真人。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "头部厂商持续加码基础模型和多模态交互。ChatGPT GPT-6 Pro 更新带来更快响应和多智能体并行处理；GPT-Live-1.1 提供更自然的语音交互和多语言支持。Google AI Edge Eloquent 提供离线智能听写。",
          "strong": false
        }
      ],
      [
        {
          "text": "提升复杂任务处理效率，拓展多语言用户群体，构建更智能的Agent系统。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Introducing Muse Spark: Meta's Most Powerful Model Yet",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "‎Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "中国 AI 应用在多模态、生活服务和创作领域持续创新",
    "bullets": [
      [
        {
          "text": "2026年10月16日，",
          "strong": false
        },
        {
          "text": "腾讯元宝发布 2.89.0 版本",
          "strong": true
        },
        {
          "text": "，显著升级了录音总结与视觉体验，并增强了 Agent 能力和文件导出功能，方便用户在腾讯生态内进行分享。",
          "strong": false
        }
      ],
      [
        {
          "text": "2026年10月15日，",
          "strong": false
        },
        {
          "text": "抖音旗下即梦AI上线全新 Seedance 2.5 模型",
          "strong": true
        },
        {
          "text": "，支持生成长达 30 秒的超长视频，大幅提升了 AI 视频创作的时长和表现力。",
          "strong": false
        }
      ],
      [
        {
          "text": "2026年10月19日，",
          "strong": false
        },
        {
          "text": "Rokid AI 眼镜配套应用推出 1.15.0 版本",
          "strong": true
        },
        {
          "text": "，新增了与腾讯出行服务合作的打车功能，进一步将 AI 硬件融入日常出行场景，同时优化了会议纪要体验。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "‎即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%92%96%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "‎Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "腾讯元宝 2.89.0 版本更新：录音总结与视觉体验全面升级",
    "bullets": [
      [
        {
          "text": "腾讯元宝发布 2.89.0 版本更新，带来了录音总结功能的显著提升和视觉体验的全面优化。",
          "strong": false
        }
      ],
      [
        {
          "text": "新版支持在录音过程中查看阶段性重点，并在结束后自动生成完整的总结。同时，界面设计更加清爽，功能更易查找，Agent 能力获得增强，并支持将文件导出为 PDF、DOCX 等常用格式，方便微信分享。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "即梦AI 全新 Seedance 2.5 模型上线，支持 30 秒超长视频直出",
    "bullets": [
      [
        {
          "text": "抖音旗下 AI 图片和视频工具即梦AI，于近日上线了全新 Seedance 2.5 模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新的最大亮点是支持生成长达 30 秒的超长视频，相比之前极大地扩展了视频创作的时长限制。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "‎即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "Rokid AI 眼镜新增打车功能，与腾讯出行服务合作",
    "bullets": [
      [
        {
          "text": "Rokid AI 眼镜配套应用 Rokid AI 推出 1.15.0 版本更新，新增了打车功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "此功能通过与腾讯出行服务合作实现，用户可在主页选择“打车”并绑定账号后，通过语音指令“乐奇，打车去xxx”即可直接叫车。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "‎Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "中国 AI 创作领域竞争激烈，头部产品在视频生成、图片编辑方面不断突破。即梦AI Seedance 2.5 (10月15日) 支持 30 秒超长视频；豆包和腾讯元宝也强化了图片 P 图、视频生成能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "满足庞大内容创作者和普通用户的多元化创作需求，尤其在短视频、图像美化和个性化表达方面。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "‎即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "‎豆包 - 生活工作 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "‎元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "‎适用于 iPhone 的精选摄影与录像 App",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  }
];
