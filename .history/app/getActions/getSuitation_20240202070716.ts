import prisma from '../../prisma/prismadb'
export default async function getSituation() {
    try {
        const report = await prisma?.blog.findMany({ 
           orderBy: {
            createdAt: 'desc'
           } 
        })
        
    } catch (error) {
        
    }
}
    