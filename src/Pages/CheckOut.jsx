import Container from '../components/Container'
import React from 'react'
import Brabcrumb from '../components/Layout/Brabcrumb'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import InputForm from '../components/InputForm'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {FaAngleRight} from 'react-icons/fa'

const CheckOut = () => {
   

    const pageName = useSelector((state)=>state.breadcrumbSlices.previousname)


  return (
    <Container>
        <SubHeading text="Checkout"/>
        <Flex className="items-center">
        <Link to={pageName == "Home" ? "/":`/${pageName.toLowerCase()}`}>
            <p>{pageName}</p>
        </Link>
        <FaAngleRight className='mt-[5px]'/>
        <p className='first-letter:uppercase'>{window.location.pathname.replace("/","")}</p>
        </Flex>
        <Flex className="mt-[127px]">
        <p className='font-dm font-normal'>Have a coupon? </p>
        <p className='font-bold font-dm pl-2'> Click here to enter your code</p>
        </Flex>
        <SubHeading text="Billing Details" className="mt-[119px]"/>
        <Flex className="gap-x-7">
        <div className='w-48'>
            <InputForm title="First Name *" placeholder="First Name" type="text"/>
        </div>
        <div className='w-48'>
            <InputForm title="Last Name *" placeholder="Last Name" type="text"/>
        </div>
        </Flex>
        <div>
            <InputForm title="Companye Name (optional)" placeholder="Company Name" type="text"/>
        </div>
        <div>
            <InputForm title="Country *" placeholder="Please select" type="text"/>
        </div>
        <div>
            <InputForm title="Street Address *" placeholder="House number and street name" type="text"/>
            <InputForm placeholder="Apartment, suite, unit etc. (optional)" type="text"/>
        </div>
        <div>
            <InputForm title="Town/City *" placeholder="Town/City" type="text"/>
        </div>
        <div>
            <InputForm title="County (optional)" placeholder="County" type="text"/>
        </div>
        <div>
            <InputForm title="Post Code *" placeholder="Post Code" type="text"/>
        </div>
        <div>
            <InputForm title="Phone *" placeholder="Phone" type="text"/>
        </div>
        <div>
            <InputForm title="Email Address *" placeholder="Email" type="email"/>
        </div>
        <SubHeading text="Additional Information" className="mt-[129px]"/>
        <div>
            <InputForm title="Other Notes (optional)" placeholder="Notes about your order, e.g. special notes for delivery." type="text"/>
        </div>
        <SubHeading text="Your Order" className="mt-[130px] mb-[48px]"/>
        <div>
          <table className='border-collapse w-[50%]'>
            <tr>
                <th className='border-[2px] border-solid border-[#dddddd] h-[54px] text-left pl-[10px]'>Product</th>
                <th  className='border-[2px] border-solid border-[#dddddd]  h-[54px] text-left pl-[10px]'>Total</th>
            </tr>
            <tr>
                <td  className='border-[1px] border-solid border-[#dddddd]  h-[54px] pl-[10px]'>Product name x 1</td>
                <td  className='border-[1px] border-solid border-[#dddddd]  h-[54px] pl-[10px]'>389.99 $</td>
            </tr>
            <tr>
                <td  className='border-[1px] border-solid border-[#dddddd]  h-[54px] pl-[10px]'> Subtotal</td>
                <td  className='border-[1px] border-solid border-[#dddddd]  h-[54px]'>389.99 $</td>
            </tr>
            <tr>
                <td  className='border-[1px] border-solid border-[#dddddd]  h-[54px] pl-[10px]'>Total</td>
                <td  className='border-[1px] border-solid border-[#dddddd]  h-[54px] pl-[10px]'>389.99 $</td>
            </tr>
          </table>
        </div>
    </Container>
  )
}

export default CheckOut