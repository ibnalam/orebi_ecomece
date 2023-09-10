import Container from '../Container'
import React from 'react'
import Flex from '../Flex'
import {FaBars} from 'react-icons/fa'
import {CiUser} from 'react-icons/ci'
import {GoTriangleDown} from 'react-icons/go'
import {FaShoppingCart} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Searchber = () => {
    let handlebreadcrumb = (name)=>{
        console.log(name)
    }
  return (
    <section className='bg-ash py-10 mb-32'>
        <Container>
            <Flex>
                <Flex className='w-1/5 items-center gap-x-2.5'>
                    <FaBars />Shop by Category
                </Flex>
                <div className='w-3/5 relative'>
                    <input className='w-full py-4 px-5' placeholder='search product'/>
                    <AiOutlineSearch className='text-2xl absolute top-1/2 -translate-y-1/2 right-4'/>
                </div>
                <Flex className='w-1/5 gap-x-10 justify-end items-center'>
                    <Flex>
                    <Link onClick={()=> handlebreadcrumb("Sign up")} to="/sign-up">
                        <CiUser/>
                    </Link>
                    <GoTriangleDown/>
                    </Flex>
                    <FaShoppingCart/>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Searchber