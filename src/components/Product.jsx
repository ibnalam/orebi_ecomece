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

const Product = ({heading, className}) => {
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
            <Flex className="justify-end items-center  gap-x-2"> 
            <p className='text-bold'>Add to Cart</p>
            <AiOutlineShoppingCart/>
            </Flex>
           </div>
       </div>
          <Flex className="justify-between mt-3">
            <Link to="/">
              <PortionHeading text="Basic crew nick tae"/>
            </Link>
            <p className='font-dm text-base text-bold font-regular'>$44.00</p>
          </Flex>
    </div>
  )
}

export default Product