"use client"
import axios  from 'axios'
import ImagePic from '../components/ImagePic'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState } from 'react'
interface InitalStateProps {
    name?:string
    imageSrc:string
    description:string
    accident: string
}   

const initialState:InitalStateProps = {
    name:'',
    imageSrc:'',
    description:'',
    accident:'',
}

function page() {
    const [state, setState] = useState(initialState)
    const [ImageSrc, setImageSrc] = useState("")
    const router = useRouter()
    const handleSubmit = async(event: FormEvent) => {
        event.preventDefault()
        axios.post('/api/situation', state)
        .then (() => {
            router.refresh()
            router.push('/')
        })
        .catch(() => {
            throw Error
        })
    
    }
    function handleChange(event:ChangeEvent<HTMLInputElement> ) {
		setState({ ...state, [event.target.name]: event.target.value });
	}
    const setCustomValue = (id:any, value:any) => {
        setState((prevValues) => ({
          ...prevValues,
          [id]: value,
        }));
      };

  return (
    <div>
        
        <form onSubmit={handleSubmit} className='flex flex-col  w-[400px] sm:[w-500px] h-[700px] mx-auto py-12 gap-2'>
            <div>
                <ImagePic value={state.imageSrc}  onChange={(value) => setCustomValue('imageSrc',value)}   />
            </div>
            <div className='w-full flex flex-col items-center'>
            <div className='p-3 '>
                <label htmlFor="accident"> Accident Type</label>
                <input  type="text" onChange={handleChange} id='accident' name='accident' value={state.accident} placeholder='situation Report'
                    className='w-full p-2 rounded-sm focus:bg-gray-300'
                 />
            </div>
            <div>
                <label htmlFor="name">Names</label>
                <input type="text" onChange={handleChange} id='name' name='name' value={state.name} placeholder='name '
                   className='   w-full p-2 rounded-sm focus:bg-gray-300'
                 />
            </div>
            <div>
                <label htmlFor="description">Report</label>
                <input  type="text" onChange={handleChange} id='description' name='description' value={state.description} placeholder='Report '
                    className='w-full p-2 rounded-sm focus:bg-gray-300'
                 /> 
            </div>
            </div>

            

            <button className='flex w-full items-center justify-center p-2 bg-green-600 mt-3' type='submit'>Emergency </button>

        </form>
    </div>
  )
}

export default page