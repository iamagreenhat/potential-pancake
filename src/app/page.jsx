import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
     {/* <main className="h-screen flex items-center justify-center">
      <SignInModal/>
    </main> */}
    </div>
  )
}

export default page
