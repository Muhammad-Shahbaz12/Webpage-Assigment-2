import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div className='text-white  font-sans flex flex-wrap gap-[5px]
     text-[13px] text-center justify-center mx-auto 
     px-auto py-3 ps-2 sm:gap-1 sm:text-[15px] lg:gap-4 lg:text-[15px] xl:gap-5 xl:text-[18px] '> 
        <Link className='hover:bg-blue-500 hover:text-black hover:w-20 hover:rounded-sm' href={'/'}>Home</Link><br />
        <Link className='hover:bg-blue-500 hover:text-black hover:w-20 hover:rounded-sm 'href={'/product'}>Product</Link><br />
        <Link className='hover:bg-blue-500 hover:text-black hover:w-20 hover:rounded-sm 'href={'/pricing'}>Pricing</Link><br />
        <Link className='hover:bg-blue-500 hover:text-black hover:w-20 hover:rounded-sm'href={'/contact'}>Contact</Link><br />

    </div>
  )
}

export default Navbar