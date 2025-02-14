import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Toster
import { toast } from 'react-toastify';
import bg from '../components/assets/signup.png'

const SignUp = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(register);

        try {
            const response = await axios.post('http://localhost:8082/addUser', register);
            console.log(response.data);
            // alert("User added successfully");
            toast.success("User added successfully")

        } catch (error) {
            // console.log(error);
            toast.error("Server Error")

        }

    }
    return (

        <div className=' mt-5'>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 pb-4">
                <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
                    {/* Left Side - Illustration */}
                    <div className="hidden md:flex items-center justify-center p-6">
                        <img
                            src={bg}
                            sizes={50}
                            alt="Sign Up Illustration"
                            className="w-3/4"
                        />
                    </div>

                    {/* Right Side - Form */}
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-indigo-500 text-center">Sign In</h2>
                        <p className=" text-center mb-6 font-sans text-lg font-semibold text-zinc-600">Just a few quick things to get   started</p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your first name"
                                    svalue={register.name}
                                    onChange={handleChange} className="p-3 border-gray-900 rounded w-full" />
                                <input type="text" placeholder="Your last name" className="p-3 border-gray-900 rounded w-full" />
                            </div>
                            <input type="email" placeholder="Enter Email ID" value={register.email}
                                onChange={handleChange} className="p-3 border-gray-900 rounded w-full" />
                            <input type="text" placeholder="Enter Phone" className="p-3 border-gray-900 rounded w-full" />
                            <input type="password" placeholder="Enter Password" value={register.password}
                                onChange={handleChange} className="p-3 border-gray-900 rounded w-full" />
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="terms" className="w-4 h-4 " />
                                <label htmlFor="terms" className="text-sm">I agree to the <a href="#" className="text-indigo-600">Terms</a> and <a href="#" className="text-indigo-600">Privacy Policy</a>.</label>
                            </div>
                            <button className="w-full bg-indigo-500 font-bold text-white p-3 rounded hover:bg-indigo-600">Sign Up</button>
                        </form>
                        <div className="text-center mt-4">
                            <button className="border border-indigo-500 font-bold text-indigo-500 p-3 rounded w-full hover:bg-indigo-100"><Link to="/login">Sign In</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
