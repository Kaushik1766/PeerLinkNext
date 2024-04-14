import React, { useState } from 'react'
import axios from 'axios'

function Signup() {
    const [otp, setOtp] = useState(0)
    const [preuid, setUid] =useState('')

    async function submitForm(formdata) {
        if(otp==0){
            let uid = formdata.get('uid')
            let password = formdata.get('password')
            setUid(uid)
            axios.post('http://localhost:4000/register', {
                uid: uid,
                password: password
            }).then((res) => {
                console.log(res)
                if (res.data.msg == "user registered") {
                    setOtp(otp+1)
                }
                else {
                    window.alert(res.data.msg)
                }
            })
        }
        else if(otp==1){
            let otp = formdata.get('otp')
            let uid = preuid
            console.log(uid)
            axios.post('http://localhost:4000/otp', {
                uid: uid,
                otp: otp
            }).then((res) => {
                console.log(res)
                if (res.data.msg == "email verified") {
                    window.location.href = "http://localhost:3000/chats"
                }
                else {
                    window.alert(res.data.msg)
                }
            })
        }
    }

    return (
        <form action={submitForm} className='flex flex-col mt-5 p-10 gap-8'>
            {otp == 0 && (
                <>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="UID" className=''>Enter your UID or Username</label>
                        <input type="text" name='uid' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="UID" className=''>Enter Password</label>
                        <input type="text" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </>
            )}
            {otp == 1 && (
                <>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="OTP" className=''>Enter OTP</label>
                        <input type="text" name='otp' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </>
            )}
            <button type='submit' className='btn btn-primary w-1/2'>Submit</button>
        </form>
    )
}

export default Signup