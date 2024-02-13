"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import axios from 'axios';
  
export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",  
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user); // 
            console.log("Signup Success", response);
            router.push("/login");
        } catch (error) {
            console.log("Signup failed");
        } finally {  
            setLoading(false);
        }
    } 

    useEffect(() => {
        if (user.email.length > 0 && user.username.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true); 
        }  
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>{loading ? " Processing " : " Signup "}</h1>
            <hr />
            <label htmlFor="username">UserName</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                placeholder="username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <hr />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email" // Changed ID
                type="text"
                value={user.email}
                placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <hr />
            <label htmlFor="password">Password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password" // Changed ID
                type="password"
                value={user.password}
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <hr />
            <button
                onClick={onSignUp}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                disabled={buttonDisabled} 
            >Sign Up</button>
            <Link href="/login">Visit login page</Link>
        </div>
    )
}
