// @mui icons
import Icon from "@mui/material/Icon";
import Login from './components/authentication/Login';
import RegisterPage from "./components/authentication/Registration";
import Logout from "./components/authentication/Logout";

const routes = [
    {
        route_name: "Sign In",
        key: "sign-in",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/",
        component: <Login />,
      },
      {
        route_name: "Register",
        key: "sign-up",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/register",
        component: <RegisterPage />,
      },
      {
        route_name: "Logout",
        key: "sign-in",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/logout",
        component: <Logout />,
      },
];

export default routes;