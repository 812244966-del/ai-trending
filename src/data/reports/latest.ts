import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-05-11";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 核心能力全面升级（GPT-5.5 Instant、记忆功能）",
    "market": "美国",
    "date": "2026-05-05",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "GPT-5.5 Instant 已成为所有ChatGPT用户的默认模型，显著提升了回答的",
          "strong": false
        },
        {
          "text": "准确性、清晰度、简洁度",
          "strong": true
        },
        {
          "text": "，并加强了",
          "strong": false
        },
        {
          "text": "图像理解和网络搜索能力",
          "strong": true
        },
        {
          "text": "。"
        },
        {
          "text": "同时，ChatGPT Plus和Pro用户获得了",
          "strong": false
        },
        {
          "text": "记忆功能",
          "strong": true
        },
        {
          "text": "的重大提升，使其能从历史对话、已保存记忆、文件和连接的Gmail中提取相关上下文，提供",
          "strong": false
        },
        {
          "text": "更个性化和连续的响应",
          "strong": true
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "新的",
          "strong": false
        },
        {
          "text": "记忆来源可视化",
          "strong": true
        },
        {
          "text": "功能允许用户查看哪些信息塑造了AI的回答，并进行编辑或删除。"
        },
        {
          "text": "此外，",
          "strong": false
        },
        {
          "text": "“可信联系人”安全功能",
          "strong": true
        },
        {
          "text": "也已面向成人个人账户用户推出。"
        }
      ],
      [
        {
          "text": "这些功能更新正在网页版分阶段推出，部分记忆功能也将很快登陆移动端。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这些更新显著提升了ChatGPT的日常实用性和个性化程度，使其",
          "strong": true
        },
        {
          "text": "更像一个“记忆型”和“感知型”的智能助手",
          "strong": false
        },
        {
          "text": "。"
        },
        {
          "text": "记忆功能的引入是实现Agentic行为的关键一步，预示着AI助手将更深度融入用户个人工作流和信息管理。"
        }
      ],
      [
        {
          "text": "模型的加速迭代和多模态能力的增强，将推动AI在处理复杂问题、理解真实世界场景方面的边界。",
          "strong": false
        },
        {
          "text": "中美市场都在探索如何让AI助手变得更智能、更具人性化。",
          "strong": true
        }
      ],
      [
        {
          "text": "接下来，应观察记忆功能的实际用户采纳率和其对用户工作流效率的长期影响，以及多模态交互的深度和广度。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2b/9d/12/2b9d12b1-5337-56a4-463b-ad977809a336/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 深度集成 Excel 和 Google Sheets",
    "market": "美国",
    "date": "2026-05-05",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI在全球范围内推出",
          "strong": false
        },
        {
          "text": "ChatGPT for Excel和Google Sheets插件",
          "strong": true
        },
        {
          "text": "。"
        },
        {
          "text": "该插件将ChatGPT集成到Microsoft Excel和Google Sheets的侧边栏中，使用户能够直接在电子表格中",
          "strong": false
        },
        {
          "text": "构建、更新和理解数据",
          "strong": true
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "它能够辅助完成跟踪器、预算、公式、多标签文件、情景分析和表格清理等任务。",
          "strong": false
        },
        {
          "text": "免费用户和Go用户有使用限制，Plus和Pro用户拥有与Codex相同的Agentic使用限制。"
        }
      ],
      [
        {
          "text": "用户可通过Microsoft Marketplace或Google Workspace Marketplace安装插件，并通过ChatGPT账户登录使用。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "AI开始深度嵌入专业办公工具，大幅提升了办公效率，特别是",
          "strong": true
        },
        {
          "text": "降低了非专业用户使用复杂数据分析工具的门槛",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "这种集成是AI Agent化落地于特定工作场景的重要体现，预示着AI将从通用助手向更多垂直领域和专业工具渗透，",
          "strong": true
        },
        {
          "text": "改变传统的数据处理和分析方式",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "未来需关注该功能在企业和个人用户中的普及程度，以及其对传统数据分析软件市场格局的影响。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2b/9d/12/2b9d12b1-5337-56a4-463b-ad977809a336/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Rokid AI眼镜应用升级，AI助手强化多模态交互",
    "market": "美国",
    "date": "2026-05-06",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Rokid更新了其AI眼镜配套应用Hi Rokid，显著升级了AI助手功能。AI助手现已支持",
          "strong": true
        },
        {
          "text": "连续对话",
          "strong": false
        },
        {
          "text": "，用户可以随时打断AI，实现更自然的交互。"
        }
      ],
      [
        {
          "text": "AI助手还",
          "strong": true
        },
        {
          "text": "新增了调用视觉模型工具的能力",
          "strong": false
        },
        {
          "text": "，使其能够更好地理解用户所见的真实世界。"
        },
        {
          "text": "应用界面也进行了",
          "strong": true
        },
        {
          "text": "重新设计，新增了发现页和眼镜侧小组件",
          "strong": false
        },
        {
          "text": "，提升了用户体验。"
        }
      ],
      [
        {
          "text": "此外，更新还扩展了AI助手的",
          "strong": true
        },
        {
          "text": "多语言支持",
          "strong": false
        },
        {
          "text": "，包括波兰语、荷兰语、意大利语、泰语和印度尼西亚语等命令识别。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "AI硬件入口的竞争日益加剧，Rokid通过提升多模态AI交互的自然度和智能化程度，",
          "strong": true
        },
        {
          "text": "增强了AI眼镜作为实时助手的用户体验",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "连续对话和视觉模型工具的结合，是实现AI眼镜从被动指令响应到主动场景理解的关键进展，",
          "strong": true
        },
        {
          "text": "有助于拓宽AI在现实世界中的应用场景",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "中美市场都在积极探索AI眼镜的潜力，未来需密切关注用户接受度、隐私保护以及内容生态建设。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6756505519"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/27/25/aa/2725aa84-35dd-9777-a191-91f21db50ac6/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-0-85-220.png/512x512bb.jpg",
      "alt": "Google AI Edge Eloquent App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "Hi Rokid App Store",
      "sourceHref": "https://apps.apple.com/us/app/hi-rokid/id6756505519",
      "note": "使用 Google AI Edge Eloquent 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝接入Hy3 preview模型",
    "market": "中国",
    "date": "2026-05-09",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝App于近日",
          "strong": false
        },
        {
          "text": "接入了Hy3 preview最新模型",
          "strong": true
        },
        {
          "text": "，旨在持续优化其AI助手的智能体验。"
        },
        {
          "text": "此次模型升级将进一步提升元宝在智能问答、内容生成等方面的能力。"
        }
      ],
      [
        {
          "text": "元宝App此前已具备",
          "strong": false
        },
        {
          "text": "双模型驱动",
          "strong": true
        },
        {
          "text": "（腾讯混元与DeepSeek），并",
          "strong": true
        },
        {
          "text": "深度整合了微信公众号、视频号等腾讯生态的优质信源",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "App的用户评价普遍认为其在文档处理、报告撰写、代码生成等效率工具方面表现出色，且目前所有强大功能",
          "strong": true
        },
        {
          "text": "完全免费且无次数限制",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "最新版本更新为",
          "strong": true
        },
        {
          "text": "2.67.10",
          "strong": false
        },
        {
          "text": "，于2天前（即约2026年5月9日）发布。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "中国头部AI助手正通过接入更先进的大模型和深度结合自有生态，持续提升核心竞争力。",
          "strong": false
        },
        {
          "text": "这种“大模型+生态”的模式有助于元宝在问答、搜索、效率工具等方面提供",
          "strong": true
        },
        {
          "text": "差异化和更准确的服务",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "模型的快速迭代和免费策略，正在",
          "strong": true
        },
        {
          "text": "加速AI在国民级应用中的渗透",
          "strong": false
        },
        {
          "text": "，推动AI工具的普及和用户习惯的养成。"
        }
      ],
      [
        {
          "text": "未来需关注Hy3 preview模型在实际应用中的表现，以及元宝如何进一步利用腾讯生态优势，探索更多创新服务和商业模式。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/99/ea/6b/99ea6b7f-298f-f79c-4bc8-916c30834340/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点 App 全新上线攻略模式",
    "market": "中国",
    "date": "2026-05-09",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "小红书旗下的AI生活助手“点点”App于近日",
          "strong": false
        },
        {
          "text": "全新上线了攻略模式",
          "strong": true
        },
        {
          "text": "。"
        },
        {
          "text": "该模式基于",
          "strong": false
        },
        {
          "text": "小红书海量真人经验内容",
          "strong": true
        },
        {
          "text": "，能为用户生成定制化的深度攻略。"
        }
      ],
      [
        {
          "text": "攻略内容覆盖",
          "strong": false
        },
        {
          "text": "旅行出游、兴趣学习、购物决策、美食探店、笔记总结、知识梳理",
          "strong": true
        },
        {
          "text": "等多个生活决策场景。"
        },
        {
          "text": "用户可以通过语音和带图提问，获取个性化建议。"
        }
      ],
      [
        {
          "text": "点点App的最新版本更新为",
          "strong": true
        },
        {
          "text": "3.19.2",
          "strong": false
        },
        {
          "text": "，于2天前（即约2026年5月9日）发布，着重推出了这一攻略模式。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这体现了AI与特定内容社区深度结合，服务于用户生活决策的趋势。",
          "strong": false
        },
        {
          "text": "点点利用小红书丰富的UGC内容优势，通过AI提供",
          "strong": true
        },
        {
          "text": "个性化和实用性强的解决方案",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "该功能",
          "strong": true
        },
        {
          "text": "满足了年轻用户在“探索与种草”过程中的效率需求",
          "strong": false
        },
        {
          "text": "，是AI生活工具落地的重要方向，有望提升用户在平台上的决策效率和转化率。"
        }
      ],
      [
        {
          "text": "未来需观察AI生成攻略的",
          "strong": true
        },
        {
          "text": "准确性、实用性以及用户采纳度",
          "strong": false
        },
        {
          "text": "，同时关注如何平衡AI推荐与社区原创内容的价值。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2a/34/72/2a347299-cac0-90fb-9726-30440d047475/1040g3g831svff01vle2mecoj9s6j637s0us79to.png/392x696bb.png",
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
    "title": "AI助手向“持续性、多模态、生态整合”演进",
    "evidence": [
      {
        "text": "OpenAI ChatGPT通过",
        "strong": true
      },
      {
        "text": "记忆功能",
        "strong": false
      },
      {
        "text": "和",
        "strong": true
      },
      {
        "text": "记忆来源可视化",
        "strong": false
      },
      {
        "text": "，实现更个性化和连续的对话。"
      },
      {
        "text": "Meta AI (Muse Spark)强调其多模态感知能力，能够“看懂并理解”真实世界。"
      },
      {
        "text": "Google Gemini则通过",
        "strong": true
      },
      {
        "text": "Personal Intelligence",
        "strong": false
      },
      {
        "text": "实现跨Gmail、Photos、YouTube的个性化帮助。"
      },
      {
        "text": "Rokid AI眼镜的助手升级支持",
        "strong": true
      },
      {
        "text": "连续对话",
        "strong": false
      },
      {
        "text": "和",
        "strong": true
      },
      {
        "text": "视觉模型工具调用",
        "strong": false
      },
      {
        "text": "，并整合国内外大模型。"
      }
    ],
    "comparison": [
      {
        "text": "过去的AI助手多为单次问答或有限上下文，现在正转向",
        "strong": true
      },
      {
        "text": "拥有长期记忆、能够理解真实世界信息，并深度融入用户多平台数字生态",
        "strong": false
      },
      {
        "text": "的“超级智能体”形态。"
      },
      {
        "text": "这种趋势在中美市场均显现，各自巨头正利用其生态优势构建AI护城河。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI能力向端侧硬件与现有工作流渗透，提升场景化效率",
    "evidence": [
      {
        "text": "OpenAI推出",
        "strong": true
      },
      {
        "text": "ChatGPT for Excel和Google Sheets插件",
        "strong": false
      },
      {
        "text": "，将AI能力直接嵌入办公软件，辅助数据处理和分析。"
      },
      {
        "text": "Google AI Edge Eloquent提供",
        "strong": true
      },
      {
        "text": "本地运行、离线使用的智能语音转文本",
        "strong": false
      },
      {
        "text": "功能，避免服务器连接，注重隐私和响应速度。"
      },
      {
        "text": "Meta AI眼镜和Rokid AI眼镜则代表AI向可穿戴硬件的渗透，提供",
        "strong": true
      },
      {
        "text": "解放双手的多模态交互入口",
        "strong": false
      },
      {
        "text": "。"
      }
    ],
    "comparison": [
      {
        "text": "早期AI应用多以独立App或网页形式存在，现在则更注重",
        "strong": true
      },
      {
        "text": "将AI能力无缝集成到用户已有的硬件和软件工作流中",
        "strong": false
      },
      {
        "text": "。"
      },
      {
        "text": "这种渗透使得AI的价值不再仅仅是提供信息，更是",
        "strong": true
      },
      {
        "text": "直接提升特定场景下的操作效率和用户体验",
        "strong": false
      },
      {
        "text": "。"
      }
    ]
  },
  {
    "title": "中国大模型快速在消费者应用中落地及迭代，聚焦本地化服务",
    "evidence": [
      {
        "text": "腾讯元宝",
        "strong": true
      },
      {
        "text": "接入Hy3 preview模型，并深度整合腾讯内部生态信源，强化其在问答、搜索、文档处理等方面的能力。"
      },
      {
        "text": "Rokid AI眼镜升级AI助手时，不仅支持连续对话和视觉模型工具调用，还",
        "strong": true
      },
      {
        "text": "明确接入了通义千问Qwen3.6-plus、智谱GLM-5v-turbo和豆包2.0等多个国内领先大模型",
        "strong": false
      },
      {
        "text": "。"
      },
      {
        "text": "小红书旗下“点点”App推出",
        "strong": true
      },
      {
        "text": "基于小红书真人经验的AI攻略模式",
        "strong": false
      },
      {
        "text": "，服务旅行、购物等本地生活决策。"
      }
    ],
    "comparison": [
      {
        "text": "与美国市场通用大模型和SaaS应用主导不同，中国市场更注重",
        "strong": true
      },
      {
        "text": "将大模型技术快速应用于头部消费产品，并深度结合本地化生态和用户内容",
        "strong": false
      },
      {
        "text": "。"
      },
      {
        "text": "这种策略使得中国AI应用在满足特定用户需求和提升国民级App体验方面展现出更快的迭代速度和更强的适应性。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 核心能力全面升级（GPT-5.5 Instant、记忆功能）、ChatGPT 深度集成 Excel 和 Google Sheets，以及中国的 腾讯元宝接入Hy3 preview模型、点点 App 全新上线攻略模式，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "大模型能力持续提升，AI助手在记忆、多模态交互和个性化服务方面不断演进，通过更自然的交互方式和更深入的上下文理解，成为用户日常工作和生活的核心入口。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "抖音、字节跳动和腾讯等巨头积极投入AI内容生成，旗下产品持续迭代视频生成模型，增强合拍、特效和图片视频创作玩法，降低创作门槛。",
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
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Gemini",
      "Meta AI",
      "Google AI Edge Eloquent"
    ],
    "pattern": "大模型能力持续提升，AI助手在记忆、多模态交互和个性化服务方面不断演进，通过更自然的交互方式和更深入的上下文理解，成为用户日常工作和生活的核心入口。",
    "opportunity": "打造更懂用户、能主动提供帮助的智能助手，同时在隐私和控制权方面给予用户更大自主性。",
    "watchNext": "观察多模态交互的深度、AI主动性（Agentic）功能的实际落地效果和用户实际采纳率。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Google AI Edge Eloquent App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "ai-assistant-search-cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "中国头部AI助手持续升级大模型，强化多模态能力，并深度整合本地生态信源，致力于提供一站式、高效的国民级智能服务。",
    "opportunity": "结合本地化生态优势，提供差异化的智能服务，特别是在信息获取和内容生成方面。",
    "watchNext": "关注模型升级带来的用户体验提升、新功能的用户粘性以及付费模式的探索。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-education-learning-us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI辅助学习平台通过游戏化和互动功能提升用户参与度，结合个性化学习路径，获得资本青睐，显示出市场对创新教育模式的持续需求。（融资 + 产品验证）",
    "opportunity": "结合AI个性化和游戏化机制，解决学生学习痛点，提供高效且有趣的学习体验。",
    "watchNext": "观察用户增长的持续性、如何将AI深度融入教学内容以及其在不同教育阶段的适用性。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "ai-education-learning-cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "千问智学"
    ],
    "pattern": "现有AI教育应用持续运营，探索AI家教式辅导和作业批改功能，但近期缺乏重大产品更新信号，仍处于稳步发展阶段。",
    "opportunity": "针对中国教育场景的个性化学习和效率提升，特别是在精准答疑、作业辅导和学习资料定制方面。",
    "watchNext": "关注产品迭代中如何提升AI的教学互动性和批改准确度，以及其与学校、家长体系的融合。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "ai-companionship-emotion-social-us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Series",
      "Replika"
    ],
    "pattern": "AI陪伴和社交产品强调更深度的情感连接、记忆保持和世界观构建。新的AI原生社交网络形态涌现，通过AI赋能连接用户。（Series为融资 + 产品验证）",
    "opportunity": "满足用户情感需求和社交探索，在AI交互中提供更逼真、更富有记忆和人格的陪伴。",
    "watchNext": "观察用户粘性、新颖社交模式的普及以及隐私与安全性挑战，尤其是青少年用户保护。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      }
    ]
  },
  {
    "id": "ai-companionship-emotion-social-cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "星野"
    ],
    "pattern": "平台型AI智能体社区不断优化，鼓励用户自由创建和分享AI智能体，强化多模态交互，满足用户的社交陪伴和虚拟角色互动需求。",
    "opportunity": "挖掘UGC在AI智能体领域的潜力，提升互动沉浸感，探索更多基于AI角色的情感连接。",
    "watchNext": "关注用户UGC的活跃度、AI智能体“人设”的丰富度和语音交互的自然度，以及平台的内容审核和安全机制。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "ai-gaming-interactive-entertainment-us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国市场近期缺乏明确的AI原生游戏或互动娱乐产品大规模发布。目前的AI应用主要集中在辅助开发或已有产品的AI功能增强，而非原生娱乐体验创新。",
    "opportunity": "探索AI在游戏剧情生成、角色互动、玩法创新以及个性化娱乐体验中的应用，创造全新的AI原生互动内容。",
    "watchNext": "关注游戏开发者对生成式AI工具的采用情况，以及AI原生游戏的概念验证和早期用户反馈。",
    "sources": []
  },
  {
    "id": "ai-gaming-interactive-entertainment-cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "中国市场近期缺乏AI原生游戏或互动娱乐的显著产品动态。现有娱乐产品可能集成AI功能，但未形成独立的AI娱乐赛道爆发。",
    "opportunity": "利用AI生成内容和智能NPC提升游戏体验，或探索AI驱动的新型互动娱乐形式，满足年轻用户对新鲜感和个性化的追求。",
    "watchNext": "关注游戏大厂的AI战略布局和独立工作室的创新尝试，尤其是结合中国本土文化和社交属性的AI娱乐产品。",
    "sources": []
  },
  {
    "id": "ai-creation-us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Gemini"
    ],
    "pattern": "多模态大模型在音乐生成方面实现突破，支持更长、更高保真度的作品创作，降低了音乐创作门槛，赋能普通用户进行艺术表达。",
    "opportunity": "进一步探索AI在图片、视频、文本等更广泛创作领域的应用，提供更专业、更便捷的创作工具。",
    "watchNext": "观察AI生成音乐在专业领域和大众消费市场的接受度，以及其他模态AI创作工具的用户增长和商业化潜力。",
    "sources": [
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "ai-creation-cn",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "即梦AI",
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "抖音、字节跳动和腾讯等巨头积极投入AI内容生成，旗下产品持续迭代视频生成模型，增强合拍、特效和图片视频创作玩法，降低创作门槛。",
    "opportunity": "降低视频和图片创作门槛，激发用户创意表达，并探索AI生成内容在短视频平台和社交媒体中的商业化潜力。",
    "watchNext": "关注模型质量、生成速度、成本优化及用户商业化潜力，以及平台如何处理AI生成内容的版权和伦理问题。",
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
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "ai-efficiency-office-us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Granola",
      "ChatGPT for Excel and Google Sheets",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI助力办公效率提升，从单点工具（如会议记录）扩展到企业级平台，AI能力深度嵌入主流办公软件（如Excel），同时本地运行、保护隐私的端侧AI效率工具也受到关注。（Granola为融资 + 产品验证）",
    "opportunity": "解决复杂任务、提高文档处理和沟通效率，满足企业和个人用户对智能化办公的需求。",
    "watchNext": "观察企业采用率、数据安全与隐私保护，以及多模态协作工具的成熟度。",
    "sources": [
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      },
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
    "id": "ai-efficiency-office-cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点"
    ],
    "pattern": "中国头部AI助手持续强化办公和学习效率工具，提供一站式解决方案，包括文档处理、报告生成、代码辅助和录音转写等，并深度结合本地化需求。",
    "opportunity": "提升个人及团队工作学习效率，降低专业内容创作门槛，满足中国用户在日常工作和学习中的高效率需求。",
    "watchNext": "关注AI工具与现有办公软件的集成深度和用户生产力提升的实际效果，以及其在不同行业垂直领域的应用。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "id": "ai-life-tools-us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "美国市场近期缺乏AI原生生活工具的显著产品动态。AI功能更多是集成到现有大型平台，而非出现独立爆款生活工具。",
    "opportunity": "探索AI在日常决策、智能家居、个性化服务和生活助理等方面的应用，解决用户在衣食住行上的痛点。",
    "watchNext": "关注AI在本地化服务和个性化推荐上的创新，以及与智能硬件的结合。",
    "sources": []
  },
  {
    "id": "ai-life-tools-cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "点点"
    ],
    "pattern": "小红书旗下“点点”App推出AI攻略模式，深度结合社区内容服务生活决策，利用UGC优势为用户提供个性化和实用性强的解决方案，满足年轻用户在“探索与种草”过程中的效率需求。",
    "opportunity": "利用AI和社交/内容社区数据，提供精准、实用的生活决策支持和个性化攻略，提升用户生活品质和消费效率。",
    "watchNext": "观察AI攻略的实用性、用户采纳度及商业化潜力，以及如何平衡AI推荐与社区原创内容的价值。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "id": "ai-hardware-entry-us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Meta AI glasses",
      "Rokid Glasses"
    ],
    "pattern": "Meta和Rokid等厂商持续发力AI眼镜作为新的硬件入口，不断强化多模态交互和AI助手功能，通过更自然的语音和视觉AI，探索沉浸式AI体验。",
    "opportunity": "探索AI眼镜在日常生活、工作和娱乐中的创新应用场景，实现AI与物理世界的无缝融合。",
    "watchNext": "关注用户接受度、隐私问题及内容生态建设，以及AI眼镜与其他智能设备的互联互通。",
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
    "id": "ai-hardware-entry-cn",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid Glasses"
    ],
    "pattern": "国产AI眼镜积极迭代，通过接入主流大模型（如通义千问、智谱、豆包）和强化多模态交互（语音识别、视觉模型工具调用）来提升产品竞争力，抢占AI硬件入口。",
    "opportunity": "利用国内供应链和市场优势，打造符合中国用户习惯的AI眼镜产品，并在特定垂直场景（如旅游、教育）中寻求突破。",
    "watchNext": "观察AI眼镜的实际应用场景扩展和消费者市场反馈，以及如何解决佩戴舒适度、电池续航和内容生态等挑战。",
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
    "title": "OpenAI ChatGPT 核心能力全面升级",
    "bullets": [
      [
        {
          "text": "GPT-5.5 Instant 成为所有ChatGPT用户的默认模型，提升了",
          "strong": false
        },
        {
          "text": "准确性、清晰度、简洁度",
          "strong": true
        },
        {
          "text": "，并加强了图像理解和网络搜索能力。"
        }
      ],
      [
        {
          "text": "引入",
          "strong": true
        },
        {
          "text": "记忆功能和记忆来源可视化",
          "strong": false
        },
        {
          "text": "，使ChatGPT能从历史对话、文件和连接的Gmail中提取上下文，提供更个性化和连续的响应。"
        }
      ],
      [
        {
          "text": "推出面向",
          "strong": true
        },
        {
          "text": "Microsoft Excel和Google Sheets的ChatGPT插件",
          "strong": false
        },
        {
          "text": "，支持在电子表格中进行构建、更新和理解操作。"
        }
      ],
      [
        {
          "text": "新增“可信联系人”安全功能，用于在检测到自杀倾向时通知预设联系人。",
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
    "title": "Rokid AI眼镜应用升级，强化AI助手交互",
    "bullets": [
      [
        {
          "text": "Hi Rokid App升级AI助手，实现",
          "strong": true
        },
        {
          "text": "连续对话",
          "strong": false
        },
        {
          "text": "，用户可随时打断AI进行更自然的交互。"
        }
      ],
      [
        {
          "text": "增加AI助手调用",
          "strong": true
        },
        {
          "text": "视觉模型工具",
          "strong": false
        },
        {
          "text": "的能力。"
        }
      ],
      [
        {
          "text": "应用界面进行",
          "strong": true
        },
        {
          "text": "重新设计",
          "strong": false
        },
        {
          "text": "，并新增发现页和眼镜侧小组件，提升用户体验。"
        }
      ],
      [
        {
          "text": "扩展了AI助手的",
          "strong": true
        },
        {
          "text": "多语言支持",
          "strong": false
        },
        {
          "text": "，包括波兰语、荷兰语、意大利语、泰语和印度尼西亚语等命令识别。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "title": "ChatGPT 核心能力全面升级（GPT-5.5 Instant、记忆功能）",
    "bullets": [
      [
        {
          "text": "GPT-5.5 Instant 已成为所有ChatGPT用户的默认模型，显著提升了回答的",
          "strong": false
        },
        {
          "text": "准确性、清晰度、简洁度",
          "strong": true
        },
        {
          "text": "，并加强了",
          "strong": false
        },
        {
          "text": "图像理解和网络搜索能力",
          "strong": true
        },
        {
          "text": "。"
        },
        {
          "text": "同时，ChatGPT Plus和Pro用户获得了",
          "strong": false
        },
        {
          "text": "记忆功能",
          "strong": true
        },
        {
          "text": "的重大提升，使其能从历史对话、已保存记忆、文件和连接的Gmail中提取相关上下文，提供",
          "strong": false
        },
        {
          "text": "更个性化和连续的响应",
          "strong": true
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "新的",
          "strong": false
        },
        {
          "text": "记忆来源可视化",
          "strong": true
        },
        {
          "text": "功能允许用户查看哪些信息塑造了AI的回答，并进行编辑或删除。"
        },
        {
          "text": "此外，",
          "strong": false
        },
        {
          "text": "“可信联系人”安全功能",
          "strong": true
        },
        {
          "text": "也已面向成人个人账户用户推出。"
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
    "title": "ChatGPT 深度集成 Excel 和 Google Sheets",
    "bullets": [
      [
        {
          "text": "OpenAI在全球范围内推出",
          "strong": false
        },
        {
          "text": "ChatGPT for Excel和Google Sheets插件",
          "strong": true
        },
        {
          "text": "。"
        },
        {
          "text": "该插件将ChatGPT集成到Microsoft Excel和Google Sheets的侧边栏中，使用户能够直接在电子表格中",
          "strong": false
        },
        {
          "text": "构建、更新和理解数据",
          "strong": true
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "它能够辅助完成跟踪器、预算、公式、多标签文件、情景分析和表格清理等任务。",
          "strong": false
        },
        {
          "text": "免费用户和Go用户有使用限制，Plus和Pro用户拥有与Codex相同的Agentic使用限制。"
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
    "title": "Rokid AI眼镜应用升级，AI助手强化多模态交互",
    "bullets": [
      [
        {
          "text": "Rokid更新了其AI眼镜配套应用Hi Rokid，显著升级了AI助手功能。AI助手现已支持",
          "strong": true
        },
        {
          "text": "连续对话",
          "strong": false
        },
        {
          "text": "，用户可以随时打断AI，实现更自然的交互。"
        }
      ],
      [
        {
          "text": "AI助手还",
          "strong": true
        },
        {
          "text": "新增了调用视觉模型工具的能力",
          "strong": false
        },
        {
          "text": "，使其能够更好地理解用户所见的真实世界。"
        },
        {
          "text": "应用界面也进行了",
          "strong": true
        },
        {
          "text": "重新设计，新增了发现页和眼镜侧小组件",
          "strong": false
        },
        {
          "text": "，提升了用户体验。"
        }
      ]
    ],
    "sources": [
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6756505519"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "腾讯元宝接入最新大模型，强化平台能力",
    "bullets": [
      [
        {
          "text": "腾讯元宝App于近日",
          "strong": false
        },
        {
          "text": "接入Hy3 preview模型",
          "strong": true
        },
        {
          "text": "，持续优化AI助手智能体验，进一步提升在智能问答、内容生成等方面的能力。"
        }
      ],
      [
        {
          "text": "产品深度整合腾讯生态信源（如微信公众号、视频号），并强化文档处理、AI秒写报告、代码等效率工具。",
          "strong": true
        },
        {
          "text": "用户评价强调其双模型（混元+DeepSeek）驱动和强大的文档处理能力。"
        }
      ],
      [
        {
          "text": "目前所有核心功能",
          "strong": true
        },
        {
          "text": "完全免费且无次数限制",
          "strong": false
        },
        {
          "text": "，致力于加速AI工具的普及。",
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
  },
  {
    "title": "点点推出AI攻略模式，深入生活场景",
    "bullets": [
      [
        {
          "text": "小红书旗下AI生活助手“点点”App",
          "strong": false
        },
        {
          "text": "全新上线攻略模式",
          "strong": true
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "该模式基于",
          "strong": true
        },
        {
          "text": "小红书海量真人经验",
          "strong": false
        },
        {
          "text": "，能为用户生成定制化的深度攻略，涵盖旅行出游、兴趣学习、购物决策、美食探店等多个生活决策场景。"
        }
      ],
      [
        {
          "text": "用户可以通过语音和带图提问，获取个性化建议，",
          "strong": true
        },
        {
          "text": "满足年轻用户在“探索与种草”过程中的效率需求",
          "strong": false
        },
        {
          "text": "。",
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
    "title": "Rokid AI眼镜App持续迭代，AI助手多模态升级",
    "bullets": [
      [
        {
          "text": "Rokid AI眼镜App升级AI助手，提升了语音识别速度、准确率并",
          "strong": true
        },
        {
          "text": "支持部分方言识别",
          "strong": false
        },
        {
          "text": "。"
        }
      ],
      [
        {
          "text": "视觉模型支持调用工具，实现",
          "strong": true
        },
        {
          "text": "连续对话",
          "strong": false
        },
        {
          "text": "，并",
          "strong": true
        },
        {
          "text": "接入通义千问Qwen3.6-plus和智谱GLM-5v-turbo等模型",
          "strong": false
        },
        {
          "text": "，增强视觉理解和智能体能力。"
        }
      ],
      [
        {
          "text": "新增",
          "strong": true
        },
        {
          "text": "城市伴游功能",
          "strong": false
        },
        {
          "text": "，根据位置实时AI讲解周边景点，并上线眼镜侧小组件，提升用户体验。",
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
    "title": "腾讯元宝接入Hy3 preview模型",
    "bullets": [
      [
        {
          "text": "腾讯元宝App于近日",
          "strong": false
        },
        {
          "text": "接入了Hy3 preview最新模型",
          "strong": true
        },
        {
          "text": "，旨在持续优化其AI助手的智能体验。"
        },
        {
          "text": "此次模型升级将进一步提升元宝在智能问答、内容生成等方面的能力。"
        }
      ],
      [
        {
          "text": "元宝App此前已具备",
          "strong": false
        },
        {
          "text": "双模型驱动",
          "strong": true
        },
        {
          "text": "（腾讯混元与DeepSeek），并",
          "strong": true
        },
        {
          "text": "深度整合了微信公众号、视频号等腾讯生态的优质信源",
          "strong": false
        },
        {
          "text": "。"
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
    "title": "点点 App 全新上线攻略模式",
    "bullets": [
      [
        {
          "text": "小红书旗下的AI生活助手“点点”App于近日",
          "strong": false
        },
        {
          "text": "全新上线了攻略模式",
          "strong": true
        },
        {
          "text": "。"
        },
        {
          "text": "该模式基于",
          "strong": false
        },
        {
          "text": "小红书海量真人经验内容",
          "strong": true
        },
        {
          "text": "，能为用户生成定制化的深度攻略。"
        }
      ],
      [
        {
          "text": "攻略内容覆盖",
          "strong": false
        },
        {
          "text": "旅行出游、兴趣学习、购物决策、美食探店、笔记总结、知识梳理",
          "strong": true
        },
        {
          "text": "等多个生活决策场景。"
        },
        {
          "text": "用户可以通过语音和带图提问，获取个性化建议。"
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
