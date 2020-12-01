import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { FC, useMemo } from 'react';
import { MainSectionQuery, SkillsItem } from '../../graphql/index';

type Props = {
  data: MainSectionQuery
}

const useStyles = makeStyles(theme => ({
  image: {
    margin: '0 auto',
    maxHeight: 100,
    paddingBottom: 10,
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'table-cell',
    maxWidth: '100%',
    height: 'auto',
  },
  itemName: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
  },
  typeTitle: {
    marginTop: theme.spacing(2),
    position: 'relative',
    display: 'inline-block',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -2,
      height: 2,
      backgroundColor: theme.palette.primary.main,
      width: '100%'
    },
  },
  itemLink: {
    display: 'block',
    paddingTop: theme.spacing(2),
    color: theme.palette.secondary.main,
  }
}))

const groupBy = (key: string) => (array: any[]) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const SkillList: FC<Props> = ({ data }) => {
  const skills = useMemo(() => groupBy('type')(data?.skills?.data! || []), [data]);
  const classes = useStyles();
  return (
    <>
      {Object.entries(skills).map(([type, value]) => (
        <Grid
          key={type}
          item
          md={12}
        >
          <Grid container spacing={4}>
            <Grid item md={12}>
              <Typography variant="h5" className={classes.typeTitle}>
                {type.toUpperCase()}
              </Typography>
            </Grid>
            <Grid container>
              {(value as any).map((item: SkillsItem) => (
                <Grid
                  key={item.id}
                  item
                  md={2}
                >
                  <Button component="a" className={classes.itemLink} href={item.link} target="_blank">
                    <img className={classes.image} src={item.image.full_url!} alt={item.name} />
                    <Typography variant="subtitle1" className={classes.itemName}>
                      {item.name}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  )
}

export default SkillList;