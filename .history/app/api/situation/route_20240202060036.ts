import getCurrentUser from "@/app/getActions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '../../../prisma/prismadb'

export default async function POST (request: Request) {

    const body = await request.json()
    const currentUser = await getCurrentUser()
    const {name, imageSrc, accident, description} = body

    const l = await prisma.blog.create({
        data: {
            name, 
            imageSrc, 
            accident, 
            description,
            userId: currentUser.id,

        },
    })

    return NextResponse.json(l)

}