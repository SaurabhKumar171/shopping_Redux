import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';


const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const cart = useSelector((state)=>state.cart.items);

    const handleremoveCart = () => {
        dispatch(remove(item.id)); // Dispatch the "add" action with the product data
        toast.error("Item removed from cart");
      };

  return (
   
        <div className='flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5'>
            <div className='w-[30%]'>
                <img src={item.image} alt="itemImage" className='object-cover'/>
            </div>
            <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
                <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
                <p className='text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
                <div className='flex items-center justify-between'>
                    <p className='font-bold text-lg text-green-600'>${item.price}</p>
                    <div onClick={()=>{handleremoveCart()}} className='bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>
                        <MdDelete/>
                    </div>
                </div>
            </div>
        </div>
     
  )
}

export default CartItem