import { FC } from 'react';
import { Typography, makeStyles, Container, Grid, fade } from '@material-ui/core';
import SkillList from './SkillList';

type Props = {};

const useStyles = makeStyles((theme) => ({
	section: {
		backgroundImage: 'url("/images/furley_bg.png")',
		backgroundRepeat: 'repeat',
		backgroundAttachment: 'fixed',
		paddingBottom: theme.spacing(4)
	},
	heading: {
		boxShadow: theme.shadows[10],
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
		backgroundColor: theme.palette.primary.main,
		marginBottom: theme.spacing(4),
	},
	sliderImage: {
		zIndex: 5,
		objectPosition: 'center'
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

export const SkillSection: FC<Props> = ({}) => {
	const classes = useStyles();
	return (
		<section id="skills" className={classes.section}>
			<div className={classes.heading}>
				<Typography variant="h4" component="h2" color="textSecondary">
					Skills
				</Typography>
			</div>
			<Container>
				<Grid container spacing={4}>
					<SkillList />
				</Grid>
			</Container>
		</section>
	);
};
