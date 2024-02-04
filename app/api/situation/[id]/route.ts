import { NextResponse } from "next/server";

import getCurrentUser from "@/app/getActions/getCurrentUser";
import prisma from '../../../../prisma/prismadb'


interface IParams {
    id?:string
}



export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    const currentUser = await getCurrentUser()


    if(!currentUser) {
        return NextResponse.error()
    }

    const {id} = params


    if(!id || typeof id !== 'string') {
        throw new Error('Invalid Id')
    }

    const listing = await prisma.blog.deleteMany({
        where: {
            id:id,
            userId:currentUser.id
        }
    });

    return NextResponse.json(listing)
}

