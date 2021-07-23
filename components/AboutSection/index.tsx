import { FC } from 'react';
import {
  Typography, makeStyles, Container, Grid, fade,
  List, ListItem, ListItemIcon, ListItemText, Icon,
} from '@material-ui/core';
import clsx from 'clsx';
import data from '../../data/homepage';
import { generateKey } from '../../utils/string';
import { backgroundPattern } from '../../utils/styles/flexbox';

type Props = {}

const useStyles = makeStyles(theme => ({
  section: {
    ...backgroundPattern,
    marginBottom: theme.spacing(2)
  },
  heading: {
    boxShadow: theme.shadows[10],
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(4)
  },
  bodyHeader: {
    marginBottom: theme.spacing(2)
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
}));

type InfoProps = {
  title: string,
  data: {
    icon: string,
    text: string
  }[];
}
const AditionalInfo: FC<InfoProps> = ({ data, title }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      md={4}
    >
      <Typography variant="h5" className={classes.bodyHeader}>
        {title.toUpperCase()}
      </Typography>
      <List>
        {data.map(item => (
          <ListItem key={generateKey(item.icon)}>
            <ListItemIcon>
              <Icon>
                {item.icon}
              </Icon>
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Grid>
  )
};

const AboutSection: FC<Props> = () => {
  const classes = useStyles();
  const about_me = data.about_me;
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
            about_me.descriptions.map(({ title, content }) => (
              <Grid
                item
                md={6}
                key={generateKey(title)}
              >
                <Typography variant="h5" className={classes.bodyHeader}>
                  {title.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1">
                  {content}
                </Typography>
              </Grid>
            ))
          }
          <AditionalInfo title="interests" data={about_me.interests}  />
          <AditionalInfo title="knowledge" data={about_me.knowledge}  />
          <AditionalInfo title="contact" data={about_me.contact}  />
        </Grid>
      </Container>
    </section>
  )
}

export default AboutSection;