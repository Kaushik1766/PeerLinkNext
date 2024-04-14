import { setCurrentUser } from '@/redux/features/user'
import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Login() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (getCookie('uid')) {
            dispatch(setCurrentUser(getCookie('uid')))
            window.location.href = "http://localhost:3000/chats"
        }
    }, [])

    async function submitForm(formdata) {
        let uid = formdata.get('uid')
        let password = formdata.get('password')
        let res = await axios.post('http://localhost:4000/login', {
            uid: uid,
            password: password
        })
        console.log(res)
        // window.alert(res.data.msg)
        // window.location.href = "http://localhost:3000/chats"
        if (res.data.msg == "login success") {
            console.log(uid);
            dispatch(setCurrentUser(uid))
            // window.location.href = "http://localhost:3000/chats"
            dispatch(setCurrentUser(uid))
            if (res.data.msg == "login success") {
                setCookie('uid', uid, { maxAge: 60 * 60 * 24 })
                window.location.href = "http://localhost:3000/chats"
            }
            else {
                window.alert(res.data.msg)
            }
        }
    }
    return (
        <form action={submitForm} className='flex flex-col mt-5 p-10 gap-8'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="UID" className=''>Enter your UID</label>
                <input type="text" name='uid' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="UID" className=''>Enter Password</label>
                <input type="text" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button type='submit' className='btn btn-primary w-1/2'>Submit</button>
        </form>
    )
}

export default Login