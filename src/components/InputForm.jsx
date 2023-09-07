import React from 'react'

const InputForm = ({title,placeholder,type}) => {
  return (
    <>
        <h5 className='font-dm font-bold text-base m-0'>{title}</h5>
        <input className='border-b border-solid  border-offwhite placeholder:font-dm placeholder:font-normal placeholder:text-sm py-2' placeholder={placeholder} type={type} />
    </>
  )
}

export default InputForm