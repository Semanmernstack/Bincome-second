import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/route';

export default async function getCurrentUser() {
    try {
        const session = await getServerSession(authOptions);
        if(!session?.user?.email){
            return null;
        }
        const currentUser = await prisma?.user.findUnique({
            where: {
                email:  session?.user?.email as string,
            },
        })

        if (!currentUser) {
            return
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),

        }


    } catch (error) {
        return null
        
    }
}