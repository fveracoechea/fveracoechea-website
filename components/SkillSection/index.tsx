import { FC } from 'react';
import {
  Typography, makeStyles, Container, Grid
} from '@material-ui/core';
import { Route } from '../../service/Router$';
import { useSkillsSectionLazyQuery } from '../../graphql/index';
import useDelay from '../../hooks/useDelay';
import useAddRoute from '../../hooks/useAddRoute';
import {
  CarouselProvider, Slider, Slide, ButtonBack,
  ButtonNext, Image, DotGroup,
} from 'pure-react-carousel';

const useStyles = makeStyles(theme => ({
  section: {
    backgroundImage: 'url("/images/light_wool.png")',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
  },
  heading: {
    boxShadow: theme.shadows[10],
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(4)
  },
  sliderImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  }
}));

const route: Route = {
  name: 'Skills',
  path: '#skills',
  icon: 'code',
  order: 3,
};

export const SkillSection: FC<{}> = ({}) => {
  const classes = useStyles();
  const [getSkills, { data, loading }] = useSkillsSectionLazyQuery();
  useDelay(2000, getSkills);
  useAddRoute(route);
  return (
    <section id="skills" className={classes.section}>
      <div className={classes.heading}>
        <Typography variant="h4" color="textSecondary">
          Skills
        </Typography>
      </div>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <CarouselProvider
              naturalSlideWidth={1000}
              naturalSlideHeight={350}
              totalSlides={3}
            >
              <Slider>
                {
                  data?.carousel && data?.carousel?.data && data?.carousel?.data.map((item, i) => (
                    <Slide index={i}>
                      <Image
                        className={classes.sliderImage}
                        hasMasterSpinner
                        src={item?.image.full_url!}
                        alt={item?.title!}
                      />
                    </Slide>
                  ))
                }
              </Slider>
              <DotGroup />
            </CarouselProvider>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
