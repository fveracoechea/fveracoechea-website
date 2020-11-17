import { makeStyles } from "@material-ui/core";

export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: 'url("/images/footer_lodyas.png")',
    backgroundRepeat: 'repeat',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      width: '100%'
    }
  },
  spacer: {
    flexGrow: 1,
  },
  drawer: {
    zIndex: theme.zIndex.drawer,
    position: 'fixed',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: 36,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.secondary.main,
      backgroundImage: 'url("/images/footer_lodyas.png")',
      backgroundRepeat: 'repeat',
    },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(7) + 1,
      backgroundColor: theme.palette.secondary.main,
      backgroundImage: 'url("/images/footer_lodyas.png")',
      backgroundRepeat: 'repeat',
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    width: '100%',
    marginTop: '0',
    transition: theme.transitions.create('padding-left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(8)
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(7)
    },
  },
  containerOpen: {
    paddingLeft: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    }
  },
  containerClose: {
    paddingLeft: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(7) + 1,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  buttonWrappwer : {
    display: 'flex',
    justifyContent: 'flex-end'
  }
})); 