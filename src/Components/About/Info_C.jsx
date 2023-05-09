import React from 'react'


const Info_C = (props) => {
    return (
        <>
            <div className=' max-w-[26rem]'>
                <div className="box  ">
                    <img className='block ml-auto mr-auto lg:ml-0' src={props.image} alt="" />
                    <h2 className='my-10 text-3xl headings text-center lg:text-left'>{props.title}</h2>
                    <p className='text-center lg:text-left'>{props.text}</p>
                </div>
            </div>
        </>
    )
}
export default Info_C