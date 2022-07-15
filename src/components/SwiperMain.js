import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
// import SwiperCore from 'swiper'
import 'swiper/css'
import ff from '../images/14th-phoenix-legatus.webp'
import nplus from '../images/n-plus-plus.webp'
import poke from '../images/pokelore.webp'
import vivid from '../images/vivid-bar2.webp'

const SwiperMain = () => {
  const slides = [];
  const images = [ff, nplus, poke, vivid];
  const titles = ['Free Company Page', 'Network++', 'Pokelore', 'Vivid Bar']

  for (let i =0; i < images.length; i++){
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img src={images[i]} alt={`project-${i}`} />
        <p>{titles[i]}</p>
      </SwiperSlide>
    )
  }

  return (
    <>
      <Swiper id="main">
        {slides}
      </Swiper>
    </>
  )
}

export default SwiperMain