import React, { useState, useEffect, useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import button1 from '../images/button-1.svg'
import button2 from '../images/button-2.svg'
import button3 from '../images/button-3.svg'
import '../styles/menu.css'

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  //variants for the li on the Navlinks
  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 1000,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };


const Menu = ({section}) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [isOpen, toggleOpen] = useCycle(false, true)

    const about = useRef()
    const projects = useRef()
    const contact = useRef()

    useEffect( _ => {
        window.addEventListener('resize', _ => setWindowSize(window.innerWidth))
      }, [windowSize])


    const handleClick = (name) => {
        section(name)
        console.log(about.current.style)
        about.current.style.filter = name === 'about' ? 'invert(1)' : 'invert(0)' 
        projects.current.style.filter = name === 'projects' ? 'invert(1)' : 'invert(0)'
        contact.current.style.filter = name === 'contact' ? 'invert(1)' : 'invert(0)'
    }

    const changeOpen = () => {
        toggleOpen()
      }


  return (
    <div className='menu'>

        {windowSize > 600 ?
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
        :
        <div className='menu-button__div' initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.div variants={variants}>

            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' variants={liVariants} >
                <img src={button1} alt='projects button'/>
                <p>About Me</p>
            </motion.div>

            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' variants={liVariants} >
                <img src={button2} alt='projects button'/>
                <p>My Projects</p>
            </motion.div>

            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} className='menu-button__div-img' variants={liVariants} >
                <img src={button3} alt='contact button'/>
                <p>Contact Me</p>
            </motion.div>
            
            <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 1.5}} onClick={toggleOpen} className='menu-button__div-img' >
                <img src={button1} alt='projects button'/>
                {isOpen ? <p>Menu   ▼</p> : <p>Menu   ▲</p>}
            </motion.div>

            </motion.div>
        </div>}

    </div>
  )
}

export default Menu