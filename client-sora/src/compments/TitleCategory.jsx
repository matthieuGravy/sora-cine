import React from 'react'

function TitleCategory(props) {
  return (
    <section className="pt-6 pl-3 pb-2 bg-base-300">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold text-indigo-500">{props.title}</h2>      
    </section>
  )
}

export default TitleCategory