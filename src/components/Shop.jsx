import Container from '../components/Container'
import React, { useEffect, useState } from 'react';
import Flex from './Flex'
import Pagination from './Pagination'
import Product from './Product'
import ProductBanner from './ProductBanner'
import SubHeading from './SubHeading';
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
// import Product from './Product'
// import ReactPaginate from 'react-paginate';


const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };
  const pageName = useSelector((state)=>state.breadcrumbSlices.previousname)
  return (
    <Container>
      <div className='mt-[124px]'>
        <SubHeading text="Products"/>
        <Flex className="items-center">
        <Link to={pageName == "Home" ? "/":`/${pageName.toLowerCase()}`}>
            <p>{pageName}</p>
        </Link>
        <FaAngleRight className='mt-[5px]'/>
        <p className='first-letter:uppercase'>{window.location.pathname.replace("/","")}</p>
        </Flex>
      </div>
        <Flex className="mt-[120px]">
            <div className='w-1/4'>
                <Product/>
            </div>
            <div className='w-3/4'>
              <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner}/>
              <div className='mt-[60px]'>  
              <Pagination itemsPerPage={itemsPerPage}/>   
              </div>
            </div>
        </Flex>
    </Container>
  )
}

export default Shop