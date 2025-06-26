import { createGroq } from "@ai-sdk/groq";
import { streamText } from "ai";
import { headers } from "next/headers";

export const maxDuration = 30;

async function getLocation(headersList: any) {
  const country = headersList.get("x-vercel-ip-country");
  const region = headersList.get("x-vercel-ip-country-region");
  const city = headersList.get("x-vercel-ip-city");

  if (!country || !region || !city) return "unknown";
  return `${city}, ${region}, ${country}`;
}

async function getTime(headersList: any) {
  return new Date().toLocaleString("es-MX", {
    timeZone: headersList.get("x-vercel-ip-timezone") || "America/Mexico_City",
  });
}

const groqClient = createGroq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  const headersList = headers(); // ✅ sin await
  const body = await req.json();

  if (!Array.isArray(body.messages)) {
    return new Response("Missing or invalid 'messages'", { status: 400 });
  }

  if (!process.env.GROQ_API_KEY) {
    return new Response("Missing GROQ_API_KEY", { status: 500 });
  }

  const userLocation = await getLocation(headersList);
  const userTime = await getTime(headersList);

  const systemPrompt = `
    Eres Hachito, un asistente turístico mexicano...
    - Ubicación actual: ${userLocation}
    - Hora local: ${userTime}
  `;

  const result = streamText({
    model: groqClient("llama3-8b-8192"),
    system: systemPrompt,
    messages: body.messages,
    maxTokens: 1000,
  });

  return result.toDataStreamResponse();
}
