"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  X,
  Send,
  RotateCcw,
  Bot,
  Clock,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { chatbotFaq } from "@/data/chatbotFaq";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  category?: string;
}

const faqData = chatbotFaq;

const initialQuickQuestions = [
  "¿Qué servicios ofrecen para el sector minero?",
  "¿Tienen buses eléctricos en su flota?",
  "¿Cómo puedo solicitar una cotización para mi empresa?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy su asistente virtual de Tandem Servicios. ¿En qué puedo ayudarle hoy?",
      sender: "bot",
      timestamp: new Date(),
      category: "Bienvenida",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState(
    initialQuickQuestions,
  );
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Efecto para detectar clicks fuera del chatbot
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const findBestMatch = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    for (const faq of faqData) {
      let score = 0;
      for (const keyword of faq.keywords || []) {
        if (lowerInput.includes(keyword.toLowerCase())) {
          score += 1;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = faq;
      }
    }

    return maxScore > 0 ? bestMatch : null;
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(
      () => {
        const match = findBestMatch(messageText);
        let botResponse: string;
        let category = "General";

        if (match) {
          botResponse = match.answer;
          category = match.category || "General";

          // Actualizar preguntas sugeridas basadas en categoría
          const relatedFAQs = faqData
            .filter(
              (faq) =>
                (faq.category === match.category || !faq.category) &&
                faq.question !== match.question,
            )
            .slice(0, 3);

          if (relatedFAQs.length > 0) {
            setSuggestedQuestions(relatedFAQs.map((faq) => faq.question));
          }
        } else {
          botResponse =
            "Disculpe, no tengo información específica sobre eso. ¿Podría reformular su pregunta o elegir una de las opciones sugeridas?";
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
          category,
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      },
      800 + Math.random() * 400,
    );
  };

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        text: "¡Hola! Soy su asistente virtual de Tandem Servicios. ¿En qué puedo ayudarle hoy?",
        sender: "bot",
        timestamp: new Date(),
        category: "Bienvenida",
      },
    ]);
    setSuggestedQuestions(initialQuickQuestions);
    setInputValue("");
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      ref={chatbotRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      {!isOpen && (
        <Button
          onClick={toggleOpen}
          size="lg"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 bg-orange-500 hover:bg-orange/90 group relative overflow-hidden hover:scale-120 active:scale-95"
        >
          <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground relative z-10 transition-transform duration-300 group-hover:scale-110" />
          <span className="absolute -top-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 bg-accent rounded-full animate-pulse" />
        </Button>
      )}

      {isOpen && (
        <Card
          className={cn(
            "flex flex-col shadow-2xl transition-all duration-300 border-2 p-0 rounded-lg overflow-hidden",
            "w-[calc(100vw-2rem)] h-[calc(100vh-8rem)]", // Pantalla completa en móvil
            "sm:w-105 sm:h-155", // Tamaño original en desktop
            "fixed inset-4 sm:relative sm:inset-auto", // Fijo en móvil, relativo en desktop
            "sm:fixed sm:bottom-6 sm:right-6",
          )}
        >
          {/* Header - Fijo en la parte superior */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-primary text-primary-foreground rounded-t-lg shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-accent flex items-center justify-center">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground" />
                </div>
                <span className="absolute bottom-0 right-0 h-2 w-2 sm:h-3 sm:w-3 bg-green-500 rounded-full border border-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Asistente de Tandem Servicios
                </h3>
                <p className="text-[10px] sm:text-xs text-primary-foreground/80">
                  En línea
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleOpen}
                className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>

          {/* Contenedor principal que se expande */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Messages Area - Se expande para llenar el espacio disponible */}
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full" ref={scrollAreaRef}>
                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-2 sm:gap-3 animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start",
                      )}
                    >
                      {message.sender === "bot" && (
                        <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                          <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent-foreground" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "flex flex-col gap-1 max-w-[80%] sm:max-w-[75%]",
                          message.sender === "user"
                            ? "items-end"
                            : "items-start",
                        )}
                      >
                        <div
                          className={cn(
                            "rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-sm",
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-card text-card-foreground border",
                          )}
                        >
                          <p className="text-xs sm:text-sm leading-relaxed">
                            {message.text}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 px-2">
                          <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-muted-foreground" />
                          <span className="text-[10px] sm:text-xs text-muted-foreground">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                      </div>
                      {message.sender === "user" && (
                        <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                          <span className="text-xs sm:text-sm font-medium text-primary-foreground">
                            Tú
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-2 sm:gap-3 animate-in fade-in-0">
                      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent-foreground" />
                      </div>
                      <div className="bg-card text-card-foreground border rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-sm">
                        <div className="flex gap-1.5">
                          <div
                            className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-muted-foreground/50 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          />
                          <div
                            className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-muted-foreground/50 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <div
                            className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-muted-foreground/50 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>

            {/* Suggested Questions - Altura automática según contenido */}
            {suggestedQuestions.length > 0 && (
              <div className="border-t bg-muted/30">
                <div className="px-3 py-1.5 sm:px-4 sm:py-2">
                  <div className="flex items-center gap-2 mb-1.5">
                    <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                    <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">
                      Preguntas sugeridas:
                    </span>
                  </div>
                  <div className="space-y-1">
                    {suggestedQuestions.slice(0, 3).map((question, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage(question)}
                        className="text-[10px] sm:text-xs h-7 sm:h-8 w-full justify-start text-left px-2 sm:px-3 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors wrap-break-words py-0"
                      >
                        <span className="line-clamp-2 text-left">
                          {question}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Input Area - Altura fija */}
            <div className="border-t bg-card p-3 sm:p-4">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Escriba su mensaje..."
                    className="pr-10 h-8 sm:h-10 bg-background border-input focus-visible:ring-ring text-xs sm:text-sm"
                    disabled={isTyping}
                  />
                </div>
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  size="icon"
                  className="h-8 w-8 sm:h-10 sm:w-10 bg-accent hover:bg-accent/90 text-accent-foreground shrink-0"
                >
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 bg-transparent"
                >
                  <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2 text-center">
                Presione Enter para enviar
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
