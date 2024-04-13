import React from "react";
import chats from "../data/ChatData";
import ChatContacts from "../chats/ChatContacts";
import Navbar from "../components/Navbar";
import TextArea from './TextArea';

export default function ({ message, type }) {
  return (
    <>

      <div className="border-l-2 bg-base-200 border-slate-600 pt-4 px-4 flex flex-col w-full relative">
        {chats.map((e, i) => (
          <div
            className={`chat ${e.type === "sender" ? "chat-end" : "chat-start"
              } w-full`} key={i}
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
              className={`chat-bubble ${e.type === "sender"
                ? "chat-bubble-primary"
                : "chat-bubble-accent"
                }`}
            >
              {e.message}
            </div>
          </div>
        ))}
        <TextArea></TextArea>
      </div>
    </>
  );
}
