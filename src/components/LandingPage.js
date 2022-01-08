import React, {useEffect} from 'react'
import logo from "../logo.png"
import Darkmode from "../svgs/Darkmode"
import Lightmode from "../svgs/Lightmode"
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from "../redux/darktheme"
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const darktheme = useSelector((state) => state.themeMode.value)
    const dispatch = useDispatch()
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
        <div className={darktheme ? 'w-full h-screen bg-zinc-800'  :'w-full h-screen bg-zinc-50'}>
            <nav className={darktheme ? 'h-[10vh] w-full flex items-center p-4 bg-zinc-800 justify-between' :'h-[10vh] w-full flex items-center p-4 bg-zinc-200 justify-between'}>
                <img src={logo} alt="Revise Logo" className='w-14'/>
                <div className='cursor-pointer' onClick={()=> dispatch(changeTheme())}>
                    {darktheme ? <Lightmode/> : <Darkmode/>}
                </div>  
            </nav>
            <main className='h-[75vh] w-full flex flex-col items-center justify-center'>
                <p className='text-xl mb-7 text-zinc-500'>Welcome to Revise</p>
                <button className='border w-[200px] text-zinc-500 py-3 hover:bg-zinc-800 hover:text-zinc-200'
                onClick={signIn}>Sign in </button>
            </main>
            <footer className='h-[15vh] w-full text-zinc-500 items-center text-center flex flex-col border-t border-zinc-400 justify-center'>
                <p className='text-sm mb-4'>Powered by {" "}<a href="https://www.linkedin.com/in/david-asaolu234/" target="_blank" rel="noreferrer">David Asaolu</a></p>
                <p className='text-sm'>Copyright {date}, Revise Learning Platform </p>
            </footer>
        </div>
    )
}

export default LandingPage
