import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-07-06";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 个人财务功能与GPT-5.5 Instant模型更新",
    "market": "美国",
    "date": "2026-06-26",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": "面向美国Plus用户和Android平台推出了个人财务功能，允许用户安全连接银行账户，查看财务仪表板，并提问关于其财务状况的问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，ChatGPT",
          "strong": true
        },
        {
          "text": "还对GPT-5.5 Instant模型进行了更新，显著提升了对话质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "新模型在用户进行决策、寻求建议、规划、研究或购物时表现更优，能够更好地识别问题底层目标并保持上下文连贯性，并更可靠地遵循复杂指令。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "通过集成个人财务数据，ChatGPT",
          "strong": true
        },
        {
          "text": "正从通用对话工具向更深度的个人助理迈进，为用户提供私密且个性化的金融咨询服务，可能改变用户管理日常财务的方式。",
          "strong": false
        }
      ],
      [
        {
          "text": "GPT-5.5 Instant",
          "strong": true
        },
        {
          "text": "的提升表明OpenAI持续在优化其主流模型的实用性，特别是在决策辅助和复杂任务处理方面的改进，将直接提高用户在生活和工作中的AI应用效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "这也预示着AI助手将更紧密地与个人数据和专业领域结合，未来可观察其在数据隐私和垂直领域AI服务上的进一步发展。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/59/ed/2259edf9-6bd5-a17a-c035-074aac0954d2/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "Meta AI Muse Spark模型持续扩展至核心应用与智能眼镜",
    "market": "美国",
    "date": "2026-06-30",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "Meta",
          "strong": true
        },
        {
          "text": "旗下最强大的AI模型Muse Spark正在逐步推广至其核心应用（WhatsApp, Instagram, Facebook, Messenger, Threads）和智能眼镜。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新带来了更快的语音响应、更智能的AI眼镜体验，并在对话中增加了购物和求助的新功能。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过Meta AI应用进行自然语音对话，实时生成图像，并利用AI眼镜的实时视觉功能查询周围世界。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Muse Spark",
          "strong": true
        },
        {
          "text": "的广泛部署意味着Meta正将AI深度嵌入其社交生态系统，旨在通过AI驱动的个性化推荐、更自然的交互方式，提升数十亿用户的体验和参与度。",
          "strong": false
        }
      ],
      [
        {
          "text": "智能眼镜与AI的结合是未来硬件入口的关键趋势，Meta",
          "strong": true
        },
        {
          "text": "通过整合实时AI功能，探索新的AR交互范式，使其硬件产品成为日常生活的智能延伸。",
          "strong": false
        }
      ],
      [
        {
          "text": "此举将推动用户在多个平台上的无缝AI体验，并可能加速AI在购物、信息获取和社交互动中的普及。",
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
    "name": "豆包/即梦AI上线Seedance2.0 fast模型",
    "market": "中国",
    "date": "2026-07-03",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "字节跳动旗下AI助手应用豆包和AI图片视频工具即梦AI均宣布上线Seedance2.0 fast模型。",
          "strong": true
        }
      ],
      [
        {
          "text": "这一全新多模态创作体验旨在为用户提供更快速、更高质量的图片和视频生成能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "在豆包中，用户可以使用“豆包P图”通过语音快速修图和编辑图片，并生成具有大片质感的视频；即梦AI则强调与好友一起出镜，利用该模型实现趣味合拍。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast",
          "strong": true
        },
        {
          "text": "模型的推出标志着字节跳动在多模态内容生成领域的进一步发力，通过提升模型效率和创作体验，满足用户对高质量、快速AI创作的需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型不仅强化了豆包作为全能AI助手的图像处理和视频生成能力，也使即梦AI在互动娱乐和社交创作方面更具竞争力，有助于推动AIGC内容生态的繁荣。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来，AI生成内容将更加融入日常社交和创作流程，用户对实时性、个性化和社交互动属性的AIGC工具需求将持续增长。",
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
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0f/b5/cf/0fb5cf6a-fa90-58bc-481d-cdbe42d202e1/AppIcon-0-0-1x_U007epad-0-8-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "豆包 - 随时帮忙的 AI 助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "豆包 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      "note": "使用 豆包 - 随时帮忙的 AI 助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝上线高考通，提供一站式AI志愿填报辅助",
    "market": "中国",
    "date": "2026-06-26",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "腾讯旗下全能AI助手元宝正式上线“高考通”功能，为高考考生提供从查分、选校选专业到填报、录取的一站式AI辅助服务。",
          "strong": true
        }
      ],
      [
        {
          "text": "这是行业首个高考咨询师Agent，旨在利用AI的深度思考能力，帮助学生和家长解决高考志愿填报的复杂问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能在元宝App的最新版本中推出，并作为一项“特别活动”重点推广。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "高考是中国社会高度关注的重大事件，元宝推出高度本地化和垂直化的“高考通”服务，精准切入用户刚需，展现了AI在解决复杂生活决策问题上的巨大潜力。",
          "strong": false
        }
      ],
      [
        {
          "text": "这不仅是腾讯AI助手在教育领域的深度探索，也为其他AI产品在特定社会场景下的应用提供了范例，预示着AI服务将更加精细化、专业化和场景化。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来可观察此类垂直Agent在提供深度专业服务时的准确性、用户信任度以及商业模式的成熟度。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/31/f6/81/31f68166-2cd2-b29d-123d-9cc5345fa175/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点App上线“攻略模式”，基于真人经验生成深度攻略",
    "market": "中国",
    "date": "2026-06-25",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "小红书旗下AI生活助手点点App",
          "strong": true
        },
        {
          "text": "最新版本（3.26及后续版本）全新上线“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量的真人经验，能够为用户生成专属的深度攻略，覆盖旅行出游、兴趣入门、探店逛街、笔记总结、知识梳理等多个生活场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户可以通过语音问答和带图提问的方式，快速获取个性化的攻略建议。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "点点App利用小红书丰富的用户生成内容（UGC）优势，将AI与真实用户经验相结合，有效解决了传统攻略信息碎片化、不个性化的问题，提升了AI在生活决策中的实用价值。",
          "strong": false
        }
      ],
      [
        {
          "text": "这种“AI+社区内容”的模式，为AI助手提供了差异化的数据源和应用场景，尤其在中国市场，社交媒体内容是重要的信息来源，预示着AI与特定内容平台的深度融合将是重要趋势。",
          "strong": false
        }
      ],
      [
        {
          "text": "该功能有望通过AI的智能整合，将用户在小红书上的消费决策链条进一步缩短，并可能为社区内容创造新的价值变现方式。",
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
    "title": "AI助手与用户日常场景深度融合，走向垂直化与个性化",
    "evidence": [
      {
        "text": "美国ChatGPT",
        "strong": true
      },
      {
        "text": "推出个人财务功能，允许用户连接银行账户提供金融咨询。",
        "strong": false
      },
      {
        "text": "中国腾讯元宝",
        "strong": true
      },
      {
        "text": "上线“高考通”Agent，提供高考志愿填报一站式辅助。",
        "strong": false
      },
      {
        "text": "中国点点App",
        "strong": true
      },
      {
        "text": "推出“攻略模式”，基于小红书真人经验生成个性化生活攻略。",
        "strong": false
      },
      {
        "text": "Meta AI Muse Spark模型",
        "strong": true
      },
      {
        "text": "进一步整合到WhatsApp、Instagram等应用，提供购物和求助功能。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美市场AI助手均显示出从通用问答向特定垂直领域和个人生活场景深化渗透的趋势。",
        "strong": false
      },
      {
        "text": "美国侧重于金融和效率工具集成，而中国则更侧重于教育、生活决策和基于社交媒体内容的个性化服务。",
        "strong": false
      },
      {
        "text": "这种差异反映了两国用户需求和平台生态的不同，但共同方向是AI通过数据连接和场景定制提供更高价值。",
        "strong": false
      }
    ]
  },
  {
    "title": "多模态能力持续迭代，推动内容创作与硬件交互新体验",
    "evidence": [
      {
        "text": "字节跳动旗下豆包与即梦AI",
        "strong": true
      },
      {
        "text": "上线Seedance2.0 fast模型，强化图片和视频生成能力。",
        "strong": false
      },
      {
        "text": "OpenAI ChatGPT的GPT-5.5 Instant模型",
        "strong": true
      },
      {
        "text": "提升了对话质量，尤其在处理购物和本地商业查询时能更连贯地整合产品信息和图像。",
        "strong": false
      },
      {
        "text": "Rokid AI智能眼镜应用",
        "strong": true
      },
      {
        "text": "升级了视觉模型（Qwen 3.6plus），提升了识别准确率和AI助手稳定性，并支持A2UI协议实现流式UI渲染。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美两国AI在多模态理解与生成方面均取得显著进步，尤其是在视觉与语言的结合上。",
        "strong": false
      },
      {
        "text": "中国市场在AI视频、图像创作工具的普及和易用性上表现强劲，通过大模型赋能的消费级产品更新迅速。",
        "strong": false
      },
      {
        "text": "美国在基础模型能力提升的同时，更注重多模态能力在现有平台和通用助手中的集成应用，以及对AI硬件交互的赋能。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI硬件入口持续探索，生态系统与用户体验并重",
    "evidence": [
      {
        "text": "Meta AI Muse Spark模型",
        "strong": true
      },
      {
        "text": "逐步在Ray-Ban Meta和Oakley Meta眼镜上推出，带来更智能的AI体验和实时视觉问答能力。",
        "strong": false
      },
      {
        "text": "Rokid AI（中国和美国）伴侣应用Hi Rokid",
        "strong": true
      },
      {
        "text": "更新，为Rokid Glasses提供了工具箱、A2UI渲染、实时同声传译等功能，并升级了慧眼在线视觉模型。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI与智能硬件的结合是中美共同的长期趋势，双方都在积极探索AI眼镜作为下一代计算平台的可能性。",
        "strong": false
      },
      {
        "text": "美国Meta通过将其核心AI模型深度整合到自有硬件中，旨在打造统一且沉浸式的生态体验。",
        "strong": false
      },
      {
        "text": "中国Rokid则侧重于通过伴侣App不断迭代硬件功能，提升AI助手的实时性、翻译能力和实用工具集成，以满足用户在移动场景下的具体需求。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 个人财务功能与GPT-5.5 Instant模型更新、Meta AI Muse Spark模型持续扩展至核心应用与智能眼镜，以及中国的 豆包/即梦AI上线Seedance2.0 fast模型、腾讯元宝上线高考通，提供一站式AI志愿填报辅助，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "头部产品持续迭代核心模型和功能，深化与用户日常数据（如财务）和多模态交互的融合，提升通用助手的智能化和实用性。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "头部互联网公司积极布局AI内容创作，推出基于多模态大模型的图片和视频生成工具，用户体验和社交分享成为重点。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "US-AI-Assistant-Search-1",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Meta AI",
      "Gemini App"
    ],
    "pattern": "头部产品持续迭代核心模型和功能，深化与用户日常数据（如财务）和多模态交互的融合，提升通用助手的智能化和实用性。",
    "opportunity": "提供更个性化、隐私保护的垂直领域AI助手服务；探索多模态搜索和交互的创新体验。",
    "watchNext": "AI助手对个人数据的处理边界和隐私合规；多模态搜索在实际场景中的用户接受度。",
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
    "id": "CN-AI-Assistant-Search-1",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "Rokid AI"
    ],
    "pattern": "巨头AI助手竞争激烈，纷纷推出基于自身生态的差异化功能，如高考通、小红书攻略模式，并持续升级多模态能力。",
    "opportunity": "本地化、垂直化场景仍有巨大增长空间；AI助手与社交、教育、生活服务等平台深度融合。",
    "watchNext": "AI助手在特定垂直领域的市场占有率；用户对内置AI服务的粘性与付费意愿。",
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
    "id": "US-AI-Education-Learning-1",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI学习平台通过游戏化机制提升学生参与度，用户量持续增长，显示出市场对创新学习方式的需求。",
    "opportunity": "利用AI提供个性化学习路径、智能辅导和作业批改，尤其是在K12和高等教育领域。",
    "watchNext": "AI教育产品能否有效解决学术表现下降问题；游戏化学习的长期效果和商业化路径。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "CN-AI-Education-Learning-1",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "腾讯元宝(高考通)",
      "千问智学"
    ],
    "pattern": "AI教育产品深度结合本地教育场景，如高考志愿填报、作业批改、定制学习资料和作文辅导，满足刚性需求。",
    "opportunity": "AI在个性化辅导、学习效率提升和教育公平方面发挥更大作用；深度垂直到各学科和教育阶段的AI应用。",
    "watchNext": "高考等关键场景AI辅助的准确性和公信力；AI教育产品如何与传统教育体系融合。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "US-AI-Companion-Social-1",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Series",
      "Replika"
    ],
    "pattern": "AI社交和陪伴产品通过模型升级提升角色一致性、记忆力和上下文理解，同时探索新的社交互动模式（如iMessage内的AI社交网络）。",
    "opportunity": "满足用户情感陪伴、角色扮演和匿名社交的需求；AI在构建新型人际连接中的潜力。",
    "watchNext": "AI社交产品在用户隐私和伦理方面的挑战；如何平衡AI的智能化与人类社交的真实性。",
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
    "id": "CN-AI-Companion-Social-1",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "星野"
    ],
    "pattern": "AI智能体内容社区蓬勃发展，用户可以自由创造和分享AI智能体，满足陪伴、娱乐和角色扮演需求。",
    "opportunity": "打造更具沉浸感、个性化的AI虚拟伙伴；通过社区共创丰富AI智能体的多样性。",
    "watchNext": "AI智能体在情感交流中的伦理边界；如何解决智能体内容质量参差不齐的问题。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "US-AI-Gaming-Entertainment-1",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "Cantina: AI Video & Characters",
      "AI Video - AI Video Generator"
    ],
    "pattern": "市场开始出现AI视频与角色生成工具，但尚未形成大规模爆发式增长，多为初步探索阶段。",
    "opportunity": "利用AI技术创造更具沉浸感、个性化的游戏内容和互动体验，如AI NPC、AI生成剧情等。",
    "watchNext": "关注AI在游戏开发、内容定制和玩家互动中的实际应用案例；头部游戏厂商的AI战略。",
    "sources": [
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "CN-AI-Gaming-Entertainment-1",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "星野",
      "即梦AI"
    ],
    "pattern": "AI智能体社区和多模态创作工具为互动娱乐提供了新思路，用户可创造虚拟角色进行互动，或生成动态内容。",
    "opportunity": "AI在游戏角色、剧情生成、虚拟偶像和互动叙事方面潜力巨大；结合社交媒体生态，拓展AI娱乐的边界。",
    "watchNext": "AI生成内容的版权和伦理问题；用户对AI驱动的互动娱乐的接受度与付费意愿。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      },
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "id": "US-AI-Creation-1",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Gemini App (Lyria 3 Pro)",
      "Cantina: AI Video & Characters",
      "AI Video - AI Video Generator"
    ],
    "pattern": "AI在音乐、图片和视频创作领域展现潜力，工具类应用开始通过模型升级提供更专业的创作功能，并出现在应用榜单。",
    "opportunity": "降低创作门槛，赋能普通用户生成专业级内容；AI在艺术、设计、营销等领域的应用。",
    "watchNext": "AI创作工具的版权归属和原创性争议；专业创作者对AI工具的接受度与协同方式。",
    "sources": [
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "CN-AI-Creation-1",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "即梦AI",
      "腾讯元宝"
    ],
    "pattern": "头部互联网公司积极布局AI内容创作，推出基于多模态大模型的图片和视频生成工具，用户体验和社交分享成为重点。",
    "opportunity": "AI赋能短视频、直播、社交媒体等内容生态；AI创作工具的商业化潜力。",
    "watchNext": "AI生成内容质量的持续提升；AI在短视频平台等流量分发中的角色。",
    "sources": [
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "US-AI-Efficiency-Office-1",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT (Codex Remote)",
      "Google AI Edge Eloquent",
      "Granola"
    ],
    "pattern": "AI效率工具从会议记录、语音转写向远程工作协同、企业级应用拓展，获得高额融资，并加速与现有生态的集成。",
    "opportunity": "AI在自动化重复任务、知识管理和跨平台协作方面的应用；提升个人和团队工作效率。",
    "watchNext": "AI Agent在企业级应用的落地情况；AI工具的数据安全和隐私保护。",
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
    "id": "CN-AI-Efficiency-Office-1",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "头部AI助手将效率办公功能（如总结、代码、文档生成、录音笔）深度集成，通过多模态和生态联动提升用户工作学习效率。",
    "opportunity": "AI在文档处理、报告撰写、会议纪要等场景的智能化升级；与微信、腾讯文档等生态打通，实现无缝工作流。",
    "watchNext": "AI办公工具在垂直行业场景的渗透率；如何提升AI在复杂决策和创造性任务中的辅助能力。",
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
    "id": "US-AI-Life-Tools-1",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "ChatGPT"
    ],
    "pattern": "AI助手功能持续扩展到生活场景，如语言学习（发音指导）、信息查询（世界杯更新）和购物辅助，提升日常生活便利性。",
    "opportunity": "AI在智能家居、健康管理、个性化推荐等领域的应用；整合多平台信息提供一站式生活服务。",
    "watchNext": "AI生活工具的用户粘性和活跃度；数据互通和隐私保护的平衡。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "CN-AI-Life-Tools-1",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点"
    ],
    "pattern": "AI生活工具深度结合本地化社交媒体内容和用户习惯，提供P图、拍题、智能识图、生活攻略等多元服务，满足日常生活和学习需求。",
    "opportunity": "AI在消费决策、旅行规划、兴趣探索等场景的精细化应用；与支付宝、微信等支付和社交生态的进一步融合。",
    "watchNext": "AI工具在提供生活决策时的可靠性和用户信任度；如何平衡个性化推荐与信息茧房。",
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
      }
    ]
  },
  {
    "id": "US-AI-Hardware-Entry-1",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta glasses",
      "Oakley Meta glasses",
      "Rokid Glasses (via Hi Rokid app)"
    ],
    "pattern": "科技巨头和创新公司持续投入AI眼镜等硬件形态，通过内置AI模型和伴侣App升级，强化实时视觉识别、语音交互和多模态辅助能力。",
    "opportunity": "智能眼镜作为下一代计算平台，拓展AR应用和无缝AI交互体验；AI助手的“环境感知”能力。",
    "watchNext": "消费者对AI眼镜的接受度、续航和隐私问题；硬件生态的成熟度与应用开发者的参与。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Google AI Edge Eloquent",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "id": "CN-AI-Hardware-Entry-1",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Rokid Glasses (via Rokid AI app)"
    ],
    "pattern": "AI眼镜作为新兴硬件入口，通过App持续迭代功能，提升AI助手的实用性和交互体验，包括视觉识别、翻译和工具集成。",
    "opportunity": "AI眼镜在工业、文旅、教育等垂直行业的应用潜力；结合本地大模型和生态服务，打造差异化竞争优势。",
    "watchNext": "AI眼镜的技术成熟度、市场普及率和商业模式创新；用户在公共场合使用AI眼镜的隐私观念。",
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E8%81%8B%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "AI助手核心能力与垂直场景双向深化",
    "bullets": [
      [
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": "推出面向Plus用户和Android的个人财务功能，允许连接金融账户进行咨询，迈向更深度的个人金融助理。",
          "strong": false
        }
      ],
      [
        {
          "text": "GPT-5.5 Instant模型",
          "strong": true
        },
        {
          "text": "更新，显著提升了对话质量，尤其在决策辅助、寻求建议、规划和购物等复杂任务场景下，上下文理解和指令遵循能力更强。",
          "strong": false
        }
      ],
      [
        {
          "text": "Meta AI的Muse Spark模型",
          "strong": true
        },
        {
          "text": "持续扩展至WhatsApp、Instagram等核心应用及智能眼镜，带来更快的语音响应、实时图像生成和视觉问答，深化AI在社交和硬件中的渗透。",
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
  },
  {
    "title": "ChatGPT 个人财务功能与GPT-5.5 Instant模型更新",
    "bullets": [
      [
        {
          "text": "ChatGPT",
          "strong": true
        },
        {
          "text": "面向美国Plus用户和Android平台推出了个人财务功能，允许用户安全连接银行账户，查看财务仪表板，并提问关于其财务状况的问题。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，ChatGPT",
          "strong": true
        },
        {
          "text": "还对GPT-5.5 Instant模型进行了更新，显著提升了对话质量。",
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
    "title": "Meta AI Muse Spark模型持续扩展至核心应用与智能眼镜",
    "bullets": [
      [
        {
          "text": "Meta",
          "strong": true
        },
        {
          "text": "旗下最强大的AI模型Muse Spark正在逐步推广至其核心应用（WhatsApp, Instagram, Facebook, Messenger, Threads）和智能眼镜。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新带来了更快的语音响应、更智能的AI眼镜体验，并在对话中增加了购物和求助的新功能。",
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
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "头部产品持续迭代核心模型和功能，深化与用户日常数据（如财务）和多模态交互的融合，提升通用助手的智能化和实用性。",
          "strong": false
        }
      ],
      [
        {
          "text": "提供更个性化、隐私保护的垂直领域AI助手服务；探索多模态搜索和交互的创新体验。",
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
          "text": "AI效率工具从会议记录、语音转写向远程工作协同、企业级应用拓展，获得高额融资，并加速与现有生态的集成。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI在自动化重复任务、知识管理和跨平台协作方面的应用；提升个人和团队工作效率。",
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
        "label": "Google AI Edge Eloquent",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "TechCrunch Granola funding",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "AI大模型赋能本地化垂直应用，内容生成与生活决策成亮点",
    "bullets": [
      [
        {
          "text": "字节跳动旗下豆包与即梦AI",
          "strong": true
        },
        {
          "text": "同步上线Seedance2.0 fast多模态模型，大幅提升图片和视频的生成速度与质量，强化了内容创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "腾讯元宝",
          "strong": true
        },
        {
          "text": "推出“高考通”AI Agent，提供从查分到志愿填报的一站式智能辅助，精准切入中国教育核心场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "小红书旗下点点App",
          "strong": true
        },
        {
          "text": "上线“攻略模式”，基于小红书海量真人经验，通过AI生成旅行、购物等深度生活攻略，将社区内容与AI智能服务深度结合。",
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
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "title": "豆包/即梦AI上线Seedance2.0 fast模型",
    "bullets": [
      [
        {
          "text": "字节跳动旗下AI助手应用豆包和AI图片视频工具即梦AI均宣布上线Seedance2.0 fast模型。",
          "strong": true
        }
      ],
      [
        {
          "text": "这一全新多模态创作体验旨在为用户提供更快速、更高质量的图片和视频生成能力。",
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
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "腾讯元宝上线高考通，提供一站式AI志愿填报辅助",
    "bullets": [
      [
        {
          "text": "腾讯旗下全能AI助手元宝正式上线“高考通”功能，为高考考生提供从查分、选校选专业到填报、录取的一站式AI辅助服务。",
          "strong": true
        }
      ],
      [
        {
          "text": "这是行业首个高考咨询师Agent，旨在利用AI的深度思考能力，帮助学生和家长解决高考志愿填报的复杂问题。",
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
    "title": "点点App上线“攻略模式”，基于真人经验生成深度攻略",
    "bullets": [
      [
        {
          "text": "小红书旗下AI生活助手点点App",
          "strong": true
        },
        {
          "text": "最新版本（3.26及后续版本）全新上线“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量的真人经验，能够为用户生成专属的深度攻略，覆盖旅行出游、兴趣入门、探店逛街、笔记总结、知识梳理等多个生活场景。",
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
          "text": "头部互联网公司积极布局AI内容创作，推出基于多模态大模型的图片和视频生成工具，用户体验和社交分享成为重点。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI赋能短视频、直播、社交媒体等内容生态；AI创作工具的商业化潜力。",
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
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  }
];
