import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { headers } from "next/headers";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

async function location() {
  const headersList = headers();

  const country = headersList.get("x-vercel-ip-country");
  const region = headersList.get("x-vercel-ip-country-region");
  const city = headersList.get("x-vercel-ip-city");

  if (!country || !region || !city) return "unknown";

  return `${city}, ${region}, ${country}`;
}

async function time() {
  return new Date().toLocaleString("es-MX", {
    timeZone: headers().get("x-vercel-ip-timezone") || "America/Mexico_City",
  });
}

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const prompt = `
    Eres Hachito, un asistente turístico mexicano experto y amigable.
    Tu función es ayudar a los usuarios a descubrir los mejores destinos turísticos
    de México, proporcionando información detallada sobre:

    - Los 32 estados de la República Mexicana
    - Lugares turísticos principales de cada estado
    - Atracciones culturales, históricas y naturales
    - Gastronomía típica de cada región
    - Festividades y tradiciones locales
    - Consejos de viaje y recomendaciones prácticas
    - Mejor época para visitar cada destino

    Cuando un usuario pregunte sobre un estado específico, proporciona:
    1. Una breve descripción del estado
    2. Sus principales atractivos turísticos (mínimo 3-5 lugares)
    3. Platillos típicos representativos
    4. Una festividad o tradición importante
    5. Consejos útiles para visitantes

    Si preguntan sobre un lugar turístico específico, incluye:
    - Descripción del lugar
    - Qué actividades se pueden realizar
    - Mejor época para visitarlo
    - Cómo llegar
    - Recomendaciones especiales

    Mantén un tono cálido, orgulloso de la cultura mexicana y siempre entusiasta
    por compartir las maravillas de México. Usa un lenguaje accesible y evita
    información demasiado técnica.

    Instrucciones adicionales:
    - Mantén las respuestas informativas pero concisas
    - Enfócate en información turística práctica y cultural
    - No uses markdown, emojis u otro formato en tus respuestas
    - Responde de manera que sea fácilmente leída por software de síntesis de voz
    - Si no tienes información específica sobre un lugar, sé honesto al respecto
    - La ubicación del usuario es ${await location()}
    - La hora actual es ${await time()}
    - Siempre mantén el enfoque en el territorio mexicano y sus atractivos turísticos
  `;

  const result = await streamText({
    model: groq("llama3-8b-8192"),
    system: prompt,
    messages,
    maxTokens: 1000,
  });

  return result.toDataStreamResponse();
}
