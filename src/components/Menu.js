import React, { useState, useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'
import button1 from '../images/button-1.svg'
import button2 from '../images/button-2.svg'
import button3 from '../images/button-3.svg'
import '../styles/menu.css'


const Menu = ({section}) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [isOpen, toggleOpen] = useCycle(false, true)

    useEffect( _ => {
        window.addEventListener('resize', _ => setWindowSize(window.innerWidth))
      }, [windowSize])


    const handleClick = (name) => {
        section(name)
    }


  return (
    <div className='menu'>

        {windowSize > 600 ?
        <>
        <div className='menu-button__div' onClick={_ => handleClick('about')} >
            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button1} alt='projects button'/>
                <p>About</p>
            </motion.div>
        </div>

        <div className='menu-button__div' onClick={_ => handleClick('project')}>
            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button2} alt='projects button'/>
                <p>Projects</p>
            </motion.div>
        </div>
        
        <div className='menu-button__div' onClick={_ => handleClick('contact')}>
            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button3} alt='contact button'/>
                <p>Contact Me</p>
            </motion.div>
        </div> 
        </>
        :
        <div className='menu-button__div' onClick={toggleOpen}>
            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button1} alt='projects button'/>
                {isOpen ? <p>Menu   ▼</p> : <p>Menu   ▲</p>}
            </motion.div>
        </div>}

    </div>
  )
}

export default Menu