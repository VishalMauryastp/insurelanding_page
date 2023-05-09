import React from 'react'
import Logo from "../../images/logo.svg"
import Facebook from "../../images/icon-facebook.svg"
import Twitter from "../../images/icon-twitter.svg"
import Pinterest from "../../images/icon-pinterest.svg"
import Intagram from "../../images/icon-instagram.svg"
import Footer from './Footer'



const Footer_A = () => {
    return (
        <>
            <section className=' '  >
                <section className='flex justify-center items-center flex-col'>
                    <div className=' flex flex-col lg:flex-row  lg:justify-between items-center  mt-56 lg:mt-0 lg:w-[80%]  '>
                        <img src={Logo} alt='logo' />
                        <div className=' flex  gap-5 py-12'>
                            <img src={Facebook} alt='facebook' />
                            <img src={Twitter} alt='twitter' />
                            <img src={Pinterest} alt='pinterest' />
                            <img src={Intagram} alt='intagram' />
                        </div>
                    </div>
                    <hr className='h-1 w-[80%]  bg-red-500' /> 


                </section>
                <section className='flex justify-center items-center py-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10  lg:gap-30 md:w-[80%] '>
                        <div className='w-full '>
                            <Footer
                                title={"Our company"}
                                p1={"How we work"}
                                p2={"Why Insure?"}
                                p3={"View plans"}
                                p4={"Reviews"}
                            />

                        </div>
                        <div className='w-[100%] m'>
                            <Footer
                                title={"Help me"}
                                p1={"FAQ"}
                                p2={"Terms of use"}
                                p3={"Privacy policy"}
                                p4={"Cookies"}
                            />

                        </div>
                        <div className='w-[100%] m'>
                            <Footer
                                title={"Contact"}
                                p1={"Sales"}
                                p2={"Support"}
                                p3={"Live chat"}
                                p4={""}
                            />

                        </div>
                        <div className='w-[100%] m'>
                            <Footer
                                title={"Others"}
                                p1={"Careers"}
                                p2={"Press"}
                                p3={"Licenses"}
                                p4={""}
                            />

                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}

export default Footer_A