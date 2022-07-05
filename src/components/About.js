import React from 'react'
import '../styles/about.css'
import logo from '../images/owl-logo-512.webp'

const About = () => {
  return (
    <div className='about__div'>
        <img src={logo} alt='logo' />
        <p>
            Passionate about technology and always looking forward to getting new skills and improving on them.
            I love creating systems with which people get a good UX.
            <br/>
            <br/>
            My priorities at the moment are to excel at the current programing languages I know as well 
            as to dive deep into new languages and technologies in order to always be updated on the latest trends 
            and be able to look at problems from more than one point of view so that I can always offer the best 
            option to clients.
            I'm looking for a place to put my skills to the test and to be challenged daily with new projects.
        </p>
    </div>
  )
}

export default About