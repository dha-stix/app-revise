import React, {useEffect} from 'react'
import {Helmet} from "react-helmet";
import loginSvg from "../svg/login.svg"
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const date = new Date().getFullYear()
    let navigate = useNavigate();

    useEffect(()=> {
        const redirect = () => localStorage.getItem("token") ? navigate("/dashboard") : " "
        redirect()
    }, [navigate])

    const signIn = () => {
        try {
            signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("token", result._tokenResponse.idToken)
                localStorage.setItem("purl", result.user.photoURL)
                localStorage.setItem("id", result.user.displayName)
                navigate("/dashboard")
            }).catch(error => console.error(error));
        }catch(err) {
            alert("Kindly make sure you're connected to the internet")
            console.error(err)
            }
        }

    return (
        <>
            <Helmet>
                <title>Log in | Revise Learning Platform</title>
            </Helmet>
            <main className="w-full h-screen flex">
                <div className="svg__container p-3 bg-blue-300 w-1/3 mr-5 h-screen flex items-center flex-col justify-center">
                    <img src={loginSvg} alt="Revise Learning Platform svg" className="mb-5"/>
                    <p className="mb-4 text-xl font-bold text-center">Learn with Revise ❤️</p>
                    <p className="opacity-50">Copyright {" "}{date}</p>
                </div>
                <div className="login__container w-2/3 p-9 flex flex-col items-center justify-center">
                    <h2 className="loginHeader text-xl font-bold mb-4">Login to your account </h2>
                    <button 
                    className="loginBtn w-2/3 p-2 py-3 text-sm bg-blue-200 rounded-lg flex items-center justify-center hover:bg-blue-400"
                    onClick={signIn}
                    >
                     <img src="https://img.icons8.com/fluency/50/000000/google-logo.png" className="mr-3 h-8" alt="Google Sign in"/>
                     Sign with Google</button>
                </div>
            </main>
        </>
    )
}

export default Login
