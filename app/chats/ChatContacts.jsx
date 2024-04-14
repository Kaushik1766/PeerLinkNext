import React, { useSelector } from "react";
import users from "../data/users";
import setUserId from "@/redux/features/user";
import { useDispatch } from "react-redux";

export default function chatContacts() {
  
  const dispatch = useDispatch();
  const handleClick = (clickedId) => {
    console.log(clickedId);
    dispatch(setUserId(clickedId));
  }

  return (
    <div className="flex gap-3 flex-col w-full">
      {users.map((e, i) => (
        <div
          className=" p-2 bg-base-100 hover:bg-slate-600 border border-neutral shadow-md flex gap-4 items-center rounded-xl"
          key={i}
          onClick={() => handleClick(i)}
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
