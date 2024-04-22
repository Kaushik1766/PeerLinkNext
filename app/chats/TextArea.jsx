'use client'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { db } from '@/firebase/config'
import { addDoc, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useSelector } from 'react-redux';


export default function TextArea() {
    const [socket, setSocket] = useState(undefined)
    const currentUserID = useSelector((state) => state.user.currentUser)
    const roomID = useSelector((state) => state.user.roomID)
    const msgReciever = useSelector((state) => state.user.userId)

    // useEffect(() => {
    //     let socket = io('http://localhost:5000/')
    //     socket.emit('joinRoom', '1486114862')
    //     socket.on('message', (msg) => {
    //         console.log(msg);
    //     })
    //     setSocket(socket)
    // }, [])
    return (
        <form className="fixed bottom-0 w-3/4" onSubmit={async (e) => {
            e.preventDefault()
            let msg = e.target.chat.value
            // console.log(msg);
            // socket.emit('message', msg, '1486114862', '22bcs14861', '22bcs14863')
            // e.target.chat.value = ''
            let roomname = roomID
            let time = new Date().getTime()
            let sender = currentUserID
            let receiver = msgReciever
            console.log(time)
            const chatDocRef = doc(db, 'messages', roomname)
            const chatDocSnap = await getDoc(chatDocRef)

            if (chatDocSnap.exists()) {
                await updateDoc(chatDocRef, {
                    [time]: {
                        sender: sender,
                        msg: msg
                    }
                })
            }
            else {
                await setDoc(chatDocRef, {
                    [time]: {
                        sender: sender,
                        msg: msg
                    }
                })
            }

            // uid split
            let uid1 = roomname.slice(0, 5)
            let uid2 = roomname.slice(5, 10)
            console.log(`${uid1} + ${uid2}`);

            const uid1DocRef = doc(db, 'contacts', sender)
            const uid1DocSnap = await getDoc(uid1DocRef)

            const uid2DocRef = doc(db, 'contacts', receiver)
            const uid2DocSnap = await getDoc(uid2DocRef)


            if (uid1DocSnap.exists()) {
                await updateDoc(uid1DocRef, {
                    [receiver]: roomname
                })
            }
            else {
                await setDoc(uid1DocRef, {
                    [receiver]: roomname
                })
            }
            if (uid2DocSnap.exists()) {
                await updateDoc(uid2DocRef, {
                    [sender]: roomname
                })
            }
            else {
                await setDoc(uid2DocRef, {
                    [sender]: roomname
                })
            }
            e.target.chat.value = ''
        }}>
            {/* <label htmlFor="chat" className="">Your message</label> */}
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <input name='chat' id="chat" rows="1" className="block focus:outline-none mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></input>
                <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                    <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    {/* <span className="">Send message</span> */}
                </button>
            </div>
        </form>
    )
}