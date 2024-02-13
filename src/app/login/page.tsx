"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { findAllInRenderedTree } from "react-dom/test-utils";

export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log(response);
            router.push("/profile")
        } catch (error: any) {
            console.log("Login Failed", error.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }

    }, [user]);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>{loading ? "Loading..." : "Login Page...."}</h1>

            <hr />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.email}
                placeholder="username"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <hr />
            <label htmlFor="password">Password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.password}
                placeholder="username"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <hr />
            <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >{ }Login here</button>
            <Link href="/signup">Visit SignUp page</Link>
        </div>
    )
}