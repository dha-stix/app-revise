import React from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
const Footer = () => {
    return (
        <section className="contact">

            <div className="logo"><MenuBookIcon className="logo__icon"/> <h2>Revise</h2></div>
            <p>Your best learning companion that helps you attain your academic goals </p>
            <p>
                Built by <span style={{backgroundColor : "navyblue"}}>
                @David_Asaolu
                </span>
            </p>
            <p>2021 Copyright</p>
        </section>
    )
}

export default Footer
