import React from 'react'
import img1 from '../assets/NFTs/eagol.png'
import img2 from '../assets/NFTs/eagol2.png'
import img3 from '../assets/NFTs/eagol3.png'
import img4 from '../assets/NFTs/eagol4.png'
import img5 from '../assets/NFTs/eagol5.png'
import img6 from '../assets/NFTs/eagol6.png'

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
  return (
    <section className="team__section w-full h-full relative">
        <h1 className="team__title">
            Team
        </h1>
        <div className="team__container">
            <MemberComponent img={img1} name="$amurai" position="Developer" />
            <MemberComponent img={img2} name="Cinimod" position="Developer" />
            <MemberComponent img={img3} name="KymT" position="Tite" />
            <MemberComponent img={img4} name="Phenom Eagle" position="Founder" />
            <MemberComponent img={img5} name="Phenom Eagle" position="Founder" />
            <MemberComponent img={img6} name="Phenom Eagle" position="Founder" />
            <MemberComponent img={img2} name="Phenom Eagle" position="Founder" />
            <MemberComponent img={img5} name="Phenom Eagle" position="Founder" />
            <MemberComponent img={img1} name="Phenom Eagle" position="Founder" />
        </div>
    </section>
  )
}

export default Team