import React from 'react'
import Image from './Image'

const Sale = (image) => {
  return (
    <Image src={`http://localhost:1337${image}`} className="w-full"/>
  )
}

export default Sale