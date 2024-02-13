"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Profile() {
    const router = useRouter();

    const Logout = async () => {
        try {
            await axios.get("api/users/logout");
            console.log("Logout successfully...");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page...</p>
            <hr />
            <button
                onClick={Logout}
                className="bg-blue-500 border mt-4 hover::bg-blue-700 text-black font-bold py-2 px-4 rounded">Logout</button>
        </div>
    )
}; 