import React from 'react'
import bg from "../assets/images/Background03.jpg"
import WatchNowButton from './WatchNowButton'


function Hero({ title = 'Default Title', description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt error id vitae consequuntur fugit repudiandae quaerat, dolores provident, aliquid, non quis et pariatur velit neque molestias? Harum asperiores at totam.' }) {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <section className='h-screen w-screen' style={style}>
      <div className="text-[#0D0630] h-full w-3/12 flex flex-col justify-center px-[5rem]">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8">
          <h2 className='font-bold'>synopsis</h2> {description}
        </p>
        <p><WatchNowButton/></p>
      </div>
    </section>
  );
}

export { Hero }