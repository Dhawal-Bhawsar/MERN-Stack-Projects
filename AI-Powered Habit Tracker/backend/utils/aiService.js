import { GoogleGenAI } from "@google/genai";

let client = null;
let clientKey = null;

const getClient = () => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return null;

    if (!client || clientKey !== key) {
        client = new GoogleGenAI({ apiKey: key });
        clientKey = key;
    }

    return client;
};

const getModel = () => process.env.GEMINI_MODEL || "gemini-3.8-flash";

export const isAIEnabled = () => Boolean(process.env.GEMINI_API_KEY);

export const parseJSON = (text) => {
    let cleaned = String(text || "").trim();

    cleaned = cleaned
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();

    return JSON.parse(cleaned);
};

export const chatCompletion = async ({
    system,
    user,
    temperature = 0.7,
}) => {
    const ai = getClient();

    if (!ai) {
        return {
            ok: false,
            content:
                "AI features are disabled. Set GEMINI_API_KEY in the backend environment to enable real AI responses.",
        };
    }

    try {
        const response = await ai.models.generateContent({
            model: getModel(),
            contents: user,
            config: {
                systemInstruction: system,
                temperature,
            },
        });

        return {
            ok: true,
            content: (response.text || "").trim(),
        };
    } catch (error) {
        console.error("AI request error:", error.message);
        return {
            ok: false,
            content: "AI request failed. Please try again later.",
        };
    }
};

export const SystemPrompts = {
    weekly:
        "You are a warm, encouraging AI assistant that helps users reflect on their weekly habit progress. Provide insights, suggestions, and motivation based on the user's habit data.",
    suggestion:
        "You are a helpful habit coach. Based on the user's habit history, suggest 3-5 new habits that are achievable and relevant to their goals. Provide a brief explanation for each suggestion.",
    recovery:
        "You are a supportive AI assistant that helps users get back on track with their habits. Based on the user's habit history, provide a personalized recovery plan with actionable steps and encouragement.",
    chat:
        "You are a friendly AI assistant that answers user questions about their habit tracking data. Provide clear, concise, and helpful responses based on the user's habit history.",
    morning:
        "You are a motivational AI assistant that provides a daily morning message to inspire users to stay consistent with their habits. Keep the message positive, encouraging, and relevant to habit tracking.",
};
