import React from 'react'

const Footer = (props) => {
  return (
    <>
    <div className='uppercase text-[#2d2640] '>
    <h3 className='headings text-center lg:text-left text-[#837d87]'>{props.title}</h3>
    <p className='my-3 text-center  lg:text-left' >{props.p1}</p>
    <p className=' text-center  lg:text-left'>{props.p2}</p>
    <p className='my-3 text-center  lg:text-left'>{props.p3}</p>
    <p className=' text-center  lg:text-left'>{props.p4}</p>
    </div> 
    </>
  )
}

export default Footer