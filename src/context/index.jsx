import { createContext, useContext, useReducer, useMemo } from 'react';

import PropTypes from 'prop-types';

const MaterialUI = createContext();

MaterialUI.displayName = 'MaterialUIContext';

const reducer = (state, action) => {
    switch (action.type) {
        case "MINI_SIDENAV": {
          return { ...state, miniSidenav: action.value };
        }
        case "TRANSPARENT_SIDENAV": {
          return { ...state, transparentSidenav: action.value };
        }

        case "TRANSPARENT_NAVBAR": {
          return { ...state, transparentNavbar: action.value };
        }

        case "FIXED_NAVBAR": {
          return { ...state, fixedNavbar: action.value };
        }

        case "LAYOUT": {
          return { ...state, layout: action.value };
        }

        default: {
          throw new Error(`Unhandled action type: ${action.type}`);
        }
      }
} 