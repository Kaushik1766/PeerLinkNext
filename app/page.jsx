"use client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setUserId } from "@/redux/features/user";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    window.location.href = 'http://localhost:3000/login'
  }, [])
  return (
    <div>

    </div>
  );
}
