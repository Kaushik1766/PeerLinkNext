import React from 'react'
import users from '../data/users'

export default function chatContacts() {
  return (
    <div className="flex flex-col w-full">
      {users.map((e, i) => (
        <div className=" p-2 hover:bg-slate-600 border-2 border-slate-900 flex gap-4 items-center">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={e.imgURL} />
            </div>
          </div>
          <div>{e.name}</div>
        </div>
      ))}
    </div>
  )
}
