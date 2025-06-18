"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Alert, AlertDescription } from "./ui/alert";
import { Send, Bot, User, Loader2, AlertTriangle } from "lucide-react";

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/chat",
      initialMessages: [
        {
          id: "welcome",
          role: "assistant",
          content:
            "¡Hola! Soy tu asistente de IA especializado en el Estado de México. Puedo ayudarte con información sobre demografía, geografía, economía y sitios de interés. ¿Qué te gustaría saber?",
        },
      ],
      onError: (error) => {
        console.error("Chat error:", error);
        setApiError(
          "Error de conexión. Verifica que la integración de xAI esté configurada.",
        );
      },
    });

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg z-50"
        size="icon"
      >
        <Bot className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] bg-zinc-950 border-zinc-800 shadow-2xl z-50 flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-white flex items-center gap-2">
          <Bot className="h-5 w-5 text-emerald-500" />
          Asistente IA - Estado de México
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-zinc-400 hover:text-white"
        >
          ✕
        </Button>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-4 pt-0">
        {(error || apiError) && (
          <Alert className="mb-4 border-yellow-600 bg-yellow-950">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-yellow-200">
              {apiError ||
                "Error de conexión con el asistente IA. Para usar esta funcionalidad, configura la integración de xAI en tu proyecto."}
            </AlertDescription>
          </Alert>
        )}

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.role === "user"
                      ? "bg-blue-600 text-white ml-auto"
                      : "bg-zinc-800 text-zinc-100"
                  }`}
                >
                  {message.content}
                </div>

                {message.role === "user" && (
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-zinc-800 text-zinc-100 p-3 rounded-lg text-sm flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Pensando...
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Pregunta sobre el Estado de México..."
            className="flex-1 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
            disabled={isLoading || !!error || !!apiError}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim() || !!error || !!apiError}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
