import React from 'react'
import Image from './Image'
import ProductImageOne from '../assets/ProductIamgeOne.png'
import Badge from './Badge'
import PortionHeading from './PortionHeading'
import Flex from './Flex'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BiGitCompare} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { addtocart } from '../slice/cartSlices'
import { useState,useEffect } from 'react'
import {ImCross} from 'react-icons/im'


// 

// import { pageName } from '../../slice/breadcrumbSlices'
import { Increment } from '../slice/cartSlices'
import { Decrement } from '../slice/cartSlices'
import { RemoveCart } from '../slice/cartSlices'





// 

const Product = ({heading, className}) => {
  let dispatch = useDispatch()


  // 
  let [open, setopen] = useState(false);
  let [total, settotal] = useState(0);
  let cart = useSelector((state)=> state.cart.cartItem)

    let handleDecrement = (item) => {
        // console.log(item)
        dispatch(Decrement(item))
    }
    let handleIncrement = (item) => {
        // console.log(item)
        dispatch(Increment(item))
    }
    useEffect(()=>{

      let total  = 0
      cart.map(item=> {
          total+=item.price*item.quantity
      })
      settotal(total)
  },[cart])
 








// 
  let handlecart =()=> {
    dispatch(addtocart({
      title:heading,
      price:44,
      image:ProductImageOne,
      quantity:1
    }))
  }
  
  return (
    <div className='mx-3'>
       <div className='relative overflow-hidden group'>
       <Image src={ProductImageOne} className="w-full"/>   
       <Badge text="New"/>
           <div className='bg-slate-100 absolute -bottom-32 left-0 w-full p-6 group-hover:bottom-0 duration-500'>
           <Flex className=" justify-end items-center gap-x-2">
            <p>Add to Wish List</p>
            <AiFillHeart/>
            </Flex>
            <Flex className=" justify-end items-center  gap-x-2">
            <p>Compare</p>
            <BiGitCompare/>
            </Flex>
            <Flex className="justify-end items-center  gap-x-2 cursor-pointer"> 
            <p onClick={handlecart} className='text-bold'><span  onClick={()=> setopen(true)}>Add to Cart</span></p>
            <AiOutlineShoppingCart/>
            </Flex>
           </div>
       </div>



{/*  */}

       {open && 
            <div className='w-2/5 bg-[#A8A8A8] text-white h-screen absolute top-0 right-0 z-10'>
                 <ImCross onClick={()=> setopen(false)}/>
                 <ul className='flex justify-between text-black bg-ash py-5'>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                 </ul>
                 {cart.length > 0 
                 ?
                 cart.map(item => (
                    <ul className='flex justify-between border-b border-solid border-white py-5'>
                           <li>
                               <button onClick={()=> dispatch(RemoveCart(item))}>
                                   <ImCross/>
                               </button>
                           </li>
                           {/* <li>{item.image}</li> */}
                           <li>{item.title} </li>
                           <li>{item.price}</li>
                           <li className='border border-white border-solid'>
                               <button onClick={()=> handleDecrement(item)} className='mr-[10px]'>-</button>
                                   {item.quantity}
                               <button onClick={()=> handleIncrement(item)} className='ml-[10px]'>+</button>
                           </li>
                           <li>{item.price*item.quantity}</li>                
                    </ul>
                       ))
                :
                <h2 className='text-white'>Cart Is Empty</h2>

                }
                <h3 className='text-white absolute bottom-0'>Total : 
                    {total}
                 </h3>
                    
            </div>

            }

{/*  */}



          <Flex className="justify-between mt-3">
            <Link to="/">
              <PortionHeading text={heading}/>
            </Link>
            <p className='font-dm text-base text-bold font-regular'>$44.00</p>
          </Flex>
    </div>
  )
}

export default Product