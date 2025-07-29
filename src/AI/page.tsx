"use client";

import type React from "react";
import Sidebar from "@/sideBar/page";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
}

export default function Ai() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsFirstMessage(false);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'd be happy to help you analyze crypto market trends! However, this is a UI-only demo. In a real implementation, I would provide detailed market analysis and insights.",
        role: "assistant",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <nav className="absolute z-10">
        <Sidebar />
      </nav>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col">
        {/* Header */}
        <div className="text-center py-3">
          <h1 className="text-2xl font-bold text-white">
            cypto<span className="text-blue-400">Info</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-4 max-w-4xl mx-auto w-full">
          {isFirstMessage && messages.length === 0 ? (
            /* Welcome Screen */
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Visual Assistant
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Hi! Can you help me analyze the latest crypto market trends?
              </p>
            </div>
          ) : (
            /* Chat Messages */
            <ScrollArea className="flex-1 mb-8">
              <div className="space-y-6 pb-8">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-slate-700 text-gray-100"
                      }`}
                    >
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}

          {/* Input Area */}
          <div className="pb-8">
            <div className="relative max-w-3xl mx-auto">
              <div className="flex items-center bg-slate-700 rounded-full p-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a prompt here..."
                  className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-3"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700 rounded-full h-12 w-12 ml-2"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
