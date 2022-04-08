import React, {useState} from 'react'
import logo from '../assets/ph-eagles-logo.png'
import logo2 from '../assets/ph-eagles-logo-2.png'
import twitter from '../assets/twitter-social.png'
import discord from '../assets/discord-social.png'

const Navigation = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? "header fixed w-full bg-gray-900 z-10 transition-all duration-200 ease-in-out" : "header fixed w-full bg-transparent z-10 transition-all duration-200 ease-in-out"}>
        <div className="navigation h-16 md:h-[7rem] w-11/12 m-auto flex justify-between items-center bg-transparent">
            <div className="">
               <img className="md:hidden" src={logo} alt='logo' />
               <img className="hidden md:flex" src={logo2} alt='logo' />
            </div>
            <div className="nav__menu hidden md:flex">
                <ul className="flex space-x-9 items-center justify-center text-white">
                    <li>HOME</li>
                    <li>RARITY</li>
                    <li>UTILITY</li>
                    <li>DAPPs</li>
                    <li>ABOUT US</li>
                </ul>
            </div>
            <div className="social__icons hidden md:flex items-center gap-4">
                <img className="w-[32px] h-[27px]" src={twitter} alt='twitterIcon' />
                <img className="w-[32px] h-[32px] mt-1" src={discord} alt='discordIcon' />
            </div>
            <div className="text-white cursor-pointer md:hidden" onClick={handleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
        <div className={nav ? "burger__menu fixed top-0 right-0 bottom-0 w-[260px] h-[100%] opacity-95 transition-all duration-200 ease-in-out" : "burger__menu fixed top-0 right-[-100%] bottom-0 w-[260px] h-[100%]  transition-all duration-200 ease-in-out"}>
            <div className="burger__container bg-gray-800 h-full">
            <div className="text-white w-[90%] m-auto flex justify-end h-16 items-center" onClick={handleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
                <div className="items-center w-full h-[70%] flex">
                    <ul className="flex flex-col items-left justify-center text-white space-y-9 w-full">
                        <li className="text-2xl p-4">HOME</li>
                        <li className="text-2xl p-4">RARITY</li>
                        <li className="text-2xl p-4">UTILITY</li>
                        <li className="text-2xl p-4">DAPPs</li>
                        <li className="text-2xl p-4">ABOUT US</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation