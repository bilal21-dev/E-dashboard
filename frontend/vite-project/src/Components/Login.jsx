import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigation = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigation("/")
        }
    })
    const handleLogin = async (e) => {
        e.preventDefault();
        let result = await axios.post('http://localhost:5000/login', {
            email,
            password
        })
        result = result.data
        console.log(result);
        if (result && result.result === 'No record') {
            alert("No user exist");
        } else if (result && result._id) {
            localStorage.setItem('user', JSON.stringify(result))
            navigation("/")
        }
        else {
            alert("enter correct details")
        }

    }
    return (
        <div className="flex items-center justify-center align-middle mt-[70px]">
            <div className="p-8 rounded-lg shadow-md w-full max-w-sm bg-slate-200">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
