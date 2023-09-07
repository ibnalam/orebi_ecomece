import Container from '../Container'
import React from 'react'
import Flex from '../Flex'
import {FaBars} from 'react-icons/fa'
import {CiUser} from 'react-icons/ci'
import {GoTriangleDown} from 'react-icons/go'
import {FaShoppingCart} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'

const Searchber = () => {
  return (
    <section className='bg-ash py-10 '>
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
                    <CiUser/>
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