"use client"
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'




function Nav({currentUser}: any) {
  return (
    <div>
      <header className='p-3 '>
         <nav className='bg-gray-400 flex items-center justify-between p-4 py-63shadow-xl'>
          <div className=''>
            <h2 className='font-extrabold text-sm md:text-2xl text-slate-600'>Bincom Emergency Center</h2>
            
          </div>
            
            <div className='flex flex-col text-xs sm:text-lg '>
            <div className='flex items-center justify-center gap-1 md:gap-2'>
              <Link href='/'>Home</Link>
              <Link href='/create'>Create</Link>
              {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}
            </div>
              <div className='flex text-center justify-center' >
                <h2>{currentUser.name}</h2>
              </div>
            </div>
            
        </nav>
    </header>
    </div>
  )
}

export default Nav