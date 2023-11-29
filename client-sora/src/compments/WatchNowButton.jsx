import React from 'react'

const WatchNowButton = () => {
    const launchEpisode = () => {
      
      // introduire function de lancement du dernier épisode de la série
      console.log('Episode launched!');
      
    };


  return (
    <button
      className="bg-[#FF7E6B] hover:bg-[#0D0630] text-white font-bold py-[6px] px-6 rounded-xl mt-[1rem] flex items-center"
      onClick={launchEpisode}
      aria-label="Watch now"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
      <p>Watch now</p>
    </button>
  )
}

export default WatchNowButton