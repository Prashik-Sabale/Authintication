import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Toster
import { toast } from 'react-toastify';
import bg from '../components/assets/login.png'
const SignIn = () => {

    const [password, setPasswordValue] = useState("");
    const [userId, setUserIdValue] = useState("");

    const setPassword = (e) => {
        setPasswordValue(e.target.value);
    }

    const setUserId = (e) => {
        setUserIdValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        //prevent default
        e.preventDefault();

        //api call
        console.log("this is our data " + userId + "   " + password)

        //create an object with userId and password for passing the api
        const data = {
            "userId": userId,
            "password": password
        }

        try {
            const response = await axios.post("http://localhost:8082/loginUser", data);

            console.log("this is the response " + response.data);
            if (!response.data) {
                // alert("Invalid User Id or Password");
                toast.error("Invalid User ")
            }
            else {
                // alert("Login Successfull");
                toast.success("Login Successfull")

            }

        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Illustration */}
                <div className="hidden md:flex items-center justify-center p-6">
                    <img
                        src={bg}
                        alt="Sign In Illustration"
                        className="w-3/4"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-indigo-500 text-center mb-6">Sign In</h2>
                    <p className=" text-center mb-6 font-sans text-lg font-semibold text-zinc-600">Welcome back you've been missed</p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter Email ID" value={userId} onChange={setUserId} className="p-3 border rounded w-full" />
                        <input type="password" placeholder="Enter Password" value={password} onChange={setPassword} className="p-3 border rounded w-full" />
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="remember" className="w-4 h-4" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#" className="text-indigo-500">Forgot password?</a>
                        </div>
                        <button className="w-full bg-indigo-500 text-white p-3 rounded hover:bg-indigo-600">Sign In</button>
                    </form>
                    <div className="text-center mt-4">
                        <p>Don't have an account? <Link to="/" className="text-indigo-500">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
