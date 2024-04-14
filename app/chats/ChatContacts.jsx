"use client";
import React from "react";
import users from "../data/users";
import { setUserId } from "@/redux/features/user";
import { useDispatch, useSelector } from "react-redux";

export default function chatContacts() {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.userId);
  return (
    <div className="flex gap-3 flex-col w-full">
      {users.map((e, i) => (
        <div
          className={`p-2 ${selector === i ? "bg-slate-600" : "bg-base-600"} hover:bg-slate-600 hover:opacity-45 border border-neutral shadow-md flex gap-4 items-center rounded-xl`}
          key={i}
          onClick={() => {
            dispatch(setUserId(i));
          }}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={e.imgURL} />
            </div>
            <div>{e.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
