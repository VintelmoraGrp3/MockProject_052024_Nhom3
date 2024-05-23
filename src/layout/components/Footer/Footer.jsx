import { Link } from 'react-router-dom';
import './Footer.scss';
import { CONTACTS } from './constants';
import MenuList from '../../../components/MenuList';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        {/* Logo */}
        <div className='footer__logo'>
          <Link to='/' className='footer__logo--link'>
            LOGO
          </Link>
        </div>

        {/* Content */}
        <div className='footer__content'>
          <div className='footer__content--contact'>
            <MenuList textLeft data={CONTACTS} />
          </div>

          <div className='footer__content--categories'>
            {/* About */}
            <div className='footer__content--section'>
              <h1 className='footer__content--title'>about</h1>
              <MenuList
                data={[
                  { title: 'Commercial Resources' },
                  { title: 'item 2' },
                  { title: 'item 3' },
                  { title: 'item 4' },
                  { title: 'item 5' },
                ]}
              />
            </div>

            {/* Program */}
            <div className='footer__content--section'>
              <h1 className='footer__content--title'>program</h1>
              <MenuList
                data={[
                  { title: 'REALTOR® Code of Ethics' },
                  { title: 'item 2' },
                  { title: 'item 3' },
                  { title: 'item 4' },
                  { title: 'as part of a cooperative selling system' },
                ]}
              />
            </div>

            {/* Support */}
            <div className='footer__content--section'>
              <h1 className='footer__content--title'>support</h1>
              <MenuList
                data={[
                  { title: 'as part of a cooperative selling system' },
                  { title: 'item 2' },
                  { title: 'item 3' },
                  { title: 'item 4' },
                  { title: 'It Was For Her - a touching video of the saints from all over the world' },
                ]}
              />
            </div>
          </div>
        </div>

        <div className='footer__bottom'>
          <p className='footer__bottom--copyright'>Copyright @ 2024. All right reserved</p>

          <div className='footer__bottom--policy'>
            <a className='footer__bottom--policy-link' href='/cookies-policy'>
              Cookies Policy
            </a>
            <span className='footer__bottom--separator'> | </span>
            <a className='footer__bottom--policy-link' href='/change-language'>
              English
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
