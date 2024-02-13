"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const onLogin = async () => {
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Login Page....</h1>
        
            <hr />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.email}
                placeholder="username"
                onChange={(e)=>setUser({...user,email:e.target.value})}
            />
            <hr />
            <label htmlFor="password">Password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.password}
                placeholder="username"
                onChange={(e)=>setUser({...user,password:e.target.value})}
            />
            <hr />
            <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >Login here</button>
            <Link href="/signup">Visit SignUp page</Link>
        </div>
    )
}