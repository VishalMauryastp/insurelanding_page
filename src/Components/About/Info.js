import React from 'react'
import Snappy from "../../images/icon-snappy-process.svg"
import Affordable from "../../images/icon-affordable-prices.svg"
import People from "../../images/icon-people-first.svg"
import Info_C from './Info_C'

const Info = () => {
    return (
        <>
            <section>
                <div className=' mt-20 lg:mt-[17rem] px-10 lg:px-36' >
                  <hr className='hidden w-20 h-8 my-5 lg:-mt-20   lg:block ' />

                    <h2 className='text-5xl headings text-center lg:text-left '>  We’re different</h2>
                    <div className='flex gap-10 flex-col  items-center justify-center lg:flex-row my-20  ' >


                        <Info_C
                            image={Snappy}
                            title={"Snappy Process"}
                            text={"Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."}
                        />
                        <Info_C
                            image={Affordable}
                            title={"Affordable Prices"}
                            text={"We don’t want you worrying about high monthly costs. Our prices may be low,but we still offer the best coverage possible."}
                        />
                        <Info_C
                            image={People}
                            title={" People First"}
                            text={"Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."}
                        />
                       

                    </div>
                </div>





            </section>
        </>

    )
}

export default Info