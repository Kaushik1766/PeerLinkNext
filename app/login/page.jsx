'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Login from './Login'
import Signup from './Signup'

function page() {
    const [tab, setTab] = useState(0)
    return (
        <>
            <div className='bg-base-100 h-screen justify-center items-center flex'>
                <div className="mockup-window border bg-base-300 w-4/5">
                    <div className="flex justify-between px-4 py-16 bg-base-200">
                        <div className='w-1/2'>
                            <div className='flex gap-4'>
                                <button className={`btn ${tab == 0 ? 'btn-primary' : 'btn-neutral'}`} onClick={() => setTab(0)}>Signup</button>
                                <button className={`btn ${tab == 1 ? 'btn-primary' : 'btn-neutral'}`} onClick={() => setTab(1)}>Login</button>
                            </div>
                            {
                                tab == 0 && <Login />
                            }
                            {
                                tab == 1 && <Signup />
                            }

                        </div>
                        {/* <form action="" className='flex flex-col gap-3'>
                            <div>
                                <label htmlFor="">UID</label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page