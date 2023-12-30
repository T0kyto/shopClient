import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {AppContext} from "../../index";
import {login} from "../../api/authApi";
import classes from "./Login.module.sass"
import CustomInput from "../UI Elements/CustomInput/CustomInput";
import {Link, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import {IUser} from "../../store/UserStore";

const Login = observer(() => {

    const {user} = useContext(AppContext)

    const [phone, setPhone] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [secondPass, setSecondPass] = useState<string>('')

    const navigate = useNavigate()


    const signIn= async (phone: string, pass: string) => {
        try {
            const res = await login(phone, pass)
            const decoded = jwtDecode<IUser>(res)
            user.setAuth(true)
            user.setUser({id: decoded.id, token: res})
            localStorage.setItem("token", res)
            console.log(localStorage.getItem("token"))
            navigate("/items")
        }catch (e){
            alert(e)
            console.log(e)
        }
    }


    return (
        <div className={classes.login}>
            <h1 className={classes.formTitle}>Login</h1>

            <div className={classes.customForm}>
                <div className={classes.inputArea}>
                    <p>Phone number</p>
                    <CustomInput onChange={setPhone} type='phone' value={phone}/>
                </div>
                <div className={classes.inputArea}>
                    <p>Password</p>
                    <CustomInput onChange={setPass} type='Password' value={pass}/>
                </div>

                <button className={classes.acceptButton} onClick={() => signIn(phone, pass)}>Login</button>

            </div>

            <div className={classes.redirect}>
                New to site? <Link to='../register' className={classes.link}> Create an account</Link>
            </div>
        </div>
    );
});

export default Login;