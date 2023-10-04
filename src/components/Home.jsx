import Container from './Container'
import React from 'react'
import { Link } from 'react-router-dom'
import SubHeading from './SubHeading'
import Flex from './Flex'
import Product from './Product'
// import { useDispatch } from 'react-redux'

const Test = () => {
  // let dispatch = useDispatch()

  return (
    <Container>
      <SubHeading text="New Ariivals"/>
      <Flex>
        <div className='w-23'>
          <Product heading="product 1"/>
        </div>
        <div className='w-23'>
        <Product heading="product 2"/>
        </div>
        <div className='w-23'>
        <Product heading="product 3"/>
        </div>
        <div className='w-23'>
           <Product heading="product 4"/>
        </div>
      </Flex>
    </Container>     
  )
}

export default Test