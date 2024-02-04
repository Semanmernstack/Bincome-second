import prisma from '../../prisma/prismadb'
export default async function getBlogs() {
    try {
        const report = await prisma?.blog.findMany({ 
           orderBy: {
            createdAt: 'desc'
           } 
        })
        
    } catch (error) {
        
    }
}
    