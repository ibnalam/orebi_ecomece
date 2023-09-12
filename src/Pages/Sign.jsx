import  Container  from '../components/Container'
import React from 'react'
import breadcrumbSlices from '../slice/breadcrumbSlices'
import Brabcrumb from '../components/Layout/Brabcrumb'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { useSelector } from 'react-redux'
import InputForm from '../components/InputForm'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import {FaAngleRight} from 'react-icons/fa'





const Sign = () => {
   

  const pageName = useSelector((state)=>state.breadcrumbSlices.currentname)
    

  return (
    
    <Container>
        <SubHeading text="Sign Up"/>
        
        <Flex className="mt-3">
        <Link className='mr-2' to={pageName == "Home" ? "/" : `/${pageName.toLowerCase()}`}> {pageName}</Link> <FaAngleRight className='mt-[5px]'/> 
        <p className='first-letter:uppercase ml-2'>{window.location.pathname.replace("/","").replace("-"," ")}</p>
        </Flex>

        <p className='font-dm font-normal text-base max-w-644 my-36 text-pera'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

        <div className='border-t border-solid border-line'>
          <SubHeading text="Your Personal Details" className="pt-14"/>
          <Flex className="flex-wrap justify-between">
            <div className='w-48'>
            <InputForm title="First Name" placeholder="First Name" type="text"/>
            </div>  
            <div className='w-48'>
            <InputForm title="Last Name" placeholder="Last Name" type="text"/>
            </div>
            <div className='w-48'>
            <InputForm title="Email address" placeholder="ibnalam6@gmail.com" type="email"/>
            </div>
            <div className='w-48'>
            <InputForm title="Telephone" placeholder="Your phone number" type="text"/>
            </div>
          </Flex>
        </div>
        <div className='border-t border-solid border-line mt-36'>
          <SubHeading text="New Customer" className="pt-14"/>
          <Flex className="flex-wrap justify-between">
            <div className='w-48'>
            <InputForm title="Address 1" placeholder=" 4279 Zboncak Port Suite 6212t" type="text"/>
            </div>
            <div className='w-48'>
            <InputForm title="Address 2" placeholder="4279 Zboncak Port Suite 6212" type="text"/>
            </div>
            <div className='w-48'>
            <InputForm title="City" placeholder="Your city" type="text"/>
            </div>
            <div className='w-48'>
            <InputForm title="Post Code" placeholder="05228" type="text"/>
            </div>
            <div className='w-48'>
            <InputForm title="Country" placeholder="Please select" type="text"/>
            </div>
            <div className='w-48'>
            <InputForm title="Region/State" placeholder="Please select" type="text"/>
            </div>
          </Flex>
        </div>
        <div className='border-t border-solid border-line mt-36'>
          <SubHeading text="Your Password" className="pt-14"/>
          <Flex className="flex-wrap justify-between">
            <div className='w-48'>
            <InputForm title="Password" placeholder=" Password" type="password"/>
            </div>
            <div className='w-48'>
            <InputForm title="Repeat Password" placeholder="Repeat password" type="password"/>
            </div>
          </Flex>
   

          <input id='test' type="checkbox" className='peer/test' hidden/>
          <label className='relative mt-10 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-input before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test:border after:peer-checked/test:border-solid after:peer-checked/test:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test:bg-input' for='test'>
            I have read and agree to the Privacy Policy
          </label>
          <br/>
          <div className='mt-6'>
            <Flex>
              <p>Subscribe Newsletter</p>
      
              <input id='test2' type="checkbox" className='peer/test2' hidden/>
              <label className='relative mt-0 ml-8 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-input before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test2:border after:peer-checked/test2:border-solid after:peer-checked/test2:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test2:bg-input' for='test2'>
              Yes
              </label>
    
        
              <input id='test3' type="checkbox" className='peer/test3' hidden/>
              <label className='relative mt-0 ml-8 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-input before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test3:border after:peer-checked/test3:border-solid after:peer-checked/test3:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test3:bg-input' for='test3'>
              No
              </label>
    
            </Flex>
          </div>
          <Button className="mt-10" text="Log in"/>
        </div>

    </Container>
  )
}

export default Sign