import React from 'react'
import Nav from "./Nav"
import BottomNav from "./BottomNav"
import Questions from './Questions'
import "../styles/AboutPage.css"
const QuestionsPage = ({match}) => {
    const params = match.params.course
    return (
        <main className="questionpage">
            <Nav />
            <Questions course={params}/>
            <BottomNav />
        </main>
    )
}

export default QuestionsPage
