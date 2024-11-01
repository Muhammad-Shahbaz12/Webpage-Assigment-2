import React from 'react'
import Navbar from './component/navbar'
import Buttom from './component/button'
import Card from './component/card'

const Homepage = () => {
  return (

    <div className=' w-[100wh]  h-screen bg-slate-900 '>
      <div className='flex flex-row  gap-3 px-auto mx-auto items-center justify-center font-sans py-2'>
      <div className=' w-[250px] h-[45px]'><h1 className='text-white text-[18px] lg:text-[22px] font-sans
       font-bold xl:text-[23px] ps-5 2xl:text-[25px] pl-0  text-center justify-center my-auto py-2'>BrandName</h1></div>
      <div className=' w-[550px]  h-[45px]'><Navbar/></div>
      <div className=' w-[250px] h-[45px] '><Buttom/></div>
      </div>
    
      <div className='  w-[300px] h-52 flex flex-col  justify-center items-center text-center mx-auto px-aut0 '>
      <h1 className=' text-blue-700 py-2 text-[9px]  font-bold text-center justify-center pt-[20px]'>Welcome</h1>
        <h1 className='text-3xl text-white font-sans font-bold text-center justify-center'>Selling on the</h1> 
          <h1 className='text-3xl text-white font-sans font-bold text-center justify-center py-1'>internet like a 
      pro</h1>
      <p className='text-[12px] font-sans ps-3 text-white  text-center justify-center py-2'>We know how large object will act.but things on a small scale just do not act that way.</p>
      </div>
      <div className=' w-[250px] mx-auto  flex flex-wrap text-center justify-center gap-2  pb-2 '>
        <button className='bg-blue-700  rounded-sm text-[9px] lg:px-5  text-white  relative py-[5px] shadow-lg px-2
         hover:bg-white hover:text-black'><h2>Get Quata Now</h2></button>
        <button className='text-blue-900 rounded-sm border  text-[9px] border-blue-700 shadow-[0 0 15px 2px to-blue-700]
          relative py-[5px] shadow-[0px 0px 15px 2px to-blue-600] px-2 lg:px-5 hover:bold hover:bg-blue-500 font-bold hover:text-white'><h2>Learn More</h2></button>
      </div>
      <div className=' w-[90%] h-[150px] flex lg:gap-3 place-items-center justify-center mx-auto  py-[45px] lg:py-[90px] '>
        <Card/>
      </div>
    </div>
    
  )
}

export default Homepage




{/* <div className="grid grid-cols-4 gap-3">
      <div className='bg-slate-400 w-[250px] h-[45px] '></div>
      
      <div className='bg-green-400 w-[550px] h-[45px]  '></div>
    
      <div className='bg-red-400 w-[250px] h-[45px] '></div>
    </div> */}