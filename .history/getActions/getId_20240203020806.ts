import prisma from '../../prisma/prismadb'
interface Iparams {
    id: string
}

export default async function getId(params: Iparams){
    const {id} = params
    const t = await prisma?.blog.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true
        }
    })
    return t

}