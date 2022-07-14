import React from 'react'
import Swiper, { Controller, Parallax} from 'swiper'
import ff from '../images/14th-phoenix-legatus.webp'
import nplus from '../images/n-plus-plus.webp'
import poke from '../images/pokelore.webp'
import vivid from '../images/vivid-bar2.webp'

const Projects = () => {
  return (
    <div>

    {/* Triple slider */}
      <div class="triple-slider">
        {/* Duplicate swipers will be created automatically  */}

        {/* Main center swiper  */}
        <div class="swiper">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <img class="bg-image" src={ff} alt="project 1"/>
              <img class="logo-image logo-image-1" data-swiper-parallax-x="50%"
                src="./images/guardians-of-the-galaxy-logo.png" alt=""/>
            </div>

            <div class="swiper-slide">
              <img class="bg-image" src={nplus} alt="project 2"/>
              <img class="logo-image logo-image-2" data-swiper-parallax-x="50%" src="./images/justice-league-logo.png"
                alt=""/>
            </div>

            <div class="swiper-slide">
              <img class="bg-image" src={poke} alt="project 3"/>
              <img class="logo-image logo-image-3" data-swiper-parallax-x="50%" src="./images/spider-man-logo.png" alt=""/>
            </div>

            <div class="swiper-slide">
              <img class="bg-image" src={vivid} alt="project 4"/>
              <img class="logo-image logo-image-4" data-swiper-parallax-x="50%" src="./images/suicide-squad-logo.png"
                alt=""/>
            </div>
            
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Projects