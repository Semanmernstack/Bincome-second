import { Blog, User } from '@prisma/client'
import React from 'react'
interface H {
    
    data: Blog
    currentUser: any
}

function News({data, currentUser}:H) {
  return (
    <div>
        <div>
            <h2>{data.blog.name}</h2>
        </div>
    </div>
  )
}

export default News