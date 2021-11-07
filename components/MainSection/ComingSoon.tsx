import { FC, useEffect } from "react";
import {
  makeStyles,
  Theme,
  Typography,
  Hidden,
  Container,
  useMediaQuery
} from "@material-ui/core";
import { flexCenter } from "../../utils/styles/flexbox";
import SvgLeft from "./SvgLeft";
import SvgRight from "./Svgright";
import Particles from "react-particles-js";
import params from "./particle";
import { SocialSvgIcon } from "../SocialMedia";
import { main$ } from "../../service/Main$";
import data from "../../data/homepage";

type Props = {};

const useStyles = makeStyles<Theme>((theme) => ({
  main: {
    backgroundImage: `url("${data.main.background_image}")`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      height: `calc(100vh - ${theme.spacing(8)}px)`
    },
    [theme.breakpoints.down("xs")]: {
      height: `calc(100vh - ${theme.spacing(7)}px)`
    },
    "&::before": {
      content: '""',
      display: "block",
      zIndex: -1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0, .4)"
    }
  },
  titleWrapper: {
    padding: "0 4px",
    display: "flex",
    zIndex: 2,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  particles: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: "100vw",
    zIndex: 1
  },
  container: {
    // padding: '3.8em',
    width: "100%",
    height: "100%",
    zIndex: 2,
    flexDirection: "column",
    ...flexCenter()
  },
  content: {
    width: "100%",
    zIndex: 2,
    paddingBottom: theme.spacing(6),
    ...flexCenter()
  },
  slogan: {
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  social: {
    zIndex: 2
  },
  socialLink: {
    display: "inline-block",
    padding: "1.6em 1em 1em 1em",
    color: "#d2d2d2",
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

const MainSection: FC<Props> = () => {
  const classes = useStyles();
  useEffect(() => {
    main$.next({
      title: data.main.title,
      subtitle: data.main.subtitle,
      background_image: data.main.background_image
    });
  }, []);
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <section className={classes.main} id="home">
      <Particles className={classes.particles} params={params} />
      <Container className={classes.container}>
        <div className={classes.content}>
          <Hidden smDown>
            <SvgLeft />
          </Hidden>
          <div className={classes.titleWrapper}>
            <Typography
              variant={matches ? "h1" : "h2"}
              component="h1"
              color="textSecondary"
            >
              Developer Blog
            </Typography>
            <Typography variant="h4" component="h3" color="textSecondary">
              Coming Soon...
            </Typography>
          </div>
          <Hidden smDown>
            <SvgRight />
          </Hidden>
        </div>
        <div className={classes.slogan}>
          <Typography variant="h5" component="h2" style={{ color: "#d2d2d2" }}>
            {data.main.slogan}
          </Typography>
        </div>
        <div className={classes.social}>
          {Object.entries<string>(data.main.social).map(([key, url]) => {
            return (
              <a
                target="_blank"
                href={url}
                key={key}
                className={classes.socialLink}
              >
                <SocialSvgIcon width={35} height={35} social={key} />
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MainSection;
