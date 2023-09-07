import React from 'react'

const List = ({text, className}) => {
  return (
    <li className={`font-sm text-sm font-normal ${className}`}>{text}</li>
  )
}

export default List