"use client";
import { CldUploadButton } from "next-cloudinary";
import React from 'react'

function imagePic() {
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

export default imagePic