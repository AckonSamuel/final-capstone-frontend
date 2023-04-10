function collapseItem(theme, ownerState) {
  const { transitions, breakpoints, functions } = theme;
  const { active } = ownerState;

  const { pxToRem } = functions;

  return {
    background: active
      ? 'blue'
      : 'white',
    color: 'green',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${pxToRem(8)} ${pxToRem(10)}`,
    margin: `${pxToRem(1.5)} ${pxToRem(16)}`,
    borderRadius: 6,
    cursor: 'pointer',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    [breakpoints.up('xl')]: {
      transition: transitions.create(['box-shadow', 'background-color'], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },

    '&:hover, &:focus': {
      backgroundColor: () => {
        let backgroundValue;

        if (!active) {
          backgroundValue = '#8da70b';
        }

        return backgroundValue;
      },
    },
  };
}

function collapseIconBox(theme) {
  const { transitions, functions } = theme;

  const { pxToRem } = functions;

  return {
    minWidth: pxToRem(32),
    minHeight: pxToRem(32),
    color: '#adcc12',
    borderRadius: 6,
    display: 'grid',
    placeItems: 'center',
    transition: transitions.create('margin', {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    '& svg, svg g': {
      color: '#adcc12',
    },
  };
}

const collapseIcon = ({ active }) => ({
  color: active ? 'white' : 'black',
});

function collapseText(theme, ownerState) {
  const {
    typography, transitions, breakpoints, functions,
  } = theme;
  const { miniSidenav, active } = ownerState;

  const { fontWeightRegular, fontWeightLight } = typography;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(10),

    [breakpoints.up('xl')]: {
      opacity: miniSidenav ? 0 : 1,
      maxWidth: miniSidenav ? 0 : '100%',
      marginLeft: miniSidenav ? 0 : pxToRem(10),
      transition: transitions.create(['opacity', 'margin'], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    '& span': {
      fontWeight: active ? fontWeightRegular : fontWeightLight,
      lineHeight: 0,
    },
  };
}

export {
  collapseItem, collapseIconBox, collapseIcon, collapseText,
};
