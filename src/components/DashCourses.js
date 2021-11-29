import React from 'react'
import {Link} from "react-router-dom"
import {secondlevel} from "../utils/200lvlcourses"

const DashCourses = ({darkmode, year2, year3}) => {
    
    return (
        <div className="w-full">
                    <div  className=" mt-6">
                        <h3 className="text-gray-300">Available Courses 📘</h3>
                    </div>

                    <div className="w-full flex flex-wrap items-center mt-6 justify-center">
                       {year2 ?  secondlevel.map(course => (
                            <Link to={"/learn/"+course.course} 
                                className={darkmode ? "course h-64 w-1/3 bg-gray-700 flex items-center justify-center cursor-pointer border-t-2 relative border-blue-500 shadow text-gray-300 hover:shadow-lg hover:border-t-3 m-4" 
                                :"course h-64 w-1/3 bg-white flex items-center justify-center cursor-pointer border-t-2 relative border-gray-300 shadow border-blue-500 hover:shadow-lg hover:border-t-3 m-4"}
                                key={course.id}
                                >
                                <h3 className="text-2xl">{course.course}</h3>
                                <img src="https://img.icons8.com/bubbles/50/000000/reading.png" alt="Reading" className="absolute top-0 right-0 h-10"/>
                            </Link>
                       )) : (" ")}
                    </div>
                    {year3 ? (<h2 className={darkmode ? "text-gray-400": " "}>Your courses are not available at the moment...</h2>): " "}
        </div>
    )
}

export default DashCourses
