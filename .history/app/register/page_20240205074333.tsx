'use client'

import axios from 'axios'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'

interface InitialStateProps {
  namee:string,
  email:string,
  password:string,
}

const initialState:InitialStateProps = {
  namee:'',
  email:'',
  password:'',
}





export default function page() {
    const router = useRouter()
    const [state, setState] = useState(initialState)


    const onSubmit = (event:FormEvent) => {

        event.preventDefault()

        axios.post('/api/register',state)
        .then(() => {
          router.refresh()
        })
        .then(() => {
          setTimeout(() => {
            router.push('/log')
          },2500)
        })
        .catch((err:any) => {
        })
        .finally(() => {
        })
    }

    function handleChange(event:any) {
		setState({ ...state, [event.target.name]: event.target.value });
      
	}
     


  return (
    <form onSubmit={onSubmit} className='text-center'>
      <h1 className='flex text-center justify-center text-lg md:text-xl ld:text-xl text-red-150'>Welcome to Bincom Emergency Center</h1>
        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
        <input placeholder='Name' id='namee'  type='text' name='namee' onChange={handleChange} value={state?.namee}/>
        <input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state?.email} />
        <input placeholder='Password' id='password'  type='password' name='password' onChange={handleChange} value={state?.password}/>
      
        <button type='submit'>Submit</button>
        </div>

        <div>
          <div>Do you have an account ? <Link href='/log'>Sign in</Link></div>
        </div>
    </form>
  )
}