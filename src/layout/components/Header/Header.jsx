import { Link } from 'react-router-dom';
import './Header.scss';
import user from '../../../assets/images/user-circle.svg';
import Button from '../../../components/Button';
import { PiListBold } from 'react-icons/pi';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';
import { MENU_ITEMS_LEFT, MENU_ITEMS_RIGHT } from './constants';

function Header() {
  // The state is used to toggle the nav list for mobile.
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // The function to toggle the nav list for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className='header__wrapper'>
        {/* Logo */}
        <div className='header__logo'>
          <Link to='/' className='header__logo--link'>
            LOGO
          </Link>
        </div>
        {/* Overlay when clicking on the nav list will display for mobile */}
        {!isMenuOpen && <div className='js-header--mobile-overlay' onClick={toggleMenu}></div>}
        <div className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {/* Used to close the nav list for mobile. */}
          <div className='js-header--mobile-close header__nav--mobile-icon' onClick={toggleMenu}>
            <CgClose />
          </div>

          {/* Nav item left */}
          <nav className='header__nav--left'>
            {MENU_ITEMS_LEFT.map((item) => (
              <Button key={item.title} to={item.href} className='header__nav--item'>
                {item.title}
              </Button>
            ))}
          </nav>

          {/* Nav item right */}
          <nav className='header__nav--right'>
            {MENU_ITEMS_RIGHT.map((item) => (
              <Button key={item.title} to={item.href} className='header__nav--item'>
                {item.title}
              </Button>
            ))}
          </nav>
        </div>
        {/* Profile */}
        <div className='header__nav--profile'>
          <img src={user} alt='user' />
        </div>
        {/* Used to open the nav list for mobile. */}
        <div className='js-header--mobile-list header__nav--mobile-icon' onClick={toggleMenu}>
          <PiListBold />
        </div>
      </div>
    </div>
  );
}

export default Header;
