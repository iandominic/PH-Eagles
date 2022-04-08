import React, {useState} from 'react'
import scroll from '../assets/scroll.png'
import scrollFull from '../assets/scroll-full.png'

const Lore = () => {
    const [openLore, setLore] = useState(false)
    const handleLore = () => {
        setLore(!openLore)
    }
  return (
    <section className="lore__section w-full h-full max-w-[450px] m-auto">
        <div className="home__container w-[90%] m-auto">
            <div className="home__contents w-[100%] h-full">
               <div className="w-full h-full cursor-pointer" onClick={handleLore}>
                   {openLore ? <img className="w-full md:hidden" src={scrollFull} alt="scroll" /> : <img className="w-full md:hidden animate-pulses" src={scroll} alt="scroll" />}
               </div>
            </div>
        </div>
    </section>
  )
}

export default Lore