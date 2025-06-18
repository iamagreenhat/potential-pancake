import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <div className='left w-[70px] h-[100vh] fixed bg-black border border-gray-800 justify-center flex'>
        <div className='block mt-[20px] '>
            <div className='flex justify-center items-center'>
                <FaBookmark  className='flex text-3xl text-amber-600 '/>
            </div>
            <div className='mt-[100px] flex flex-col gap-[30px] justify-center items-center '>
                <CiHome className='text-3xl' />
                <CiGrid41 className='text-white text-3xl' />
                <HiOutlineChatBubbleLeft className='text-white text-3xl' />
                <IoIosNotificationsOutline  className='text-white text-3xl'/>
                <CiSearch  className='text-white text-3xl'/>
                

            </div>
            <div>
              <MdAddBox className='text-amber-600 text-7xl mt-[20px]' />

            </div>
        </div>
      
    </div>
  )
}