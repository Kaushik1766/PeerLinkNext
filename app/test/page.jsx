"use client";
import users from "../data/users";
import { useSelector } from "react-redux";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

function page() {
  const [value, loading, error] = useDocument(
    doc(db, "messages", "1486114862")
  );

  const arr = ["fasdf"];
  return (
    <div>
      {loading && <h1>loading...</h1>}
      {value && (
        <div>
          {[""].map((it, id) => {
            let keyArr = Object.keys(value?.data());
            keyArr.sort()
            return <div>{
              keyArr.map((item,idx) => (
                <div>
                  {value.data()[item].msg}
                </div>
              ))
            }</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default page;
