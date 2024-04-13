import React from 'react'

function Signup() {
    return (
        <form className='flex flex-col mt-5 p-10 gap-8'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="UID" className=''>Enter your UID or Username</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="UID" className=''>Enter Password</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button className='btn btn-primary w-1/2'>Submit</button>
        </form>
    )
}

export default Signup