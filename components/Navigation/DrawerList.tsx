import { FC } from 'react';
import useObservable from '../../hooks/useObservable';
import {
  List, ListItem, useMediaQuery,
  ListItemText, Icon, ListItemIcon, useTheme
} from '@material-ui/core';
import { router$ } from '../../service/Router$';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

type Props = {
  onClose: () => void
}

const useStyles = makeStyles(theme => ({
  listItem: {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0, 0.2)',
    }
  }
}))

const DrawerList: FC<Props> = ({ onClose }) => {
  const theme = useTheme();
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles()
  const { value } = useObservable(router$, []);
  return (
    <List>
      {value.map((route) => (
        <Link href={route.path} passHref key={route.name}>
          <ListItem
            button
            onClick={() => {
              if (matches) onClose();
              // router.push(route.path);
            }}
            className={classes.listItem}
          >
            <ListItemIcon>
              <Icon style={!matches ? { color: theme.palette.background.default } : {}}>{route.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={route.name} style={!matches ? { color: theme.palette.background.default } : {}} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}
export default DrawerList;