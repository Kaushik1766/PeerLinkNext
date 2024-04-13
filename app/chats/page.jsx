import React from 'react'
import ChatWindow from '../chats/ChatWindow'
import Contacts from '../chats/contacts'
import Navbar from '../components/Navbar';

export default function page() {
  const users = [
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
    {
      imgURL:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ayushi",
    },
  ];



  return (
    <div>
      <Navbar></Navbar>
      <div className='flex'>
        <div className='flex-cols w-1/6 rounded-xl '>
          {users.map((cont, ind) => (
            <Contacts name={cont.name} imgURL={cont.imgURL}></Contacts>
          ))}
        </div>
        <div className="border-2 border-slate-700 w-5/6 ml-40 h-screen  ">
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}
