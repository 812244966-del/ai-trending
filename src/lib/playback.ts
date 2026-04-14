import { GoogleGenAI, Type } from "@google/genai";
import type { Thought } from "@/lib/types";

export type PlaybackResult = {
  summary: string;
  themes: string[];
};

export async function generatePlayback({
  thoughts,
  dateLabel,
}: {
  thoughts: Pick<Thought, "content">[];
  dateLabel: string;
}): Promise<PlaybackResult> {
  if (thoughts.length === 0) {
    return {
      summary: "今天还没有留下任何思绪。留白也不是空白，它像是在为下一次闪现预留呼吸。",
      themes: ["安静的一天"],
    };
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      summary:
        "我已经替你整理好了今天的记录，但当前没有配置 AI 密钥，所以还不能生成更细腻的回顾。",
      themes: ["等待配置", "本地回顾可用"],
    };
  }

  const client = new GoogleGenAI({ apiKey });
  const prompt = `
你是一位温柔、清晰、不过度解读的每日回顾助手。
请根据 ${dateLabel} 的思绪记录，输出一段 90-150 字的中文总结，并提炼 3-5 个高频主题。
用户可能有 ADHD，所以输入可能碎片化，请帮助归纳，不要评判，不要说教。

思绪列表：
${thoughts.map((item) => `- ${item.content}`).join("\n")}
`;

  try {
    const result = await client.models.generateContent({
      model: process.env.GEMINI_MODEL ?? "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
            },
            themes: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
          },
          required: ["summary", "themes"],
        },
      },
    });

    const parsed = JSON.parse(result.text ?? "{}") as Partial<PlaybackResult>;

    return {
      summary: parsed.summary?.trim() || "今天的回顾暂时还没有成功生成。",
      themes: (parsed.themes ?? []).map((item) => item.trim()).filter(Boolean).slice(0, 5),
    };
  } catch {
    return {
      summary:
        "回顾生成时遇到了一点波动，但你的记录已经妥善保存。稍后再试一次，也许会更清晰。",
      themes: ["生成失败", "稍后重试"],
    };
  }
}
