import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import { useMaterialUIController, setLayout } from "../../context";

const AuthenticationLayout = ({ background, children }) => {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();
  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <Box
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </Box>
  );
}

AuthenticationLayout.defaultProps = {
  background: "white",
};

AuthenticationLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light"]),
  children: PropTypes.node.isRequired,
};

export default AuthenticationLayout;
