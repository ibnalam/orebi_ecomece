import  Container  from '../components/Container'
import React from 'react'
import Brabcrumb from '../components/Layout/Brabcrumb'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../slice/counterslice'
import SubHeading from '../components/SubHeading'





const Sign = () => {
   

    
    

  return (
    
    <Container>
        <SubHeading text="Sign Up"/>
        <p className='first-letter:uppercase'> {window.location.pathname.replace("/", "/ ".replace("-", " "))}</p>
    </Container>
  )
}

export default Sign