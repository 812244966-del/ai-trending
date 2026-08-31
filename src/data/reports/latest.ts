import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-08-31";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT Work新增网站交互和任务分享",
    "market": "美国",
    "date": "2026-08-25",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT Work现在可以利用Webhook响应支持应用的更新，例如Gmail、Slack和GitHub，以实现定时任务的自动化处理。",
          "strong": false
        }
      ],
      [
        {
          "text": "所有用户都可以分享已调度的任务；Plus和Pro用户还能创建由Webhook触发的任务。",
          "strong": false
        }
      ],
      [
        {
          "text": "此外，ChatGPT Work的浏览器现在支持与需要登录的网站进行交互，用户可授权ChatGPT代为完成注册、预约或查询保险费用等复杂任务。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "这些功能显著提升了ChatGPT Work的自动化和执行能力，使其能够作为更强大的个人或团队智能代理，深入日常工作流。",
          "strong": false
        }
      ],
      [
        {
          "text": "支持与已登录网站交互极大地扩展了AI代理的应用场景，将AI从信息检索工具转变为主动的任务完成者。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一进展预示着AI工具将更深层次地融入数字工作环境，减少手动操作，提高整体效率，并重新定义“智能助理”的边界。",
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
    "name": "ChatGPT支持连接多个Google账户",
    "market": "美国",
    "date": "2026-08-28",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT现在允许用户连接多个Google账户的插件，包括Gmail、Google Calendar和Google Contacts。",
          "strong": false
        }
      ],
      [
        {
          "text": "这使得用户能够在同一对话中，跨个人和工作账户获取信息并协调任务，例如同时查询不同日历的空闲时间或搜索所有收件箱的邮件。",
          "strong": false
        }
      ],
      [
        {
          "text": "此功能在全球范围内面向Plus、Pro、Business和Enterprise订阅计划的用户开放，支持网页、桌面、iOS和Android平台。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "多账户连接极大地提升了AI助手的个人化和上下文理解能力，使其能够更好地服务于用户复杂的跨情境工作和生活需求。",
          "strong": false
        }
      ],
      [
        {
          "text": "这一更新反映了AI向更深层、更一体化的个人数据集成方向发展，旨在成为用户跨平台、跨身份的“超级助理”。",
          "strong": false
        }
      ],
      [
        {
          "text": "未来需观察其他AI平台如何效仿或创新，以在保护用户隐私的同时，深化与个人数字生活的融合，提供更无缝的体验。",
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
    "name": "ChatGPT临时对话功能升级",
    "market": "美国",
    "date": "2026-08-27",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "ChatGPT推出了临时对话的新控制功能，用户可以自主选择是否开启记忆、插件和自定义指令，以个性化临时对话的响应。",
          "strong": false
        }
      ],
      [
        {
          "text": "个性化的临时对话在默认情况下不会创建新的记忆或计入聊天历史，除非用户明确选择保存。",
          "strong": false
        }
      ],
      [
        {
          "text": "用户现在可以将任何临时对话保存为常规对话，使其遵循账户级别的个性化设置和模型改进偏好。",
          "strong": false
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "此更新在便利性和隐私之间提供了更好的平衡，用户可以在需要时利用个性化功能，同时保持对数据存储和记忆的控制权。",
          "strong": false
        }
      ],
      [
        {
          "text": "这表明AI助手正在不断优化用户体验，以适应不同场景下的需求，例如快速查询、私密讨论或需要记忆上下文的长期项目。",
          "strong": false
        }
      ],
      [
        {
          "text": "临时对话的灵活性将有助于用户更自由地尝试AI功能，降低数据留存的顾虑，从而促进AI的日常使用和普及。",
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
  }
];

