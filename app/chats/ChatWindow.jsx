import React from "react";
import chats from "../data/ChatData";
import ChatContacts from "../chats/ChatContacts";
import Navbar from "../components/Navbar";

export default function ({ message, type }) {
  return (
    <>
      <div className="flex">
        <ChatContacts />
        <div className="border-l-2 border-slate-600 overscroll-none p-4 flex flex-col h-screen w-4/6">
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
      </div>
      <div className="bottom-0">
        <form id="form" action="">
          <input id="input" autocomplete="off" />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}
