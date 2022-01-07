import React, {useState, useEffect} from 'react'
import Backward from "../svgs/Backward"
import Forward from "../svgs/Forward"
import Lightmode from "../svgs/Lightmode"
import Darkmode from "../svgs/Darkmode"
import Home from "../svgs/Home"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from "../redux/darktheme"
import { useParams } from 'react-router-dom'
import {getCourseTitle, courses} from "../utils/querycourses"
import NotLoggedIn from "./NotLoggedIn"

const Question = () => {
    const darktheme = useSelector((state) => state.themeMode.value)
    const dispatch = useDispatch()
    const [viewAnswer, setViewAnswer] = useState(false)
    const toggleAnswer = () => setViewAnswer(!viewAnswer)
    const {course} = useParams()

    const [questions, setQuestions] = useState([])
    const [count, setCount] = useState(0)

    useEffect(()=> {
        fetch(`https://csc-ques.herokuapp.com/questions/${Number(course)}`)
            .then(data => data.json()).then(res => {
                setQuestions(res.doc)
        })
    }, [ course])

    const nextFunction = () => {
        if (count < questions.length - 1) {
          setCount(count + 1);
          setViewAnswer(false)
        }
    };
    const prevFunction = () => {
        if (count > 0) {
          setCount(count - 1);
          setViewAnswer(false)
        }
    }

    return (
        <div className={darktheme ? 'w-full h-screen bg-zinc-800 pt-4'  :'w-full h-screen bg-zinc-50 pt-4'}>
            {localStorage.getItem("token") ? (
                <>
                <main className='w-full px-6'>
                <div className='flex items-center justify-between w-full'>
                <p className={darktheme ? "text-xl mb-7 text-zinc-400 " :'text-xl mb-7'}>{getCourseTitle(course, courses)}</p>
                    <div className='cursor-pointer' onClick={() => dispatch(changeTheme())}>
                        {darktheme ? <Lightmode/> : <Darkmode/>}
                    </div>
                </div>
                
                {!questions[1] ? <p className='text-zinc-300'>Loading...Please wait{" "}🙏</p> : (
                    <>
                        <p className='text-sm text-zinc-600 mb-10'>Questions left: 45</p>

                        <p className={darktheme ? 'mb-14 text-zinc-400' : 'mb-14 text-zinc-800'}>{questions[count].question}</p>

                        <p className={darktheme ? 'text-zinc-300 text-sm'  :'text-zinc-500 text-sm'}>{viewAnswer && questions[count].answer}</p>

                        <button className='text-sm mt-12 py-3 px-4 bg-zinc-300 rounded' onClick={toggleAnswer}>{viewAnswer ? "Hide" : "Show"}{" "}Answer</button>
                    </>
                ) }
                
            </main>

            <footer className={darktheme ? 'w-full fixed bottom-0 h-[10vh] bg-zinc-700 z-10 flex items-center justify-between px-4 ': 'w-full fixed bottom-0 h-[10vh] bg-zinc-100 z-10 flex items-center justify-between px-4'}>
                <div className='cursor-pointer' onClick={prevFunction}>
                 <Backward/>
                </div>
                
                <div className='cursor-pointer'>
                    <Link to="/dashboard"><Home/> </Link>
                </div>

                <div className='cursor-pointer' onClick={nextFunction}>
                 <Forward/>
                </div>
            </footer>
                </>
            ): (
                <NotLoggedIn/>
            )}
            
        </div>
    )
}

export default Question
