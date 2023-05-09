import React from 'react'
import image from "../../images/image-intro-desktop.jpg"
import imageM from "../../images/image-intro-mobile.jpg"


// import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='intro lg:flex flex-row-reverse  justify-center items-center  text-white  bg-[#2d2640]    '>
        <div className='intro lg:flex flex-row-reverse  justify-center items-center  text-white     '>

          <div className="images  lg:translate-y-[7.5rem] ">
            {/*<img className='w-[90%] ' src={image} alt="" />*/}
            <picture className='  '>
              <source media="(min-width:768px)" srcSet={image} />
              <img className='block ml-auto mr-auto w-full  sm:w-[60%] sm:block sm:ml-auto sm:mr-auto lg:w-[100%] md:block md:ml-auto md:mr-auto md:w-[70%] ' src={imageM} alt="sd" />
            </picture>
          </div>
          <div className="  pr-10 p-10   lg:w-1/2">
            <hr className='hidden w-20 mb-10 h-2 mx-20 ml-[25px] lg:block' />

            <div className='text-padding flex flex-col justify-center lg:block sm:px-5   '>
              <h1 className='headings  text-center text-3xl lg:text-left lg:text-6xl '> Humanizing  your insurance.</h1>
              <p className=' py-7 lg:my-5 text-center lg:text-left '> Get your life insurance coverage easier and faster. We blend our expertise 
                and technology to help you find the plan that’s right for you. Ensure you  and your loved ones are protected.
              </p>
              <button className='btn_hero btn uppercase py-2 px-6 '>View plans</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero