import React from 'react'
import bg from "../assets/images/Background03.jpg"
import WatchNowButton from './WatchNowButton'


function Hero() {

  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSizer: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }

  return (
    <section className='h-screen w-screen' style={style}>
      <div className="text-[#0D0630] h-full w-3/12 flex flex-col justify-center px-[5rem]">       
        <h1 className="text-4xl font-bold mb-4">H1 title</h1> {/* insert component H1*/}
        <p className="text-lg mb-8"><h3>Anime synopsis</h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quis corporis eaque vero, tempore eum inventore saepe quidem architecto nihil vitae in tempora distinctio officiis vel repellendus quisquam aspernatur sunt.
        </p>          
        <p><WatchNowButton/></p>        
        
      </div>

    </section>
  )
}

export { Hero }