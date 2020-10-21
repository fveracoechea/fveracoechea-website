import { FC, ReactElement } from 'react';
import Link from 'next/link';
import {
  Container, AppBar, Drawer, Toolbar,
  List, Typography, Divider, ListItem,
  ListItemText, Avatar, IconButton
} from '@material-ui/core';
import { useStyles } from './styles';


const Navigation: FC<{ children: ReactElement }> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Link href="/" passHref>
          <IconButton>
            <Avatar src="/images/logo_blue.png" alt="Francisco Veracoechea" />
          </IconButton>
        </Link>
        <Link href="/" passHref>
          <Typography variant="h5" noWrap>
            Francisco Veracoechea
          </Typography>
        </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.container}>
        {children}
      </main>
    </div>
  )
};
export default Navigation;