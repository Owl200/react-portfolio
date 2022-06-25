import React from 'react'
// import button1 from '../images/button-1.png'
// import button2 from '../images/button-2.png'
// import button3 from '../images/button-3.png'
import '../styles/menu.css'

const Menu = () => {
  return (
    <div className='menu'>

        <div className='menu-button__div'>
            <div className='menu-button__div-img'>
                <p>About</p>
            </div>
        </div>

        <div className='menu-button__div'>
            <div className='menu-button__div-img'>
                <p>Projects</p>
            </div>
        </div>
        
        <div className='menu-button__div'>
            <div className='menu-button__div-img'>
                <p>Contact Me</p>
            </div>
        </div>

    </div>
  )
}

export default Menu