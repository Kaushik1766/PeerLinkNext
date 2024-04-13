import React from "react";
import chats from "../data/ChatData";

export default function ({ message, type }) {
    const users = [
        {
            imgURL: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            name: "aurat"
        },
        {
            imgURL: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            name: "aurat"
        },
        {
            imgURL: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            name: "aurat"
        },
        {
            imgURL: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            name: "aurat"
        },
    ];
  return (
    <>
      <div className="flex flex-col bg-red-500 w-2/6">
        <div className=" w-fit p-2 flex gap-4 items-center">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">

              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div>Prateek</div>
        </div>
      </div>
      <div className="flex flex-col bg-green-500 h-screen w-4/6 ml-40">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full"></div>
        </div>
        {chats.map((e, i) => (
          <div
            className={`chat ${
              e.type === "sender" ? "chat-end" : "chat-start"
            }`}
          >
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
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
