// @mui icons
import Icon from "@mui/material/Icon";
import Login from './components/authentication/Login';

const routes = [
    {
        name: "Sign In",
        key: "sign-in",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/",
        component: <Login />,
      },
];

export default routes;