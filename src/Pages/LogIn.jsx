import Container from '../components/Container'
import React from 'react'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import InputForm from '../components/InputForm'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import breadcrumbSlices from '../slice/breadcrumbSlices'
import {FaAngleRight} from 'react-icons/fa'

const LogIn = () => {

  let pageName = useSelector((state)=>state.breadcrumbSlices.previousname)

  return (
    <Container>
        <SubHeading text="Login"/>

        <Flex className="mt-3">
        <Link to={pageName == "Home" ? "/" :`/${pageName.toLowerCase()}`}>
            {pageName}
        </Link>
          <FaAngleRight className='mt-[5px]'/>
        <p className='first-letter:uppercase ml-2' > {window.location.pathname.replace("/", "".replace("-", " "))}</p>
        </Flex>
        <p className='font-dm font-normal text-base max-w-644 my-36 text-pera'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

        <div className='border-t border-solid border-line'>
            <SubHeading text="Returning Customer" className="pt-14"/>
            <Flex className="flex-wrap justify-between">
            <div className='w-48'>
            <InputForm title="Email address" placeholder="ibnalam6@gmail.com" type="email"/>
            </div>
            <div className='w-48'>
            <InputForm title="Password" placeholder="******" type="Password"/>
            </div>
          </Flex>
          <Button text="Log In" className="mt-7"/>
        </div>
        <div className='border-t border-solid border-line mt-14'>
            <SubHeading text="New Customer"/>
            <p className='font-dm font-normal text-base max-w-644 my-9 text-pera'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <Button text="Continue" className="mt-7"/>
        </div>
    </Container>
  )
}

export default LogIn