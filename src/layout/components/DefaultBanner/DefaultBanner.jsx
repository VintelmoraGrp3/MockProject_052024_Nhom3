import './DefaultBanner.scss';
import banner from '../../../assets/images/banner.jpg';

function DefaultBanner() {
  return (
    <div className='default-banner'>
      <img src={banner} alt='banner' className='default-banner--img' />

      <div className='default-banner__content'>
        <h1 className='default-banner__content--heading'>
          AGENT <br /> FRIENDS OF CUSTOMERS
        </h1>
      </div>
    </div>
  );
}

export default DefaultBanner;
