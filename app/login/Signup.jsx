import React from 'react'
import axios from 'axios'

function Signup() {
    async function submitForm(formdata) {
        let uid = formdata.get('uid')
        let password = formdata.get('password')
        axios.post('http://localhost:4000/register', {
            uid: uid,
            password: password
        }).then((res)=>{
            console.log(res)
            if(res.message=="login success"){
                window.location.href = "http://localhost:3000/chats"
            }
            else{
                window.alert(res.data.msg)
            }
        })
    }

    return (
        <form action={submitForm} className='flex flex-col mt-5 p-10 gap-8'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="UID" className=''>Enter your UID or Username</label>
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

export default Signup