import List from "./components/List"
import Image from "./components/Image"
import Logo from "./assets/Logo.webp"
import Facility from "./components/Facility"
import SubHeading from "./components/SubHeading"
import PortionHeading from "./components/PortionHeading"
import Button from "./components/Button"
import Product from "./components/Product"
import "./App.css"
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PrevArrow from "./components/PrevArrow"
import NextArrow from "./components/NextArrow"
import { useState } from "react"
import InputForm from "./components/InputForm"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Test from "./components/Test"
import Rootlayout from "./components/Rootlayout"
import ErrorPage from "./Pages/ErrorPage"
import Sign from "./Pages/Sign"
import LogIn from "./Pages/LogIn"
import Contucts from "./Pages/Contucts"
import CheckOut from "./Pages/CheckOut"



const router = createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route
      path="/"
      element={<Rootlayout />}
      >


    <Route
        path="/"
        element={<Test />}
        >
    </Route>
    <Route
        path="/shop"
        element={<Product />}
    >
  </Route>
  <Route
        path="/sign-up"
        element={<Sign />}
    >
  </Route>
  <Route
        path="/contucts"
        element={<Contucts />}
    >
  </Route>
  <Route
        path="/log-in"
        element={<LogIn />}
    >
  </Route>
  <Route
        path="/checkout"
        element={<CheckOut/>}
    >
  </Route>
  
  <Route
        path="/*"
        element={<ErrorPage />}
    >
  </Route>
  





    </Route>


  </>
  )
);


function App() {


  // const settings = {
  //   arrows: true, 
  //   centerMode: true,
  //   centerPadding: "0px",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />
  // };
  // console.log(data)





  return (
    <>            

  <RouterProvider router={router} />
  








  
    
    
    













{/* <InputForm placeholder="please enter a number " type="password" title="first name"/>
    <InputForm placeholder="Email" type="email" title="first name"/> */}  
    {/* <List text="List Item" clasName=""/> */}
    {/* <Image src={Logo} className="w-96"/> */}
    {/* <Facility/> */}
    {/* <SubHeading text="Ibn Alam" className="text-49"/> */}
    {/* <PortionHeading text="Arafat Islam" className="text-1xl"/> */}
    {/* <Button text="Read more" className=""/> */}
{/* 
   <div className="w-[300px]">
   <Product heading="Basic Crew Neck Tee"/>
   <Product heading="Basic Crew Neck Tee"/>
   </div>

   <Slider {...settings}>
          <div>
            <Product/>
          </div>
          <div>
          <Product/>
          </div>
          <div>
          <Product/>
          </div>
          <div>
          <Product/>
          </div>
          <div>
          <Product/>
          </div>
          <div>
          <Product/>
          </div>
        </Slider>
         */}







    </>
  )        
}

export default App
