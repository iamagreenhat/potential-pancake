import Link from 'next/link';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import SignInModal from './SignInModal';

export default function Navbar() {
  return (
    <div className=' flex'>
        <div className='flex text-white justify-between  bg-black w-[100vw] h-[80px] items-center border border-gray-800'>
            <div className='pl-[90px]'>
                <h1 className='text-2xl font-bold'>Home</h1>
            </div>
            <div className=''>
                <input className='w-[600px] h-[40px] rounded-full  border-none bg-emerald-950' type="Search"  placeholder='  Search Substack'/>
            </div>
            <div className='mr-[20px] flex gap-[20px]'>
                <SignInModal/>
                {/* <button className='bg-emerald-950 text-white py-[10px] px-[15px] rounded-xl'>Sign in</button> */}
                <Link href=''><button className='bg-amber-600 text-white py-[10px] px-[15px] rounded-xl'>Create account</button></Link>
                {/* <button className='bg-amber-600 text-white py-[10px] px-[15px] rounded-xl'>Create account</button> */}
            </div>
        </div>
      g
    </div>
  )
}
