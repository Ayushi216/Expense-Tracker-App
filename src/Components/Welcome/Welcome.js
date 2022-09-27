import React, { Fragment, useContext } from "react";

import { useHistory } from "react-router-dom";

import classes from "./Welcome.module.css";
import AuthContext from "../../store/auth-context";

const Welcome = (props) => {
    const authCtx = useContext(AuthContext)
    const history = useHistory();
    const onClickHandler = (props) => {
        history.replace('/profile')
    }

    const logoutHandler = () => {
      authCtx.logout();
      history.replace("/auth");
    };

  return (
    <Fragment>
      <section className={classes.section}>
        <h1 className={classes.h1}> Welcome to expense tracker!! </h1>
        <p className={classes.p}> You profile is incomplete!</p> 
        <button className={classes.button} onClick={onClickHandler}> Complete now </button>
        <button className={classes.logout} onClick = {logoutHandler}> Logout </button>
      </section>
    </Fragment>
  );
};

export default Welcome;
