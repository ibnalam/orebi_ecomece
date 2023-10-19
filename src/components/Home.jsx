import Container from './Container'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SubHeading from './SubHeading'
import Flex from './Flex'
import Product from './Product'
import axios from 'axios'

// Image import Section Start Here  
import Image from './Image'
import saleImgOne from '../../src/assets/saleImgOne.webp'
import saleImgTwo from '../../src/assets/saleImgTwo.webp'
import saleImgThree from '../../src/assets/saleImgThree.webp'
import newArrOne from "../../src/assets/newArrOne.webp"
import newArrTwo from "../../src/assets/newArrTwo.webp"
import newArrThree from "../../src/assets/newArrThree.webp"
import newArrFour from "../../src/assets/newArrFour.webp"
import bestSellerOne from '../../src/assets/best seller/bestSellerOne.webp'
import bestSellerTwo from '../../src/assets/best seller/bestSellerTwo.webp'
import bestSellerThree from '../../src/assets/best seller/bestSellerThree.webp'
import bestSellerFour from '../../src/assets/best seller/bestSellerFour.webp'
import spfOne from '../../src/assets/specialOffer/spfOne.webp'
import spfTwo from '../../src/assets/specialOffer/spfTwo.webp'
import spfThree from '../../src/assets/specialOffer/spfThree.webp'
import spfFour from '../../src/assets/specialOffer/spfFour.webp'
import bannerImgOne from '../../src/assets/banner/bannerImgOne.webp'
import bannerImgTwo from '../../src/assets/banner/bannerImgTwo.webp'
import bannerImgThree from '../../src/assets/banner/bannerImgThree.webp'
import productOfTheYear from '../../src/assets/productOfTheYear.webp'
// Image section End Here 


// Slider Here 
import Slider from "react-slick";
import PrevArrow from '../components/PrevArrow'
import NextArrow from '../components/NextArrow'
// import { useDispatch } from 'react-redux'

const Home = () => {
  const [dotActive, setDocActive] = useState(0);
  console.log(dotActive)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow class="absolute top-1/2 -translate-y-1/2 left-0 z-30"/>,
    nextArrow: <NextArrow class="absolute top-1/2 -translate-y-1/2 right-0 z-30"/>,
  };

  const bannersettings = {
   
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3000,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                borderRight: i === 0 ? '5px solid yellow' : i === 1 ? "5px solid green" : i === 2 ? '5px solid red' : 'white',
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "5px blue solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
      
    ),
   
  };












  // i == 1 ? {
  //   borderRight: "3px #262626 solid",
  //   padding: "8px 0",
  //  }
  // borderRight: dotActive == 0 ? 'red' : 'green',
  //               borderRight: dotActive == 1 ? 'green' : 'gray',
                // borderRight: dotActive == 2 ? 'gray' : 'red',




  return (

<>

<Slider {...bannersettings}>
          <div>
            <Image src={bannerImgOne}/>
          </div>
          <div>
            <Image src={bannerImgTwo}/>
          </div>
          <div>
            <Image src={bannerImgThree}/>
          </div>
        </Slider>
<Container>


      <Flex className="gap-x-6">
        <div className='w-1/2'>
            <Image src={saleImgOne} className="w-full"/>
        </div>
        <div className='w-1/2'> 
            <Image src={saleImgTwo} className="w-full mb-10"/>
            <Image src={saleImgThree} className="w-full"/>
        </div>
      </Flex>


  
      <SubHeading text="New Ariivals"/>

      <Slider {...settings}>
      <div className='w-23'>
          <Product heading="product 1" image={newArrOne}/>
        </div>
        <div className='w-23'>
          <Product heading="product 1" image={newArrOne}/>
        </div>
        <div className='w-23'>
          <Product heading="product 1" image={newArrTwo}/>
        </div>
        <div className='w-23'>
          <Product heading="product 1" image={newArrThree}/>
        </div>
        <div className='w-23'>
          <Product heading="product 1" image={newArrFour}/>
        </div>
        </Slider>

        <div>
          <Image src={productOfTheYear}/>
        </div>




        <SubHeading text="Our Bestsellers"/>

          <Flex className="justify-between">
            <div className='w-23'>
              <Product heading="product 1" image={bestSellerOne}/>
            </div>
            <div className='w-23'>
            <Product heading="product 2" image={bestSellerTwo}/>
            </div>
            <div className='w-23'>
            <Product heading="product 3" image={bestSellerThree}/>
            </div>
            <div className='w-23'>
              <Product heading="product 4" image={bestSellerFour}/>
            </div>
          </Flex>


        <SubHeading text="Special Offers"/>

          <Flex className="justify-between">
            <div className='w-23'>
              <Product heading="product 1" image={spfOne}/>
            </div>
            <div className='w-23'>
            <Product heading="product 2" image={spfTwo}/>
            </div>
            <div className='w-23'>
            <Product heading="product 3" image={spfThree}/>
            </div>
            <div className='w-23'>
              <Product heading="product 4" image={spfFour}/>
            </div>
          </Flex>

    </Container>     

</>



  )
}

export default Home









// let [product,setproduct] = useState([])
// let [sale, setsale] = useState([])
// let [sale2, setsale2] = useState([])
// let [sale3, setsale3] = useState([])

//  useEffect (() => {
//   async function mypro(){
//     let data = await axios.get("http://localhost:1337/api/products?populate=*")
    
//     setproduct(data.data.data)
//     // console.log(data)
   

//   }
//   mypro()
//  },[])
 
//  useEffect (() => {
//   async function mysale(){
//     let sale = await axios.get("http://localhost:1337/api/sales?populate=*")
//     setsale(sale.data.data)
    
//     console.log(sale.data.data)
//   }
//   mysale()
//  },[])













    // cms part here 
    // <Container>
    //   <SubHeading text="New Ariivals"/>
    //   <Flex>
    //     {product.map(item => (
    //     <div className='w-23'>
    //       <Product heading={item.attributes.title} image={item.attributes.image.data.attributes.url} price={item.attributes.price} badge={item.attributes.badge}/>
    //     </div>
    //     ))}
    //   </Flex>
      
    //   <Flex className="mt-[140px] gap-x-5">

    //       {sale.map(item1 => (
    //     <div>
    //         <Image src={`http://localhost:1337${item1.attributes.sale_one.data.attributes.url}`}/>
    //     </div>
    //       ))}
    

    //   </Flex>

    // </Container>     




    // main part here 

