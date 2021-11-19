import { useState } from "react"
import {useForm} from 'react-hook-form';
import './styles.css'

export const LoginPage = () => {
    const [mode, setMode] = useState("login");

    const {register, handleSubmit } = useForm();

    const loginUser = () => (formVals) => {
        console.log("login submitte", formVals)
    }

    const signUpUser = () => (formVals) => {
        console.log("signup submitte", formVals)
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

                    <inut type="submit"  value="Login" />
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

                    <inut type="submit"  value="Sign Up" />
                    <br/>
                    <p>Dont have an account, sign up</p>
                    <button onClick={() => setMode("login")}> Log in</button>
                </form>
            )}


        </div>
    )
}