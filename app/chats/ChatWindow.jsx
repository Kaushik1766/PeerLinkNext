"use client";
import React, { useEffect } from "react";
import TextArea from "./TextArea";
import users from "../data/users";
import { useSelector } from "react-redux";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export default function ChatWindow() {
  const currUser = useSelector((state) => state.user.currentUser)
  const roomID = useSelector((state) => state.user.roomID)
  console.log(roomID);
  const [value, loading, error] = useDocument(
    doc(db, "messages", roomID == "" ? "1486214865" : roomID)
  );
  const arr = ["fasdf"];

  return (
    <>
      <div className="border-l-2 bg-base-100 border-slate-600 pt-4 flex flex-col w-full h-screen relative">
        {loading && <h1>loading...</h1>}
        {value && (
          <div>
            {[""].map((chat, idx) => {
              let keyArr = Object.keys(value?.data());
              keyArr.sort();
              console.log(keyArr)
              return (
                <div>
                  {keyArr.map((item, idx) => {
                    if (value.data()[item].sender == currUser) {
                      return <div
                        className={`chat chat-end w-full`}
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
                          className={`chat-bubble chat-bubble-primary`}
                        >
                          {value.data()[item].msg}
                        </div>
                      </div>
                    }
                    else {
                      return <div
                        className={`chat chat-start w-full`}
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
                          className={`chat-bubble chat-bubble-accent`}
                        >
                          {value.data()[item].msg}
                        </div>
                      </div>
                    }

                  })}
                </div>
              );
            })}
            <div className="h-16"></div>
          </div>
        )}
        <TextArea />
      </div>
    </>
  );
}
