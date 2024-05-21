import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import user from '../../../assets/images/user-circle.svg';

// Menu items
const MENU_ITEMS_LEFT = [
  { href: '/buy', title: 'buy' },
  { href: '/sell', title: 'sell' },
];
const MENU_ITEMS_RIGHT = [{ href: '/agents', title: 'agents' }];

function Header() {
  return (
    <div className='header'>
      <div className='header__wrapper'>
        {/* Logo */}
        <div className='header__logo'>
          <Link>LOGO</Link>
        </div>
        {/* Nav item left */}
        <nav className='header__nav--left'>
          {MENU_ITEMS_LEFT.map((item) => (
            <NavLink key={item.title} to={item.href} className='header__nav--item'>
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className='header__wrapper'>
        {/* Nav item right */}
        <nav className='header__nav--right'>
          {MENU_ITEMS_RIGHT.map((item) => (
            <NavLink key={item.title} to={item.href} className='header__nav--item'>
              {item.title}
            </NavLink>
          ))}
        </nav>
        {/* Profile */}
        <div>
          <img src={user} alt='user' />
        </div>
      </div>
    </div>
  );
}

export default Header;
