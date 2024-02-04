"use client"
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'




function Nav({currentUser}: any) {
  return (
    <div>
      <header>
         <nav className='bg-gray-400 flex justify-between px-4 py-6 shadow-xl'>
          <div className='flex flex-col space-y-2'>
            <h2 className='font-extrabold text-xl md:text-2xl text-slate-600'>Bincom Emergency Center</h2>
            <h2>{currentUser.name}</h2>
          </div>
            

            <div className='flex gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/create'>Create</Link>
            {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Nav