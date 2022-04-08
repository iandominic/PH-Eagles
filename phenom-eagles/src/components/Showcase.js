import React, { useRef } from 'react'
import img1 from '../assets/NFTs/eagol.png'
import img2 from '../assets/NFTs/eagol2.png'
import img3 from '../assets/NFTs/eagol3.png'
import img4 from '../assets/NFTs/eagol4.png'
import img5 from '../assets/NFTs/eagol5.png'
import img6 from '../assets/NFTs/eagol6.png'
import ETH from '../assets/NFTs/icons8-ethereum-48.png';

const NftItem = ({img, number=0, price=0, passRef}) => {
    let play = (e) => {
      passRef.current.style.animationPlayState = 'running';
    }

    let pause = (e) => {
      passRef.current.style.animationPlayState = 'paused';
    }
    return(
      <div className="image__container" onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
        <img src={img} alt="Phenom Eagles" />
        <div className="details__container">
          <div>
            <span>Phenom Eagle</span> <br />
            <h1>#{number}</h1>
          </div>
          <div>
            <span>Price</span> <br />
            <div className="price">
              <img src={ETH} alt="ETH" />
              <h1>{Number(price).toFixed(1)}</h1>
            </div>
          </div>
        </div>
      </div>
    )
}

const Showcase = () => {
    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);

  return (
    <section className="showcase__section w-screen min-h-screen flex flex-col justify-center items-center relative ">
        <div className="row__div" ref={Row1Ref}>
            <NftItem img={img1} number={852} price={1} passRef = {Row1Ref}/>
            <NftItem img={img2} number={123} price={1.2} passRef = {Row1Ref}/>
            <NftItem img={img3} number={456} price={2.5} passRef = {Row1Ref}/>
            <NftItem img={img4} number={666} price={3.5} passRef = {Row1Ref}/> 
            <NftItem img={img5} number={452} price={4.7} passRef = {Row1Ref}/>
        </div>
        <div className="row__div__2" ref={Row2Ref}>
            <NftItem img={img6} number={888} price={1.2} passRef = {Row2Ref}/>
            <NftItem img={img3} number={211} price={3.2} passRef = {Row2Ref}/>
            <NftItem img={img2} number={455} price={1.8} passRef = {Row2Ref}/>
            <NftItem img={img1} number={456} price={5.1} passRef = {Row2Ref}/>
            <NftItem img={img5} number={865} price={3.7} passRef = {Row2Ref}/>
        </div>
    </section>
  )
}
export default Showcase