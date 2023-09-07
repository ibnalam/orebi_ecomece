import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
      className={`flex bg-[#979797] w-16 h-16 rounded-full inline-block justify-center items-center text-white cursor-pointer ${className}`}
    //   style={{ ...style, display: "inline-block", background: "green" }}
      onClick={onClick}
    >
        <BsArrowRight className={`${className}`}/>
    </div>
    );
}
                                    
export default NextArrow