import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Namaste! Main aapka parlor assistant hoon. Main aapki kaise madad kar sakta hoon?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://erpportaal.app.n8n.cloud/webhook-test/9e1433ee-6fde-4cb1-bc18-75441dfe09d7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: input,
            sessionId: "admin-user-1",
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data[0]?.data || "Muje samajh nahi aaya." },
      ]);

      // Optional navigation
      if (data.action === "redirect" && data.target) {
        setTimeout(() => {
          navigate(data.target);
          setIsOpen(false);
        }, 1500);
      }

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Server se connect nahi ho pa raha hoon." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className="mb-4 w-80 h-[450px] bg-white shadow-2xl rounded-2xl flex flex-col border border-pink-100 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-rose-500 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-bold text-sm m-0">
                Parlor Magic Guide
              </h3>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === "user"
                      ? "bg-pink-600 text-white rounded-tr-none"
                      : "bg-white text-gray-800 border rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 p-3 rounded-2xl flex items-center">
                  <Loader2 className="animate-spin" size={16} />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              placeholder="Type message..."
              className="flex-1 bg-gray-100 p-3 rounded-xl outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && handleSendMessage()
              }
            />
            <button
              onClick={handleSendMessage}
              className="bg-pink-600 text-white p-3 rounded-xl"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-pink-600 text-white p-4 rounded-full shadow-lg"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}