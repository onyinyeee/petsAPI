import { useState } from "react"
import {useForm} from 'react-hook-form';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from "react-router-dom";
import './styles.css'

export const LoginPage = () => {
    const [mode, setMode] = useState("login");

    const {register, handleSubmit } = useForm();

    const history = useHistory();

    const loginUser = async(formVals) => {

        try {
            console.log("login submitted", formVals)
            const auth = getAuth();
            const loginUser = await signInWithEmailAndPassword(auth, formVals.user, formVals.password);
            history.push('/');
            console.log("after login", auth);

        }catch(error) {
            console.log ("Error connecting to firebase", error)
        }
    }

    const signUpUser = async(formVals) => {
        console.log("signup submitte", formVals)
        const auth = getAuth();

        try {
            const sighUpUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log("new user was created", signUpUser);
            history.push('/');
        }catch (error) {
            console.log("error with firebase", error)
        }
    }

    return (
        <div className ="pets-page">

            {mode === "login" && (
                <form className="form-layout" onSubmit= {handleSubmit(loginUser)}>
                    <h2> welcome back, login</h2>
                    <br />

                    <label htmlFor="user">UserName</label>
                    <input type="email" name="user" required {...register('user')} />

                    <label htmlFor="password">password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <input type="submit"  value="Login" />
                    <br/>
                    <p>Dont have an account, sign up</p>
                    <button onClick={() => setMode("signup")}> Sign Up</button>
                </form>
            )}

            {mode === "signup" && (
                <form className="form-layout" onSubmit= {handleSubmit(signUpUser)}>
                    <h2> welcome back, login</h2>
                    <br />

                    <label htmlFor="user">UserName</label>
                    <input type="email" name="user" required {...register('user')} />

                    <label htmlFor="password">password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <input type="password" name="passwordConfirm" required {...register('passwordConfirm')}/>

                    <input type="submit"  value="Sign Up" />
                    <br/>
                    <p>Dont have an account, sign up</p>
                    <button onClick={() => setMode("login")}> Log in</button>
                </form>
            )}


        </div>
    )
}