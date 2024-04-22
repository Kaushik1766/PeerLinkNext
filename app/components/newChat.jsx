'use client'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { db } from '@/firebase/config'
import { addDoc, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { setRoomID, setUserId } from "@/redux/features/user";

export default function NewChat() {
    const currentUserID = useSelector((state) => state.user.currentUser)
    const roomID = useSelector((state) => state.user.roomID)
    const msgReciever = useSelector((state) => state.user.userId)
    const dispatch = useDispatch()

    return (
        <div>
            <form className="space-y-3 mb-4" onSubmit={async(e) => {
                e.preventDefault()

                let newUID = e.target.newUID.value
                let newRoomID = currentUserID.slice(5, 10)
                newUID = newUID.slice(5, 10)
                newRoomID = parseInt(newRoomID) > parseInt(newUID) ? newUID + newRoomID : newRoomID + newUID
                console.log(newRoomID);

                let msg = e.target.newChat.value
                // console.log(msg);
                // socket.emit('message', msg, '1486114862', '22bcs14861', '22bcs14863')
                // e.target.chat.value = ''
                let roomname = newRoomID
                let time = new Date().getTime()
                let sender = currentUserID
                let receiver = e.target.newUID.value
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
                e.target.newChat.value = ''
                e.target.newUID.value = ''

            }}>
                <input id="newUID" type="text" name='newUID' placeholder="Enter UID to Chat" className=" input input-bordered w-full max-w-xs" />
                <input id="newChat" type="text" name='newChat' placeholder="Enter Message" className=" input input-bordered w-full max-w-xs" />
                <button className="block mx-auto btn btn-primary" type="submit">submit</button>
            </form>
        </div>
    )
}