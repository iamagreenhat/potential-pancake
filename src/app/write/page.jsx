"use client"
import Navbar from '@/components/Navbar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function WritePage() {
    const session=useSession()
    console.log(session)

console.log("this is the session", session)
const router=useRouter()
if(session?.status=="unauthentiacted"){
    // route the user to the index(login page)
    router.replace('/')
    return 
}   
  return (
    <div>
        <Navbar/>
        <h1>Dashbaord</h1>
    </div>
  )
}
