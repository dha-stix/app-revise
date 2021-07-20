import React from 'react'
import "../styles/Main.css"
import welcome from "../images/welcome.svg"
import exams from "../images/exams.svg"
const Hero = () => {
    const details = [
        {
            topic : "Step 1 : Login to Google",
            image : welcome,
            text : "Make sure you are signed into your Google account in order to access the tests"
        },
        {
            topic : "Step 2 : Take tests",
            image : exams,
            text : "Pick from the available tests and answer all questions"
        }
    ]
    return (
        <section className="hero">
        <h2 className="header">Welcome to Revise </h2>
        <div className="steps">
                    {details.map(detail => (
                        <div className="step first" key={detail.text}>
                        <img src={detail.image} alt="Sign in to Revise"/>
                        <div className="step__text">
                        <h3>{detail.topic}</h3>
                        <p>{detail.text}</p>
                        </div>
                        
                    </div>
                    ))}
                </div>
        </section>
    )
}

export default Hero
