import React from 'react'

const InputForm = ({title,placeholder,type,className}) => {
  return (
    <>
        <h5 className='font-dm font-bold text-base m-0 mt-6'>{title}</h5>
        <input className={`w-full border-b border-solid  border-offwhite placeholder:font-dm placeholder:font-normal placeholder:text-sm py-2 ${className}` }placeholder={placeholder} type={type} />
    </>
  )
}

export default InputForm