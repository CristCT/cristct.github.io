import { Component } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-scroll'
import Toggle from './Toggle'
import './NavBar.css'

class NavBar extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <nav className='nav-bar-container' id='Inicio'>
        <div className='menu-left'>
          <div className='menu-title'>
            <h1 className='nav-bar-logo'>Porfolio</h1>
          </div>
          <div className='nav-toggle'>
            <Toggle theme={this.props.theme} setTheme={this.props.setTheme} />
          </div>
        </div>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
                          onClick={this.handleClick}
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
}

export default NavBar