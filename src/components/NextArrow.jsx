import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
      className={`flex justify-center items-center w-16 h-16 rounded-full bg-[#979797] cursor-pointer ${props.class}`}
      // style={{ ...style, display: "inline-block", background: "green" }}
      onClick={onClick}
    >
        <BsArrowRight className={`${className}`}/>
    </div>
    );
}
                                    
export default NextArrow