import React from "react";
import chats from "../data/ChatData";

export default function ({ message, type }) {
  return (
    <>
      <div className="flex flex-col bg-green-500 h-screen w-4/5 ml-40">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full"></div>
        </div>
        {chats.map((e, i) => (
          <div
            className={`chat ${
              e.type === "sender" ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div
              className={`chat-bubble ${
                e.type === "sender"
                  ? "chat-bubble-primary"
                  : "chat-bubble-accent"
              }`}
            >
              {e.message}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
