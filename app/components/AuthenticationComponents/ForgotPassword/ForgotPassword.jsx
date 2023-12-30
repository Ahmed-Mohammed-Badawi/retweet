"use client"
import classes from './ForgotPassword.module.scss';
import Link from "next/link";
import {useRef} from "react";
import toast from "react-hot-toast";

export default function ForgotPassword() {

    // REFERENCES
    const EmailRef = useRef();


    // ON SUBMIT OF LOGIN FORM
    const onLoginSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();
        // GET VALUES
        const email = EmailRef.current.value;

        // VALIDATE VALUES
        if (!email) {
            return toast.error('Please enter your email address');
        }
        // VALIDATE EMAIL
        if (!email.includes('@') || !email.includes('.')) {
            return toast.error('Please enter a valid email address');
        }
        // SUBMIT FORM
        toast.success('Logging you in...');
    }

    return (
        <div className={`${classes.ContentContainer}`}>
            <div className={`${classes.ContentContainer__FormContainer}`}>
                <div className={`${classes.ContentContainer__FormContainer__Header}`}>
                    <h1>Forgot Password</h1>
                    <p>Enter your email address below and we&apos;ll send you a code to reset your password.</p>
                </div>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onLoginSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" ref={EmailRef}/>
                    </div>
                    <button className={`${classes.ContentContainer__FormContainer__Form__Button}`}>Send Code &rarr;</button>
                </form>
                <div className={`${classes.ContentContainer__FormContainer__Footer}`}>
                    <p>Already have an account? <Link href={'/auth/login'}>Sign In</Link></p>
                    <p>Don’t have account? <Link href={'/auth/login'}>Sign Up</Link></p>
                </div>
                <div className={`${classes.ContentContainer__FormContainer__Or}`}>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                </div>
                <div className={`${classes.ContentContainer__FormContainer__CustomerService}`}>
                    <p>You may contact <span>Customer Service</span> for help restoring access to your account.</p>
                </div>
            </div>
        </div>
    )
}