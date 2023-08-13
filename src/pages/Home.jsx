import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner'

const Home = () => {

    const[products,setProducts]= useState([]);
    const[loading,setLloading]= useState(false);

    const url = process.env.REACT_APP_API_URL;
    console.log(url);

    const fetchData = async () =>{
      setLloading(true);
      var res= await axios.get(url);
      var data=await res.data;
      setProducts(data);
      setLloading(false);
    }

    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div>
         {
          loading?(<Spinner/>):(
              products.length>0?(
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-5'>{
                  products.map((prod)=>{
                    return <ProductCard key={prod.id} prod={prod}/>
                   }
                )
                }
              </div>
              ):
              (
             <div className='flex justify-center items-center'>
                 <p>No Data Found</p>
              </div>
            )
          )

         }
    </div>
  )
}

export default Home

