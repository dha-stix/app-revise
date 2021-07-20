import React  from 'react'
import {Link} from "react-router-dom"
const MainLearn = () => {
    
    const courses = [
        {
            id : 1,
            course : "ECN 214",
            link : "learn/ECN214"
        },
        {
            id : 2,
            course : "CSC 206",
            link : "learn/CSC206"
        }
    ]
    return (
        <div className="mainlearn">
            <h2>Available Courses: </h2>
            <div className="courses">
            {courses.map(
                course => 
                <Link to={course.link} key={course.id}>
                <button className="courseBtn">
                <h3>{course.course}</h3></button>
                </Link>

            )} 
            </div>  
        </div>  
    )
}

export default MainLearn
