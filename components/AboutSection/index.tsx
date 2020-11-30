import { FC } from 'react';
import { MainSectionQuery } from '../../graphql/index';
import {
  Typography, makeStyles, Container, Grid, fade,
  List, ListItem, ListItemIcon, ListItemText, Icon,
} from '@material-ui/core';
import clsx from 'clsx';

type Props = {
  data: MainSectionQuery
}

const useStyles = makeStyles(theme => ({
  section: {
    backgroundImage: 'url("/images/furley_bg.png")',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
  },
  heading: {
    boxShadow: theme.shadows[10],
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(4)
  },
  bodyHeader: {
    
  },
  light: {
    color: theme.palette.secondary.light
  },
  bodyText: {
    fontSize: theme.typography.h5.fontSize,
    
  },
  quote: {
    // paddingLeft: theme.spacing(2),
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    display: 'inline-block',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      backgroundColor: theme.palette.primary.light,
      width: 4
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      right: 0,
      bottom: 0,
      height: 4,
      backgroundColor: theme.palette.primary.light,
      width: '51%'
    },
  }
}))

const AboutSection: FC<Props> = ({ data }) => {
  const classes = useStyles();
  const about_me = data?.about_me!.data![0]!;
  const interests = data?.interests?.data!;
  const info = data?.information?.data!;
  const contact = data?.contact?.data!;
  return (
    <section id="about_me" className={classes.section}>
      <div className={classes.heading}>
        <Typography variant="h4" component="h2" color="textSecondary">
          About Me
        </Typography>
      </div>
      <Container>
        <Grid
          container
          spacing={4}
        >
          <Grid item md={12}>
            <Typography variant="h3" className={clsx(classes.quote, classes.light)}>
              {about_me.quote}
            </Typography>
          </Grid>
          {
            Object.entries<string>(about_me?.descriptions).map(([key, value]) => (
              <Grid
                item
                md={6}
                key={key}
              >
                <Typography variant="h5" className={clsx(classes.bodyHeader, classes.light)}>
                  {key}
                </Typography>
                <Typography variant="body1" className={clsx(classes.bodyText, classes.light)}>
                  {value}
                </Typography>
              </Grid>
            ))
          }
          <Grid
            item
            md={4}
          >
            <Typography variant="h5" className={clsx(classes.light)}>
              Interests
            </Typography>
            <List>
              {interests.map(item => (
                <ListItem button key={item!.id}>
                  <ListItemIcon>
                    <Icon>
                      {item?.icon}
                    </Icon>
                  </ListItemIcon>
                  <ListItemText primary={item?.name} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            item
            md={4}
          >
            <Typography variant="h5" className={clsx(classes.light)}>
              Knowledge
            </Typography>
            <List>
              {info.map(item => (
                <ListItem key={item!.id}>
                  <ListItemIcon>
                    <Icon>
                      {item?.icon}
                    </Icon>
                  </ListItemIcon>
                  <ListItemText primary={item?.text} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            item
            md={4}
          >
            <Typography variant="h5" className={clsx(classes.light)}>
              Contact
            </Typography>
            <List>
              {contact.map(item => (
                <ListItem key={item!.id}>
                  <ListItemIcon>
                    <Icon>
                      {item?.icon}
                    </Icon>
                  </ListItemIcon>
                  <ListItemText primary={item?.info} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default AboutSection;