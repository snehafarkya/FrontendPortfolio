"use client";

import { useState } from "react";
import ChatUI from "@/components/ai/ChatUi";
import Hero from "@/components/sections/Hero";
import GradientBG from "@/components/ui/GradientBG";
import AIResponse from "@/components/ai/AiResponse";
import { getAIResponse } from "@/lib/aiEngine";

export default function Home() {
  const [response, setResponse] = useState<any>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (input: string) => {
    const res = getAIResponse(input);
    setResponse(res);
    setHasInteracted(true);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);

    // if user clears input → bring hero back
    if (value.trim() === "") {
      setHasInteracted(false);
      setResponse(null);
    }
  };

  return (
    <main className="min-h-screen text-white transition-all duration-500 mx-4 md:mx-0">
      <GradientBG />

      {/* HERO (only when no interaction) */}
      {!hasInteracted && <Hero />}

      {/* AI RESPONSE */}
      {hasInteracted && <AIResponse response={response} />}
<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      {/* CHAT */}
      <ChatUI
        onSend={handleSend}
        onInputChange={handleInputChange}
      />
    </main>
  );
}