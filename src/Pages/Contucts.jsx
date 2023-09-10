import Container from '../components/Container'
import React from 'react'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'    
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import InputForm from '../components/InputForm'
import Button from '../components/Button'
import Image from '../components/Image'
import Map from '../assets/Map.png'

const Contuct = () => {

    

  return (
     <Container>
        <SubHeading text="Contucts"/>
        <SubHeading text="Fill up a Form" className="mt-32"/>
        <div className='w-48'>
            <InputForm title="Name" placeholder="Your name here" type="text"/>
        </div>
        <div className='w-48'>
            <InputForm title="Email" placeholder="Your email here" type="email"/>
        </div>
        <div className='w-48'>
            <InputForm title="Message" placeholder="Your Message here" type="text"/>
        </div>

        <Button className="mt-[100px]" text="Post"/>
        <Image src={Map} className="mt-[140px]"/>
        
     </Container>
  )
}

export default Contuct