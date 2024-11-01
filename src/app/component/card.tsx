import React from 'react'

const Card = () => {
  return (
    <div className=' flex  flex-row gap-3  '>
        <div className=' w-[150px] h-[120]  bg-white lg:w-[200px] lg:h-[150px] lg:bg-white  relative'>
            <div className='w-[140px] h-[140px] absolute  top-4 left-6'>
                <div className='w-[35px] h-[35px] bg-red-400 rounded-lg'></div>
                 <h1 className=' text-[12px] py-2 font-bold '>Training Courses</h1>
                    <div className='w-[26px] h-[4px] bg-red-600  '></div>
        <p className=' text-[9px] lg:py-2 justify-center lg:leading-4'>The grident accumuiation of information about atomic and small scale behaviour</p>
                </div>
        </div>


        <div className='w-[150px] h-[150] lg:w-[200px] lg:h-[150px] bg-white relative'>
            <div className='w-[140px] h-[140px] absolute top-4 left-6'>
                <div className='w-[35px] h-[35px] bg-green-400  rounded-lg'></div>
                 <h1 className=' text-[12px] py-2 font-bold  '>2,739 Online Courses</h1>
                    <div className='w-[26px] h-[4px] bg-red-400  '></div>
        <p className=' text-[9px] py-2 justify-center leading-2 '>The grident accumuiation of information about atomic and small scale behaviour</p>
                </div>
        </div>


        <div className='w-[150px] h-[150] lg:w-[200px] lg:h-[150px] bg-blue-600 relative'>
            <div className='w-[140px] h-[140px]  absolute top-4 left-6'>
                <div className='w-[35px] h-[35px] bg-white rounded-lg'></div>
                 <h1 className=' text-[12px] py-2 font-bold  text-white'>trining Courses</h1>
                    <div className='w-[26px] h-[4px] bg-white'></div>
        <p className=' text-[9px] lg:py-2 justify-center leading-4 text-white'>The grident accumuiation of information about atomic and small scale behaviour</p>
                </div>
        </div>





    </div>
  )
}

export default Card



