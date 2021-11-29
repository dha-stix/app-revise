import React, {useState, useEffect, useRef} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSelector} from 'react-redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import {secondlevel, getRequest} from "../utils/200lvlcourses"
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const Questions = ({course}) => {
    const [view, setView] = useState(false)
    const [questions, setQuestions] = useState([])
    const [count, setCount] = useState(0)
    const darkmode = useSelector(state => state.modeSwitch.darkmode)
    const toggleView = () => setView(!view)
    const [loading, setLoading] = useState(true)
    const input = useRef(null)
    let navigate = useNavigate();

    const nextFunction = () => {
        if (count < questions.length - 1) {
          setCount(count + 1);
          setView(false)
        }
    };
    const prevFunction = () => {
        if (count > 0) {
          setCount(count - 1);
          setView(false)
        }
    }
    const gotoDashboard = () => navigate("/dashboard")
    const skipQuestion = () => {
        const value = Number(input.current.value)
        Number.isInteger(value) && value >=0 && value <= questions.length -1 ? setCount(value) : setCount(0)
    }
    
    useEffect(()=> {
        fetch(`https://csc-ques.herokuapp.com/questions/${getRequest(course, secondlevel)}`)
            .then(data => data.json()).then(res => {
            setQuestions(res.doc)
            setLoading(false)
        })
    }, [ course])

    return (
        <main className={darkmode ? "py-7 px-4 w-full bg-gray-800" :"py-7 px-4 w-full"}>
            <header className="w-full h-16 flex justify-between items-center">
             <h2 
             className={darkmode ? "questions text-xl font-semibold mb-4 text-gray-400": "text-xl font-semibold mb-4"}>
             {course}</h2>

             <IconButton onClick={gotoDashboard}>
                <HomeIcon fontSize="medium" className={darkmode && "text-gray-300"}/>
             </IconButton>
            </header>
             <div className="questions__details flex items-center justify-between w-full py-7 ">
                <div className="w-4/6">
                    <p className="text-gray-300">
                        Questions Remaining : {" "}
                        {questions[1] ? <span className="text-blue-400">{(questions.length -1) - (count) }</span> : " "}
                    </p>
                </div>
                 
                    
                 <form className="w-2/6 relative">
                    <input type="text" 
                    placeholder="Go to page" 
                    onKeyUp={skipQuestion}
                    ref={input}
                    className={darkmode ? "form__input w-full p-4 outline-none border-none rounded bg-gray-700" :"form__input w-full p-4 outline-none border-none rounded"}/>
                    <SearchIcon className="right-5 absolute top-4"/>
                 </form>
             </div>

             <div className="button__container flex items-center justify-between w-full mb-12 ">
                    <IconButton onClick={prevFunction}>
                        <ArrowBackIcon  className={darkmode? "text-gray-200" : "text-gray-800"}/> 
                    </IconButton>
                    
                   
                    <IconButton onClick={nextFunction}>
                        <ArrowForwardIcon className={darkmode? "text-gray-200" : "text-gray-800"}/>
                    </IconButton> 
            </div>
            {!questions[1] ? <h1>Loading...Please wait{" "}🙏</h1> : (
                <div className="mt-5">
                 <h3 className={darkmode ? "font-semibold mb-12 text-gray-200" : "font-semibold mb-12"}>
                 {questions[count].question}</h3>
                 {view && (<p className="answer text-white p-4 bg-gray-600">{questions[count].answer}</p>)}

                 <div className="mt-10">
                     <button className={darkmode ? "bg-gray-500 text-gray-100 p-3 rounded shadow border-none outline-none text-xs" :"bg-white p-3 rounded shadow border-none outline-none hover:text-blue-400 text-xs"} onClick={toggleView}>
                         {view ? (
                             <>
                                Hide Answer {" "} <VisibilityOffIcon fontSize="small"/>
                             </>
                         ) : (
                            <>
                            View Answer  {" "}<VisibilityIcon fontSize="small"/>
                            </>
                         )}
                     </button>
                 </div>  
             </div>
            )}
            
        </main>
    )
}

export default Questions
