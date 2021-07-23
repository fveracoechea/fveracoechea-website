import { FC } from "react";
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Paper,
  useMediaQuery,
  Theme,
} from "@material-ui/core";

import data from "../../data/homepage";
import { generateKey } from "../../utils/string";
import { backgroundPattern } from "../../utils/styles/flexbox";

type Props = {};

const useStyles = makeStyles((theme) => ({
  section: {
    ...backgroundPattern
  },
  heading: {
    boxShadow: theme.shadows[10],
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(4),
  },
  jobHeader: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(2),
  },
  jobWrapper: {
    overflow: "hidden",
    marginBottom: theme.spacing(4),
  },
  jobContent: {
    padding: theme.spacing(2),
  },
  jobLogo: {
    height: "auto",
    objectFit: "cover",
    width: "auto",
    maxWidth: "350px",
    padding: `${theme.spacing(2)}px 0`,
    [theme.breakpoints.down("md")]: {
      maxWidth: "250px",
    },
  },
  jobTitle: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  jobFooter: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  jobLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  },
}));

const ExperienceSection: FC<Props> = () => {
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <section id="experience" className={classes.section}>
      <div className={classes.heading}>
        <Typography variant="h4" component="h2" color="textSecondary">
          Experience
        </Typography>
      </div>

      <Container>
        <Grid container justify="center">
          {data.experience
            .sort((a, b) => a.order - b.order)
            .map((item) => (
              <Grid
                item
                md={8}
                className={classes.jobWrapper}
                component={Paper}
                elevation={3}
                key={generateKey(String(item.order))}
              >
                <Grid item md={12} className={classes.jobHeader}>
                  <img
                    className={classes.jobLogo}
                    src={item.company_logo}
                    alt={item.company_name}
                  />
                </Grid>
                <Grid item md={12} className={classes.jobContent}>
                  <Typography variant="h6">{item.position}</Typography>
                  <br />
                  <Typography variant="body1">{item.description}</Typography>
                  <div className={classes.jobFooter}>
                    <Typography variant="subtitle2" color="primary">
                      <a
                        className={classes.jobLink}
                        href={item.website}
                        target="_blank"
                      >
                        {item.website}
                      </a>
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align={matches ? "left" : "right"}
                    >
                      {item.working_time}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ExperienceSection;
