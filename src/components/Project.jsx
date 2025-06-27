import React from 'react'

export default function Project({title,techStack,description,link}) {
  return (
    <div className='py-8 flex flex-col text-justify justify-evenly gap-y-2 border-2 rounded-lg border-gray-500 p-5 bg-gray-400 bg-opacity-10 text-white shadow-lg shadow-gray-900 hover:shadow-gray-700 transition-shadow duration-400'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-gray-400 text-lg p-2'>{description}</p>
        <div className='w-full flex justify-between items-center mt-2'>
        <p className='text-md font-semibold'>{techStack}</p>
        <a href={link}>
        <button className='rounded-lg font-bold bg-red-600 px-6 py-1 hover:bg-green-700 transition-all duration-300'>Link</button>
        </a>
        </div>
    </div>
  )
}
