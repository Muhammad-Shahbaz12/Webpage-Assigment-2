import React from 'react'

const Buttom = () => {
  return (
    <div className='flex flex-wrap  w-[180px]  relative right-0 gap-1 flex-row-reverse'>
        <button className=' bg-blue-500 w-[56px]  text-[12px] rounded-[10%] sm:w-[65px] 
        sm:text-[15px] md:w-[75]  md:text-[15px] xl:w-[85px]  xl:text-[18px]
         2xl:w-[90]  text-white text-center  
         py-2  hover:text-black  hover:bg-white'>Join Us</button>
        <button className=' w-[56px]  text-[12px] rounded-[10%] sm:w-[65px] 
        sm:text-[15px] md:w-[75]  md:text-[15px] xl:w-[85px]  xl:text-[18px]
         2xl:w-[90]   text-white hover:bg-blue-500  hover:text-black'>login</button>
    </div>
  )
}

export default Buttom