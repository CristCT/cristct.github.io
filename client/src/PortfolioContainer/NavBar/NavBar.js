import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-scroll'
import Toggle from './Toggle'
import './NavBar.css'

const NavBar = (props) => {
  const [clicked, setClicked] = useState(false);
  // const handleClick = () => {
  //   setClicked(!clicked)
  // }
  
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const handleClick = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setClicked(!clicked);
      setIsMenuClicked(true);
    } else {
      setBurgerClass("burger-bar unclicked");
      setClicked(!clicked);
      setIsMenuClicked(false);
    }
  };

  return (
    <nav className='nav-bar-container' id='Inicio'>
      <div className='menu-left'>
        <div className='menu-title'>
          <h1 className='nav-bar-logo'>Porfolio</h1>
        </div>
        <div className='nav-toggle'>
          <Toggle theme={props.theme} setTheme={props.setTheme} />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
      {/* <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div> */}
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.url}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
                href={item.url}
                className={item.cName}
              >{item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar