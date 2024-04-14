import React from "react";
import TextArea from "./TextArea";
import users from "../data/users";
import { useDispatch,useSelector } from "react-redux";
import setUser from "@/redux/features/user";

export default function ChatWindow() {
 
  return (
    <>
      <div className="border-l-2 bg-base-200 border-slate-600 pt-4 px-4 flex flex-col w-full relative">
        {users.map((e, idx) => (
          <div key={idx} >
          
            {e.chats.map((c, i) => (
              <div
                className={`chat ${
                  c.sent ? "chat-end" : "chat-start"
                } w-full`}
                key={i}
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
                    c.sent ? "chat-bubble-primary" : "chat-bubble-accent"
                  }`}
                >
                  {c.sent || c.received}
                </div>
              </div>
            ))}
          </div>
        ))}
        <TextArea />
      </div>
    </>
  );
}
