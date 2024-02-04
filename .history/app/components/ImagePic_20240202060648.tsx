"use client";
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useCallback } from 'react'
import {   TbPhotoPlus}  from 'react-icons/tb'

declare global {
  var cloudinary: any;
}
interface P {
  onChange: (value: string) => void
  value: string
}

function ImagePic({onChange, value}:P) {
  
  const handleUpload = useCallback ((result:any) => {
    onChange(result.info.secure_url)
  },[onChange])

  return(  
    <CldUploadWidget
    
    onUpload={handleUpload}
    uploadPreset='xbrrymoe'
    options={{
        maxFiles:2
    }}
    >
       {({open}) => {
            return (
                <div onClick={() => open?.()} className='relative cursor-pointer hover:opacity-70 border-dashed border-2  flex flex-col justify-center items-center w-[24] h-[50px] '>
                    <TbPhotoPlus/>        
                    <div className='text-lg'>
                        Click to upload
                    </div>

                    {value && (
                        <div className='absolute inset-0 w-full h-full'>
                            <Image alt='upload' fill style={{objectFit:'cover'}} src={value}/>
                        </div>
                    )}
                </div>
            )
        }}

    </CldUploadWidget>
  )
}

export default ImagePic