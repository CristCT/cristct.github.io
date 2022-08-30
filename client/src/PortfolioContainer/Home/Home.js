import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'

export default function Home(props) {
  return (
    <div className='home-container' id='Inicio'>
      <Profile />
      <Footer theme={props.theme} setTheme={props.setTheme} />
    </div>
  )
}
