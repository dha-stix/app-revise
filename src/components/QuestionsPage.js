import React from 'react'
import DashNav from './DashNav';
import {Helmet} from "react-helmet";
import Questions from './Questions';
import { useParams } from 'react-router-dom'
import NotLoggedIn from './NotLoggedIn';

const QuestionsPage = () => {
    const {course} = useParams()
    return (
        <>
            <Helmet>
                <title>Questions | Revise Learning Platform</title>
            </Helmet>

            {localStorage.getItem("token") ? (
                <main className="w-full min-h-screen bg-gray-50 flex">
                    <DashNav/>
                    <Questions course={course}/>
                </main>
            ): (
                <NotLoggedIn/>
            )}
            
        </>
    )
}

export default QuestionsPage
