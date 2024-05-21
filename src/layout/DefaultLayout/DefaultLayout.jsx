import CustomBanner from '../components/CustomBanner';
import DefaultBanner from '../components/DefaultBanner';
import Header from '../components/Header';
import './DefaultLayout.scss';

function DefaultLayout({ banner, children }) {
  return (
    <div className='app'>
      <Header />
      <div>
        {banner ? <CustomBanner /> : <DefaultBanner />}
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
