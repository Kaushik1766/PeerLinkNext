"use client";
import { useDispatch, useSelector } from "react-redux";
import { setUserId } from "@/redux/features/user";

export default function Home() {
  const tasks = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(setUserId(5));
        }}
      >
        {" "}
        click me{" "}
      </button>
      {tasks}
    </div>
  );
}
