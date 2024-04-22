"use client";
import React from "react";
// import users from "../data/users";
import { setRoomID, setUserId } from "@/redux/features/user";
import { useDispatch, useSelector } from "react-redux";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { getCookie } from "cookies-next";
import NewChat from '../components/newChat';


export default function chatContacts() {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.userId);
  const search = useSelector((state) => state.user.input);
  const roomID = useSelector((state) => state.user.roomID);
  const currentUserID = getCookie('uid')

  const [value, loading, error] = useDocument(
    doc(db, "contacts", currentUserID)
  );

  return (
    <div className="flex gap-3 flex-col w-full">
      {loading && <h1>loading...</h1>}
      {value && (
        <div>
                    <NewChat></NewChat>

          {[""].map((it, id) => {
            let keyArr = Object.keys(value?.data());
            // dispatch(setRoomID(value.data()[keyArr[0]]))
            // keyArr.sort();

            return (
              <div key={id}>
                {keyArr.map((item, idx) => {
                  return <div
                    className={`p-2 ${selector === item ? "bg-slate-600" : "bg-base-600"
                      } hover:bg-slate-600 hover:opacity-45 border border-neutral shadow-md flex gap-4 items-center rounded-xl`}
                    key={idx}
                    onClick={() => {
                      dispatch(setUserId(item));
                      console.log(value.data()[item]);
                      // setCookie('roomID', value.data()[item], { maxAge: 60 * 60 * 24 })
                      dispatch(setRoomID(value.data()[item]))
                    }}
                  >
                    <div className="chat-image avatar">
                      <div className="w-10 h-10 rounded-full">
                        <img alt="userImage" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <p>{item}</p>
                  </div>
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}



