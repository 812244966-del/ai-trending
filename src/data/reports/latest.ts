import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-04-27";

export const topFindings: Finding[] = [
  {
    "name": "GPT-5.5 in ChatGPT",
    "market": "美国",
    "date": "2026-04-23",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中推出 ",
          "strong": false
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": "，这是其迄今为止最智能的前沿模型，专为专业工作设计。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型能够理解复杂目标，使用工具，自我检查，并完成更多任务。其 Pro 版本适用于需要深度推理、强结构和高置信度的最高精度工作。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "GPT-5.5 的推出显著提升了 ChatGPT 在专业领域的应用能力，尤其是在 ",
          "strong": false
        },
        {
          "text": "代码编写调试、数据分析、文档创建和跨工具协作",
          "strong": true
        },
        {
          "text": "方面的表现。这标志着 AI 在代理式编码和知识工作方面迈出了重要一步，将极大提高专业人士的工作效率和产出质量。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/45/d6/1b45d659-d8bf-94b0-dfa6-0449fc565333/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT Images 2.0",
    "market": "美国",
    "date": "2026-04-21",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 在所有 ChatGPT 付费计划中引入了 ",
          "strong": false
        },
        {
          "text": "ChatGPT Images 2.0",
          "strong": true
        },
        {
          "text": "，一个全新的图像生成模型。同时推出的“思考中生成图像”功能允许模型在生成图像前进行规划和细化输出。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此更新提升了 ChatGPT 的多模态能力，使用户能够获得更高质量和更精细的图像生成效果。尤其是“思考中生成图像”功能，有望带来更具创意和准确性的视觉内容，拓展 AI 在艺术设计和内容创作领域的应用潜力。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/45/d6/1b45d659-d8bf-94b0-dfa6-0449fc565333/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT for Clinicians",
    "market": "美国",
    "date": "2026-04-22",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI 面向美国经过验证的临床医生推出免费版 ",
          "strong": false
        },
        {
          "text": "ChatGPT for Clinicians",
          "strong": true
        },
        {
          "text": "。该版本旨在支持临床工作，包括证据审查、文档编写、医学研究，并提供可靠的临床搜索、引用和赚取 CME 学分支持。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此举将 AI 技术直接引入医疗护理环节，通过提供专业的医疗信息支持和辅助工具，有望 ",
          "strong": false
        },
        {
          "text": "显著提升临床医生的工作效率，辅助决策，并促进医学研究",
          "strong": true
        },
        {
          "text": "。同时，支持 CME 学分也鼓励了医生将 AI 融入日常工作流。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/45/d6/1b45d659-d8bf-94b0-dfa6-0449fc565333/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝接入Hy3 preview",
    "market": "中国",
    "date": "2026-04-24",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯元宝宣布接入 ",
          "strong": false
        },
        {
          "text": "Hy3 preview",
          "strong": true
        },
        {
          "text": " 模型，为用户带来全新的智能体验。此次更新将进一步提升其作为全能AI助手的各项能力。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "接入新模型通常意味着AI在理解能力、生成质量和多模态交互方面会有显著提升。作为腾讯生态内的核心AI助手，元宝的升级将可能进一步 ",
          "strong": false
        },
        {
          "text": "强化其在学习、办公、生活工具以及内容创作等方面的表现",
          "strong": true
        },
        {
          "text": "，满足用户更复杂、更个性化的需求。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d3/1a/bc/d31abc3a-ca51-baba-03f6-b444279677dc/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
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
    "date": "2026-04-20",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI在2026年4月20日上线了 ",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，旨在提供全新的多模态创作体验。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast模型的推出，意味着即梦AI在 ",
          "strong": false
        },
        {
          "text": "图片和视频生成效率与质量上有所突破",
          "strong": true
        },
        {
          "text": "。对于内容创作者而言，这将加速其创意实现过程，提供更流畅的创作体验，尤其在短视频和社交媒体内容生产方面具有重要意义。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8d/a5/6c/8da56c4e-17ef-4c5c-6ce3-3153df851e46/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "豆包扩展为全能生活助手",
    "market": "中国",
    "date": "2026-04-21",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "字节跳动旗下的AI助手豆包，在最新用户评价中被提及已成为涵盖 ",
          "strong": false
        },
        {
          "text": "学习辅导、职业规划、出行安排、内容创作等多场景的“全能搭子”",
          "strong": true
        },
        {
          "text": "，提供拍照提问、语音输入、P图、视频生成等多样化服务。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "豆包通过持续的功能迭代和用户体验优化，使其不再局限于单一AI问答，而是深入用户日常生活的方方面面。这种 ",
          "strong": false
        },
        {
          "text": "多功能集成和场景化服务",
          "strong": true
        },
        {
          "text": "的趋势，预示着AI助手正从工具向更深层次的个人伴侣发展，有望显著提升用户在学习、工作和生活中的综合效率和体验。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c1/93/e1/c193e17f-b5c2-fdb1-5f94-4d2ba6680538/AppIcon-0-0-1x_U007epad-0-8-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "豆包 - 随时帮忙的 AI 助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "豆包 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      "note": "使用 豆包 - 随时帮忙的 AI 助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "大模型能力持续突破，向专业化、多模态演进",
    "evidence": [
      {
        "text": "OpenAI 推出 GPT-5.5，旨在处理复杂专业工作、代理式编码及高级知识任务，并同步更新 ChatGPT Images 2.0，强化了图像生成的多模态能力。",
        "strong": false
      },
      {
        "text": "腾讯元宝接入 Hy3 preview 模型，即梦AI上线 Seedance2.0 fast 模型，两者均预示着国内大模型在智能体验和多模态创作上的进一步突破。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "与以往通用型大模型的迭代不同，本周的更新显示出大模型正在向 ",
        "strong": false
      },
      {
        "text": "特定专业领域（如医疗、编码）和多模态融合（如图像、视频生成）",
        "strong": true
      },
      {
        "text": "进行深度优化，而非单纯的参数规模扩张。这表明厂商正致力于将大模型从实验室推向更广泛的垂直应用场景，以解决实际痛点。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI 助手向“全能管家”演进，集成度与场景覆盖度提升",
    "evidence": [
      {
        "text": "豆包在用户评价中被誉为“全能生活朋友”，涵盖学习辅导、职业规划、出行、P图、视频生成等，极大扩展了AI助手的应用场景。",
        "strong": false
      },
      {
        "text": "OpenAI 针对临床医生推出专用版 ChatGPT，支持证据审查、文档编写及医学研究，显示AI助手正在垂直领域进行深度集成。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "过去 AI 助手更多是单一功能的智能工具（如问答、写作），而近期趋势表明它们正在 ",
        "strong": false
      },
      {
        "text": "向集成化、全场景覆盖的“智能管家”角色转变",
        "strong": true
      },
      {
        "text": "。无论是通过通用助手扩展功能（如豆包），还是针对特定高价值人群提供定制化服务（如 ChatGPT for Clinicians），都在努力成为用户生活中不可或缺的“搭子”。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 GPT-5.5 in ChatGPT、ChatGPT Images 2.0，以及中国的 腾讯元宝接入Hy3 preview、即梦AI上线Seedance2.0 fast模型，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "AI图像、视频、音乐生成及编辑工具持续创新，功能专业化且易用性增强，在创意应用市场占据重要地位。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "字节跳动、腾讯等巨头深耕AI创作领域，通过旗下多款产品占据市场高位，持续推出视频、图像生成及编辑新功能，模型迭代迅速。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国更偏向入口整合和高频场景覆盖",
    "evidence": [
      {
        "text": "字节跳动、腾讯等巨头深耕AI创作领域，通过旗下多款产品占据市场高位，持续推出视频、图像生成及编辑新功能，模型迭代迅速。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "关注AI在长视频、3D内容生成和个性化IP创作上的突破。",
        "strong": false
      }
    ]
  }
];

export const categoryHeatmapItems: CategoryHeatmapItem[] = [
  {
    "id": "us-ai-assistant-search",
    "category": "AI 助手/搜索",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Meta AI",
      "ChatGPT",
      "Gemini"
    ],
    "pattern": "头部AI助手持续发布重大更新，模型能力大幅提升，支持多模态和专业化场景。",
    "opportunity": "提升核心助理的专业能力和多模态交互体验，增强用户粘性。",
    "watchNext": "关注更深层次的跨应用集成和个性化“记忆”能力。",
    "sources": [
      {
        "label": "Meta Official",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
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
    "id": "cn-ai-assistant-search",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问 - 阿里AI助手"
    ],
    "pattern": "国产AI助手在榜单表现强劲，持续迭代基础模型并扩展服务场景，成为用户学习、工作、生活的多面手。",
    "opportunity": "巩固基础模型能力，探索更自然、更深度的跨应用和生态集成。",
    "watchNext": "关注用户负面反馈（如乱提问、水印、降智）是否得到有效解决，以及付费模式的调整。",
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
    "id": "us-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "ChatGPT for Clinicians"
    ],
    "pattern": "AI在专业教育和职业培训领域开始落地，提供定制化的学习辅助和知识审查工具。",
    "opportunity": "将AI能力进一步拓展至更广泛的K12和高等教育领域，解决学生和教师的痛点。",
    "watchNext": "关注AI在传统教育机构中的应用案例和产品形态。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问智学"
    ],
    "pattern": "AI助手积极拓展教育场景，提供拍题答疑、作业批改、作文辅导等功能，成为学生和家长的得力助手。",
    "opportunity": "深化教育场景的个性化体验，例如针对不同学习风格和进度的智能推荐。",
    "watchNext": "关注AI教育产品如何平衡“授渔”与“授鱼”，避免过度依赖。",
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
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "us-ai-companion-social",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Character.AI",
      "Replika"
    ],
    "pattern": "AI伴侣和社交应用注重提升AI角色的记忆力、一致性和个性化互动体验，尝试引入“世界观”构建工具。",
    "opportunity": "进一步探索AI在提供情感支持、社交连接和虚拟角色扮演方面的潜力，尤其在个性化记忆和长期关系维护方面。",
    "watchNext": "关注用户对隐私和AI“人性化”边界的接受度。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      }
    ]
  },
  {
    "id": "cn-ai-companion-social",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "星野"
    ],
    "pattern": "用户可创建AI智能体的社交平台持续优化交互体验和模型能力，以满足用户对虚拟陪伴和角色扮演的需求。",
    "opportunity": "提升AI角色的多模态表现力和情商，增强用户沉浸感和长期互动意愿。",
    "watchNext": "关注社交AI如何平衡开放创作与内容安全监管。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "us-ai-gaming-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "Gemini",
      "Character.AI"
    ],
    "pattern": "AI在辅助创作（如音乐生成）和增强虚拟角色互动方面有所渗透，但纯粹的AI游戏产品信号不强。",
    "opportunity": "探索AI在游戏内容生成、智能NPC、个性化游戏体验方面的创新应用。",
    "watchNext": "关注游戏厂商如何将生成式AI深度整合到游戏设计和玩法中。",
    "sources": [
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      }
    ]
  },
  {
    "id": "cn-ai-gaming-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [
      "星野"
    ],
    "pattern": "AI智能体社区提供互动娱乐可能性，但独立AI游戏或泛娱乐产品暂无显著爆发。",
    "opportunity": "结合中国市场特色，探索AI辅助游戏开发、AI驱动内容创作和虚拟偶像互动等领域。",
    "watchNext": "关注头部游戏公司在AI游戏领域的布局和产品发布。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "us-ai-creative",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Gemini",
      "Canva: AI Video & Photo Editor",
      "AI Video - AI Video Generator",
      "Picsart AI Photo Editor"
    ],
    "pattern": "AI图像、视频、音乐生成及编辑工具持续创新，功能专业化且易用性增强，在创意应用市场占据重要地位。",
    "opportunity": "提升多模态创作的真实感、可控性，进一步降低创作门槛，赋能更多普通用户。",
    "watchNext": "关注AI在长视频、3D内容生成和个性化IP创作上的突破。",
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
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "cn-ai-creative",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "剪映",
      "醒图",
      "即梦AI",
      "美图秀秀",
      "豆包"
    ],
    "pattern": "字节跳动、腾讯等巨头深耕AI创作领域，通过旗下多款产品占据市场高位，持续推出视频、图像生成及编辑新功能，模型迭代迅速。",
    "opportunity": "优化付费策略，解决用户对“降智”和“恶意收费”的抱怨，提升产品口碑和长期用户价值。",
    "watchNext": "关注短视频平台如何进一步整合AI创作能力，以及AIGC在商业化应用上的新模式。",
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
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "us-ai-productivity-office",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Google AI Edge Eloquent",
      "Gemini"
    ],
    "pattern": "AI在专业工作流程中扮演更核心角色，提供高级推理、文档生成、编码辅助、精准听写等功能，提升效率。",
    "opportunity": "针对细分专业场景提供更定制化的AI解决方案，解决数据安全和合规性问题。",
    "watchNext": "关注AI在企业级应用中的普及度和集成度，以及与传统办公软件的融合。",
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
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "cn-ai-productivity-office",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问 - 阿里AI助手"
    ],
    "pattern": "国产AI助手在办公场景持续发力，提供文档总结、代码编写、报告生成、录音转写等全方位效率工具。",
    "opportunity": "进一步优化多文件格式处理能力，提升数据安全性和企业级部署能力。",
    "watchNext": "关注AI助手与主流企业协作工具的深度融合和自定义Agent的开发。",
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
    "id": "us-ai-lifestyle-tools",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Meta AI",
      "Gemini",
      "Hi Rokid"
    ],
    "pattern": "AI通过智能眼镜、智能电视等硬件入口渗透日常生活，提供翻译、信息获取和娱乐体验。",
    "opportunity": "拓展AI在家庭管理、健康监测、个性化推荐等生活服务领域的应用。",
    "watchNext": "关注智能家居生态中AI的集成程度以及多设备协同体验。",
    "sources": [
      {
        "label": "Meta Official",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "id": "cn-ai-lifestyle-tools",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝",
      "点点",
      "Rokid AI"
    ],
    "pattern": "AI助手与小红书等内容平台结合，提供生活攻略、旅游规划、购物决策等个性化服务，并通过智能眼镜实现实时翻译、通知播报。",
    "opportunity": "提升AI在生活场景中的主动服务和决策支持能力，打造更智能的个人生活助理。",
    "watchNext": "关注AI在智慧出行、健康管理、个性化娱乐推荐等领域的深化应用。",
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
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "id": "us-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Meta AI glasses",
      "Hi Rokid"
    ],
    "pattern": "智能眼镜作为AI主要硬件入口，持续优化多模态感知能力和实时交互体验，推动AI与物理世界的融合。",
    "opportunity": "解决智能眼镜的舒适度、续航、隐私等问题，拓展更多杀手级应用场景。",
    "watchNext": "关注苹果、亚马逊等科技巨头在AR/AI眼镜领域的具体产品发布和市场反馈。",
    "sources": [
      {
        "label": "Meta Official",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "id": "cn-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Rokid AI"
    ],
    "pattern": "智能眼镜作为AI硬件载体，通过引入头部大模型（豆包、通义千问等）和提升翻译、通知等基础功能，持续迭代以提升用户体验。",
    "opportunity": "推动AI眼镜在特定行业（如工业、旅游）的落地应用，探索更广泛的消费者市场接受度。",
    "watchNext": "关注中国本土厂商在AI眼镜形态创新和内容生态建设上的进展。",
    "sources": [
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "OpenAI推出专业级AI助手与多模态创作工具",
    "bullets": [
      [
        {
          "text": "ChatGPT 发布 ",
          "strong": false
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": "，显著提升其在代码编写、数据分析、文档创建和跨工具协作等专业工作场景的能力，并推出 Pro 版本用于最高精度任务。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，面向美国临床医生推出了免费的 ",
          "strong": false
        },
        {
          "text": "ChatGPT for Clinicians",
          "strong": true
        },
        {
          "text": "，专注于证据审查、文档和医学研究，支持 CME 学分。",
          "strong": false
        }
      ],
      [
        {
          "text": "图像生成功能也迎来升级，推出 ",
          "strong": false
        },
        {
          "text": "ChatGPT Images 2.0",
          "strong": true
        },
        {
          "text": " 及“思考中生成图像”功能，提高图像创作质量和精细度。",
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
    "title": "GPT-5.5 in ChatGPT",
    "bullets": [
      [
        {
          "text": "OpenAI 在 ChatGPT 中推出 ",
          "strong": false
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": "，这是其迄今为止最智能的前沿模型，专为专业工作设计。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模型能够理解复杂目标，使用工具，自我检查，并完成更多任务。其 Pro 版本适用于需要深度推理、强结构和高置信度的最高精度工作。",
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
    "title": "ChatGPT Images 2.0",
    "bullets": [
      [
        {
          "text": "OpenAI 在所有 ChatGPT 付费计划中引入了 ",
          "strong": false
        },
        {
          "text": "ChatGPT Images 2.0",
          "strong": true
        },
        {
          "text": "，一个全新的图像生成模型。同时推出的“思考中生成图像”功能允许模型在生成图像前进行规划和细化输出。",
          "strong": false
        }
      ],
      [
        {
          "text": "此更新提升了 ChatGPT 的多模态能力，使用户能够获得更高质量和更精细的图像生成效果。尤其是“思考中生成图像”功能，有望带来更具创意和准确性的视觉内容，拓展 AI 在艺术设计和内容创作领域的应用潜力。",
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
    "title": "ChatGPT for Clinicians",
    "bullets": [
      [
        {
          "text": "OpenAI 面向美国经过验证的临床医生推出免费版 ",
          "strong": false
        },
        {
          "text": "ChatGPT for Clinicians",
          "strong": true
        },
        {
          "text": "。该版本旨在支持临床工作，包括证据审查、文档编写、医学研究，并提供可靠的临床搜索、引用和赚取 CME 学分支持。",
          "strong": false
        }
      ],
      [
        {
          "text": "此举将 AI 技术直接引入医疗护理环节，通过提供专业的医疗信息支持和辅助工具，有望 ",
          "strong": false
        },
        {
          "text": "显著提升临床医生的工作效率，辅助决策，并促进医学研究",
          "strong": true
        },
        {
          "text": "。同时，支持 CME 学分也鼓励了医生将 AI 融入日常工作流。",
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
          "text": "AI图像、视频、音乐生成及编辑工具持续创新，功能专业化且易用性增强，在创意应用市场占据重要地位。",
          "strong": false
        }
      ],
      [
        {
          "text": "提升多模态创作的真实感、可控性，进一步降低创作门槛，赋能更多普通用户。",
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
        "label": "Gemini Drop",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "国内头部AI助手模型能力持续升级",
    "bullets": [
      [
        {
          "text": "腾讯元宝于4月24日接入 ",
          "strong": false
        },
        {
          "text": "Hy3 preview 模型",
          "strong": true
        },
        {
          "text": "，旨在提供更先进的智能体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "抖音旗下即梦AI在4月20日上线 ",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，以提升多模态创作体验，尤其在图片和视频生成方面。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "AI助手与智能体应用深化，覆盖多场景生活与创作",
    "bullets": [
      [
        {
          "text": "豆包在最新用户反馈中展现其作为“全能生活朋友”的广泛能力，涵盖学习、办公、生活、创作等多个方面，提供拍照、语音、P图、视频生成等多样化服务。",
          "strong": false
        }
      ],
      [
        {
          "text": "星野应用则通过持续优化用户创建AI智能体的平台，提升其在虚拟陪伴和社交互动方面的体验。",
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
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "title": "腾讯元宝接入Hy3 preview",
    "bullets": [
      [
        {
          "text": "腾讯元宝宣布接入 ",
          "strong": false
        },
        {
          "text": "Hy3 preview",
          "strong": true
        },
        {
          "text": " 模型，为用户带来全新的智能体验。此次更新将进一步提升其作为全能AI助手的各项能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "接入新模型通常意味着AI在理解能力、生成质量和多模态交互方面会有显著提升。作为腾讯生态内的核心AI助手，元宝的升级将可能进一步 ",
          "strong": false
        },
        {
          "text": "强化其在学习、办公、生活工具以及内容创作等方面的表现",
          "strong": true
        },
        {
          "text": "，满足用户更复杂、更个性化的需求。",
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
    "title": "即梦AI上线Seedance2.0 fast模型",
    "bullets": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AI在2026年4月20日上线了 ",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast 模型",
          "strong": true
        },
        {
          "text": "，旨在提供全新的多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "Seedance2.0 fast模型的推出，意味着即梦AI在 ",
          "strong": false
        },
        {
          "text": "图片和视频生成效率与质量上有所突破",
          "strong": true
        },
        {
          "text": "。对于内容创作者而言，这将加速其创意实现过程，提供更流畅的创作体验，尤其在短视频和社交媒体内容生产方面具有重要意义。",
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
    "title": "豆包扩展为全能生活助手",
    "bullets": [
      [
        {
          "text": "字节跳动旗下的AI助手豆包，在最新用户评价中被提及已成为涵盖 ",
          "strong": false
        },
        {
          "text": "学习辅导、职业规划、出行安排、内容创作等多场景的“全能搭子”",
          "strong": true
        },
        {
          "text": "，提供拍照提问、语音输入、P图、视频生成等多样化服务。",
          "strong": false
        }
      ],
      [
        {
          "text": "豆包通过持续的功能迭代和用户体验优化，使其不再局限于单一AI问答，而是深入用户日常生活的方方面面。这种 ",
          "strong": false
        },
        {
          "text": "多功能集成和场景化服务",
          "strong": true
        },
        {
          "text": "的趋势，预示着AI助手正从工具向更深层次的个人伴侣发展，有望显著提升用户在学习、工作和生活中的综合效率和体验。",
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
  }
];
