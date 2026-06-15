import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-06-15";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT 全面升级，增强交互与效率",
    "market": "美国",
    "date": "2026-06-08",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT 在网页、iOS 和 Android 平台推出多项重要更新。",
          "strong": false
        }
      ],
      [
        {
          "text": "新功能包括答案中嵌入交互式图表、长对话自动生成目录、全屏写作模式、以及直接在聊天中通过Gmail或Outlook发送邮件。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，还修复了附带附件编辑消息等长期存在的问题，并在所有付费计划用户中全球推出。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这些更新显著提升了ChatGPT在信息可视化、长文本创作和工作流集成方面的用户体验和效率，使其成为更全面的生产力工具。",
          "strong": false
        }
      ],
      [
        {
          "text": "交互式图表和长文本目录反映了AI助手向更智能的数据呈现和知识管理方向发展。",
          "strong": false
        }
      ],
      [
        {
          "text": "直接发送邮件功能则预示着AI助手将更深入地整合到日常办公流程中，减少应用切换。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需观察这些新功能如何提升用户黏性，以及其在企业级应用中的表现。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e7/f6/e3/e7f6e3fb-8e24-ba31-03ff-aba23d60841f/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT 模型与记忆功能优化",
    "market": "美国",
    "date": "2026-06-12",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI于6月12日宣布，GPT-5.2模型（包括Instant、Thinking、Pro）已在ChatGPT中停用，现有对话将自动迁移至GPT-5.5模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，记忆功能新增更多控制选项，用户现在可以删除记忆摘要页面中的记忆、关闭记忆功能，并直接编辑记忆摘要中的文本。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些记忆更新将陆续向所有ChatGPT用户推出。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "模型迭代至GPT-5.5表明OpenAI持续提升其核心AI能力，以提供更强大的推理和响应。",
          "strong": false
        }
      ],
      [
        {
          "text": "记忆控制的增强体现了对用户隐私和个性化体验的重视，使用户能更好地管理AI的学习行为。",
          "strong": false
        }
      ],
      [
        {
          "text": "这对于建立用户信任和推动AI个性化应用至关重要，也为用户提供了更大的灵活性。",
          "strong": false
        }
      ],
      [
        {
          "text": "后续需关注用户对新模型的实际体验反馈，以及记忆功能如何影响长期对话的质量。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e7/f6/e3/e7f6e3fb-8e24-ba31-03ff-aba23d60841f/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "腾讯元宝上线高考通Agent，提供志愿填报服务",
    "market": "中国",
    "date": "2026-06-12",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "腾讯元宝App于近日更新至2.72.0版本，正式上线“元宝高考通”Agent。",
          "strong": false
        }
      ],
      [
        {
          "text": "该Agent是行业首个高考咨询师Agent，旨在为考生提供从查分、选校选专业到填报、录取的全流程辅助服务。",
          "strong": false
        }
      ],
      [
        {
          "text": "此次更新还优化了若干使用体验，进一步提升了App的易用性。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "“元宝高考通”的推出是AI在垂直领域进行深度应用的重要体现，解决了考生在高考志愿填报过程中的实际痛点。",
          "strong": false
        }
      ],
      [
        {
          "text": "通过Agent形态提供专业咨询服务，显示了AI从通用问答向专业化、场景化解决方案发展的趋势。",
          "strong": false
        }
      ],
      [
        {
          "text": "结合腾讯的生态优势，该Agent有望快速触达大量用户，并在教育领域树立标杆。",
          "strong": false
        }
      ],
      [
        {
          "text": "接下来需观察“元宝高考通”的实际推荐准确率和用户满意度，以及此类垂直Agent的市场潜力。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9c/32/a9/9c32a977-d792-e463-dd22-08a5dc294cce/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      "alt": "元宝-腾讯全能AI助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "腾讯元宝 App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
      "note": "使用 元宝-腾讯全能AI助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "点点App推出“攻略模式”，基于小红书真人经验生成深度攻略",
    "market": "中国",
    "date": "2026-06-11",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "点点App近期更新至3.24.1版本，全新上线了“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量真人经验，旨在为用户生成专属的深度攻略，覆盖旅行、生活兴趣、购物决策、美食探店、笔记总结和知识梳理等多个生活场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，App也支持语音提问和带图提问，进一步降低了用户获取信息的门槛。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "点点利用AI能力深度整合UGC内容平台（小红书），为用户提供更个性化和实用的生活决策辅助。",
          "strong": false
        }
      ],
      [
        {
          "text": "这种模式有效地将海量非结构化信息转化为结构化的深度攻略，解决了用户在信息过载时代做决策的痛点。",
          "strong": false
        }
      ],
      [
        {
          "text": "它代表了AI生活工具向“信息整理者”和“决策辅助者”角色转变的趋势。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注其攻略的更新速度、准确性和用户对生成内容的信任度。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2a/34/72/2a347299-cac0-90fb-9726-30440d047475/1040g3g831svff01vle2mecoj9s6j637s0us79to.png/392x696bb.png",
      "alt": "点点-你的ai生活小助手 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "点点-你的ai生活小助手 App Store",
      "sourceHref": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
      "note": "使用 点点-你的ai生活小助手 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "即梦AI升级Seedance2.0 fast模型，提升多模态创作体验",
    "market": "中国",
    "date": "2026-06-11",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下的AI图片和视频工具即梦AI，近期更新至2.2.3版本，核心亮点是上线了Seedance2.0 fast模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一模型升级旨在提供全新的多模态创作体验，显著提升图片和视频的生成速度和质量。",
          "strong": false
        }
      ],
      [
        {
          "text": "即梦AI允许用户通过自然语言描述想法，生成图片和视频，并支持编辑和作品分享。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Seedance2.0 fast模型的推出，显示了字节跳动在多模态AI创作领域的持续投入和技术领先性。",
          "strong": false
        }
      ],
      [
        {
          "text": "模型速度和质量的提升，将直接优化创作者的体验，使其能够更高效、更自由地实现创意。",
          "strong": false
        }
      ],
      [
        {
          "text": "在短视频内容创作爆发的背景下，AI工具的进步将进一步降低创作门槛，赋能更多普通用户。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需关注该模型在复杂场景下的表现、生成内容的原创性以及用户社区的活跃度。",
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ef/69/cb/ef69cb1f-6b06-b03f-505a-4090d1ca37b0/AppIcon-0-0-1x_U007ephone-0-1-P3-85-220.png/512x512bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "大模型公司竞争焦点转向平台生态与Agent应用",
    "evidence": [
      {
        "text": "OpenAI持续更新ChatGPT，增加了Agent工具链和开发者模式的功能，如Codex更新中的Developer mode for Browser和/init命令。",
        "strong": false
      },
      {
        "text": "Meta AI的Muse Spark模型集成到全产品线，并开放API给合作伙伴，试图构建更大的生态。",
        "strong": false
      },
      {
        "text": "中国市场腾讯元宝推出高考通Agent，点点App推出小红书攻略模式，均体现AI向垂直场景Agent化发展。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美大模型公司正从纯粹的模型能力竞争，转向以平台为基础，通过丰富的Agent和应用集成，争夺开发者和用户生态。",
        "strong": false
      },
      {
        "text": "中国企业更注重结合自身流量平台和生活场景，推出面向大众的垂直Agent；美国企业则在开发者工具和多应用集成上持续发力。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI与智能硬件深度融合，多模态交互成为新入口",
    "evidence": [
      {
        "text": "Meta AI的Muse Spark正逐步推广到Ray-Ban Meta和Oakley Meta智能眼镜，提升眼镜的AI能力。",
        "strong": false
      },
      {
        "text": "Rokid Glasses及其配套App（Hi Rokid/Rokid AI）持续更新，强化AI助手、智能翻译、城市伴游等眼镜端功能。",
        "strong": false
      },
      {
        "text": "Google AI Edge Eloquent等应用探索设备端（On-device）AI，实现本地化语音转写，保障隐私并提升响应速度。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "智能眼镜正成为继智能手机之后的下一个AI入口，中美科技巨头和初创公司都在积极布局，推动语音和视觉多模态交互的普及。",
        "strong": false
      },
      {
        "text": "美国市场更侧重通用AI能力在硬件上的集成，中国市场则在本地化服务（如城市伴游、方言识别）上展现特色。",
        "strong": false
      }
    ]
  },
  {
    "title": "个性化、情境感知能力是AI助手提升用户体验的关键",
    "evidence": [
      {
        "text": "ChatGPT增强记忆控制，允许用户删除和编辑记忆，更好地管理AI的个性化学习。",
        "strong": false
      },
      {
        "text": "Character.AI推出PipSqueak 2模型，强调更强的“In-character consistency”和“Memory and context”保持能力，即将上线Lorebook功能。",
        "strong": false
      },
      {
        "text": "Replika更新强调“better memory”和“proactive check-ins”，旨在提供更懂用户的陪伴体验。",
        "strong": false
      },
      {
        "text": "Google Gemini的Personal Intelligence连接Gmail、Photos、YouTube，提供个性化规划。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "AI助手正从简单的问答工具，进化为具备长期记忆、情境理解和主动服务能力的个性化伙伴，这在中美市场均是明确趋势。",
        "strong": false
      },
      {
        "text": "美国产品在AI伴侣和社交应用中深耕记忆与人设保持；中国产品则在生活场景中，如小红书攻略，通过整合UGC内容提供更符合个人偏好的建议。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT 全面升级，增强交互与效率、ChatGPT 模型与记忆功能优化，以及中国的 腾讯元宝上线高考通Agent，提供志愿填报服务、点点App推出“攻略模式”，基于小红书真人经验生成深度攻略，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "AI在多模态内容生成（图片、文本、视频草稿）方面能力持续提升，并与现有平台深度融合，赋能创作者和普通用户。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "短视频平台巨头积极布局AI创作工具，多模态生成（图文、视频）能力快速迭代，强调用户共创和社交分享。",
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
      "Meta AI",
      "ChatGPT",
      "Google AI Edge Eloquent"
    ],
    "pattern": "大公司持续投入，AI助手在多产品线中深度整合，语音和多模态能力显著提升，本地化部署探索也开始出现。",
    "opportunity": "用户期待更无缝、多模态、个性化的AI体验，尤其在跨应用和硬件生态中的集成能力。",
    "watchNext": "观察Muse Spark在Meta全产品线的实际落地效果和用户反馈，以及其他大公司模型的差异化竞争策略。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
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
    "id": "ai-assistant-search-cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "豆包",
      "腾讯元宝",
      "千问"
    ],
    "pattern": "巨头持续加码，AI助手能力全面化，深度整合生态资源，并开始在垂直领域推出Agent服务。",
    "opportunity": "用户对多模态交互、生态联动、以及特定场景下专业Agent的需求强烈。",
    "watchNext": "关注高考通等垂直Agent的表现，以及各家在多模态理解和生成能力上的进一步迭代。",
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
    "id": "ai-education-us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI学习平台通过游戏化和智能辅助提升互动性与效率，成功吸引大量学生用户，并获得显著融资。",
    "opportunity": "市场急需能够有效提高学生参与度、解决学业痛点的AI学习方案。",
    "watchNext": "观察Gizmo在用户增长和市场扩张后的产品演进，以及AI在个性化学习路径和效果评估上的突破。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "ai-education-cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "千问智学"
    ],
    "pattern": "AI家教模式进一步普及，大模型提供多功能学习辅助，但近期产品更新信号不强，可能处于稳定期或等待更大突破。",
    "opportunity": "市场对高效、个性化、全学科覆盖的AI学习工具需求旺盛。",
    "watchNext": "关注千问智学后续的模型升级和功能创新，尤其是如何解决长期学习效果评估和用户粘性问题。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "ai-companion-social-us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "Character.AI",
      "Replika",
      "Series"
    ],
    "pattern": "AI伴侣和社交应用在提升对话连贯性、记忆能力、情境感知方面持续发力，并在探索创新社交形态，获得资本青睐。",
    "opportunity": "用户对更智能、更具情感连接和低门槛的社交体验有强需求。",
    "watchNext": "观察Character.AI的Lorebook功能和Series的iMessage社交模式如何改变用户互动范式，以及用户隐私和伦理挑战。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Replika - AI Friend App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      }
    ]
  },
  {
    "id": "ai-companion-social-cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "星野",
      "腾讯元宝"
    ],
    "pattern": "AI智能体UGC社区蓬勃发展，用户创造AI伙伴并赋予其个性，探索虚拟社交和情感陪伴的新可能。",
    "opportunity": "用户对个性化、沉浸式的AI互动体验有巨大需求，尤其是与创作者生态的结合。",
    "watchNext": "关注星野在AI智能体创建自由度、多模态交互及用户社区生态的持续发展，以及其他巨头在虚拟社交领域的布局。",
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
    "id": "ai-gaming-us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "目前缺乏明确的AI原生游戏或互动娱乐产品大规模发布信号，市场仍在探索初期。",
    "opportunity": "AI在游戏内容生成、智能NPC、个性化体验方面有巨大潜力，等待创新产品出现。",
    "watchNext": "关注现有游戏公司如何整合AI技术，以及初创公司在AI原生游戏形态上的探索。",
    "sources": []
  },
  {
    "id": "ai-gaming-cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "AI在游戏领域的应用主要集中在幕后技术赋能，缺乏面向消费者的AI原生互动娱乐爆款。",
    "opportunity": "中国市场庞大，AI驱动的互动叙事、智能游戏角色等新形态有待挖掘。",
    "watchNext": "关注游戏公司对AI技术在新玩法、新体验上的应用探索，以及短视频平台在互动娱乐上的尝试。",
    "sources": []
  },
  {
    "id": "ai-creation-us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Meta AI",
      "ChatGPT"
    ],
    "pattern": "AI在多模态内容生成（图片、文本、视频草稿）方面能力持续提升，并与现有平台深度融合，赋能创作者和普通用户。",
    "opportunity": "用户对快速、高质量、多样化的AI辅助创作工具需求旺盛。",
    "watchNext": "关注Meta AI在图像生成和多模态内容推荐上的进展，以及ChatGPT在长文本和交互式创作模式上的优化。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
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
      "豆包"
    ],
    "pattern": "短视频平台巨头积极布局AI创作工具，多模态生成（图文、视频）能力快速迭代，强调用户共创和社交分享。",
    "opportunity": "海量用户对便捷、低门槛的AI创作工具需求巨大，尤其是与短视频生态的结合。",
    "watchNext": "观察即梦AI和豆包在Seedance2.0模型下的视频生成质量、效率提升，以及UGC社区的繁荣度。",
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
    "id": "ai-productivity-us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Google AI Edge Eloquent",
      "ChatGPT",
      "Granola"
    ],
    "pattern": "AI工具通过深度集成、Agent功能和本地化处理，提升个人及企业办公效率，覆盖从语音转写到代码辅助等多种场景。",
    "opportunity": "市场对能够无缝集成到工作流、提供智能辅助和自动化能力的AI办公工具需求持续增长。",
    "watchNext": "关注ChatGPT的Agent工具链和开发者模式的实际应用效果，以及Granola等垂直效率工具如何巩固其企业级优势。",
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
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/"
      }
    ]
  },
  {
    "id": "ai-productivity-cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "豆包",
      "腾讯元宝"
    ],
    "pattern": "AI办公工具在文本生成、文档处理、语音转写等核心场景持续优化，并与本土生态深度整合。",
    "opportunity": "用户对AI在日常办公中提供全方位、高效率辅助的需求旺盛，特别是多模态交互和智能体能力。",
    "watchNext": "观察豆包和腾讯元宝在文档处理深度、代码生成能力以及跨应用协作方面的进一步提升。",
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
    "id": "ai-lifestyle-us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Meta AI",
      "Gemini"
    ],
    "pattern": "AI开始深度介入用户日常生活决策，通过连接个人数据和平台服务，提供个性化购物、规划和信息获取体验。",
    "opportunity": "用户对更智能、更懂个人偏好的生活助手需求迫切，尤其是在多平台数据整合和主动服务方面。",
    "watchNext": "观察Meta AI在购物推荐的转化率和用户接受度，以及Gemini Personal Intelligence在实际生活场景中的实用性。",
    "sources": [
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
    "id": "ai-lifestyle-cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "点点"
    ],
    "pattern": "AI生活助手以内容平台为基础，提供个性化攻略和决策辅助，满足用户在日常生活消费和兴趣探索中的需求。",
    "opportunity": "市场对结合特定内容生态、提供实用户外生活服务的AI工具有需求。",
    "watchNext": "关注点点在小红书内容整合深度和攻略生成质量上的持续优化，以及用户活跃度和商业模式的跑通。",
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "id": "ai-hardware-us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta glasses",
      "Oakley Meta glasses",
      "Rokid Glasses"
    ],
    "pattern": "AI智能眼镜作为重要的硬件入口，通过整合大模型能力，提供实时视觉交互、语音助手和翻译等功能，持续提升用户体验。",
    "opportunity": "用户对解放双手、实现无缝信息获取和交互的AI硬件有高期待，市场竞争激烈。",
    "watchNext": "观察Meta和Rokid在AI眼镜上的市场普及率、用户实际使用场景，以及多模态AI能力在硬件上的深度优化。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "id": "ai-hardware-cn",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Rokid Glasses"
    ],
    "pattern": "中国市场AI眼镜积极探索多功能集成，特别是在本地化服务（如城市伴游、语音识别方言）和多模态交互方面进行创新。",
    "opportunity": "用户对AI眼镜在日常场景中的实用性、舒适度和生态兼容性有较高要求。",
    "watchNext": "关注Rokid AI眼镜在AI助手能力、城市伴游功能的用户反馈，以及其在语音识别精度和多模态理解上的进步。",
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
    "title": "ChatGPT功能深度优化，全方位提升用户体验",
    "bullets": [
      [
        {
          "text": "ChatGPT在6月8日至12日期间连续推出多项重磅更新，包括在网页、iOS和Android端支持",
          "strong": false
        },
        {
          "text": "交互式图表、长对话目录、全屏写作模式",
          "strong": true
        },
        {
          "text": "，极大地提升了信息呈现和内容创作效率。",
          "strong": false
        }
      ],
      [
        {
          "text": "新增了直接在聊天中通过Gmail或Outlook",
          "strong": true
        },
        {
          "text": "发送邮件",
          "strong": true
        },
        {
          "text": "的功能，以及可编辑带附件消息，将AI助手更深度地融入日常工作流。",
          "strong": false
        }
      ],
      [
        {
          "text": "模型更新方面，",
          "strong": false
        },
        {
          "text": "GPT-5.2模型正式退役，现有对话自动升级至GPT-5.5",
          "strong": true
        },
        {
          "text": "，确保更强大的AI能力；同时增强了",
          "strong": false
        },
        {
          "text": "记忆功能控制",
          "strong": true
        },
        {
          "text": "，用户可以删除、关闭或编辑AI记忆，提升了隐私和个性化体验。",
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
    "title": "Meta AI智能眼镜继续推广，Muse Spark模型深入集成",
    "bullets": [
      [
        {
          "text": "Meta AI宣布其最强大的模型Muse Spark正",
          "strong": false
        },
        {
          "text": "逐步推广到Ray-Ban Meta和Oakley Meta智能眼镜",
          "strong": true
        },
        {
          "text": "，以及未来的Meta Ray-Ban Display设备，提升眼镜的智能交互能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "这预示着AI模型与硬件的结合将为用户带来",
          "strong": false
        },
        {
          "text": "更智能、更实时的视觉和语音辅助体验",
          "strong": true
        },
        {
          "text": "，使AI在日常生活中无缝可用。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid Glasses的配套应用Hi Rokid在6月12日更新至1.8.1版本，修复了已知问题并优化用户体验。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Hi Rokid App Store",
        "href": "https://apps.apple.com/us/app/hi-rokid/id6749669942"
      }
    ]
  },
  {
    "title": "ChatGPT 全面升级，增强交互与效率",
    "bullets": [
      [
        {
          "text": "ChatGPT 在网页、iOS 和 Android 平台推出多项重要更新。",
          "strong": false
        }
      ],
      [
        {
          "text": "新功能包括答案中嵌入交互式图表、长对话自动生成目录、全屏写作模式、以及直接在聊天中通过Gmail或Outlook发送邮件。",
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
    "title": "ChatGPT 模型与记忆功能优化",
    "bullets": [
      [
        {
          "text": "OpenAI于6月12日宣布，GPT-5.2模型（包括Instant、Thinking、Pro）已在ChatGPT中停用，现有对话将自动迁移至GPT-5.5模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "同时，记忆功能新增更多控制选项，用户现在可以删除记忆摘要页面中的记忆、关闭记忆功能，并直接编辑记忆摘要中的文本。",
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
          "text": "AI在多模态内容生成（图片、文本、视频草稿）方面能力持续提升，并与现有平台深度融合，赋能创作者和普通用户。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户对快速、高质量、多样化的AI辅助创作工具需求旺盛。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "腾讯元宝和点点App在生活服务和教育领域推出创新Agent",
    "bullets": [
      [
        {
          "text": "腾讯元宝App于6月12日更新，正式上线“",
          "strong": false
        },
        {
          "text": "元宝高考通”Agent",
          "strong": true
        },
        {
          "text": "，作为行业首个高考咨询师Agent，为考生提供查分、选校、填报等全流程高考志愿服务。",
          "strong": false
        }
      ],
      [
        {
          "text": "点点App在6月11-12日更新，全新上线“",
          "strong": false
        },
        {
          "text": "攻略模式",
          "strong": true
        },
        {
          "text": "”，基于小红书海量真人经验为用户生成深度攻略，覆盖旅行、购物、生活兴趣等多个场景。",
          "strong": false
        }
      ],
      [
        {
          "text": "这些创新体现了AI在中国市场向",
          "strong": false
        },
        {
          "text": "垂直场景化、Agent化",
          "strong": true
        },
        {
          "text": "方向发展，深度整合内容生态，解决用户实际痛点。",
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
        "label": "点点-你的ai生活小助手 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "title": "即梦AI升级Seedance2.0 fast模型， Rokid AI眼镜App修复优化",
    "bullets": [
      [
        {
          "text": "抖音旗下的AI创作工具即梦AI在6月11日更新，上线了",
          "strong": false
        },
        {
          "text": "Seedance2.0 fast模型",
          "strong": true
        },
        {
          "text": "，显著提升了多模态图片和视频的生成速度及创作体验，持续赋能短视频内容生产。",
          "strong": false
        }
      ],
      [
        {
          "text": "Rokid AI - 乐奇AI眼镜App在6月12日更新至1.8.1版本，主要",
          "strong": false
        },
        {
          "text": "修复了若干问题并提升了整体体验",
          "strong": true
        },
        {
          "text": "，确保AI眼镜硬件的流畅运行和用户使用稳定性。",
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
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      }
    ]
  },
  {
    "title": "腾讯元宝上线高考通Agent，提供志愿填报服务",
    "bullets": [
      [
        {
          "text": "腾讯元宝App于近日更新至2.72.0版本，正式上线“元宝高考通”Agent。",
          "strong": false
        }
      ],
      [
        {
          "text": "该Agent是行业首个高考咨询师Agent，旨在为考生提供从查分、选校选专业到填报、录取的全流程辅助服务。",
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
    "title": "点点App推出“攻略模式”，基于小红书真人经验生成深度攻略",
    "bullets": [
      [
        {
          "text": "点点App近期更新至3.24.1版本，全新上线了“攻略模式”。",
          "strong": false
        }
      ],
      [
        {
          "text": "该模式基于小红书海量真人经验，旨在为用户生成专属的深度攻略，覆盖旅行、生活兴趣、购物决策、美食探店、笔记总结和知识梳理等多个生活场景。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "点点-你的ai生活小助手 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      }
    ]
  },
  {
    "title": "即梦AI升级Seedance2.0 fast模型，提升多模态创作体验",
    "bullets": [
      [
        {
          "text": "抖音旗下的AI图片和视频工具即梦AI，近期更新至2.2.3版本，核心亮点是上线了Seedance2.0 fast模型。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一模型升级旨在提供全新的多模态创作体验，显著提升图片和视频的生成速度和质量。",
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
  }
];
