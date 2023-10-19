import Container from '../Container'
import React, { useEffect, useState } from 'react'
import Flex from '../Flex'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {RxCross1} from 'react-icons/rx'
import {CiUser} from 'react-icons/ci'
import {GoTriangleDown} from 'react-icons/go'
import {FaShoppingCart} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import breadcrumbSlices from '../../slice/breadcrumbSlices'
import { pageName } from '../../slice/breadcrumbSlices'
import { Increment } from '../../slice/cartSlices'
import { Decrement } from '../../slice/cartSlices'
import { sidecart } from '../../slice/cartSlices'
import { remove } from '../../slice/cartSlices'
import Image from '../Image'




const Searchber = () => {

    let [open, setopen] = useState(false);
    // let [open2, setopen2] = useState(false);
    let [total, settotal] = useState(0);
    let popupcart = useSelector(state=>state.cart.openitem)
   
    let dispatch = useDispatch()

    let handlebreadcrumb = (name)=>{
         dispatch(pageName(name))
        console.log(name)
    }

    
    let cart = useSelector((state)=> state.cart.cartItem)

    let handleDecrement = (item) => {
        // console.log(item)
        dispatch(Decrement(item))
    }

    let handleIncrement = (item) => {
        // console.log(item)                                                                               
        dispatch(Increment(item))
    }

    let handleremove = (item)=>{
        dispatch(remove(item)) 
    }

    useEffect(()=>{
        let total  = 0
        cart.map(item=> {
            total+=item.price*item.quantity
        })
        settotal(total)
    },[cart])
   


  return (
    <section className='bg-ash py-10'>
        <Container>
            <Flex>
               <Flex className='w-1/5 items-center gap-x-2.5'>              
                        <FaBars />
                        Shop by Category
                </Flex>
                <div className='w-3/5 relative'>
                    <input className='w-full py-4 px-5' placeholder='search product'/>
                    <AiOutlineSearch className='text-2xl absolute top-1/2 -translate-y-1/2 right-4'/>
                </div>
                <Flex className='w-1/5 gap-x-10 justify-end items-center'>
                    <Flex>
                    <Link onClick={()=> handlebreadcrumb("Signup")} to="/signup">
                        <CiUser/>
                    </Link>
                    <GoTriangleDown/>
                    </Flex>
                    {/* <Link onClick={()=> handlebreadcrumb("Checkout")} to="/checkout"> */}
                         <FaShoppingCart  onClick={()=>dispatch(sidecart(true))} className='cursor-pointer'/> {cart.length}
                    {/* </Link> */}
                </Flex>
            </Flex>
            {popupcart && 
            <div className='w-2/5 bg-[#A8A8A8] text-white h-screen absolute top-0 right-0 z-10'>
                
                 <ImCross onClick={()=>dispatch(sidecart(false))} className='cursor-pointer ml-[15px] mt-[15px] mb-[15px]'/>
                
                 <ul className='flex justify-between text-black bg-ash py-5'>
                    <li className=''>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                 </ul>
                 {cart.length > 0 
                 ?
                 cart.map(item => (
                    <ul className='flex justify-between border-b border-solid border-white py-5'>
                           <li>
                               <button>
                                   <RxCross1  onClick={ ()=> handleremove(item)}/>
                               </button>
                           </li>
                           <li>
                            <Image src={item.image} className="w-[40px] h-[50px] "/>
                           </li>
                           <li>{item.title} </li>
                           <li>{item.price}</li>
                           <li className='border border-white border-solid'>
                               <button onClick={()=> handleDecrement(item)} className='mr-[20px]'>-</button>
                                   {item.quantity}
                               <button onClick={()=> handleIncrement(item)} className='ml-[20px]'>+</button>
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
        </Container>
    </section>
  )
}

export default Searchber