export const trendJudgments: TrendJudgment[] = [
  {
    "title": "AI助手正深化与个人及工作流的集成",
    "evidence": [
      {
        "text": "ChatGPT Work新增了与已登录网站交互的能力，并通过Webhook支持对应用更新（如Gmail、Slack、GitHub）作出响应的定时任务。",
        "strong": false
      },
      {
        "text": "ChatGPT现在允许用户连接多个Google账户的插件，使其能在个人和工作情境中跨账户处理邮件和日程。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "这一趋势表明AI不仅是信息查询工具，更在向用户的工作和生活深度渗透，成为可执行具体操作的智能代理。",
        "strong": false
      },
      {
        "text": "与早期AI更多聚焦于通用问答相比，当前头部产品致力于打通数据孤岛，提升在复杂任务中的实用性，预示着“智能助理”的定义正在被拓展。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI对话体验朝个性化与隐私平衡方向发展",
    "evidence": [
      {
        "text": "ChatGPT新增了临时对话控制功能，用户可选择性地开启记忆、插件和自定义指令以获得个性化回复，同时默认不存储对话记录。",
        "strong": false
      },
      {
        "text": "用户可自主决定是否将临时对话保存为常规对话，从而灵活控制数据留存和未来的个性化体验。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "这一更新反映了AI产品在提供便利的个性化服务的同时，也开始更加重视用户对数据隐私和控制权的需求，力求在二者之间找到最佳平衡点。",
        "strong": false
      },
      {
        "text": "这与过去“默认收集数据以优化模型”的策略有所不同，显示出AI平台正逐步回应用户对透明度和选择权的呼声。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT Work新增网站交互和任务分享、ChatGPT支持连接多个Google账户，以及中国的 头部入口迭代，都说明消费者能直接感知的 AI 入口还在继续前推。",
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
        "text": "头部AI助手持续推出深度集成与个性化功能，巨头加速AI能力全产品线渗透。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "本周期内未观察到中国市场AI创作领域的显著信号。",
        "strong": false
      }
    ]
  },
  {
    "title": "中国更偏向入口整合和高频场景覆盖",
    "evidence": [
      {
        "text": "本周期内未观察到中国市场AI创作领域的显著信号。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "观察用户数据与隐私政策的平衡、以及用户在多平台AI间的选择倾向。",
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
      "ChatGPT",
      "Meta AI"
    ],
    "pattern": "头部AI助手持续推出深度集成与个性化功能，巨头加速AI能力全产品线渗透。",
    "opportunity": "深挖跨应用、跨账户的整合需求，提供智能且高度个性化的工作流与生活助手。",
    "watchNext": "观察用户数据与隐私政策的平衡、以及用户在多平台AI间的选择倾向。",
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
    "id": "cn-ai-assistant-search",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到中国市场AI助手/搜索领域的显著信号。",
    "opportunity": "潜在机会在于结合中国用户习惯的个性化AI助手，尤其是在移动生态中的深度整合。",
    "watchNext": "关注是否有新的国产AI大模型应用涌现，或现有互联网巨头在AI助手方向的最新布局。",
    "sources": []
  },
  {
    "id": "us-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "中",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI学习平台Gizmo完成2200万美元A轮融资，用户数达1300万。融资与用户增长结合的产品验证信号。",
    "opportunity": "通过游戏化、个性化等手段，提升AI学习产品的用户留存和参与度，尤其关注学生行为变化。",
    "watchNext": "观察Gizmo的市场扩张（特别是美国大学市场）和产品迭代，以及其他EdTech AI的创新模式。",
    "sources": [
      {
        "label": "TechCrunch Gizmo funding",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/"
      }
    ]
  },
  {
    "id": "cn-ai-education-learning",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到中国市场AI教育/学习领域的显著信号。",
    "opportunity": "潜在机会存在于结合中国教育特色和学习习惯的AI产品，如个性化辅导、智能题库或语言学习应用。",
    "watchNext": "关注教育政策变化对AI技术应用的影响，以及是否有新的融资或产品发布。",
    "sources": []
  },
  {
    "id": "us-ai-companion-social",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Series",
      "Character.AI",
      "Meta AI"
    ],
    "pattern": "AI社交和陪伴平台获得高额融资并展现强劲用户留存；AI模型在角色一致性和记忆方面持续提升；主流社交应用开始集成AI能力。",
    "opportunity": "利用AI创造更深层、更具互动性和个性化的社交体验，探索基于AI的虚拟社交和陪伴新模式。",
    "watchNext": "观察AI在iMessage等原生平台上的社交能力表现，Character.AI Lorebook功能的实际效果及Meta AI在社交应用中的用户接受度。",
    "sources": [
      {
        "label": "TechCrunch Series funding",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      },
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      },
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "cn-ai-companion-social",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到中国市场AI陪伴/情感/社交领域的显著信号。",
    "opportunity": "关注年轻群体对虚拟陪伴和创新社交的需求，以及AI技术在提供情感支持和社群互动方面的潜力。",
    "watchNext": "观察现有社交平台是否开始大规模集成AI功能，或是否有新的AI原生社交产品出现。",
    "sources": []
  },
  {
    "id": "us-ai-game-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到美国市场AI游戏/互动娱乐领域的显著信号。",
    "opportunity": "AI在游戏内容生成、智能NPC、个性化游戏体验等方面有巨大潜力，或将出现颠覆性产品。",
    "watchNext": "关注大型游戏公司或创新工作室在AI游戏方面的研发投入和产品demo。",
    "sources": []
  },
  {
    "id": "cn-ai-game-entertainment",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到中国市场AI游戏/互动娱乐领域的显著信号。",
    "opportunity": "AI在互动小说、角色扮演游戏或数字内容创作辅助方面可能存在创新机会。",
    "watchNext": "关注游戏版号政策对AI游戏的影响，以及国内游戏厂商的AI战略布局。",
    "sources": []
  },
  {
    "id": "us-ai-creation",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Character.AI"
    ],
    "pattern": "Character.AI即将推出“Lorebook”功能，赋能创作者构建更详细的角色世界观，提升角色一致性。",
    "opportunity": "AI工具赋能创作者，降低创作门槛，提升内容质量和一致性，尤其在角色扮演、故事生成等领域。",
    "watchNext": "观察Lorebook功能上线后，创作者社区的反馈和采用情况，以及AI在其他创作领域（如音乐、视频）的进展。",
    "sources": [
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      }
    ]
  },
  {
    "id": "cn-ai-creation",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到中国市场AI创作领域的显著信号。",
    "opportunity": "中文内容创作特有的需求，如诗词、小说、剧本等，是AI发挥优势的领域。",
    "watchNext": "关注国内AI大模型在内容生成质量上的提升，以及创作者对AI工具的接受度。",
    "sources": []
  },
  {
    "id": "us-ai-efficiency-office",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT Work"
    ],
    "pattern": "AI工具通过与现有系统集成和自主执行任务，向更深度的企业级应用和自动化方向发展，大幅提升办公效率。融资不再是该类别60天内的主要信号。",
    "opportunity": "提供定制化的AI办公解决方案，尤其是能够处理复杂、多步骤任务的智能代理，打通信息孤岛，并注重与主流SaaS工具的无缝衔接。",
    "watchNext": "观察ChatGPT Work与更多企业应用的集成广度，以及用户对其自主执行任务功能的接受度。",
    "sources": [
      {
        "label": "OpenAI Release Notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "cn-ai-efficiency-office",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到中国市场AI效率/办公领域的显著信号。",
    "opportunity": "开发基于中国办公场景和SaaS生态的AI效率工具，尤其关注协同、审批和数据处理等痛点。",
    "watchNext": "关注中国本土大模型在Agent能力上的突破，以及企业级AI办公产品的落地情况。",
    "sources": []
  },
  {
    "id": "us-ai-life-tools",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Meta AI"
    ],
    "pattern": "AI助手正通过多账户连接、情境感知和新功能（如AI购物、实时视觉AI）深入日常生活场景。",
    "opportunity": "开发基于AI的个性化生活服务工具，涵盖购物、出行、健康管理等领域，提升用户体验的便捷性和智能化水平。",
    "watchNext": "观察Meta AI在集成购物功能后的用户转化率，以及ChatGPT多Google账户连接后对用户粘性的影响。",
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
    "id": "cn-ai-life-tools",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到中国市场AI生活工具领域的显著信号。",
    "opportunity": "结合中国特色生活服务平台（如外卖、电商、本地生活）的AI集成，提供更智能、便捷的服务。",
    "watchNext": "关注各大互联网平台是否会推出内置AI助手的超级应用，以及独立AI生活工具的创新。",
    "sources": []
  },
  {
    "id": "us-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 4,
    "signalLabel": "强",
    "products": [
      "Ray-Ban Meta",
      "Oakley Meta",
      "Meta Ray-Ban Display"
    ],
    "pattern": "Meta的Muse Spark模型正陆续部署到Ray-Ban Meta和Oakley Meta智能眼镜，以及Meta Ray-Ban Display上，增强其AI能力。",
    "opportunity": "AI与可穿戴设备的深度结合，创造全新的交互范式和环境感知能力，将AI带入真实世界。",
    "watchNext": "观察AI眼镜的市场接受度，用户对其AI能力的实际反馈，以及其他科技巨头在AI硬件领域的布局。",
    "sources": [
      {
        "label": "Meta 官方",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "cn-ai-hardware-entry",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 0,
    "signalLabel": "暂无",
    "products": [],
    "pattern": "本周期内未观察到中国市场AI硬件入口领域的显著信号。",
    "opportunity": "探索将AI与智能家居、智能穿戴、车载系统等硬件结合，提升智能化体验。",
    "watchNext": "关注国内手机厂商和家电巨头在AI硬件上的投入，以及新兴硬件创业公司的动向。",
    "sources": []
  }
];

export const usSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "美国市场要点速览",
    "bullets": [
      [
        {
          "text": "OpenAI对ChatGPT进行了多项重要更新，旨在深化其在个人和工作场景中的集成与自动化：",
          "strong": true
        }
      ],
      [
        {
          "text": "ChatGPT Work新增了通过Webhook响应应用更新的定时任务功能，并首次支持在已登录网站上完成任务，大幅提升了自动化和执行能力。",
          "strong": false
        }
      ],
      [
        {
          "text": "ChatGPT现在允许用户连接多个Google账户（Gmail、日历、通讯录）的插件，以实现更全面的个人与工作信息整合。",
          "strong": false
        }
      ],
      [
        {
          "text": "临时对话功能得到增强，用户可以自主选择是否开启个性化（记忆、插件、自定义指令）并灵活控制对话的保存与否，兼顾了用户体验与隐私。",
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
    "title": "ChatGPT Work新增网站交互和任务分享",
    "bullets": [
      [
        {
          "text": "ChatGPT Work现在可以利用Webhook响应支持应用的更新，例如Gmail、Slack和GitHub，以实现定时任务的自动化处理。",
          "strong": false
        }
      ],
      [
        {
          "text": "所有用户都可以分享已调度的任务；Plus和Pro用户还能创建由Webhook触发的任务。",
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
    "title": "ChatGPT支持连接多个Google账户",
    "bullets": [
      [
        {
          "text": "ChatGPT现在允许用户连接多个Google账户的插件，包括Gmail、Google Calendar和Google Contacts。",
          "strong": false
        }
      ],
      [
        {
          "text": "这使得用户能够在同一对话中，跨个人和工作账户获取信息并协调任务，例如同时查询不同日历的空闲时间或搜索所有收件箱的邮件。",
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
    "title": "ChatGPT临时对话功能升级",
    "bullets": [
      [
        {
          "text": "ChatGPT推出了临时对话的新控制功能，用户可以自主选择是否开启记忆、插件和自定义指令，以个性化临时对话的响应。",
          "strong": false
        }
      ],
      [
        {
          "text": "个性化的临时对话在默认情况下不会创建新的记忆或计入聊天历史，除非用户明确选择保存。",
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
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "头部AI助手持续推出深度集成与个性化功能，巨头加速AI能力全产品线渗透。",
          "strong": false
        }
      ],
      [
        {
          "text": "深挖跨应用、跨账户的整合需求，提供智能且高度个性化的工作流与生活助手。",
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
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "中国市场要点速览",
    "bullets": [
      [
        {
          "text": "根据对本周报收集的来源信息进行检阅，中国市场在过去7天内（2026-08-24至2026-08-31）未观察到有显著的AI消费产品发布或重大更新。",
          "strong": false
        }
      ],
      [
        {
          "text": "这可能表明在当前周期内，中国AI消费产品领域未出现公开且有影响力的新动向，或相关信息暂未通过现有渠道披露。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "晚点聊 LateTalk AI季报26Q1",
        "href": "https://podcast.latepost.com/156"
      }
    ]
  }
];
