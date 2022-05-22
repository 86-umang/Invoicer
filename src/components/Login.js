import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Login.css'

function Login({email, setEmail, password, setPassword}) {

    const { login } = useAuth()
    const [error, setError] = useState("")
    
    const navitage = useNavigate()

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            await login(email, password)
            navitage('/home');
        } catch {
            setError("Failed to log in")
            alert(error);
        }
    }

    return (
        <>
            <h1 className='logintitle'>Login</h1>
            <div className="login m-5 p-5 rounded shadow loginbox">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="email">Enter Your Email</label>
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Enter Your Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="bg-blue-900 text-white font-bold py-2 px-8 
                            rounded shadow border-2 border-blue-900 
                            hover:bg-transparent hover:text-blue-900
                            transition-all duration-300"
                    >Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;