import { FC } from 'react';
import { makeStyles, Theme, Typography } from "@material-ui/core";
import { MainSectionQuery } from '../../graphql/index';

type Props = {
  data: MainSectionQuery
}

const useStyles = makeStyles<Theme, Props>((theme) => ({
  main: ({ data }) => ({
    backgroundImage: `url("${data.main?.data![0]?.background_image?.full_url!}")`,
    height: `calc(100vh - ${theme.spacing(8)}px)`
  })
}))


const MainSection: FC<Props> = ({ data }) => {
  const cms = data.main?.data![0];
  const classes = useStyles({ data });
  return (
    <section id="main-section" className={classes.main}>
      <Typography variant="h1" color="primary">
        {cms?.title}
      </Typography>
    </section>
  )
}

export default MainSection;