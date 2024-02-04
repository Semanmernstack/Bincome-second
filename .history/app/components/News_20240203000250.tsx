import { Blog, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
interface H {
    
    data: Blog
    currentUser: User
}

function News({data, currentUser}:H) {
  return (
    <div>
      <div>
        <h2>{data.accident}</h2>
        <Image width={260} height={260} src={data.imageSrc}  alt=""
          className='object-contain rounded-md'
        />
      </div>
        <div>
            <h2>{data.name}</h2>
        </div>
    </div>
  )
}

export default News