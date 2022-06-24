import React from 'react'
import '../styles/title.css'

const Title = () => {
  return (
    <div>
        <div className='title__name'>
            <h1>Alan Martinez</h1>
        </div>
        <div className='title__dev'>
            <h2>Software Engineer</h2>
        </div>
        {/* <div> */}
            <svg width="160" height="160" viewBox="-80 -80 160 160">
                <path d="M462,156 l-370,4 l3,41 l25,2 l15,28 l319,-5 l9,-25z" fill="#afa" stroke="#0a0" stroke-width="20" stroke-linecap="square"/>
            </svg>
        {/* </div> */}
    </div>
  )
}

export default Title