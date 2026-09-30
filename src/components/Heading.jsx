import React from 'react'

const Heading = ({name, heading, description}) => {
  return (
    <div>
      <h4 className=' font-inter font-medium text-[16px] leading-6 text-blue'>{name}</h4>
      <h2 className=' py-3 font-inter font-bold text-[44px] leading-13.5 text-primary'>{heading}</h2>
      <p className=' font-poppins font-light text-[16px] leading-6 text-secondary'>{description}</p>
    </div>
  )
}

export default Heading
