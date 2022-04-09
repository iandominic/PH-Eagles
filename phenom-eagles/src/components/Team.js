import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import img1 from '../assets/NFTs/eagol.png'
import img2 from '../assets/NFTs/eagol2.png'
import img3 from '../assets/NFTs/eagol3.png'
import img4 from '../assets/NFTs/eagol4.png'
import img5 from '../assets/NFTs/eagol5.png'
import img6 from '../assets/NFTs/eagol6.png'
import ConfettiComponent from '../components/Confetti';

const MemberComponent = ({img, name=" ", position=" "}) => {
    return (
      <div className="item__container">
        <div className="image__container">
          <img src={img} alt={name}></img>
        </div>
        <h2 className="member__name">{name}</h2>
        <h2 className="member__position">{position}</h2>
      </div>
    )
}

const Team = () => {
  const ref = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    let element = ref.current
    ScrollTrigger.create({
      trigger: element,
      start: 'bottom bottom',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
  
    return () => {
      ScrollTrigger.kill()
    };
  }, [])

  return (
    <section className="team__section w-full h-full relative" ref={ref}>
      <ConfettiComponent />
        <div className="team__containers">
          <h1 className="team__title">
              Team
          </h1>
          <div className="team__container">
              <MemberComponent img={img1} name="Clone" position="Founder" />
              <MemberComponent img={img2} name="Sierramadre" position="Co-Founder" />
              <MemberComponent img={img3} name="Fang" position="NFT Advisor" />
              <MemberComponent img={img4} name="Duckey" position="Business Developer" />
              <MemberComponent img={img5} name="CHRI$TIAN" position="Blockchain Developer" />
              <MemberComponent img={img6} name="Kymt" position="Co-Developer" />
              <MemberComponent img={img2} name="FUNGUY07" position="Social Media Manager" />
              <MemberComponent img={img5} name="Cinimod" position="Web Developer" />
              <MemberComponent img={img1} name="JERAX" position="Artist/Graphic Design" />
              <MemberComponent img={img3} name="AAARON" position="Artist/Graphic Design" />
              <MemberComponent img={img5} name="ENZ" position="Graphic Design" />
          </div>
        </div>
    </section>
  )
}

export default Team