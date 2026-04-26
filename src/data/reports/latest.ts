import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-04-26";

export const topFindings: Finding[] = [
  {
    "name": "OpenAI ChatGPT 核心模型及功能升级",
    "market": "美国",
    "date": "2026-04-23",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI在ChatGPT中推出了",
          "strong": false
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": "模型，这是其迄今为止最智能的前沿模型，专为专业工作设计，能处理复杂的任务，如代码编写、数据分析和文档创建。"
        },
        {
          "text": "快速回答",
          "strong": true
        },
        {
          "text": "功能也已上线，能更快地响应常见的信息查询。"
        },
        {
          "text": "ChatGPT Images 2.0",
          "strong": true
        },
        {
          "text": "模型也已发布，提升了图像生成能力，并引入了“images with thinking”功能。"
        },
        {
          "text": "ChatGPT for Clinicians",
          "strong": true
        },
        {
          "text": "作为免费版本面向美国认证临床医生推出，旨在支持临床工作、证据审查和医学研究。"
        }
      ],
      [
        {
          "text": "这些更新表明ChatGPT在通用智能、专业应用和多模态能力上的全面进步，尤其是在复杂推理和垂直领域应用的拓展。"
        }
      ],
      [
        {
          "text": "Why It Matters",
          "strong": true
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "GPT-5.5的推出显著提升了ChatGPT在专业工作场景中的效率和准确性，尤其是在代码和知识工作方面。",
          "strong": false
        }
      ],
      [
        {
          "text": "面向临床医生的专用版本，预示着AI在高度专业化领域（如医疗）的深度整合，有望革新信息获取和辅助决策的方式。",
          "strong": false
        }
      ],
      [
        {
          "text": "图像生成模型的迭代，特别是“images with thinking”功能，提升了AI在创意领域的实用性和控制力。",
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
    "name": "中国豆包App上线Seedance2.0 fast模型",
    "market": "中国",
    "date": "2026-04-20",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "字节跳动旗下AI助手豆包App上线了",
          "strong": true
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，为用户带来了全新的多模态创作体验，进一步增强了图片和视频生成能力。"
        }
      ],
      [
        {
          "text": "用户评价显示，豆包在学习辅导、职业规划、生活出行等场景中表现出色，成为“全能搭子”。"
        }
      ],
      [
        {
          "text": "Why It Matters",
          "strong": true
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast模型的上线，标志着豆包在多模态内容创作领域的技术飞跃，将为用户提供更高效、更具创意的图片和视频生成体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "豆包在多个生活和工作场景中的实用性，反映了中国AI助手产品正向全能化、场景化方向发展，以满足用户多元需求。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c1/93/e1/c193e17f-b5c2-fdb1-5f94-4d2ba6680538/AppIcon-0-0-1x_U007epad-0-8-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "豆包 - 随时帮忙的 AI 助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "豆包 - 随时帮忙的 AI 助手 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
      "note": "使用 豆包 - 随时帮忙的 AI 助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "中国即梦AI上线Seedance2.0 fast模型",
    "market": "中国",
    "date": "2026-04-20",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AIApp也同步上线了",
          "strong": true
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，致力于提供全新多模态创作体验。"
        }
      ],
      [
        {
          "text": "即梦AI专注于AI图片和视频创作，让用户通过自然语言描述即可生成独一无二的图片和视频。"
        }
      ],
      [
        {
          "text": "Why It Matters",
          "strong": true
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "即梦AI作为抖音旗下的创作工具，其核心模型的升级将直接赋能短视频和内容创作领域，有望催生更多创意内容和降低创作门槛。",
          "strong": false
        }
      ],
      [
        {
          "text": "与豆包的同步更新显示了字节跳动在多模态AI技术上的集中投入，预示着其在AIGC领域的强劲竞争力。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%B6%E5%88%BB%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8d/a5/6c/8da56c4e-17ef-4c5c-6ce3-3153df851e46/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%B6%E5%88%BB%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "中国腾讯元宝接入Hy3 preview模型",
    "market": "中国",
    "date": "2026-04-24",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯旗下的全能AI助手元宝App在最近的更新中接入了",
          "strong": true
        },
        {
          "text": "Hy3 preview",
          "strong": true
        },
        {
          "text": "模型，为用户带来全新的智能体验。"
        }
      ],
      [
        {
          "text": "元宝持续优化其AI图片编辑、拍题答疑、录音笔、内容创作等功能，并新增了“元宝派”等社交互动玩法。"
        }
      ],
      [
        {
          "text": "Why It Matters",
          "strong": true
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "接入新的模型预示着腾讯元宝在底层技术上的持续投入，有望在理解能力、生成质量和多模态交互方面带来显著提升。",
          "strong": false
        }
      ],
      [
        {
          "text": "元宝在多个功能模块的持续优化，特别是社交互动玩法的引入，展现了其在打造用户生态和增强产品粘性方面的策略。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d3/1a/bc/d31abc3a-ca51-baba-03f6-b444279677dc/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "元宝-腾讯全能AI助手 App - App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "多模态交互成为AI产品核心竞争力",
    "evidence": [
      {
        "text": "美国OpenAI的ChatGPT Images 2.0支持图像生成，并引入了“images with thinking”功能。",
        "strong": false
      },
      {
        "text": "中国豆包和即梦AI都上线了Seedance2.0 fast模型，致力于提升图片和视频创作体验。",
        "strong": false
      },
      {
        "text": "Meta的Muse Spark模型虽然发布日期稍早，但强调其强大的多模态感知能力，能“看到并理解你正在看什么”。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "早期的AI助手主要依赖文本交互，而当前领先的AI产品已普遍将图像、视频、音频等多种模态作为核心功能，甚至能进行跨模态理解和生成。",
        "strong": false
      },
      {
        "text": "这种趋势使得AI能够更自然地理解真实世界的信息，并以更丰富、直观的方式响应用户需求，极大拓展了AI的应用场景。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI应用加速向专业化与垂直领域渗透",
    "evidence": [
      {
        "text": "OpenAI推出了专门面向美国认证临床医生的ChatGPT for Clinicians，支持证据审查、文档编写和医学研究。",
        "strong": false
      },
      {
        "text": "Google AI Edge Eloquent作为一款先进的听写应用，旨在将自然语音转化为专业文本，满足特定办公需求。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "过去AI产品多以通用助手形象出现，功能较为宽泛。现在，AI开始针对特定行业和职业痛点，提供定制化、高精度的解决方案。",
        "strong": false
      },
      {
        "text": "这种垂直化趋势不仅提升了AI在专业场景的实用性，也降低了专业人士使用AI的门槛，例如医生可直接利用AI进行临床辅助。",
        "strong": false
      }
    ]
  },
  {
    "title": "大模型技术持续迭代，支撑应用创新",
    "evidence": [
      {
        "text": "OpenAI在ChatGPT中推出了更智能的GPT-5.5模型，提升了复杂任务处理能力。",
        "strong": false
      },
      {
        "text": "Meta发布了其最强大的Muse Spark模型，并计划推广到其全线产品和AI眼镜。",
        "strong": false
      },
      {
        "text": "腾讯元宝接入Hy3 preview模型，豆包和即梦AI上线Seedance2.0 fast模型，均展现了国内厂商在核心模型上的积极投入。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI应用的创新不再局限于表面功能，而是更深层次地依赖于底层大模型的性能突破。模型越大、能力越强，应用场景才能越丰富。",
        "strong": false
      },
      {
        "text": "头部科技公司普遍在提升模型规模、理解能力和多模态处理上展开竞争，为上层应用提供了坚实的技术基础。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 OpenAI ChatGPT 核心模型及功能升级，以及中国的 中国豆包App上线Seedance2.0 fast模型、中国即梦AI上线Seedance2.0 fast模型，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "AI创作工具在图像和音频生成方面持续突破，提升创作质量和用户控制力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "抖音系产品在AI图片和视频生成领域持续发力，模型迭代迅速，强调用户创作体验。",
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
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "Gemini",
      "Google AI Edge Eloquent"
    ],
    "pattern": "核心大模型持续迭代，并向专业化和多模态方向拓展。",
    "opportunity": "结合垂直领域需求，提供更精准高效的AI助手服务。",
    "watchNext": "关注下一代大模型的发布及多模态能力的深度融合。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      }
    ]
  },
  {
    "id": "cn-ai-assistant-search",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "头部产品在核心模型和多模态能力上持续投入，并强调生态整合与场景化服务。",
    "opportunity": "在垂直领域如教育、生活助手方面深耕，提升用户体验和解决实际问题能力。",
    "watchNext": "关注大模型性能的实际提升及其在不同生活场景中的落地效果。",
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
        "label": "iPhone 热门游戏和 App - App Store",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "us-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT for Clinicians"
    ],
    "pattern": "AI教育应用开始向更专业的垂直领域深化，提供定制化学习辅助。",
    "opportunity": "探索AI在专业培训、技能提升和认证等领域的应用潜力。",
    "watchNext": "关注AI在医学、法律等高门槛专业领域的进一步发展和接受度。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "AI教育助手在拍题、解题、辅导、生成学习资料等场景持续优化，注重个性化和互动性。",
    "opportunity": "深化AI在教学过程中的应用，提供更智能、人性化的学习体验。",
    "watchNext": "关注AI在批改作业、定制化学习路径等方面的技术突破和用户反馈。",
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
    "id": "us-ai-companion-social",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Character.AI",
      "Replika"
    ],
    "pattern": "AI伴侣产品在记忆力、角色一致性和世界观构建上持续发力，提升用户沉浸感。",
    "opportunity": "深化AI在情感支持、角色扮演、社交互动中的技术，满足用户更深层次的情感需求。",
    "watchNext": "关注AI伴侣在多模态交互、长期记忆和情感深度上的突破。",
    "sources": [
      {
        "label": "April Update: New Model, Memory, and Lorebook - Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Replika - AI Friend App - App Store",
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
    "pattern": "AI智能体社区平台注重用户创造和分享，提升AI在社交和陪伴中的角色。",
    "opportunity": "优化AI的情感理解和表达能力，增强用户与AI的互动深度和真实感。",
    "watchNext": "关注多模态AIGC技术如何进一步丰富智能体形象、声音和互动体验。",
    "sources": [
      {
        "label": "星野-所建皆你所AI App - App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "us-ai-game-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "目前缺乏明确的AI游戏或互动娱乐产品更新信号。",
    "opportunity": "AI在游戏剧情生成、NPC智能、个性化体验方面仍有巨大潜力。",
    "watchNext": "关注AI技术如何与游戏引擎深度融合，创造全新的互动娱乐形式。",
    "sources": []
  },
  {
    "id": "cn-ai-game-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "腾讯元宝"
    ],
    "pattern": "头部AI助手开始探索集成轻度游戏化功能，增加用户粘性和互动性。",
    "opportunity": "将AI能力与游戏场景更深度结合，创造更智能、个性化的娱乐体验。",
    "watchNext": "关注更多AI助手或社交平台引入互动娱乐内容的趋势。",
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "id": "us-ai-creation",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "Gemini"
    ],
    "pattern": "AI创作工具在图像和音频生成方面持续突破，提升创作质量和用户控制力。",
    "opportunity": "探索AI在专业艺术创作、内容生产流程中的深度应用。",
    "watchNext": "关注多模态创作能力的融合，以及生成内容的版权和伦理问题。",
    "sources": [
      {
        "label": "ChatGPT — Release Notes | OpenAI Help Center",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "cn-ai-creation",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "即梦AI",
      "豆包",
      "剪映"
    ],
    "pattern": "抖音系产品在AI图片和视频生成领域持续发力，模型迭代迅速，强调用户创作体验。",
    "opportunity": "进一步简化创作流程，降低专业门槛，激发大众用户的创作热情。",
    "watchNext": "关注短视频平台如何将AI创作工具与用户生态深度整合，推动内容创新。",
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%B6%E5%88%BB%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "适用于 iPhone 的精选摄影与录像 App",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "us-ai-efficiency-office",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "ChatGPT",
      "Google AI Edge Eloquent"
    ],
    "pattern": "AI工具在专业工作流中扮演更核心角色，提升文档处理、代码编写和信息整理效率。",
    "opportunity": "针对特定办公场景提供集成化、智能化的AI解决方案。",
    "watchNext": "关注AI在复杂任务自动化、跨应用协作和数据分析方面的能力提升。",
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
    "id": "cn-ai-efficiency-office",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "腾讯元宝",
      "豆包"
    ],
    "pattern": "AI助手在办公效率领域功能持续完善，覆盖录音转写、文档处理、内容生成等多个环节。",
    "opportunity": "针对企业级用户提供定制化、安全的AI办公套件，提升团队协作效率。",
    "watchNext": "关注AI在自动会议纪要、智能邮件处理和项目管理中的实际应用效果。",
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "us-ai-life-tools",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Hi Rokid",
      "Replika"
    ],
    "pattern": "AI正通过智能硬件和助手功能融入日常生活，提供更便捷的导航和信息获取服务。",
    "opportunity": "探索AI在智能家居、健康管理、个性化推荐等生活场景的深度应用。",
    "watchNext": "关注AI与可穿戴设备的结合，以及AI如何理解和预测用户的生活需求。",
    "sources": [
      {
        "label": "Hi Rokid - Rokid Glasses App - App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      },
      {
        "label": "Replika - AI Friend App - App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      }
    ]
  },
  {
    "id": "cn-ai-life-tools",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "点点",
      "豆包"
    ],
    "pattern": "AI生活助手与内容平台结合，提供个性化攻略和信息总结，解决用户日常生活决策痛点。",
    "opportunity": "深化AI在美食、购物、旅游等消费决策场景的应用，提升用户体验和转化效率。",
    "watchNext": "关注AI如何整合多平台数据，提供更全面、可靠的生活服务推荐。",
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App - App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "us-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Meta AI glasses",
      "Hi Rokid"
    ],
    "pattern": "主流科技公司和新兴品牌持续在AI眼镜等智能硬件领域投入，优化交互体验。",
    "opportunity": "探索AI硬件在AR/VR、智能感知、无障碍辅助等领域的创新应用。",
    "watchNext": "关注AI眼镜在多模态交互、隐私保护和实际场景应用中的进展。",
    "sources": [
      {
        "label": "Introducing Muse Spark: MSL’s First Model, Purpose-Built to Prioritize People",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Hi Rokid - Rokid Glasses App - App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "id": "cn-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "Rokid AI 乐奇AI眼镜"
    ],
    "pattern": "AI眼镜产品持续快速迭代，深度整合大模型和多模态能力，拓展应用场景（如直播、AR录屏）。",
    "opportunity": "加速AI眼镜在消费级市场的普及，探索更多创新交互方式和内容生态。",
    "watchNext": "关注AI眼镜在视觉理解、实时翻译、情境感知等核心技术上的进一步突破。",
    "sources": [
      {
        "label": "Rokid AI - 乐奇AI眼镜 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%8D%A3%E5%9F%BAai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "OpenAI ChatGPT 在核心模型与垂直应用方面实现多项重大突破",
    "bullets": [
      [
        {
          "text": "在核心大模型层面，ChatGPT推出了迄今为止最智能的前沿模型",
          "strong": true
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": "，专为专业工作设计，能高效处理复杂的代码编写、数据分析和文档创建任务。",
          "strong": false
        }
      ],
      [
        {
          "text": "在功能优化上，上线了",
          "strong": true
        },
        {
          "text": "快速回答",
          "strong": true
        },
        {
          "text": "功能，以更快的速度响应常见信息查询；并发布了",
          "strong": true
        },
        {
          "text": "ChatGPT Images 2.0",
          "strong": true
        },
        {
          "text": "图像生成模型，支持“images with thinking”以规划和完善图像输出。",
          "strong": false
        }
      ],
      [
        {
          "text": "在垂直应用拓展上，推出了面向美国认证临床医生的",
          "strong": true
        },
        {
          "text": "ChatGPT for Clinicians",
          "strong": true
        },
        {
          "text": "免费版本，支持证据审查、文档编写和医学研究等临床工作，并可获得CME学分。",
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
    "title": "OpenAI ChatGPT 核心模型及功能升级",
    "bullets": [
      [
        {
          "text": "OpenAI在ChatGPT中推出了",
          "strong": false
        },
        {
          "text": "GPT-5.5",
          "strong": true
        },
        {
          "text": "模型，这是其迄今为止最智能的前沿模型，专为专业工作设计，能处理复杂的任务，如代码编写、数据分析和文档创建。"
        },
        {
          "text": "快速回答",
          "strong": true
        },
        {
          "text": "功能也已上线，能更快地响应常见的信息查询。"
        },
        {
          "text": "ChatGPT Images 2.0",
          "strong": true
        },
        {
          "text": "模型也已发布，提升了图像生成能力，并引入了“images with thinking”功能。"
        },
        {
          "text": "ChatGPT for Clinicians",
          "strong": true
        },
        {
          "text": "作为免费版本面向美国认证临床医生推出，旨在支持临床工作、证据审查和医学研究。"
        }
      ],
      [
        {
          "text": "这些更新表明ChatGPT在通用智能、专业应用和多模态能力上的全面进步，尤其是在复杂推理和垂直领域应用的拓展。"
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
    "title": "AI 创作：美国方向信号",
    "bullets": [
      [
        {
          "text": "AI创作工具在图像和音频生成方面持续突破，提升创作质量和用户控制力。",
          "strong": false
        }
      ],
      [
        {
          "text": "探索AI在专业艺术创作、内容生产流程中的深度应用。",
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
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "核心大模型持续迭代，并向专业化和多模态方向拓展。",
          "strong": false
        }
      ],
      [
        {
          "text": "结合垂直领域需求，提供更精准高效的AI助手服务。",
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
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
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
    "title": "中国大厂加速大模型与多模态能力升级，AI助手功能日益丰富",
    "bullets": [
      [
        {
          "text": "字节跳动旗下",
          "strong": true
        },
        {
          "text": "豆包App",
          "strong": true
        },
        {
          "text": "和",
          "strong": true
        },
        {
          "text": "即梦AI",
          "strong": true
        },
        {
          "text": "同步上线了",
          "strong": true
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，显著增强了图片和视频的生成能力，为用户带来全新多模态创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "腾讯旗下的",
          "strong": true
        },
        {
          "text": "元宝App",
          "strong": true
        },
        {
          "text": "接入了",
          "strong": true
        },
        {
          "text": "Hy3 preview",
          "strong": true
        },
        {
          "text": "模型，预示着底层智能的进一步提升。元宝还通过“元宝派”等新功能探索社交互动玩法，并在AI图片编辑、拍题答疑、录音笔、内容创作等多个方面持续优化。",
          "strong": false
        }
      ],
      [
        {
          "text": "豆包",
          "strong": true
        },
        {
          "text": "的用户反馈显示，其在学习辅导、职业转型规划和生活出行规划等全能场景中表现出色，成为用户日常不可或缺的AI助手，体现了AI应用向场景化、个性化服务的深化。",
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
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%B6%E5%88%BB%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "中国豆包App上线Seedance2.0 fast模型",
    "bullets": [
      [
        {
          "text": "字节跳动旗下AI助手豆包App上线了",
          "strong": true
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，为用户带来了全新的多模态创作体验，进一步增强了图片和视频生成能力。"
        }
      ],
      [
        {
          "text": "用户评价显示，豆包在学习辅导、职业规划、生活出行等场景中表现出色，成为“全能搭子”。"
        }
      ]
    ],
    "sources": [
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "title": "中国即梦AI上线Seedance2.0 fast模型",
    "bullets": [
      [
        {
          "text": "抖音旗下AI图片和视频工具即梦AIApp也同步上线了",
          "strong": true
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，致力于提供全新多模态创作体验。"
        }
      ],
      [
        {
          "text": "即梦AI专注于AI图片和视频创作，让用户通过自然语言描述即可生成独一无二的图片和视频。"
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%B6%E5%88%BB%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      }
    ]
  },
  {
    "title": "中国腾讯元宝接入Hy3 preview模型",
    "bullets": [
      [
        {
          "text": "腾讯旗下的全能AI助手元宝App在最近的更新中接入了",
          "strong": true
        },
        {
          "text": "Hy3 preview",
          "strong": true
        },
        {
          "text": "模型，为用户带来全新的智能体验。"
        }
      ],
      [
        {
          "text": "元宝持续优化其AI图片编辑、拍题答疑、录音笔、内容创作等功能，并新增了“元宝派”等社交互动玩法。"
        }
      ]
    ],
    "sources": [
      {
        "label": "元宝-腾讯全能AI助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      }
    ]
  },
  {
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "抖音系产品在AI图片和视频生成领域持续发力，模型迭代迅速，强调用户创作体验。",
          "strong": false
        }
      ],
      [
        {
          "text": "进一步简化创作流程，降低专业门槛，激发大众用户的创作热情。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI - 抖音旗下AI图片和视频工具 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%B6%E5%88%BB%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "豆包 - 随时帮忙的 AI 助手 App - App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "适用于 iPhone 的精选摄影与录像 App",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      }
    ]
  }
];
