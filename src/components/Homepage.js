import React from 'react'
import homepage from "../svg/signup.svg"
import {Link} from "react-router-dom"
const Homepage = () => {
    return (
        <>
            <main className="homepage w-full">
                <nav className="homepage__nav w-full flex items-center justify-between p-4">
                    <h3 className="text-blue-900 text-xl">Revise </h3>
                    {/* <Link to="/dev" className="py-2 px-3 bg-gray-100 rounded-lg outline-none border-none hover:shadow">Developer</Link> */}
                </nav>
                <section className="jumbotron flex items-center justify-between p-7 w-full">
                    <div className="jumbotron__text mr-3">
                        <h2 className="text-5xl mb-5">Reach for A!{" "}🎓</h2>
                        <p className="text-white mb-2 ">
                            With Revise, you can't settle for Average, your academic excellence is our priority.
                        </p>
                        <p className="mb-2">Don't settle for less, Learn with Revise, settle for Excellence!</p>
                        <Link to="/login" className="py-3 px-4 bg-blue-600 text-gray-50 mt-8 rounded inline-block hover:shadow-lg"> GET STARTED</Link>
                    </div>
                    <div className="jumbotron__image p-4">
                        <img src={homepage} alt="Revise Learning Platform" className="w-full"/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage
