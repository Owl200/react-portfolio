import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import button1 from '../images/button-1.svg'
import button2 from '../images/button-2.svg'
import button3 from '../images/button-3.svg'
import '../styles/menu.css'


const Menu = ({section}) => {

    const about = useRef()
    const projects = useRef()
    const contact = useRef()

    useEffect( _ => {about.current.style.filter = 'invert(1)'}, [])

    const handleClick = (name) => {
        section(name)
        about.current.style.filter = name === 'about' ? 'invert(1)' : 'invert(0)' 
        projects.current.style.filter = name === 'projects' ? 'invert(1)' : 'invert(0)'
        contact.current.style.filter = name === 'contact' ? 'invert(1)' : 'invert(0)'
    }


  return (
    <div className='menu'>
        <>
        <div className='menu-button__div' ref={about} onClick={_ => handleClick('about')} >
            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button1} alt='projects button'/>
                <p>About Me</p>
            </motion.div>
        </div>

        <div className='menu-button__div' ref={projects} onClick={_ => handleClick('projects')}>
            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button2} alt='projects button'/>
                <p>My Projects</p>
            </motion.div>
        </div>
        
        <div className='menu-button__div' ref={contact} onClick={_ => handleClick('contact')}>
            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' >
                <img src={button3} alt='contact button'/>
                <p>Contact Me</p>
            </motion.div>
        </div> 
        </>
        

    </div>
  )
}

export default Menu