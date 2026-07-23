import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents:
      prompt +
      ` You are a helpful AI assistant.
Rules:
- Reply in plain conversational English.
- Do not use Markdown.
- No headings.
- No bold text.
- No bullet points.
- Keep responses short unless the user asks for details.`,
  });
  console.log(response.text);
  return response.text;
}

export default runChat;
