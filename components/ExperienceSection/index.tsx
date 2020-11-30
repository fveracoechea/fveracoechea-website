import { FC, useMemo } from 'react';
import { useExperienceSectionLazyQuery } from '../../graphql/index';
import { makeStyles, Typography, Container, Grid, Paper, useMediaQuery, Theme } from '@material-ui/core';
import useAddRoute from '../../hooks/useAddRoute';
import useInView from '../../hooks/useInView';
import JobLoader from './JobLoader';
import { reverse } from 'fp-ts/Array';

type Props = {};

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
	jobHeader: {
		backgroundColor: theme.palette.secondary.main,
		display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(2)
  },
  jobWrapper: {
    overflow: 'hidden',
    marginBottom: theme.spacing(4)
  },
  jobContent: {
    padding: theme.spacing(2)
  },
	jobLogo: {
    height: 'auto',
    objectFit: 'cover',
    width: 'auto',
    maxWidth: '350px',
    padding: `${theme.spacing(2)}px 0`,
    [theme.breakpoints.down('md')]: {
      maxWidth: '250px',
    }
  },
  jobTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2)
  },
  jobFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  jobLink: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline'
    }
  }
}));

const ExperienceSection: FC<Props> = ({}) => {
	const [onEnter, { called, loading, data }] = useExperienceSectionLazyQuery();
	const { ref } = useInView({ onEnter });
  const experience = useMemo(() => reverse(data?.experience?.data || []), [data]);
  const matches = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
	useAddRoute({
		name: 'Experience',
		path: '#experience',
		icon: 'insights',
		order: 5,
	});
	const classes = useStyles();
	return (
		<section id="experience" className={classes.section} ref={ref}>
			<div className={classes.heading}>
				<Typography variant="h4" component="h2" color="textSecondary">
					Experience
				</Typography>
			</div>

			<Container>
				<Grid container>
					{!called || loading ? (
						<>
							<JobLoader />
							<JobLoader />
						</>
					) : (
						experience.map((item) => (
              <>
                <Grid item md={2} />
                <Grid item md={8} className={classes.jobWrapper} component={Paper} elevation={3}>
                  <Grid item md={12} className={classes.jobHeader}>
                    <img
                      className={classes.jobLogo}
                      src={item?.company_logo?.full_url!}
                      alt={item?.company_name!}
                    />
                  </Grid>
                  <Grid item md={12} className={classes.jobContent}>
                    <Typography variant="h6"
                    >
                      {item?.position}
                    </Typography>
                    <br/>
                    <Typography variant="body1">
                      {item?.description}
                    </Typography>
                    <div className={classes.jobFooter}>
                      <Typography variant="subtitle2" color="primary">
                        <a className={classes.jobLink} href={item?.website!} target="_blank">{item?.website!}</a>
                      </Typography>
                      <Typography variant="subtitle2" align={matches ? 'left' : 'right'}>
                        {item?.working_time}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid item md={2} />
              </>
						))
					)}
				</Grid>
			</Container>
		</section>
	);
};

export default ExperienceSection;
