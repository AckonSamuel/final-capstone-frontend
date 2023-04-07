// @mui icons
import Icon from '@mui/material/Icon';
import Login from './components/authentication/Login';
import RegisterPage from './components/authentication/Registration';
import Logout from './components/authentication/Logout';
import Dashboard from './components/Dashboard';
import Doctors from './components/Doctors/doctors';

const routes = [
  {
    routeName: 'Sign In',
    key: 'sign-in',
    icon: <Icon fontSize="small">login</Icon>,
    route: '/',
    component: <Login />,
  },
  {
    routeName: 'Register',
    key: 'sign-up',
    icon: <Icon fontSize="small">login</Icon>,
    route: '/register',
    component: <RegisterPage />,
  },
  {
    routeName: 'Logout',
    key: 'sign-in',
    icon: <Icon fontSize="small">login</Icon>,
    route: '/logout',
    component: <Logout />,
  },
  {
    type: 'collapse',
    routeName: 'Dashboard',
    key: 'dashboard',
    icon: <Icon fontSize="small">person</Icon>,
    route: '/dashboard',
    component: <Dashboard />,
  },
  {
    type: 'collapse',
    routeName: 'Doctors',
    key: 'doctors',
    icon: <Icon fontSize="small">person</Icon>,
    route: '/doctors',
    component: <Doctors />,
  },
];

export default routes;
