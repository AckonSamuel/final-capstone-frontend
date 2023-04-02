import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NavbarLink = ({ icon, route_name, route }) => (
    <Box
        component={Link}
        to={route}
        mx={1}
        p={1}
        display="flex"
        alignItems="center"
        sx={{ cursor: 'pointer', userSelect: "none"}}
    >
        <Icon
          sx={{
            color: "white",
            veriticalAlign: "middle",
          }}
        >
            {icon}
        </Icon>
        <Typography
           variant='button'
           fontWeight="regular"
           color="white"
           textTransform="capitalize"
           sx={{ width: "100%", lineHeight: 0 }}
        >
            &nbsp;{route_name}
        </Typography>
    </Box>
);

NavbarLink.propTypes = {
    icon: PropTypes.string.isRequired,
    route_name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};
  