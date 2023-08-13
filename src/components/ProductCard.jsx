import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({prod}) => {
  
  const cart = useSelector((state)=>state.cart.items);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(prod)); // Dispatch the "add" action with the product data
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(prod.id)); // Dispatch the "add" action with the product data
    toast.error("Item removed from cart");
  };


  return (
    <div className='group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl'>
        <div>
          <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{prod.title}</p>
        </div>
        <div>
          <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{prod.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={prod.image} alt="img-card" className='h-full w-full'/>
        </div>
        <div className='flex gap-[4em]'>
            <div>
                <p className='text-green-600 font-semibold'>${prod.price.toFixed(2)}</p>
            </div>
                        
            {
                     cart.some((p)=> p.id === prod.id)?
                     (
                      <button
                      onClick={removeFromCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white'>
                         Remove Item
                      </button>
                     ):(
                      <button
                      onClick={handleAddToCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white'>
                      Add to Cart
                     </button>)
                  }
        </div>

    </div>
  )
}

export default ProductCard