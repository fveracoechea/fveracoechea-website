import { FC } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const JobLoader: FC<{}> = () => (
  <> 
    <Grid item md={2} />
    <Grid item md={8}>
      <Typography variant="h3">
        <Skeleton />
      </Typography>
      <Skeleton variant="rect" width="100%" height={160} />
      <Typography variant="h4">
        <Skeleton />
      </Typography>
    </Grid>
    <Grid item md={2} />
    <br/>
    <br/>
  </>
)
export default JobLoader;