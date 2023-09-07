import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.webp'
import Container from '../Container'
import List from '../List'

const Navber = () => {
  return (
   <nav className='py-8'>
    <Container>
     <Flex>
        <div className='w-1/5'>
            <Image src={Logo}/>
        </div>
        <Flex className='w-4/5 justify-end'>
            <ul className='flex gap-x-10 '>
                <List text="Home"/>
                <List text="Shop"/>
                <List text="About"/>
                <List text="Contuct"/>
                <List text="Journal"/>
            </ul>
        </Flex>
    </Flex>
   </Container>
   </nav>
  )
}

export default Navber