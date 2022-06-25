import React from 'react'
import '../styles/skills.css'
import { motion } from 'framer-motion'
import css from '../images/css.png'
import git from '../images/git.png'
import github from '../images/github.png'
import html from '../images/html.png'
import js from '../images/js.png'
import mongodb from '../images/mongodb.png'
import motionlogo from '../images/motion.jpg'
import python from '../images/python.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import router from '../images/router.png'


const Skills = () => {

  return (
    <motion.div  className='skills'>
        <motion.div animate={{x: 0, opacity: 1, zIndex: 10}} transition={{delay: 0.00}} initial={{x: 50, y: 0, opacity: 0}} className='skills__title'>
          <p>Skills:</p>
          
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 1}} transition={{delay: 0.05}} initial={{x: 50, y: 0, opacity: 0, rotate: 45}} className='skills__div'>
          <p>HTML5</p>
          <img src={html} alt='html' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 2}} transition={{delay: 0.10}} initial={{x: 50, y: 10, opacity: 0, rotate: 20}} className='skills__div'>
          <p>CSS3</p>
          <img src={css} alt='css' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 3}} transition={{delay: 0.15}} initial={{x: 50, y: -10, opacity: 0, rotate: -45}} className='skills__div'>
          <p>Javascript</p>
          <img src={js} alt='javascript' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 4}} transition={{delay: 0.20}} initial={{x: 50, y: 7, opacity: 0, rotate: 10}} className='skills__div'>
          <p>Python</p>
          <img src={python} alt='pyhton' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 5}} transition={{delay: 0.25}} initial={{x: 50, y: -7, opacity: 0, rotate: -20}} className='skills__div'>
          <p>React</p>
          <img src={react} alt='react' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 6}} transition={{delay: 0.30}} initial={{x: 50, y: 8, opacity: 0, rotate: -60}} className='skills__div'>
          <p>Router</p>
          <img src={router} alt='react router' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 7}} transition={{delay: 0.35}} initial={{x: 50, y: 13, opacity: 0, rotate: 33}} className='skills__div'>
          <p>Redux</p>
          <img src={redux} alt='redux' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 8}} transition={{delay: 0.40}} initial={{x: 50, y: 5, opacity: 0, rotate: 45}} className='skills__div'>
          <p>Motion</p>
          <img src={motionlogo} alt='motion' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 9}} transition={{delay: 0.45}} initial={{x: 50, y: -14, opacity: 0, rotate: -30}} className='skills__div'>
          <p>Git</p>
          <img src={git} alt='git' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 10}} transition={{delay: 0.50}} initial={{x: 50, y: 0, opacity: 0, rotate: 7}} className='skills__div'>
          <p>Githhub</p>
          <img src={github} alt='github' />
        </motion.div>
        <motion.div whileHover={{scale: 1.5, rotate: 0, zIndex: 100}} animate={{x: 0, opacity: 1, zIndex: 11}} transition={{delay: 0.55}} initial={{x: 50, y: 9, opacity: 0, rotate: -15}} className='skills__div'>
          <p>Mongodb</p>
          <img src={mongodb} alt='mongo db' />
        </motion.div>
    </motion.div>
  )
}

export default Skills