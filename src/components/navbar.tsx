import Link from 'next/link'
import React from 'react'
// import { BsSearch } from 'react-icons/fa';


export default function Navbar() {
  return (
    <div className=' backdrop-filter backdrop-blur-sm flex justify-between p-5 bg-none relative items-center'>
<div>
    Logo
</div>
<div className='flex space-x-4 justify-center'>
    <Link href={""} className='font-semibold text-xl text-white no-underline'>About us</Link>
    <Link href={""} className='font-semibold text-xl text-white no-underline'>Experience</Link>
    <Link href={""} className='font-semibold text-xl text-white no-underline'>Cotanct us</Link>
    <button className="bg-transparent border border-1 py-1 px-4 text-white font-semibold text-xl rounded-none ">Book Now</button>
    {/* <BsSearch /> */}
</div>
    </div>
  )
}
