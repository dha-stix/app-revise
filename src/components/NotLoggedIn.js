import React from 'react'
import { Link } from 'react-router-dom'

const NotLoggedIn = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center text-center">
            <h3 className="mb-4">Kindly log in to view this page</h3>
            <Link to="/login" className="py-2 px-6 bg-gray-200 rounded hover:bg-blue-300 ">SIGN IN</Link>
        </main>
    )
}

export default NotLoggedIn
