import Dashboard from '@Views/Dashboard';
import LandingPage from '@Views/Landingpage';
import { IRoute } from './types';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: false,
  },
  {
    path: '/Landingpage',
    name: 'Landingpage ',
    component: LandingPage,
    authenticated: false,
  },
];

export default appRoutes;
