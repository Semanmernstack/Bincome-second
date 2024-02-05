import { getServerSession } from 'next-auth'

import { authOptions } from '../app/lib/options';
import prisma from '../prisma/prismadb'

export default async function getCurrentUser() {
    try {
        const session = await getServerSession(authOptions);
        if(!session?.user?.email){
            return null;
        }
        
        const currentUser = await prisma.user.findUnique({
            where: {
                email:  session.user?.email as string,
            }
        })

        if (!currentUser) {
            return null
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),

        }


    } catch (error: any) {
        return null
        
    }
}