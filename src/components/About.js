import React from 'react'
import Skills from './Skills';
import { motion } from 'framer-motion'
import '../styles/about.css'
import logo from '../images/owl-logo-512.webp'

const About = () => {
  return (
    <div className="about">
      <Skills/>
      <div className='about__div'>
        <motion.img initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} src={logo} alt='logo' />
        <motion.p initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} >
            Passionate about technology and always looking forward to getting new skills and improving on them.
            I love creating systems with which people get a good UX.
            <br/>
            <br/>
            My priorities at the moment are to excel at the current programing languages I know as well 
            as to dive deep into new languages and technologies in order to always be updated on the latest trends 
            and be able to look at problems from more than one point of view so that I can always offer the best 
            option to clients.
            I'm looking for a place to put my skills to the test and to be challenged daily with new projects.
        </motion.p>
      </div>
    </div>
  )
}

export default About