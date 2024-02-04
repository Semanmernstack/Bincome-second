import { Blog, User } from '@prisma/client'
import React from 'react'
interface H {
    key: string
    data: Blog
    currentUser: User
}

function News({data, currentUser, key}:H) {
  return (
    <div>
        <div>
            <h2>{data.name}</h2>
        </div>
    </div>
  )
}

export default News