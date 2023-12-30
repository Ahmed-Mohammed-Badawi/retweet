"use client"
import classes from './ResetPassword.module.scss';
import {useRef} from "react";
import toast from "react-hot-toast";

export default function ResetPassword() {

    // REFERENCES
    const PasswordRef = useRef();
    const ConfirmPasswordRef = useRef();


    // ON SUBMIT OF LOGIN FORM
    const onLoginSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();
        // GET VALUES
        const password = PasswordRef.current?.value;
        const confirmPassword = ConfirmPasswordRef.current?.value;

        // VALIDATE
        if(!password || !confirmPassword) return toast.error('Please fill out all fields.');

        if (password.length < 8) {
            return toast.error('Password must be at least 8 characters long.');
        }
        if (password !== confirmPassword) {
            return toast.error('Passwords do not match.');
        }

        // SUBMIT FORM
        toast.success('Logging you in...');
    }

    return (
        <div className={`${classes.ContentContainer}`}>
            <div className={`${classes.ContentContainer__FormContainer}`}>
                <div className={`${classes.ContentContainer__FormContainer__Header}`}>
                    <h1>Reset Password</h1>
                    <p>Enter your new password below to reset your password.</p>
                </div>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onLoginSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor={'password'}>Password</label>
                        <input type={'password'} id={'password'} ref={PasswordRef} placeholder={'8+ characters'}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor={'confirm-password'}>Confirm Password</label>
                        <input type={'password'} id={'confirm-password'} ref={ConfirmPasswordRef}/>
                    </div>
                    <button className={`${classes.ContentContainer__FormContainer__Form__Button}`}>Reset Password &rarr;</button>
                </form>
            </div>
        </div>
    )
}