import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import Flex from './Flex';

const PrevArrow = (props) => {

    const { className, style, onClick } = props;
    // console.log("prev", props)
  return (
    <div
    className={`flex justify-center items-center w-16 h-16 rounded-full bg-[#979797] cursor-pointer ${props.class}`}
      // style={{ ...style, display: "inline-block", background: "green" }}
      onClick={onClick}
    >
        <BsArrowLeft className={`${className}`}/>
    </div>
  );
}

export default PrevArrow