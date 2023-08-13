import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navabar = () => {

  const cart = useSelector((state)=>state.cart.items);

  return (
    <nav className="flex justify-around items-center font-medium text-slate-100 mr-5 space-x-6 my-4 py-[1.3em]">
        <div>
        <NavLink to="/"><img src={logo} alt="prodImg" width="140em"/></NavLink>
        </div>
        <div className='flex gap-4 items-center'>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl hover:text-green-600'/>         
               {cart.length>0 &&
                  <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
                    {cart.length}
                  </span>
               }
             
            </div>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navabar