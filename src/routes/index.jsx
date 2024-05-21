import Agent from '../pages/Agent';
import Sell from '../pages/Sell';
import SellRegister from '../pages/SellRegister';

// Public routes
const publicRoutes = [
  { path: '/agent', component: Agent },
  { path: '/sell', component: Sell, customBanner: true, children: [{ path: 'register', component: SellRegister }] },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
