import React from 'react'

const Heading = (props) => {
  return (
    <>
        <div className='flex flex-col items-center w-full'>
            <h2 className='text-[32px] font-medium leading-[39px] text-[#ffffff] italic'>{props.mainHeading}</h2>
            <h3 className='text-[#F2D059] text-[32px] font-medium leading-[41px]'>{props.subHeading}</h3>
        </div>
    </>
  )
}

export default Heading