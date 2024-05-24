import Input from '../../components/Input';
import './SellRegister.scss';
import { SELL_REGISTER } from './constants';
import Button from '../../components/Button';

function SellRegister() {
  return (
    <div className='sell-register'>
      <form className='sell-register__form'>
        <h2 className='sell-register__form--title'>seller information</h2>

        <div className='sell-register__form--wrapper'>
          {SELL_REGISTER.map((item) => {
            let type = item.prettier;
            let Component = Input[type];
            let name = item.name;

            return <Component key={name} {...item} />;
          })}
        </div>

        <Button type='submit' className='sell-register__form--submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SellRegister;
