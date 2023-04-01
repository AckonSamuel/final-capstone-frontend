import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AuthenticationLayout from "./AuthenticationLayout";

const BasicLayout = ({ image, children }) => {

  const BoxIm = styled(Box)(() => ({ 
    width: "100%",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  }))
  
  return (
    <AuthenticationLayout>
      <BoxIm px={1} height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </BoxIm>
    </AuthenticationLayout>
  );
}

BasicLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
