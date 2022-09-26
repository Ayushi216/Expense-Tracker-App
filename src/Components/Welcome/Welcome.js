import React, { Fragment } from "react";

import { useHistory } from "react-router-dom";

import classes from "./Welcome.module.css";

const Welcome = (props) => {
    const history = useHistory();
    const onClickHandler = (props) => {
        history.replace('/profile')
    }
  return (
    <Fragment>
      <section className={classes.section}>
        <h1 className={classes.h1}> Welcome to expense tracker!! </h1>
        <p className={classes.p}> You profile is incomplete!</p> 
        <button className={classes.button} onClick={onClickHandler}> Complete now </button>
      </section>
    </Fragment>
  );
};

export default Welcome;
