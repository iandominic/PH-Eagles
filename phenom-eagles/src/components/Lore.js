import React, {useState} from 'react'
import scroll from '../assets/scroll.png'
import scrollFull from '../assets/scroll-full.png'
import loreBook from '../assets/lore-desktop.png'

const Lore = () => {
    const [openLore, setLore] = useState(false)
    const handleLore = () => {
        setLore(!openLore)
    }
  return (
    <section className="lore__section w-full h-full max-w-[450px] m-auto">
        <div className="home__container w-[90%] m-auto">
            <div className="home__contents w-[100%] h-full">
               <div className="w-full h-full cursor-pointer md:hidden" onClick={handleLore}>
                   {openLore ? <img className="w-full" src={scrollFull} alt="scroll" /> : <img className="w-full animate-pulse" src={scroll} alt="scroll" />}
               </div>
               <div className="lore__desktop w-full h-full cursor-pointer hidden md:flex">
                    <img src={loreBook} alt="lore book" />
               </div>
            </div>
        </div>
    </section>
  )
}

export default Lore