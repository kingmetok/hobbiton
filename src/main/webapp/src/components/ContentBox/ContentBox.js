import React from 'react';
import useStyles from './ContentBoxStyles';

export default function ContentBox(props) {
  const classes = useStyles();
  return (
    <div style={props.wrapperStyle} className={classes.contentBoxWrapper}>
      <img className={classes.contentImage} src={props.image} alt="" />
      <div className={classes.contentTextWrapper}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.contentText}>{props.description}</p>
      </div>
    </div>
  );
}
