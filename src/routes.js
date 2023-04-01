// @mui icons
import Icon from "@mui/material/Icon";
import Login from './components/authentication/Login';
import RegisterPage from "./components/authentication/Registration";

const routes = [
    {
        name: "Sign In",
        key: "sign-in",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/",
        component: <Login />,
      },
      {
        name: "Sign In",
        key: "sign-in",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/register",
        component: <RegisterPage />,
      },
];

export default routes;