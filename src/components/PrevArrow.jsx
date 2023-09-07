import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import Flex from './Flex';

const PrevArrow = (props) => {

    const { className, style, onClick } = props;
    // console.log("prev", props)
  return (
    <div
      className={`flex bg-[#979797] w-16 h-16 rounded-full inline-block justify-center items-center text-white cursor-pointer ${className}`}
    //   style={{ ...style, display: "inline-block", background: "green" }}
      onClick={onClick}
    >
        <BsArrowLeft className={`${className}`}/>
    </div>
  );
}

export default PrevArrow