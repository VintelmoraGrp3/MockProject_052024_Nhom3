import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';

const CONTACTS = [
  { icon: <FiPhone />, title: '+84xxxxxxxxxx' },
  { icon: <MdOutlineEmail />, title: 'tempura@gmail.com' },
  {
    icon: <IoHomeOutline />,
    address: {
      street: { number: '230/5', name: ' Chau Thi Vinh Te' },
      ward: 'My An',
      district: 'Ngu Hanh Son',
      city: 'Da Nang',
    },
  },
];

export { CONTACTS };
