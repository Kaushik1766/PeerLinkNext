import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, setSearchValue } from "@/redux/features/user";
import { deleteCookie } from "cookies-next";

function Navbar() {
    const dispatch = useDispatch();
    return (
        <div className="navbar bg-base-100 border-2 border-slate-700">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">PeerLink</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        onChange={(e) => {
                            dispatch(setSearchValue(e.target.value));
                        }}
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li><a onClick={() => {
                            dispatch(setCurrentUser(null))
                            deleteCookie('uid')
                            window.location.href = "http://localhost:3000/login"
                        }}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
