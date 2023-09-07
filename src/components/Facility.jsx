import React from 'react'
import { AiFillCar } from 'react-icons/ai';
import Iconreturn from './icon/Iconreturn';
import Flex from './Flex'


// AiFillCar
const Facility = () => {
  return (  
    <Flex className="items-center gap-x-4">
        {/* <AiFillCar/> */}
        <Iconreturn/>
        <p className='font-dm text-red-200 font-normal text-base '>Two years warrenty</p>
    </Flex>
  )
}

export default Facility