import React from 'react'
import profile_icon from '../assets/images/Naruto-PNG-Clipart.png'

function ProfileComponent() {
  return (
    <>
        <section className="flex grid grid-cols-7 grid-flow-col grid-rows-7 min-w-fit max-w-md sm:max-w-lg border bg-white px-6 py-14 shadow-md rounded-2xl items-center self-center">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-8 h-8 justify-start col-start-1 col-end-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <h2 className="text-3xl font-bold col-start-2 col-span-5">Account Settings</h2>
            <figure className='relative rounded-full border w-32 col-start-1 col-span-3 mt-20 ml-4'>
                <img src={profile_icon} alt="profile icon" className='overflow-hidden'/> 
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="white" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6 absolute bottom-5 right-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>               
            </figure>
            
            <div className='text-2xl col-span-4 pt-16'>Uzumaki Naruto</div>
                                  
      </section>
    </>
  )
}

export default ProfileComponent