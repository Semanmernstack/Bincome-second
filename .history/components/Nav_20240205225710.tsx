"use client"
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'




function Nav({currentUser}: any) {
  return (
    <div>
      <header className=''>
         <nav className='bg-gray-400 flex items-center justify-between p-4 py-6 shadow-xl'>
          <div className=''>
            <h2 className='font-extrabold text-sm lg:text-xl text-slate-600'>Bincom 911 Center</h2>
            
          </div>
            
            <div className='flex flex-col text-xs sm:text-lg space-y-3 '>
            <div className='flex items-center justify-center gap-1 md:gap-2'>
              <Link href='/'>Home</Link>
              <Link href='/create'>Create</Link>
              {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}
            </div>
              <div className='flex text-center justify-center' >
                <h2>{currentUser?.name}</h2>
                <h1>hh</h1>
              </div>
            </div>
            
        </nav>
    </header>
    </div>
  )
}

export default Nav