import React from 'react';
import Login from "../../compenents/Login/Login";
import classes from "./LoginPage.module.sass"

const LoginPage = () => {
    return (
        <div className={classes.authPage}>
            <Login/>
        </div>
    );
};

export default LoginPage;