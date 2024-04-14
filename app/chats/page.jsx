'use client'

import React, { useEffect } from 'react'
import ChatWindow from '../chats/ChatWindow'
import Contacts from '../chats/contacts'
import Navbar from '../components/Navbar';
import ChatContacts from './ChatContacts';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from 'cookies-next';
import { setCurrentUser } from '@/redux/features/user';

export default function page() {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.userId)

  useEffect(() => {
    if (!getCookie('uid')) {
      dispatch(setCurrentUser(getCookie('uid')))
      window.location.href = "http://localhost:3000/login"
    }
  }, [])


  return (
    <div>
      <Navbar></Navbar>
      <div className='flex w-full h-[90vh]'>
        <div className='p-4 overflow-y-scroll w-1/4 '>
          <ChatContacts />
        </div>
        <div className="border-2 overflow-y-scroll border-slate-700 w-3/4">
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}
