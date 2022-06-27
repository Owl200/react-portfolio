import React from 'react'
import { motion } from 'framer-motion'
import button1 from '../images/button-1.png'
import button2 from '../images/button-2.png'
import button3 from '../images/button-3.png'
import '../styles/menu.css'

const Menu = () => {
  return (
    <div className='menu'>

        <div className='menu-button__div'>
            <motion.div whileHover={{scale: 1.5}} className='menu-button__div-img'>
                <img src={button1} alt='about button' />
                <p>About</p>
            </motion.div>
        </div>

        <div className='menu-button__div'>
            <motion.div whileHover={{scale: 1.5}} className='menu-button__div-img'>
                <img src={button2} alt='projects button' />
                <p>Projects</p>
            </motion.div>
        </div>
        
        <div className='menu-button__div'>
            <motion.div whileHover={{scale: 1.5}} className='menu-button__div-img'>
                <img src={button3} alt='contact button' />
                <p>Contact Me</p>
            </motion.div>
        </div>

    </div>
  )
}

export default Menu