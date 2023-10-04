import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.webp'
import Container from '../Container'
import List from '../List'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { pageName } from '../../slice/breadcrumbSlices'

const Navber = () => {

    
    
    let dispatch = useDispatch()
       let handlebreadcrumb = (name)=>{
        dispatch(pageName(name))
    }
    
       
  return (
   <nav className='py-8'>
    <Container>
     <Flex>
        <div className='w-1/5'>
            <Image src={Logo}/>
        </div>
        <Flex className='w-4/5 justify-end'>
            <ul className='flex gap-x-10'>
                <Link onClick={()=> handlebreadcrumb("Home")} to="/">
                    <List text="Home"/>
                </Link>
                <Link onClick={()=> handlebreadcrumb("Shop")} to="/shop">
                    <List text="Shop"/>
                </Link>
                <List text="About"/>
                <Link onClick={()=> handlebreadcrumb("Contucts")} to="/Contucts">
                    <List text="Contucts"/>
                </Link>
                <Link onClick={()=> handlebreadcrumb("Log-in")} to="/log-in">
                    <List text="Log in"/>
                </Link>
            </ul>
        </Flex>
    </Flex>
   </Container>
   </nav>
  )
}

export default Navber