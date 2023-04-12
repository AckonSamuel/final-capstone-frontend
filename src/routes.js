// @mui icons
import Icon from '@mui/material/Icon';
import Login from './components/authentication/Login';
import RegisterPage from './components/authentication/Registration';
import Logout from './components/authentication/Logout';
import Dashboard from './components/Dashboard';
import Doctors from './components/Doctors/doctors';
import DoctorsList from './components/Doctors/DoctorsList';
import Reservations from './components/Appointments/Reservations';
import AppointmentForm from './components/Appointments/AppointmentForm';

const routes = [
  {
    routeName: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/",
    component: <Login />,
  },
  {
    routeName: "Register",
    key: "sign-up",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/register",
    component: <RegisterPage />,
  },
  {
    routeName: "Logout",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/logout",
    component: <Logout />,
  },
  {
    type: "collapse",
    routeName: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    routeName: "Home",
    key: "doctors",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/home",
    component: <Doctors />,
  },
  {
    type: "collapse",
    routeName: "Doctors List",
    key: "doctors-list",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/doctorslist",
    component: <DoctorsList />,
  },
  {
    type: "collapse",
    routeName: "Reservations",
    key: "reservations",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/reservations",
    component: <Reservations />,
  },
  {
    type: "collapse",
    routeName: "Appointment Form",
    key: "appointment-form",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/appointment-form",
    component: <AppointmentForm />,
  },
];

export default routes;
