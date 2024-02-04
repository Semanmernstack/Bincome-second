"use client"
import { Blog, User } from '@prisma/client'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
interface H {
    key: string
    name: string
    id: string
    accident: string
    description: string 
    imageSrc: string
    userId: string
    currentUser?: User | null
}

function Newss({id, userId, name, accident, imageSrc, description, currentUser}: H) {

  const router = useRouter()

  const onDelete = () => {
    axios.delete(`/api/situation/${id}`) 
      .then(() => {
        router.refresh()

      })
      .catch(() => {
        
      })
  }

  return (
      <div className='p-4 flex flex-col border border-2 space-y-3'>
        <div className='flex flex-col p-3 bg-blue-500'>
          <div className='flex flex-col gap-2'>
            <h2 className='flex items-center justify-center text-grey-400 font-sn   font-extrabold'>{accident}</h2>
            <Image width={300} height={300} src={imageSrc}  alt=""
              className='object-contain rounded-md'
            />
          </div>
          <div className='p-2'>
            <h2 className='text-sm sm:text-lg font-bold'>{name}</h2>
            <h2 className='text-sm italic'>{description}</h2>
          </div>
        </div>
        <div>
        {userId === currentUser?.id  &&  ( 
          <div className='flex items-center justify-center gap-2 '>
            
            <span className='text-xs text-red-400 font-light'>Remove this post if its a wrong info</span>
            <button className="bg-red-800 p-1 rounded-lg text-xs sm:text-lg rounded-sm" onClick={onDelete}>Delete</button> 
            
          </div>
          
        )}
        </div>
       

      
      </div>
  
    
  )
 }

export default Newss