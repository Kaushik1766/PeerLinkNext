"use client";
import React, { useEffect } from "react";
import TextArea from "./TextArea";
import users from "../data/users";
import { useSelector } from "react-redux";

export default function ChatWindow() {
  const i = useSelector((state) => state.user.userId);

  const chats = users[i].chats;

  return (
    <>
      <div className="border-l-2 bg-base-100 border-slate-600 pt-4 flex flex-col w-full h-screen relative">
        {chats.map((chat, idx) => (
          <div
            className={`chat ${chat.sent ? "chat-end" : "chat-start"} w-full`}
            key={idx}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div
              className={`chat-bubble ${
                chat.sent ? "chat-bubble-primary" : "chat-bubble-accent"
              }`}
            >
              {chat.sent || chat.received}
            </div>
          </div>
        ))}
        <TextArea />
      </div>
    </>
  );
}
