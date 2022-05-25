import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Login.css'

function Login({email, setEmail, password, setPassword}) {

    const { login } = useAuth()
    const [passwordType, setPasswordType] = useState("password");
    
    const navitage = useNavigate()

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await login(email, password)
            navitage('/home');
        } catch {
            alert("Invalid Email or Password...");
        }
    }

    const togglePassword = () => {
        if(passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    }

    return (
        <>
            <h1 className='logintitle'>Login</h1>
            <div className="login m-5 p-5 rounded shadow loginbox">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className='logl' htmlFor="email">Enter Your Email</label>
                        <input
                            className='logi'
                            type="email"
                            placeholder="email"
                            value={email}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="flex flex-col logDivInput">
                        <label className='logl' htmlFor="password">Enter Your Password</label>
                        <input
                            className="logi"
                            type={passwordType}
                            placeholder="password"
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='button' className='absolute eye' onClick={togglePassword}>
                            {passwordType === "password" ?
                                <i className="fa fa-eye-slash"></i>
                                : (
                                    <i className="fa fa-eye"></i>
                                )
                            }
                        </button>
                    </div>
                    <button 
                        type="submit"
                        className="logl bg-blue-900 text-white font-bold py-2 px-8 
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