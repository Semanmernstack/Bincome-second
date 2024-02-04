"use client"
import axios  from 'axios'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
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

  return (
    <div>
        <form onSubmit={handleSubmit} className='w-[600px] h-[700px] mx-auto py-12'>
            <div>
                <label htmlFor="acci"> Situation Report</label>
                <input type="text"  id='acci' name='accident' value={state.accident} placeholder='situation Report' />
            </div>
            <div>
                <label htmlFor="name">Names</label>
                <input type="text" id='name' name='name' value={state.name} placeholder='name ' />
            </div>
            <div>
                <label htmlFor="des">Report</label>
                <input type="text" id='des' name='description' value={state.description} placeholder='Report ' /> 
            </div>

            <button type='submit'>Emergency </button>

        </form>
    </div>
  )
}

export default page