import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const items = useSelector(state => state.cart)


    return (
        <nav className='px-3 flex items-end mb-3 py-1 sm:px-4 text-lg text-gray-600'>
            <Link
                to='/'
                className='gd-text bg-gradient-to-br from-sky-400  to-pink-400  text-2xl'>
                Redux Store
            </Link>

            <Link to='/'
                className='mx-5'
            >Home</Link>

            <Link to='/cart'
                className=''
            >Cart</Link>
            <span className='ml-auto '>Cart items: {items.length}</span>
        </nav>
    )
}

export default Navbar