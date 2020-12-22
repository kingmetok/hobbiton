import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import useStyles from './AchievementsStyles';

const Achievements = ({ achievementsList }) => {
  const classes = useStyles();

  const badgeList = achievementsList.map((item) => {
    const imagePath = `../${item}`;
    return (
      <div className={classes.imageWrapper} key={imagePath}>
        <img src={imagePath} className={classes.badge} alt="" />
      </div>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <h2 className={classes.title}>Your Badges</h2>
        <Grid item xs={12}>
          <Paper className={`${classes.paper} ${classes.list}`}>
            {badgeList}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
