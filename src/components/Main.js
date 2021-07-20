import React from 'react'
import BottomNav from "./BottomNav"
import "../styles/Main.css"
import Footer from "./Footer"
import Hero from "./Hero"
import About from "./About"

const Main = () => {
    
    return (
        <main className="main">
            <Hero />
            <About/>
            <Footer />
            <BottomNav/>
        </main>
    )
}

export default Main
