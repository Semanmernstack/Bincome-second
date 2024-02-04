import prisma from '../../prisma/prismadb'
import React from 'react'



export default async function getSuitation() {
    const b = await prisma.blog.findMany({
        orderBy: {
            createdAt: 'desc'
          },

       
    })
  }