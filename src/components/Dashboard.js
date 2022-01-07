import React, {useState} from 'react'
import Lightmode from "../svgs/Lightmode"
import Darkmode from "../svgs/Darkmode"
import Exit from "../svgs/Exit"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from "../redux/darktheme"
import {useNavigate} from "react-router-dom"
import { Avatar } from '@mui/material';
import NotLoggedIn from "./NotLoggedIn"

const Dashboard = () => {
    const darktheme = useSelector((state) => state.themeMode.value)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const signOut = () =>  {
        localStorage.clear()
        navigate("/")
    }

    const [hide, setHide] = useState(false)
    const [lowerLevel, setLowerLevel] = useState(false)
    const handleLowerLevel = () => {
        setHide(true)
        setHigherLevel(false)
        setLowerLevel(true)
    }
    const [higherLevel, setHigherLevel] = useState(false)
    const handleHigherLevel = () => {
        setHide(true)
        setLowerLevel(false)
        setHigherLevel(true)
    }

    const courses = [
         {
            id: 2,
            course: "CSC 205",
            code: 205
        }, {
            id: 3,
            course: "CSC 207",
            code: 207
        }, {
            id: 4,
            course: "ECN 214",
            code: 214
        }, {
            id: 5,
            course: "GNS 201",
            code: 201
        }]
    return (
        <main>
            {localStorage.getItem("token") ? (
                <>
                <nav 
            className={darktheme ? 'sticky border-b border-zinc-800 top-0 h-[10vh] w-full flex items-center p-4 bg-zinc-700 justify-between' :'sticky top-0 h-[10vh] w-full flex items-center p-4 bg-zinc-200 justify-between'}>
                <div className='cursor-pointer'onClick={() => dispatch(changeTheme())}> {darktheme ? <Lightmode/> : <Darkmode/>}</div>
                <div className='cursor-pointer'>
                    <Avatar src={localStorage.getItem("purl")}/>
                </div>    
                <div className='cursor-pointer' onClick={signOut}><Exit/></div>    
            </nav>

            <div className={darktheme ? 'w-full min-h-screen pt-7 bg-zinc-800 flex flex-col items-center justify-center' : 'w-full bg-zinc-100 flex flex-col items-center justify-center pt-7 min-h-screen' }>
                {hide ? " " : (
                    <>
                        <p className='text-xl mb-2 text-zinc-400'>Hi,{" "}{localStorage.getItem("id")}</p>
                        <p className='text-xl text-zinc-500'>Kindly, pick your level</p>
                        <div className='w-full flex items-center justify-center mt-10'>
                            <button className='py-2 px-4 bg-zinc-600 text-zinc-300 mr-4 rounded' 
                            onClick={handleLowerLevel}> 200</button>
                            <button className='py-2 px-4 bg-zinc-600 text-zinc-300 rounded' 
                            onClick={handleHigherLevel}> 300</button>
                        </div>
                    </>
                )}
                

                {lowerLevel ? (
                    courses.map(course => (
                        <Link to={"/question/"+course.code}
                            key={course.id}
                            className={darktheme ? 'w-2/3 h-48 border-t-4 border-cyan-300 rounded text-center flex items-center justify-center mb-4 cursor-pointer bg-zinc-700 hover:shadow hover:bg-zinc-500' :'w-2/3 h-48 border-2 rounded text-center flex items-center justify-center mb-4 cursor-pointer hover:bg-zinc-300 hover:shadow hover:border-none'}>
                            <p className='text-xl'>{course.course}</p>
                        </Link>
                    ))
                ) : " "}
                

                {higherLevel  && (
                    <Link to="/question/301" 
                    className={darktheme ? 'w-2/3 h-48 border-t-4 border-cyan-300 rounded text-center flex items-center justify-center mb-4 cursor-pointer bg-zinc-700 hover:shadow hover:bg-zinc-500' :'w-2/3 h-48 border-2 rounded text-center flex items-center justify-center mb-4 cursor-pointer hover:bg-zinc-300 hover:shadow hover:border-none'}>
                    <p className='text-xl'>ENT 301</p>
                </Link>
                )}
                

                
            </div>
                </>
            ) : (
                <NotLoggedIn/>
            )}
            
        </main>
    )
}

export default Dashboard
