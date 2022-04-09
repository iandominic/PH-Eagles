import React from 'react'
import Banner from '../components/Banner'
import logo2 from '../assets/ph-eagles-logo-2.png'

const Footer = () => {
  return (
    <div className="footer__section w-screen h-screen relative flex flex-col">
      <Banner />
      <div className="footer__contents flex flex-col items-center justify-center w-[90%] m-auto">
        <img src={logo2} alt="footer logo" />
      </div>
    </div>
  )
}

export default Footer