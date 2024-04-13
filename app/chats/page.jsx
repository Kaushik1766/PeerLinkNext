'use client'

import React from 'react'
import ChatWindow from '../chats/ChatWindow'
import Contacts from '../chats/contacts'
import Navbar from '../components/Navbar';
import ChatContacts from './ChatContacts';
import { useDispatch, useSelector } from 'react-redux';

export default function page() {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.userId)

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex w-full h-[90vh]'>
        <div className='p-4 overflow-y-scroll w-1/4 '>
          <ChatContacts />
        </div>
        <div className="border-2 overflow-y-scroll border-slate-700 w-3/4 ">
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}
