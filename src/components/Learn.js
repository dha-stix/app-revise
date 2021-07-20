import React from 'react'
import "../styles/Learn.css"
import Nav from "./Nav"
import BottomNav from "./BottomNav"
import MainLearn from "./MainLearn"

const Learn = () => {
    return (
        <main className="learnpage">
        <Nav />
        <MainLearn />
        <BottomNav />
        </main>
    )
}

export default Learn
