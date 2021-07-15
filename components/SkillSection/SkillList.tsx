import {
  Grid, Typography, makeStyles, useMediaQuery, Theme,
  Link
} from '@material-ui/core';
import { FC, useMemo } from 'react';
import Image from 'next/image';
import { skills as data } from '../../data/skills';

type Props = {};

const useStyles = makeStyles((theme) => ({
	image: {
    marginTop: theme.spacing(2)
    // height: '100px !important',
    // maxWidth: '100% !important',
    // width: 'auto !important',
	},
	itemName: {
		textAlign: 'center',
		color: theme.palette.secondary.main,
	},
	typeTitle: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(4),
		position: 'relative',
		display: 'inline-block',
		'&:after': {
			content: '""',
			position: 'absolute',
			left: 0,
			bottom: -2,
			height: 2,
			backgroundColor: theme.palette.primary.main,
			width: '100%',
		},
	},
	itemLink: {
    color: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    
  }
}));

const groupBy = (key: string) => (array: any[]) =>
	array.reduce((objectsByKeyValue, obj) => {
		const value = obj[key];
		objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
		return objectsByKeyValue;
	}, {});

const SkillList: FC<Props> = ({}) => {
	const skills = useMemo(() => groupBy('type')(data), []);
	const classes = useStyles();
	const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
	return (
		<>
			{Object.entries(skills).map(([type, value]) => (
				<Grid container key={type} item md={12} justify={matches ? 'center' : 'flex-start'}>
					<Typography variant={matches ? 'h4' : 'h5'} className={classes.typeTitle}>
						{type.toUpperCase()}
					</Typography>
					<Grid container item md={12} spacing={4}>
						{(value as any).map((item: any) => (
							<Grid key={item.id} item xs={6} sm={4} md={2}>
								<Link component="a" className={classes.itemLink} href={item.link} target="_blank">
                  <Image
                    className={classes.image}
                    layout="fixed"
                    height={90}
                    width={90}
                    src={item.image!}
                    alt={item.name}
                  />
									<Typography variant="subtitle1" className={classes.itemName}>
										{item.name}
									</Typography>
								</Link>
							</Grid>
						))}
					</Grid>
				</Grid>
			))}
		</>
	);
};

export default SkillList;
