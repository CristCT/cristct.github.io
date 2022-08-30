import React from 'react'
import waveBlackDark from '../../../assets/Home/waveBlackDark.png'
import waveWhiteDay from '../../../assets/Home/waveWhiteDay.png'
import waveDay from '../../../assets/Home/waveDay.png'
import waveDark from '../../../assets/Home/waveDark.png'
import wavePurpleDay from '../../../assets/Home/wavePurpleDay.png'
import './Footer.css'

export default function Footer(props) {

  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img
              className='footer-wave'
              src={props.theme === "light" ? waveDay : waveDark}
              alt='no internet connection'
            />
        </div>
    </div>
  )
}
