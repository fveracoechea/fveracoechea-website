import { FC, useState } from 'react';
import { Typography, makeStyles, Container, Grid, fade, IconButton, Icon } from '@material-ui/core';
import { MainSectionQuery } from '../../graphql/index';
import SkillList from './SkillList';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import clsx from 'clsx';

type Props = {
	data: MainSectionQuery;
};

const useStyles = makeStyles((theme) => ({
	section: {
		backgroundImage: 'url("/images/furley_bg.png")',
		backgroundRepeat: 'repeat',
		backgroundAttachment: 'fixed',
	},
	heading: {
		boxShadow: theme.shadows[10],
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
		backgroundColor: theme.palette.primary.main,
		marginBottom: theme.spacing(4),
	},
	sliderImage: {
		zIndex: 5,
		objectFit: 'cover',
		width: '100%',
		height: '100%',
	},
	slideWrapper: {
		position: 'relative',
	},
	sliderContent: {
		zIndex: 10,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: fade('#000', 0.6),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    opacity: 0,
    cursor: 'pointer',
		transition: theme.transitions.create('opacity', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
  },
  visibleContent: {
    opacity: 1,
  },
	descriptionWrapper: {
		maxWidth: 600,
	},
}));

export const SkillSection: FC<Props> = ({ data }) => {
	const classes = useStyles();
	const [isHover, setIsHover] = useState(false);
	return (
		<section id="skills" className={classes.section}>
			<div className={classes.heading}>
				<Typography variant="h4" component="h2" color="textSecondary">
					Skills
				</Typography>
			</div>
			<Container>
				<Grid container spacing={4}>
					<SkillList data={data!} />
					<Grid item md={12}>
						<CarouselProvider
              naturalSlideWidth={1000}
              naturalSlideHeight={350}
              totalSlides={data?.carousel?.data?.length || 3}
              interval={3000}
              infinite
              isPlaying
            >
							<Slider>
								{data &&
									data.carousel &&
									data!.carousel!.data!.map((item, i) => (
                    <Slide
                      index={i}
                      key={item?.id!}
                      className={classes.slideWrapper}
                    >
											<Image
												className={classes.sliderImage}
												hasMasterSpinner
												src={item?.image.full_url!}
												alt={item?.title!}
											/>
											<div
                        className={clsx(classes.sliderContent, {
                          [classes.visibleContent]: isHover
                        })}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                      >
                        <IconButton component={ButtonBack} color="primary">
                          <Icon fontSize="large">
                            chevron_left
                          </Icon>
                        </IconButton>
												<div className={classes.descriptionWrapper}>
                          <Typography variant="h3" color="textSecondary" style={{ textAlign: 'center' }}>
                            {item?.title}
                          </Typography>
													<Typography variant="subtitle1" color="textSecondary">
														{item?.description}
													</Typography>
												</div>
                        <IconButton component={ButtonNext} color="primary">
                          <Icon fontSize="large">
                            chevron_right
                          </Icon>
                        </IconButton>
											</div>
										</Slide>
									))}
							</Slider>
							<DotGroup />
						</CarouselProvider>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};
