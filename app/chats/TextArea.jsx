'use client'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export default function TextArea() {
    const [socket, setSocket] = useState(undefined)
    useEffect(() => {
        let socket = io('http://localhost:5000/')
        socket.emit('joinRoom', '1234')
        socket.on('message', (msg) => {
            console.log(msg);
        })
        setSocket(socket)
    }, [])
    return (
        <form className="sticky bottom-0 w-full left-0" onSubmit={(e) => {
            e.preventDefault()
            let msg = e.target.chat.value
            // console.log(msg);
            socket.emit('message', msg, '1234', 'uid')
            e.target.chat.value = ''
        }}>
            {/* <label htmlFor="chat" className="">Your message</label> */}
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
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