import React from 'react'
import { motion } from 'framer-motion'
import button1 from '../images/button-1.svg'
import button2 from '../images/button-2.svg'
import button3 from '../images/button-3.svg'
import '../styles/menu.css'


const Menu = ({section}) => {
    console.log(section)

    const handleClick = (name) => {
        section(name)
    }


  return (
    <div className='menu'>

        <div className='menu-button__div' onClick={_ => handleClick('about')} >
            <motion.div whileHover={{scale: 1.5}} className='menu-button__div-img' >
                <svg  viewBox="0 0 380 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 61L25 3H375L337 69.4133L4 61Z" fill="black" stroke="white" stroke-width="5"/>
                </svg>
                <p>About</p>
            </motion.div>
        </div>

        <div className='menu-button__div' onClick={_ => handleClick('project')}>
            <motion.div whileHover={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button2} alt='projects button'/>
                <p>Projects</p>
            </motion.div>
        </div>
        
        <div className='menu-button__div' onClick={_ => handleClick('contact')}>
            <motion.div whileHover={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button3} alt='contact button'/>
                <p>Contact Me</p>
            </motion.div>
        </div>

    </div>
  )
}

export default Menu