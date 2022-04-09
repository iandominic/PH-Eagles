import React from 'react'
import homeLogo from '../assets/ph-eagles-home.png'
import homeLogo2 from '../assets/ph-eagles-home-2.png'
import logoGif from '../assets/eagle-bilog.png'
import logoGif2 from '../assets/eagle-bilog-2.png'

const Home = () => {
  return (
    <section className="home__section h-[90%] py-[8rem] w-full">
        <div className="home__container w-11/12 h-full m-auto flex flex-col justify-center items-center">
            <div className="home__contents w-full flex flex-col items-center gap-8">
                <div className="home__logo">
                    <img className="lg:hidden" src={homeLogo} alt="homeLogo"/>
                    <img className="hidden lg:flex" src={homeLogo2} alt="homeLogo"/>
                </div>
                <h1 className="home__desc text-xl text-white text-center">
                    An exclusive collection of 5,555 Philippine Eagles on Solana Blockchain 
                </h1> 
                <div className="home__eagle">
                    <img className="lg:hidden" src={logoGif} alt="homeGif"/>
                    <img className="hidden lg:flex" src={logoGif2} alt="homeGif"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home