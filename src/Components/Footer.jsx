import React from 'react'
import { socialMediaUrl } from '../Details'

const Footer = () => {
  return (
    <div className='conatiner w-full bg-black text-center mx-auto p-1 bottom-0 fixed'>
        <p className='text-sm font-medium'>Designed by <a className='text-blue-500 border-b-2' href={socialMediaUrl.linkdein} target="_blank"
          rel="noreferrer noopener">Muhammad Noman</a></p>
    </div>
  )
}

export default Footer