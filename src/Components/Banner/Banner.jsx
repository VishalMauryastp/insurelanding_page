import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='flex justify-center items-center my-20'>
        <div className=' bg-[#2d2640]   flex flex-col  items-center lg:flex-row py-16 w-[90%]  lg:w-[80%] lg:flex lg:justify-between lg:items-center  lg:py-16 lg:px-14'>
          <p className='headings text-4xl text-center text-white lg:text-left'>Find out more <br /> about how we work</p>
          <button className=' mt-10 border-2 border-white uppercase   text-white  px-6 py-2  lg:mt-0'>how we work</button>
        </div>
      </section>

    </>
  )
}

export default Banner