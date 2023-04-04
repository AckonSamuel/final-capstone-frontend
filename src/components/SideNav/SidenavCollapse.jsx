import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";

import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "./styles/sidenavCollapse";

import { useMaterialUIController } from "../../context";

const SidenavCollapse = ({ icon, route_name, active, ...rest }) => {
  const [controller] = useMaterialUIController();
  const { miniSidenav } = controller;

  return (
    <ListItem component="li">
      <Box
        {...rest}
        sx={(theme) =>
          collapseItem(theme, {
            active,
          })
        }
      >
        <ListItemIcon
          sx={(theme) =>
            collapseIconBox(theme, { active })
          }
        >
          {typeof icon === "string" ? (
            <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
          ) : (
            icon
          )}
        </ListItemIcon>

        <ListItemText
          primary={route_name}
          sx={(theme) =>
            collapseText(theme, {
              miniSidenav,
              active,
            })
          }
        />
      </Box>
    </ListItem>
  );
}

SidenavCollapse.defaultProps = {
  active: false,
};

SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  route_name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default SidenavCollapse;
