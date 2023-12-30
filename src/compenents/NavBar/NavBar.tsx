import React, {useContext} from 'react';
import classes from "./NavBar.module.sass"
import {AppContext} from "../../index";
import {Link, useNavigate} from "react-router-dom";
import CustomButton from "../UI Elements/CustomButton/CustomButton";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {

    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    const signOut = () => {
        user.setAuth(false)
        user.setUser({token: '', id: ''})
        localStorage.removeItem("token")

        navigate("/login")
    }

    return (
        <div className={classes.header}>
            <div className={classes.linksArea}>
                <Link to="Items">Items</Link>
            </div>
            <div className={classes.authArea}>
                {
                    user.isAuth ?
                        <CustomButton label={"Sign out"} onClick={() => {}}/>
                        : <CustomButton label={"Login"} onClick={() => {navigate("login")}}/>
                }
            </div>
        </div>
    );
});

export default NavBar;