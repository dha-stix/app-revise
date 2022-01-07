import React from 'react'
import { Link } from 'react-router-dom'

const NotLoggedIn = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center text-center">
            <h3 className="mb-4 text-zinc-300">Kindly log in to view this page</h3>
            <Link to="/" className="py-2 px-6 bg-gray-200 rounded hover:bg-zinc-300 ">SIGN IN</Link>
        </main>
    )
}

export default NotLoggedIn
