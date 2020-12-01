import { FC, useCallback } from 'react';
import useObservable from '../../hooks/useObservable';
import {
  List, ListItem, useMediaQuery,
  ListItemText, Icon, ListItemIcon, useTheme, Link as MuiLink
} from '@material-ui/core';
import { router$, initialState } from '../../service/Router$';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import { fromPredicate, fold } from 'fp-ts/lib/Option';

const ioVoid = () => {}

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
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles()
  const onClickHandler = useCallback(
    () => fold(
      ioVoid,
      onClose
    )(fromPredicate((m: boolean) => m)(matches)),
    [onClose, matches]
  );
  const { value } = useObservable(router$, initialState);
  return (
    <List>
      {value.map((route) => route.target
        ? (
          <li key={route.name}>
            <ListItem
              component="a"
              href={route.path}
              target={route.target}
              button
              className={classes.listItem}
            >
              <ListItemIcon>
                <Icon style={!matches ? { color: theme.palette.background.default } : {}}>{route.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={route.name} style={!matches ? { color: theme.palette.background.default } : {}} />
            </ListItem>
          </li>
        )
        : (
          <li key={route.name}>
            <Link href={route.path} passHref>
              <ListItem
                button
                onClick={onClickHandler}
                className={classes.listItem}
              >
                <ListItemIcon>
                  <Icon style={!matches ? { color: theme.palette.background.default } : {}}>{route.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={route.name} style={!matches ? { color: theme.palette.background.default } : {}} />
              </ListItem>
            </Link>
          </li>
        )
      )}
    </List>
  )
}
export default DrawerList;