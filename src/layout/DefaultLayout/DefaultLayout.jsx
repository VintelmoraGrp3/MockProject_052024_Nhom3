import CustomHeader from '../components/CustomHeader';
import DefaultHeader from '../components/DefaultHeader';
import './DefaultLayout.scss';

function DefaultLayout({ header, children }) {
  return (
    <div>
      {header ? <CustomHeader /> : <DefaultHeader />}
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
