import '../styles/contact.css'
import { motion } from 'framer-motion'
import React from 'react'
import github from '../images/github-150.png'
import linkedin from '../images/linkedin-150.png'
import twitter from '../images/twitter-150.png'

const container = {
    hidden: {
        opacity: 0,
    }, 
    show: {
        opacity: 1,
        transition: {
            type: "spring",
            delayChildren: 0.5,
            staggerChildren: 0.1
        }
    }
}

const icon = {
    hidden: {
        opacity: 0,
        y: 100
    }, 
    show: {
        opacity: 1,
        y: 0
    }
}

const Contact = () => {
  return (
      <>
        <motion.h2 initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} className='contact-title' >You can find me in here:</motion.h2>
        <motion.div initial='hidden' animate='show' variants={container} className='contact-div'>
            <motion.div variants={icon} whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='img-container'>
                <img className='contact-img' src={github} alt="github link" />
            </motion.div>
            <motion.div variants={icon} whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='img-container'>
                <img className='contact-img' src={linkedin} alt="linkedin link" />
            </motion.div>
            <motion.div variants={icon} whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='img-container'>
                <img className='contact-img' src={twitter} alt="twitter link" />
            </motion.div>
        </motion.div>
      </>
  )
}

export default Contact