import React, { FC, ReactElement, useState } from 'react';
import {
  AppBar, Drawer, Toolbar, Hidden,
  Typography, Avatar, IconButton, Icon,
  useTheme, useMediaQuery,
} from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import DrawerList from './DrawerList';
import useDevice from '../../hooks/useDevice';
import useObservable from '../../hooks/useObservable';
import { main$, initialState } from '../../service/Main$';

const Navigation: FC<{ children: ReactElement }> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const { isMobile } = useDevice();
  const [open, setOpen] = useState(!isMobile);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const { value } = useObservable(main$, initialState);
  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Avatar src="/images/logo_blue.png" alt="Francisco Veracoechea" />
            <div className={classes.spacer} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={onOpen}
            >
              <Icon>menu</Icon> 
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Drawer
        color="primary"
        variant={matches ? 'temporary' : 'permanent'}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        onClose={onClose}
        open={open}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.buttonWrappwer}>
          <IconButton
            aria-label="open drawer"
            onClick={open ? onClose : onOpen}
            edge="start"
            style={!matches ? { color: theme.palette.background.default } : {}}
          >
            <Icon>{ open ? 'chevron_left' : 'chevron_right' }</Icon>
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          {open && (
            <>
              <Typography variant="h4" color="primary">
                Francisco
              </Typography>
              <Typography variant="h4" color="primary">
                Veracoechea
              </Typography>
              <Typography variant="subtitle1" color={!matches ? 'textSecondary' : 'textPrimary'}>
                {value.subtitle}
              </Typography>
            </>
          )}
          {!open && <Avatar src="/images/logo_blue.png" alt="Francisco Veracoechea" />}
        </div>
        <div className={classes.drawerContainer}>
          <DrawerList onClose={onClose} />
        </div>
      </Drawer>
      <main className={clsx(classes.container, {
        [classes.containerOpen]: open,
        [classes.containerClose]: !open,
      })}>
        {children}
      </main>
    </div>
  )
};
export default Navigation;