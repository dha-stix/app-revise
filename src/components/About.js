import React from 'react'
import notebook from "../images/notebook.svg"
import {Link} from "react-router-dom"
const About = () => {
    return (
        <section>
            <h2  className="header"> About</h2>
                <div className="about">
                    <div className="about__text">
                        <h2>Scoring an "A" made <span style={{color :"#fdc57b"}}>easy</span></h2>
                        <p>Prepare and Smash that test or exam with Revise</p>
                        <Link to="/"> Sign with Google</Link>
                    </div>
                    <div className="about__image">
                        <img src={notebook} alt="Sign in to Revise" />
                    </div>
                </div>
        </section>
    )
}

export default About
