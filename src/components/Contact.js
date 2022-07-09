import '../styles/contact.css'
import React from 'react'
import github from '../images/github-150.png'
import linkedin from '../images/linkedin-150.png'
import twitter from '../images/twitter-150.png'

const Contact = () => {
  return (
    <div className='contact-div'>
        <img src={github} alt="github link" />
        <img src={linkedin} alt="linkedin link" />
        <img src={twitter} alt="twitter link" />
    </div>
  )
}

export default Contact