import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = "2026-11-16";

export const topFindings: Finding[] = [
  {
    "name": "ChatGPT Wallet上线",
    "market": "美国",
    "date": "2026-11-13",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "OpenAI面向ChatGPT Pro订阅用户推出了ChatGPT Wallet功能。"
        },
        {
          "text": "用户可以通过AI助手（dot）代为完成购物支付。"
        }
      ],
      [
        {
          "text": "该功能支持保存一张符合条件的银行卡，并通过生物识别技术（如Face ID或Touch ID）授权购买。"
        },
        {
          "text": "Wallet在结账时会提供替代支付凭证，从而隐藏用户实际的卡片信息，同时保留原卡的奖励和争议保护。"
        }
      ],
      [
        {
          "text": "该功能正在美国逐步向18岁或以上、拥有美国发行卡片和账单地址的ChatGPT Pro订阅用户推出。"
        },
        {
          "text": "一些网站可能不支持AI代理进行购买，用户需在结账后检查商家确认。"
        }
      ],
      [
        {
          "text": "此功能旨在帮助用户实现从信息查询到实际购买的全流程体验，用户可以指示其dot添加卡片到Wallet。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "ChatGPT Wallet的推出标志着AI助手向更深度的交易和实际生活场景渗透，预示着AI在电商和O2O领域的巨大潜力。"
        },
        {
          "text": "这不仅提升了用户体验的流畅性，也为AI驱动的自动化消费提供了新范式。"
        }
      ],
      [
        {
          "text": "AI开始从信息提供者转变为行动执行者，能够代用户执行购买任务，极大地拓展了AI助手的应用边界。"
        }
      ],
      [
        {
          "text": "未来需密切观察ChatGPT Wallet在用户支付习惯上的实际影响和用户采纳率，以及AI在交易安全和隐私保护方面的进一步措施。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a1/39/1d/a1391d37-04ea-8ead-62eb-d925b773ed4a/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT淘汰Advanced和Standard语音",
    "market": "美国",
    "date": "2026-11-10",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "OpenAI宣布将于2026年12月11日停止ChatGPT Voice中的Advanced和Standard语音功能。"
        }
      ],
      [
        {
          "text": "此举是为了将重心完全放在今年7月推出的最新语音模型",
          "strong": true
        },
        {
          "text": "GPT-Live",
          "strong": false
        },
        {
          "text": "上。"
        },
        {
          "text": "自GPT-Live推出以来，ChatGPT的语音使用量几乎翻倍，绝大多数用户已转向GPT-Live。"
        }
      ],
      [
        {
          "text": "OpenAI的目标是简化语音体验，并集中资源改进GPT-Live，以提升其在响应深度、对话连贯性和个性化方面的表现。"
        }
      ],
      [
        {
          "text": "在此期间，Live视频和屏幕共享功能将继续由Advanced语音提供支持，直到GPT-Live具备相应能力。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "OpenAI对GPT-Live的整合和优化，体现了头部AI公司在用户体验上的聚焦策略，即通过统一核心模型来提供更自然、更智能的交互。"
        },
        {
          "text": "淘汰旧有模型，集中资源开发新一代更强大的语音交互能力，是提升AI助手核心竞争力的关键。"
        }
      ],
      [
        {
          "text": "这一战略旨在为用户带来更流畅、无缝的语音AI体验，使其成为ChatGPT不可或缺的一部分。"
        }
      ],
      [
        {
          "text": "接下来需要观察GPT-Live在不同应用场景下的性能表现，以及其多模态能力的进一步发展。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a1/39/1d/a1391d37-04ea-8ead-62eb-d925b773ed4a/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "ChatGPT Business Hub上线",
    "market": "美国",
    "date": "2026-11-10",
    "type": "feature launch",
    "summary": [
      [
        {
          "text": "ChatGPT推出了",
          "strong": true
        },
        {
          "text": "Business Hub",
          "strong": false
        },
        {
          "text": "，为企业主和授权代表提供了一个在ChatGPT中认领和管理其业务的平台。"
        }
      ],
      [
        {
          "text": "通过Business Hub，企业可以访问和发布其业务信息更新、连接产品Feed，并查看如提及量和网站点击量等洞察数据。"
        }
      ],
      [
        {
          "text": "此外，通过Persona身份验证后，符合条件的美国电商和在线服务企业（需有网站）可以创建基于企业信息的AI业务代理，用于回答客户问题。"
        },
        {
          "text": "这些代理在与客户聊天前需经过企业审核和发布。"
        }
      ],
      [
        {
          "text": "这些功能旨在将ChatGPT从个人助手扩展到商业运营的各个环节，特别是客户服务和业务管理。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "Business Hub的推出标志着ChatGPT将AI能力深度赋能企业级应用，尤其是在自动化客户服务和数据洞察方面。"
        },
        {
          "text": "这为中小型企业提供了低成本、高效率的AI解决方案。"
        }
      ],
      [
        {
          "text": "这一进展预示着AI在商业领域的广泛应用，特别是AI代理作为企业的智能“前台”，可能重塑客户沟通和业务管理模式。"
        }
      ],
      [
        {
          "text": "未来需要关注Business Hub在企业市场的采纳率，以及企业AI代理在实际客户交互中的表现和信任度建立。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "image": {
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a1/39/1d/a1391d37-04ea-8ead-62eb-d925b773ed4a/1_iPhone.jpg/320x480bb.jpg",
      "alt": "ChatGPT App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "ChatGPT App Store",
      "sourceHref": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "note": "使用 ChatGPT 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "抖音旗下即梦AI升级Seedance 2.5模型",
    "market": "中国",
    "date": "2026-11-09",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "抖音旗下的AI图片和视频工具",
          "strong": true
        },
        {
          "text": "即梦AI",
          "strong": false
        },
        {
          "text": "发布了2.4.1版本，核心更新是全面上线了Seedance 2.5模型。"
        }
      ],
      [
        {
          "text": "新模型支持生成30秒的超长视频，大幅提升了视频生成能力。"
        }
      ],
      [
        {
          "text": "即梦AI致力于成为一个专为创意爱好者打造的AI表达平台，旨在提升用户的多模态创作体验，让创意表达更加自由和高效。"
        },
        {
          "text": "除了视频创作，还支持AI图片创作。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "即梦AI升级Seedance 2.5模型并支持30秒长视频生成，标志着中国AI创作工具在视频生成能力上取得了重要进展。"
        },
        {
          "text": "这满足了创作者对更长、更复杂视频内容的需求。"
        }
      ],
      [
        {
          "text": "作为抖音旗下的产品，即梦AI的升级，预示着短视频巨头正在通过AI技术进一步降低内容创作门槛，赋能更多普通用户和专业创作者，为短视频平台的内容生态注入了新的活力。"
        }
      ],
      [
        {
          "text": "AI视频生成能力的提升，将驱动内容形式的创新，可能催生出更多元化、更具互动性的视频内容，对用户生成内容（UGC）生态产生深远影响。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/be/5e/a1/be5ea172-87c5-9e74-72aa-4bcc92d0fde4/osPAIBFLXQADGTAAaVm2GXAOH4ylGefEGeSUvx.jpg/320x480bb.jpg",
      "alt": "即梦AI - 抖音旗下AI图片和视频工具 App Store 预览图",
      "type": "app store preview",
      "sourceLabel": "即梦AI App Store",
      "sourceHref": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
      "note": "使用 即梦AI - 抖音旗下AI图片和视频工具 的 App Store 官方预览图，帮助读者快速识别产品形态。"
    }
  },
  {
    "name": "小红书点点App同步站内聊天记录",
    "market": "中国",
    "date": "2026-11-09",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "小红书旗下AI生活助手“",
          "strong": true
        },
        {
          "text": "点点",
          "strong": false
        },
        {
          "text": "”App更新至4.12版本，实现了与小红书站内“点点”聊天记录的同步。"
        }
      ],
      [
        {
          "text": "此次更新允许用户在App内继续未完的对话，并支持搜索聊天记录，显著提升了用户在不同平台间使用AI助手的连贯性和便捷性。"
        }
      ],
      [
        {
          "text": "点点App基于小红书的海量真实用户经验，能够生成专属的深度攻略，覆盖旅行、生活兴趣、购物决策、美食探店、笔记总结、知识梳理等多个方面。"
        }
      ],
      [
        {
          "text": "用户可以通过语音或图片进行自然提问，随时随地获取帮助，优化了从手机桌面启动App的便利性。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "点点App与小红书站内聊天记录的同步，是社交平台将AI助手能力深度整合到独立App的关键一步。"
        },
        {
          "text": "这强化了小红书在AI生活服务领域的布局，提升了用户体验的流畅性。"
        }
      ],
      [
        {
          "text": "此举有助于将小红书特有的“内容+社交”优势，通过AI技术延伸到更广泛的生活决策场景。"
        },
        {
          "text": "将平台内的真实用户经验转化为AI驱动的个性化攻略，为用户提供了更具信任度和实用性的解决方案。"
        }
      ],
      [
        {
          "text": "长期来看，小红书通过点点App构建的AI生活助手生态，有望在“搜索即服务”的趋势下，成为用户进行生活消费决策的重要入口。"
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
  },
  {
    "name": "腾讯元宝Hy4正式版全量上线",
    "market": "中国",
    "date": "2026-11-13",
    "type": "notable update",
    "summary": [
      [
        {
          "text": "腾讯",
          "strong": true
        },
        {
          "text": "元宝App",
          "strong": false
        },
        {
          "text": "发布了2.93.0版本，核心更新是Hy4正式版模型全量上线。"
        }
      ],
      [
        {
          "text": "Hy4模型全面提升了长程任务表现，并首次引入了视觉理解能力，使得元宝在处理复杂、多步骤任务和多模态信息方面更具优势。"
        }
      ],
      [
        {
          "text": "此次更新还包含了首页体验优化，界面更简洁，操作更高效。"
        },
        {
          "text": "商品推荐展示也得到升级，多款商品集中呈现，便于浏览对比，并可点击直达商品列表页。"
        }
      ],
      [
        {
          "text": "元宝作为腾讯的全能AI助手，此前已接入腾讯混元与DeepSeek两大模型，具备AI搜索、写作、总结、文档处理、语音输入、拍题答疑、智能识图等多种能力。"
        }
      ]
    ],
    "whyItMatters": [
      [
        {
          "text": "腾讯元宝Hy4正式版模型全量上线，特别是其长程任务表现和视觉理解能力的引入，表明腾讯在AI大模型技术上持续投入并取得重要进展。"
        }
      ],
      [
        {
          "text": "Hy4模型的发布，结合元宝在腾讯生态内的深度整合（微信、腾讯文档等），将进一步提升其在效率办公、生活服务和内容创作等领域的竞争力。"
        },
        {
          "text": "更强的模型能力有助于推动AI在用户日常生活和工作中的普及。"
        }
      ],
      [
        {
          "text": "App界面和商品推荐的优化，显示出腾讯元宝在提升用户体验和商业化探索上的努力。"
        },
        {
          "text": "视觉理解能力和更高效的商品推荐，可能为AI在电商和O2O领域的应用带来新的增长点。"
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
      "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/60/28/2c/60282c35-77b6-11f2-d896-458966f363aa/e7486997d98808089d7f274fe098adfa_1.jpg/320x480bb.jpg",
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
    "title": "AI交易与支付场景正在萌芽，并加速融入核心产品",
    "evidence": [
      {
        "text": "OpenAI推出了",
        "strong": false
      },
      {
        "text": "ChatGPT Wallet",
        "strong": true
      },
      {
        "text": "，允许AI助手代用户进行购买支付，首次将AI直接引入了交易环节。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "此趋势表明AI不再局限于信息提供和内容生成，而是开始涉足更深层次的商业闭环。"
      },
      {
        "text": "这与传统电商或支付平台的“人找货”模式不同，AI开始实现“货找人”甚至“货直接支付”，是AI作为代理能力的具象化。",
        "strong": false
      },
      {
        "text": "OpenAI将AI能力与现有生态（如AI助手生态）深度结合，打通消费决策到支付的路径，可能在未来重新定义用户购物体验。",
        "strong": false
      }
    ]
  },
  {
    "title": "大模型能力成为AI产品体验优化的核心驱动力",
    "evidence": [
      {
        "text": "OpenAI宣布淘汰旧版语音模型，聚焦",
        "strong": true
      },
      {
        "text": "GPT-Live",
        "strong": true
      },
      {
        "text": "，以提升语音交互的自然度和智能性。",
        "strong": false
      },
      {
        "text": "腾讯元宝全量上线",
        "strong": true
      },
      {
        "text": "Hy4",
        "strong": true
      },
      {
        "text": "正式版模型，显著提升了长程任务表现并首次引入视觉理解。",
        "strong": false
      },
      {
        "text": "抖音即梦AI升级",
        "strong": true
      },
      {
        "text": "Seedance 2.5",
        "strong": true
      },
      {
        "text": "模型，支持生成30秒超长视频，提升多模态创作能力。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美两国AI头部公司均将大模型技术的迭代作为产品体验升级的核心。"
      },
      {
        "text": "这种对核心模型能力的持续投入和优化，是AI产品在竞争中脱颖而出的关键。",
        "strong": false
      },
      {
        "text": "从单一模态到多模态，从短程对话到长程理解，大模型的能力边界正在被不断拓宽，成为各类AI应用创新的基石。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI正加速与硬件和垂直场景融合，构建“无处不在”的智能体验",
    "evidence": [
      {
        "text": "Meta的",
        "strong": true
      },
      {
        "text": "Muse Spark",
        "strong": true
      },
      {
        "text": "模型逐步部署到Ray-Ban Meta和Oakley Meta眼镜，增强了AI眼镜的智能化。",
        "strong": false
      },
      {
        "text": "Rokid AI",
        "strong": true
      },
      {
        "text": "乐奇AI眼镜App",
        "strong": true
      },
      {
        "text": "适配",
        "strong": true
      },
      {
        "text": "Rokid Glasses2",
        "strong": true
      },
      {
        "text": "，并持续优化影像、翻译和AI助手能力。",
        "strong": false
      },
      {
        "text": "小红书点点App同步站内聊天记录，并提供基于海量用户经验的“攻略模式”，旨在深度服务生活决策场景。",
        "strong": false
      },
      {
        "text": "Google AI Edge Eloquent",
        "strong": true
      },
      {
        "text": "作为离线、本地运行的AI听写应用，专注于提升特定效率场景下的用户隐私和响应速度。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "中美AI发展都在强调“AI无处不在”，通过将AI能力嵌入到眼镜等硬件设备中，实现更自然、更沉浸的交互。",
        "strong": false
      },
      {
        "text": "同时，AI也正深入到如生活决策（小红书点点）、效率办公（Google Eloquent）等垂直场景，提供专业化和定制化的解决方案。",
        "strong": false
      },
      {
        "text": "这一趋势预示着AI将从屏幕内的虚拟世界走向物理世界，成为用户日常生活中不可或缺的智能伴侣和工具。",
        "strong": false
      }
    ]
  },
  {
    "title": "AI产品在用户体验和商业化探索中面临挑战",
    "evidence": [
      {
        "text": "中国",
        "strong": true
      },
      {
        "text": "豆包App",
        "strong": true
      },
      {
        "text": "的用户评论显示，尽管功能强大，但在用户体验方面存在“思考不够贴合需求”、“应变死板”、“专业内容偶有疏漏”等问题。",
        "strong": false
      },
      {
        "text": "中国",
        "strong": true
      },
      {
        "text": "即梦AI",
        "strong": true
      },
      {
        "text": "的用户反馈指出其在会员价格、积分权益、生成质量和服务态度上存在问题，导致用户流失。",
        "strong": false
      },
      {
        "text": "美国",
        "strong": true
      },
      {
        "text": "Rokid AI眼镜App",
        "strong": true
      },
      {
        "text": "的用户也反映了Vision AI不稳定、翻译功能不佳、耗电快等问题。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "这些挑战表明，在AI技术快速发展的同时，如何将技术优势转化为稳定、高效且人性化的用户体验，以及如何平衡商业化与用户利益，仍是中美AI产品共同面临的难题。",
        "strong": false
      },
      {
        "text": "特别是对于需要长期投入的AI硬件和订阅服务，用户对产品稳定性和服务质量的要求会更高。",
        "strong": false
      },
      {
        "text": "成功的产品不仅需要强大的AI模型，更需要精细化的产品设计、用户反馈响应机制和可持续的商业模式。",
        "strong": false
      }
    ]
  },
  {
    "title": "中美都在继续把 AI 产品入口前移",
    "evidence": [
      {
        "text": "本期美国的 ChatGPT Wallet上线、ChatGPT淘汰Advanced和Standard语音，以及中国的 抖音旗下即梦AI升级Seedance 2.5模型、小红书点点App同步站内聊天记录，都说明消费者能直接感知的 AI 入口还在继续前推。",
        "strong": false
      }
    ],
    "comparison": [
      {
        "text": "这是基于本期已验证发布与分发信号的归纳，不直接外推为长期格局。",
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
      "Meta AI",
      "ChatGPT",
      "Gemini"
    ],
    "pattern": "Meta的Muse Spark模型正全面部署到其应用生态和AI眼镜中，极大提升了Meta AI的智能性和多模态交互能力。OpenAI则通过聚焦GPT-Live，并推出ChatGPT Wallet和Business Hub，强化其AI助手的交易和商业服务能力。Google Gemini则通过“个人智能”连接Google应用，提供个性化帮助。",
    "opportunity": "AI助手正从通用问答向深度集成和场景化服务演进，特别是与用户数据、设备和交易能力的结合，将是未来的主要增长点。",
    "watchNext": "观察Meta AI在社交场景中的实际渗透率和用户反馈，以及ChatGPT Wallet在用户支付习惯上的影响。关注Google Gemini的Personal Intelligence如何深化用户日常。",
    "sources": [
      {
        "label": "Meta Introducing Muse Spark: MSL’s First Model, Purpose-Built to Prioritize People",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  },
  {
    "id": "ai_assistant_search_cn",
    "category": "AI 助手/搜索",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "腾讯元宝",
      "豆包",
      "夸克"
    ],
    "pattern": "腾讯元宝全量上线Hy4模型，大幅提升长程任务和视觉理解能力，并优化App体验。豆包App虽无近期显著更新，但其在效率榜单表现强劲，用户评论显示其在生活问答、工作任务和创意设计方面的广泛应用。夸克App则作为AI旗舰应用，在搜索和拍题方面表现突出。",
    "opportunity": "中国AI助手市场竞争激烈，大模型能力和多模态交互是核心竞争力。结合自有生态（如腾讯的微信、字节的抖音）提供深度整合服务是其优势。",
    "watchNext": "关注腾讯元宝Hy4模型的实际效果及用户采纳度，以及豆包和夸克如何通过模型升级和场景创新来维持市场份额。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      },
      {
        "label": "夸克-AI旗舰应用",
        "href": "https://apps.apple.com/cn/app/%E4%BA%8F%E5%85%8B-ai%E6%97%97%E8%88%B0%E5%BA%94%E7%94%A8/id1453965927"
      }
    ]
  },
  {
    "id": "ai_education_learning_us",
    "category": "AI 教育/学习",
    "market": "美国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "Gizmo"
    ],
    "pattern": "AI学习平台Gizmo通过游戏化学习吸引了1300万用户，并在4月份获得了2200万美元的A轮融资（融资+产品验证）。",
    "opportunity": "AI在教育领域的应用，特别是结合游戏化机制，能有效提升学习参与度。针对学生注意力分散的问题，AI学习平台通过创新模式有望打开市场。",
    "watchNext": "关注Gizmo在扩大美国大学市场和AI团队后的产品迭代方向。",
    "sources": [
      {
        "label": "AI learning app Gizmo levels up with 13M users and a $22M investment",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13M-users-and-a-22M-investment/"
      }
    ]
  },
  {
    "id": "ai_education_learning_cn",
    "category": "AI 教育/学习",
    "market": "中国",
    "intensity": 2,
    "signalLabel": "中",
    "products": [
      "千问智学"
    ],
    "pattern": "阿里旗下“千问智学”（原夸克学习App）全面升级，接入阿里千问全新学习大模型，提供AI家教服务。",
    "opportunity": "中国教育市场对AI工具的需求旺盛，AI家教、作业批改和定制学习资料等功能具有巨大潜力。",
    "watchNext": "观察千问智学在个性化学习、大模型讲解题目和作业批改方面的实际效果和用户反馈。",
    "sources": [
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      }
    ]
  },
  {
    "id": "ai_companion_social_us",
    "category": "AI 陪伴/情感/社交",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Series",
      "Replika",
      "Character.AI"
    ],
    "pattern": "iMessage上的AI社交网络Series获得510万美元种子轮融资（融资+产品验证），旨在通过AI促进人际连接。OpenAI ChatGPT也推出了“Texting your dot”功能。Character.AI持续迭代模型，提升角色记忆和一致性。",
    "opportunity": "AI在社交和情感陪伴领域的应用持续升温，特别是结合现有社交平台或创新交互模式（如iMessage内的AI社交）。",
    "watchNext": "关注Series在用户留存和连接效果上的表现，以及AI社交产品如何解决信任和安全问题。",
    "sources": [
      {
        "label": "Two college kids raise a $5.1 million pre-seed to build an AI social network in iMessage",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      },
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Replika App Store",
        "href": "https://apps.apple.com/us/app/replika/id1158555867"
      },
      {
        "label": "Character.AI Blog",
        "href": "https://blog.character.ai/pipsqueak2-and-more/"
      }
    ]
  },
  {
    "id": "ai_companion_social_cn",
    "category": "AI 陪伴/情感/社交",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "星野"
    ],
    "pattern": "星野App作为多模态智能体内容社区，持续优化AI智能体的形象、声音、人设和技能，用户可在其中创建和分享AI智能体进行陪伴互动。",
    "opportunity": "中国用户对AI情感陪伴和虚拟角色的需求强劲，社区型平台通过用户共创激发活力。",
    "watchNext": "关注星野如何提升AI智能体的个性化和沉浸感，以及如何平衡用户创作自由与内容安全。",
    "sources": [
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "id": "ai_game_interactive_us",
    "category": "AI 游戏/互动娱乐",
    "market": "美国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "目前没有足够证据表明过去60天内有强劲的美国AI游戏/互动娱乐创新产品或融资信号。",
    "opportunity": "AI在游戏领域的潜力巨大，例如AI生成内容、智能NPC、个性化游戏体验等。",
    "watchNext": "关注AI技术在游戏设计、开发和玩家互动中的应用突破。",
    "sources": []
  },
  {
    "id": "ai_game_interactive_cn",
    "category": "AI 游戏/互动娱乐",
    "market": "中国",
    "intensity": 1,
    "signalLabel": "弱",
    "products": [],
    "pattern": "目前没有足够证据表明过去60天内有强劲的中国AI游戏/互动娱乐创新产品或融资信号。",
    "opportunity": "AI与中国庞大的游戏市场结合，有望催生新的互动娱乐形态。",
    "watchNext": "关注国内游戏大厂或独立工作室在AI游戏方面的探索。",
    "sources": []
  },
  {
    "id": "ai_creation_us",
    "category": "AI 创作",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT",
      "Cantina",
      "Runway"
    ],
    "pattern": "OpenAI ChatGPT引入了Images 2.6模型，支持GIF创建和保存参考图像，显著提升了图片和动画生成能力。Cantina和Runway等AI视频/图像生成工具也在榜单上表现活跃。",
    "opportunity": "AI创作工具正向更精细化、多模态和用户友好方向发展，创作者对高质量、高效率的AI生成内容需求不断增长。",
    "watchNext": "观察AI生成内容在专业领域和UGC市场的应用深度，以及版权、伦理等伴生问题。",
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Apple 美国摄影与录像榜",
        "href": "https://apps.apple.com/us/iphone/charts/6008?chart=top-free"
      }
    ]
  },
  {
    "id": "ai_creation_cn",
    "category": "AI 创作",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "即梦AI",
      "腾讯元宝",
      "可灵AI",
      "豆包"
    ],
    "pattern": "抖音即梦AI升级Seedance 2.5模型，支持30秒超长视频生成。腾讯元宝Hy4模型引入视觉理解能力，并提供AI图片编辑增强和视频生成功能。可灵AI和豆包也活跃在AI图片和视频创作领域。",
    "opportunity": "中国在AI创作领域发展迅速，特别是视频生成方面，头部公司积极投入。结合短视频生态，AI创作工具将进一步普及。",
    "watchNext": "关注各平台在视频生成质量、时长、风格多样性及商业化模式上的竞争。",
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "ai_efficiency_office_us",
    "category": "AI 效率/办公",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Granola",
      "Google AI Edge Eloquent",
      "ChatGPT Business Hub"
    ],
    "pattern": "会议记录应用Granola获得1.25亿美元C轮融资，并扩展至企业级AI应用。Google AI Edge Eloquent提供免费、离线和隐私保护的AI听写功能。ChatGPT推出了Business Hub，助力企业管理AI代理。",
    "opportunity": "AI在提升办公效率方面的需求旺盛，从个人工具到企业级解决方案，市场空间广阔。本地化、隐私保护的AI工具也受到重视。",
    "watchNext": "关注Granola在企业级市场的进一步拓展，以及Google AI Edge Eloquent能否在跨设备协作上提供更完善的体验。",
    "sources": [
      {
        "label": "Granola raises $125M, hits $1.5B valuation as it expands from meeting notetaker to enterprise AI app",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125M-hits-1-5B-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-AI-app/"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai_efficiency_office_cn",
    "category": "AI 效率/办公",
    "market": "中国",
    "intensity": 4,
    "signalLabel": "极强",
    "products": [
      "腾讯元宝",
      "豆包",
      "WorkBuddy"
    ],
    "pattern": "腾讯元宝Hy4模型增强了长程任务表现，同时其AI录音笔、AI秒写报告、文档精读等功能持续优化。豆包App推出了全新“工作任务模式”，支持智能化自动办公。WorkBuddy则作为AI办公提效必备工具，在榜单上表现突出。",
    "opportunity": "中国职场对AI效率工具的需求巨大，头部AI助手产品正深度融入办公场景，提供多功能、自动化解决方案。",
    "watchNext": "关注腾讯元宝和豆包在实际办公场景中的用户粘性和功能深度，以及WorkBuddy如何创新以应对竞争。",
    "sources": [
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      },
      {
        "label": "Apple 中国总榜",
        "href": "https://apps.apple.com/cn/charts/iphone"
      }
    ]
  },
  {
    "id": "ai_lifestyle_tools_us",
    "category": "AI 生活工具",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "ChatGPT Wallet"
    ],
    "pattern": "ChatGPT Wallet的推出，标志着AI助手开始深入用户的实际消费场景，通过AI代理完成购物支付，简化消费流程。",
    "opportunity": "AI生活工具正从信息查询向行动执行拓展，未来有望在日常消费、出行规划、健康管理等领域发挥更大作用。",
    "watchNext": "关注ChatGPT Wallet的用户采纳率和交易安全性，以及AI在其他生活服务领域的创新应用。",
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "ai_lifestyle_tools_cn",
    "category": "AI 生活工具",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "小红书点点",
      "豆包"
    ],
    "pattern": "小红书点点App实现了与站内聊天记录同步，并提供基于小红书海量真人经验的深度攻略，服务用户的吃喝玩乐、购物决策等生活场景。豆包App也推出了“吃喝玩乐豆包搞定”的新功能。",
    "opportunity": "中国AI生活工具市场通过与电商、社交内容平台深度融合，提供个性化、场景化的解决方案。",
    "watchNext": "关注小红书点点如何将用户生成内容（UGC）转化为更智能的生活决策支持，以及豆包在生活服务方面的商业化探索。",
    "sources": [
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  },
  {
    "id": "ai_hardware_entry_us",
    "category": "AI 硬件入口",
    "market": "美国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Meta AI glasses"
    ],
    "pattern": "Meta的Muse Spark模型正逐步部署到Ray-Ban Meta和Oakley Meta眼镜，使其AI助手更加智能。",
    "opportunity": "AI眼镜作为重要的AI硬件入口，能够提供无屏幕、沉浸式的AI体验。头部科技公司在这一领域的投入预示着其巨大的潜力。",
    "watchNext": "关注Meta AI眼镜在实际使用场景中的用户接受度和功能迭代，以及用户隐私和数据安全挑战。",
    "sources": [
      {
        "label": "Meta Introducing Muse Spark: MSL’s First Model, Purpose-Built to Prioritize People",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      }
    ]
  },
  {
    "id": "ai_hardware_entry_cn",
    "category": "AI 硬件入口",
    "market": "中国",
    "intensity": 3,
    "signalLabel": "强",
    "products": [
      "Rokid Glasses"
    ],
    "pattern": "Rokid AI眼镜App持续更新并适配Rokid Glasses2设备能力，并不断优化影像、翻译和AI助手能力。",
    "opportunity": "中国AI硬件市场正在积极探索，AI眼镜作为下一代计算平台，其硬件和软件协同发展至关重要。",
    "watchNext": "关注Rokid Glasses在解决用户反馈问题（如稳定性、续航、翻译准确性）方面的进展，以及更多创新应用场景的出现。",
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
    "title": "美国AI消费产品动态",
    "bullets": [
      [
        {
          "text": "OpenAI推出了",
          "strong": false
        },
        {
          "text": "ChatGPT Wallet",
          "strong": true
        },
        {
          "text": "，允许AI助手代用户进行购物支付。"
        },
        {
          "text": "同时，OpenAI正聚焦",
          "strong": false
        },
        {
          "text": "GPT-Live",
          "strong": true
        },
        {
          "text": "，淘汰旧版语音模型以提升交互体验，并推出了",
          "strong": false
        },
        {
          "text": "ChatGPT Business Hub",
          "strong": true
        },
        {
          "text": "助力企业管理AI代理。"
        },
        {
          "text": "Meta的",
          "strong": false
        },
        {
          "text": "Muse Spark",
          "strong": true
        },
        {
          "text": "模型持续部署到Meta AI应用和AI眼镜中，全面提升了其能力，并在购物和视觉理解方面进行了创新。"
        }
      ],
      [
        {
          "text": "Google旗下的AI听写应用",
          "strong": false
        },
        {
          "text": "Google AI Edge Eloquent",
          "strong": true
        },
        {
          "text": "因其免费、离线和隐私保护的特点受到用户好评，并在App Store持续收到用户反馈和更新。"
        }
      ],
      [
        {
          "text": "AI社交网络",
          "strong": false
        },
        {
          "text": "Series",
          "strong": true
        },
        {
          "text": "获得了",
          "strong": true
        },
        {
          "text": "510万美元种子轮融资",
          "strong": true
        },
        {
          "text": "，旨在通过AI在iMessage中促进人际连接。"
        },
        {
          "text": "AI学习平台",
          "strong": false
        },
        {
          "text": "Gizmo",
          "strong": true
        },
        {
          "text": "也获得了",
          "strong": true
        },
        {
          "text": "2200万美元A轮融资",
          "strong": true
        },
        {
          "text": "，通过游戏化提升学习参与度。"
        }
      ],
      [
        {
          "text": "AI会议记录应用",
          "strong": false
        },
        {
          "text": "Granola",
          "strong": true
        },
        {
          "text": "完成",
          "strong": true
        },
        {
          "text": "1.25亿美元C轮融资",
          "strong": true
        },
        {
          "text": "，并扩展至企业级AI应用。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Meta Introducing Muse Spark: MSL’s First Model, Purpose-Built to Prioritize People",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "Google AI Edge Eloquent App - App Store",
        "href": "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519"
      },
      {
        "label": "AI learning app Gizmo levels up with 13M users and a $22M investment",
        "href": "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13M-users-and-a-22M-investment/"
      },
      {
        "label": "Two college kids raise a $5.1 million pre-seed to build an AI social network in iMessage",
        "href": "https://techcrunch.com/2026/04/24/two-college-kids-raise-a-5-1-million-pre-seed-to-build-an-ai-social-network-in-imessage/"
      },
      {
        "label": "Granola raises $125M, hits $1.5B valuation as it expands from meeting notetaker to enterprise AI app",
        "href": "https://techcrunch.com/2026/03/25/granola-raises-125M-hits-1-5B-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-AI-app/"
      }
    ]
  },
  {
    "title": "ChatGPT Wallet上线",
    "bullets": [
      [
        {
          "text": "OpenAI面向ChatGPT Pro订阅用户推出了ChatGPT Wallet功能。"
        },
        {
          "text": "用户可以通过AI助手（dot）代为完成购物支付。"
        }
      ],
      [
        {
          "text": "该功能支持保存一张符合条件的银行卡，并通过生物识别技术（如Face ID或Touch ID）授权购买。"
        },
        {
          "text": "Wallet在结账时会提供替代支付凭证，从而隐藏用户实际的卡片信息，同时保留原卡的奖励和争议保护。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "ChatGPT淘汰Advanced和Standard语音",
    "bullets": [
      [
        {
          "text": "OpenAI宣布将于2026年12月11日停止ChatGPT Voice中的Advanced和Standard语音功能。"
        }
      ],
      [
        {
          "text": "此举是为了将重心完全放在今年7月推出的最新语音模型",
          "strong": true
        },
        {
          "text": "GPT-Live",
          "strong": false
        },
        {
          "text": "上。"
        },
        {
          "text": "自GPT-Live推出以来，ChatGPT的语音使用量几乎翻倍，绝大多数用户已转向GPT-Live。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "ChatGPT Business Hub上线",
    "bullets": [
      [
        {
          "text": "ChatGPT推出了",
          "strong": true
        },
        {
          "text": "Business Hub",
          "strong": false
        },
        {
          "text": "，为企业主和授权代表提供了一个在ChatGPT中认领和管理其业务的平台。"
        }
      ],
      [
        {
          "text": "通过Business Hub，企业可以访问和发布其业务信息更新、连接产品Feed，并查看如提及量和网站点击量等洞察数据。"
        }
      ]
    ],
    "sources": [
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "title": "AI 助手/搜索：美国方向信号",
    "bullets": [
      [
        {
          "text": "Meta的Muse Spark模型正全面部署到其应用生态和AI眼镜中，极大提升了Meta AI的智能性和多模态交互能力。OpenAI则通过聚焦GPT-Live，并推出ChatGPT Wallet和Business Hub，强化其AI助手的交易和商业服务能力。Google Gemini则通过“个人智能”连接Google应用，提供个性化帮助。",
          "strong": false
        }
      ],
      [
        {
          "text": "AI助手正从通用问答向深度集成和场景化服务演进，特别是与用户数据、设备和交易能力的结合，将是未来的主要增长点。",
          "strong": false
        }
      ]
    ],
    "sources": [
      {
        "label": "Meta Introducing Muse Spark: MSL’s First Model, Purpose-Built to Prioritize People",
        "href": "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
      },
      {
        "label": "ChatGPT release notes",
        "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Gemini Drops: New updates to the Gemini app, March 2026",
        "href": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      }
    ]
  }
];

export const cnSummaryPoints: MarketSummaryPoint[] = [
  {
    "title": "中国AI消费产品动态",
    "bullets": [
      [
        {
          "text": "腾讯",
          "strong": false
        },
        {
          "text": "元宝App",
          "strong": true
        },
        {
          "text": "全量上线",
          "strong": true
        },
        {
          "text": "Hy4",
          "strong": true
        },
        {
          "text": "正式版模型，全面提升长程任务表现并首次引入视觉理解能力。"
        },
        {
          "text": "阿里旗下“",
          "strong": false
        },
        {
          "text": "千问智学",
          "strong": true
        },
        {
          "text": "”（原夸克学习App）全面升级，接入阿里千问全新学习大模型，成为更专业的AI家教。"
        }
      ],
      [
        {
          "text": "抖音旗下AI图片和视频工具",
          "strong": false
        },
        {
          "text": "即梦AI",
          "strong": true
        },
        {
          "text": "升级",
          "strong": true
        },
        {
          "text": "Seedance 2.5",
          "strong": true
        },
        {
          "text": "模型，支持生成30秒超长视频，提升了多模态创作能力。"
        },
        {
          "text": "多模态智能体内容社区",
          "strong": false
        },
        {
          "text": "星野App",
          "strong": true
        },
        {
          "text": "持续优化AI智能体的形象、声音、人设和技能，用户可自由创建和分享AI智能体进行陪伴互动。"
        }
      ],
      [
        {
          "text": "小红书旗下AI生活助手“",
          "strong": false
        },
        {
          "text": "点点",
          "strong": true
        },
        {
          "text": "App”实现了与小红书站内聊天记录的同步，提升了用户在生活决策场景下的使用连贯性。"
        }
      ],
      [
        {
          "text": "Rokid AI",
          "strong": false
        },
        {
          "text": "乐奇AI眼镜App",
          "strong": true
        },
        {
          "text": "更新至1.17.0版本，全面适配",
          "strong": true
        },
        {
          "text": "Rokid Glasses2",
          "strong": true
        },
        {
          "text": "设备能力，并持续优化AI交互、影像和翻译功能，推动AI硬件入口的成熟。"
        }
      ]
    ],
    "sources": [
      {
        "label": "即梦AI App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563"
      },
      {
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "点点 App Store",
        "href": "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122"
      },
      {
        "label": "Rokid AI App Store",
        "href": "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564"
      },
      {
        "label": "千问智学 App Store",
        "href": "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440"
      },
      {
        "label": "星野 App Store",
        "href": "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337"
      }
    ]
  },
  {
    "title": "抖音旗下即梦AI升级Seedance 2.5模型",
    "bullets": [
      [
        {
          "text": "抖音旗下的AI图片和视频工具",
          "strong": true
        },
        {
          "text": "即梦AI",
          "strong": false
        },
        {
          "text": "发布了2.4.1版本，核心更新是全面上线了Seedance 2.5模型。"
        }
      ],
      [
        {
          "text": "新模型支持生成30秒的超长视频，大幅提升了视频生成能力。"
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
    "title": "小红书点点App同步站内聊天记录",
    "bullets": [
      [
        {
          "text": "小红书旗下AI生活助手“",
          "strong": true
        },
        {
          "text": "点点",
          "strong": false
        },
        {
          "text": "”App更新至4.12版本，实现了与小红书站内“点点”聊天记录的同步。"
        }
      ],
      [
        {
          "text": "此次更新允许用户在App内继续未完的对话，并支持搜索聊天记录，显著提升了用户在不同平台间使用AI助手的连贯性和便捷性。"
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
    "title": "腾讯元宝Hy4正式版全量上线",
    "bullets": [
      [
        {
          "text": "腾讯",
          "strong": true
        },
        {
          "text": "元宝App",
          "strong": false
        },
        {
          "text": "发布了2.93.0版本，核心更新是Hy4正式版模型全量上线。"
        }
      ],
      [
        {
          "text": "Hy4模型全面提升了长程任务表现，并首次引入了视觉理解能力，使得元宝在处理复杂、多步骤任务和多模态信息方面更具优势。"
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
    "title": "AI 创作：中国方向信号",
    "bullets": [
      [
        {
          "text": "抖音即梦AI升级Seedance 2.5模型，支持30秒超长视频生成。腾讯元宝Hy4模型引入视觉理解能力，并提供AI图片编辑增强和视频生成功能。可灵AI和豆包也活跃在AI图片和视频创作领域。",
          "strong": false
        }
      ],
      [
        {
          "text": "中国在AI创作领域发展迅速，特别是视频生成方面，头部公司积极投入。结合短视频生态，AI创作工具将进一步普及。",
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
        "label": "腾讯元宝 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AD%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430"
      },
      {
        "label": "Apple 中国摄影与录像榜",
        "href": "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free"
      },
      {
        "label": "豆包 App Store",
        "href": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672"
      }
    ]
  }
];
