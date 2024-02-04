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
      <div>
        <div>
          <div>
            <h2>{accident}</h2>
            <Image width={260} height={260} src={imageSrc}  alt=""
              className='object-contain rounded-md'
            />
          </div>
          <div>
            <h2>{name}</h2>
            <h2>{description}</h2>
          </div>
        </div>
        <div>
        {userId === currentUser?.id  &&  ( 
          <div >
            <span>Remove this post if its wrong info</span>
            <button className="bg-red-400 px-6 py-2" onClick={onDelete}>Delete</button> 
          </div>
          
        )}
        </div>
       

      
      </div>
  
    
  )
 }

export default Newss