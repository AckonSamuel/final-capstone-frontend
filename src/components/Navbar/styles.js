 
const navbarContainer = (theme) => {
    const { breakpoints } = theme;
    return ({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    pt: 0.5,
    pb: 0.5,
  
    [breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: "0",
      paddingBottom: "0",
    },
  })};
  
  const navbarRow = ( theme, { isMini }) => {
    const { breakpoints } = theme;

    return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  
    [breakpoints.up("md")]: {
      justifyContent: isMini ? "space-between" : "stretch",
      width: isMini ? "100%" : "max-content",
    },
  
    [breakpoints.up("xl")]: {
      justifyContent: "stretch !important",
      width: "max-content !important",
    },
  }};
  
  const navbarIconButton = (theme) => {
    const { breakpoints } = theme;
    return {
    px: 1,
  
    "& .MuiTypography-root": {
      display: "none",
  
      [breakpoints.up("sm")]: {
        display: "inline-block",
        lineHeight: 1.2,
        ml: 0.5,
      },
    },
  }};
  
  const navbarMobileMenu = (theme) => {
  const { breakpoints } = theme;
  return({
    display: "inline-block",
    lineHeight: 0,
  
    [breakpoints.up("xl")]: {
      display: "none",
    },
  })};
  
  export { navbarContainer, navbarRow, navbarIconButton, navbarMobileMenu };
  