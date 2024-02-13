"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Profile() {
    const router = useRouter();
    const [data, setData] = useState("Nothing");
    const Logout = async () => {
        try {
            await axios.get("api/users/logout");
            console.log("Logout successfully...");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
        }
    } 

 
    const getUserDetails = async () => {
        const user = await axios.get("api/users/me");
        setData(user.data.data._id);
    }  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page...</p>
            <hr />
            <h2 className="p-3 rounded bg-green-500">{data === "nothing" ? "nothing" : <Link href={`/profile/${data}`}>{ data}</Link>}</h2>
            <button
                onClick={Logout}
                className="bg-blue-500 border mt-4 hover::bg-blue-700 text-black font-bold py-2 px-4 rounded">Logout</button>
            <button
                onClick={getUserDetails}
                className="bg-green-500 border mt-4 hover::bg-blue-700 text-black font-bold py-2 px-4 rounded">GetUse Details</button>
        </div>
    )
}; 