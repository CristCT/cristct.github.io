import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-scroll'
import Toggle from './Toggle'
import './NavBar.css'

const NavBar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [burger_class, setBurgerClass] = useState("burger__bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const handleClick = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger__bar clicked");
      setClicked(!clicked);
      setIsMenuClicked(true);
    } else {
      setBurgerClass("burger__bar unclicked");
      setClicked(!clicked);
      setIsMenuClicked(false);
    }
  };

  return (
    <nav className='navbar' id='Inicio'>
      <div className='navbar__left'>
        <div className='navbar__title'>
          <h1 className='navbar__logo'>Portfolio</h1>
        </div>
        <div className='navbar__toggle'>
          <Toggle theme={props.theme} setTheme={props.setTheme} />
        </div>
        <div className="navbar__burger--icon" onClick={handleClick}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
      <ul className={clicked ? 'navbar__menu active' : 'navbar__menu'}>
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