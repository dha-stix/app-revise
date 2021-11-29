import React from 'react'
import {Link} from "react-router-dom"
import { useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom"

const DashNav = () => {
    const darkmode = useSelector(state => state.modeSwitch.darkmode)
    let navigate = useNavigate()
    const signOut = () =>  {
        localStorage.clear()
        navigate("/")
    }
    return (
        <nav className={darkmode ? "nav w-1/6 h-screen bg-gray-900 border-r-gray-900 sticky top-0 bottom-0 left-0 items-center py-7 flex flex-col" : "nav w-1/6 h-screen bg-white border-r sticky top-0 bottom-0 left-0 items-center py-7 flex flex-col"}>
                    <div className="flex items-center mb-10">   
                         <h2 className="text-2xl opacity-70">Revise</h2>
                         <img src="https://img.icons8.com/fluency/48/000000/reading.png" alt="Revise logo" className="h-8"/>
                    </div>

                    <div className="flex justify-between flex-col">
                        <Link  to="/dashboard" className={darkmode ? "mb-10 text-gray-400 hover:text-gray-100" :"mb-10 text-gray-400 hover:text-gray-900"}>
                            Home
                        </Link>
                        
                        <p
                        className={darkmode ? "mb-10 text-gray-400 hover:text-gray-100 cursor-pointer" :"mb-10 text-gray-400 hover:text-gray-900 cursor-pointer"}
                        onClick={signOut}
                        >
                            Log out
                        </p>
                    </div>
                    
                    
                </nav>
    )
}

export default DashNav
