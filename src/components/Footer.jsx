import Container from './Container'
import React from 'react'
import Flex from './Flex'
import Logo from '../assets/Logo.webp'
import Image from './Image'
import PortionHeading from './PortionHeading'
import List from './List'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import FooterBottom from './FooterBottom'


const Footer = () => {
  return (
    <>
    <footer className='bg-ash py-14 mt-36'>
        <Container>
            <Flex>
                <div className='w-2/12 '>
                    <PortionHeading text="Menu" className="mb-4"/>
                        <ul className='flex flex-col gap-y-1.5'>
                        <List text="Home"/>
                        <List text="Shop"/>
                        <List text="About"/>
                        <List text="Contuct"/>
                        <List text="Journal"/>
                        </ul>
                </div>
                <div className='w-2/12'>
                    <PortionHeading text="shop" className="mb-4"/>
                        <ul className='flex flex-col gap-y-1.5'>
                        <List text="catagory-1"/>
                        <List text="catagory-2"/>
                        <List text="catagory-3"/>
                        <List text="catagory-4"/>
                        <List text="catagory-5"/>
                        </ul>
                </div>
                <div className='w-2/12'>
                    <PortionHeading text="Help" className="mb-4"/>
                        <ul className='flex flex-col gap-y-1.5'>
                        <List text="Privacy policy"/>
                        <List text="Terms and Conditions"/>
                        <List text="Espetial E-Shop"/>
                        <List text="Shopping"/>
                        <List text="Secure Payments "/>
                        </ul>
                </div>
                <div className='w-3/12'>
                    <PortionHeading text="(052) 611-5711" className="mb-4"/>
                    <PortionHeading text="company@domain.com" className="mb-4"/>
                        <ul className='flex flex-col gap-y-1.5'>
                        <List text="575 Crescent Ave. Quakertown, PA 18951"/>
                        </ul>
                </div>
                <div className='w-2/12'>
                    <Image src={Logo}/> 
                </div>
            </Flex>
            <Flex className="mt-16">
                <Flex className='w-1/2 gap-x-6'>
                    <BiLogoFacebook/>
                    <BiLogoLinkedin/>
                    <AiOutlineInstagram/>
                </Flex>
                
            </Flex>
        </Container>
       
    </footer>
    <FooterBottom/>
    </>
    
  )
}

export default Footer