import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-violet-400 h-10 flex justify-center items-center gap-4'>
            <Link to = '/'>Home</Link>
            <Link to = '/Services'>Services</Link>
        </div>
    )
}

export default Navbar