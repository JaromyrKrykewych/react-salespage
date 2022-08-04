import './Header.css'
import logo from '../../Assets/menu-hamb.png'
import closeMenu from '../../Assets/close-menu.png'
import arrowRed from '../../Assets/arrow-red-menu.png'
import { useState } from 'react'
import {Link} from 'react-scroll'

const Header = () => {
  
  const mobile = window.innerWidth<768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className='header'>
      <div className='logo'>
        Logotipo
      </div>
      {
        menuOpened === false && mobile === true ? (
          <div>
            <img 
              src={logo} 
              alt='logo' 
              className='open-menu'
              onClick={() => setMenuOpened(true)} 
            />
          </div>
        ) : (
          <div className='menu'>
            {
              mobile === true ? (
                <hr />
              ) : null
            }
            {
              mobile === true ? (
                <img 
                  src={closeMenu} 
                  alt='close'
                  className='close-menu'
                  onClick={() => setMenuOpened(false)} 
                />
              ) : null
            }
            <ul>
              <li>
                <img src={arrowRed} alt='list-style' />
                Sobre nosotros
              </li>
              <li>
                <img src={arrowRed} alt='list-style' />
                <Link
                  onClick={() => setMenuOpened(false)}
                  activeClass='active'
                  to='services'
                  span='true'
                  smooth={true}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <img src={arrowRed} alt='list-style' />
                Contacto
              </li>
              <li>
                <img src={arrowRed} alt='list-style' />
                Blog
              </li>
              <li>
                <img src={arrowRed} alt='list-style' />
                WhatsApp
              </li>
            </ul>
            {
              mobile === true ? (
                <button className='btn btn-menu'>Sign me up!</button>
              ) : null
            }
          </div>
        )
      }
    </div>
  )
}

export default Header