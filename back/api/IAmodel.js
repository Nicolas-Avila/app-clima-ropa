import dotenv from "dotenv";
import OpenAI from "openai";
import { obteinWeather } from "./weatheIp.js";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.APIKEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const conversationHistory = [];

export async function clothingTemperature() {
//Ubicación: Avellaneda, Argentina Temperatura: 12.3°C
  const temp = await obteinWeather()
  conversationHistory.push({
    role: "user",
    content: `${temp} quiero que me digas una lista de la ropa que podría usar en la cabeza, en la parte superior, en la parte inferior y en los pies, de manera coloquial argentina. pero quiero que me dividas todo en un json para yo poder usarlo en una pagina web`,
  });
  
  console.log("------------------------")
    console.log(temp)
  try {
    const chat = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: conversationHistory,
    });

    const answer = chat.choices[0].message.content;
    console.log("\nRespuesta IA:\n", answer, "\n");
    console.log("------------------------------------------------------------\n");

    conversationHistory.push({ role: "assistant", content: answer });

    return answer;
  } catch (error) {
    console.error("Error al consultar OpenAI:", error);
    throw error;
  }
}
