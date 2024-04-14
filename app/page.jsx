"use client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setUserId } from "@/redux/features/user";


export default function Home() {
  const user = useSelector((state) => state.user.userId)
  const currentUser = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()

  return (
    <div>
      <button className="btn btn-primary" onClick={() => {
        dispatch(setCurrentUser(132))
      }}> click me </button>
      {
        user
      }
      {
        currentUser
      }
    </div>
  );
}
