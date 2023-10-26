import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="h-24 pt-6 bg-main-Black flex justify-between">
    <img className='h-10 ms-6' src="https://i.pinimg.com/originals/09/e2/cd/09e2cd8d3a83b6e9cd4dc5d0d703a575.png" alt="" />
    <button className='bg-button h-10  px-6 rounded-md me-10 font-bold text-white hover:shadow-sm'><Link to={'/createroom'}>Create Room</Link></button>
    </div>
  )
}

export default Header