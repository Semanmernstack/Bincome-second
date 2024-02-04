"use client";
import { CldUploadButton } from "next-cloudinary";
import React from 'react'

function ImagePic() {
  return (
    <div>    
      <CldUploadButton
        options={{ multiple: true }}
        uploadPreset='xbrrymoe'
      >
        <span>
          Upload
        </span>
      </CldUploadButton>
    </div>
  )
}

export default ImagePic