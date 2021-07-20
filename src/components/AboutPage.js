import React from 'react'
import BottomNav from './BottomNav'
import "../styles/AboutPage.css"
import Nav from "./Nav"
import dev from "../images/me.png"
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const AboutPage = () => {
    return (
        <>
        <Nav/>
        <main className="aboutpage">
                <img src={dev} alt="David Asaolu" />
                <h3>David Asaolu</h3>
                <p>Web Developer</p>
                
                
                <div className="about--social">

                <a href="https://wa.link/vnjh5i"
                  target="_blank" rel="noopener noreferrer"> 
                    <WhatsAppIcon className="social--icon"/> 
                </a>


                <a href="https://twitter.com/Arshadayvid"
                  target="_blank" rel="noopener noreferrer"> 
                <TwitterIcon className="social--icon" /> 
                </a>

                <a href="https://www.linkedin.com/in/david-asaolu234/"
                  target="_blank" rel="noopener noreferrer"> 
                <LinkedInIcon className="social--icon" /> 
                </a>

                <a href="https://www.facebook.com/asaolu.david.9"
                  target="_blank" rel="noopener noreferrer"> 
                  <FacebookIcon className="social--icon" /> 
                </a>

                </div>
        
                
        </main>
        <BottomNav/>
        </>
    )
}

export default AboutPage
