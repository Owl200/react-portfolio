import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/swipermain.css'
import ff from '../images/14th-phoenix-legatus.webp'
import nplus from '../images/n-plus-plus.webp'
import poke from '../images/pokelore.webp'
import vivid from '../images/vivid-bar2.webp'

const SwiperMain = () => {
  const slides = [];
  const images = [ff, nplus, poke, vivid];
  const titles = ['Free Company Page', 'Network++', 'Pokelore', 'Vivid Bar']
  const code = [
    'https://github.com/Owl200/14th-phoenix-legatus',
    'https://github.com/Owl200/network-plus-plus',
    'https://github.com/Owl200/PokeLore', 
    'https://github.com/Owl200/how-to-make-a-tequila-sunrise'
  ]
  const website = [
    'https://14th-phoenix-legatus.com',
    'https://owl200.github.io/network-plus-plus/',
    'https://owl200.github.io/PokeLore/',
    'https://owl200.github.io/how-to-make-a-tequila-sunrise/'
  ]

  for (let i =0; i < images.length; i++){
    slides.push(
      <SwiperSlide key={`slide-${i}`} className={`swiper-${i}`}>
        <img src={images[i]} alt={`project-${i}`} />
        <p>{titles[i]}</p>
        <a href={code[i]} target='_blank' rel='noreferrer' className='code-link'>Code</a>
        <a href={website[i]} target='_blank' rel='noreferrer' className='website-link'>Website</a>
      </SwiperSlide>
    )
  }

  return (
    <>
      <Swiper id="main" 
      modules={[Navigation, Pagination]} 
      navigation 
      pagination={{clickable: true}}
      slidesPerView={1}
      spaceBetween={0}

      >
        {slides}
      </Swiper>
    </>
  )
}

export default SwiperMain