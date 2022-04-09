import React from 'react'

const Banner = () => {
  return (
    <section className="banner__section w-screen h-[25rem] relative bg-white flex justify-center items-center overflow-hidden">
      <div className="w-[90%] m-auto h-full flex flex-col justify-center items-center">
        <h1 className="banner__title text-2xl w-[100%] text-center">JOIN PHENOM EAGLES NOW</h1>
        <div className="pt-5">
          <button className="w-[175px] h-[56px] banner__btn">Join Now</button>
        </div>
      </div>
    </section>
  )
}

export default Banner