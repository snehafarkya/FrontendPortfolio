"use client";
import { useState } from "react";

export default function ChatUI({ onSend, onInputChange }: any) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    onSend(input);
    setInput("");
    onInputChange(""); // reset → allows hero logic
  };

  return (
    <div className="fixed bottom-10 w-full flex flex-wrap max-w-fit justify-center flex-col items-center">

      {/* Suggestions */}
      <div className="flex gap-2 mb-3 flex-wrap justify-center">
        {["Projects", "Skills", "Experience", "Blogs", "About"].map((s) => (
          <button
            key={s}
            onClick={() => {
              onSend(s);
            }}
            className="px-3 py-1 cursor-pointer bg-white/20 rounded-full text-sm"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 flex gap-2 md:w-[500px]">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onInputChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          className="flex-1 bg-transparent outline-none"
          placeholder="Ask me anything..."
        />

        <button onClick={handleSend}>→</button>
      </div>
    </div>
  );
}