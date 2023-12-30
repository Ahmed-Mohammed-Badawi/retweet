"use client"
import classes from './VerifyEmail.module.scss';
import {useRef} from "react";
import toast from "react-hot-toast";

export default function VerifyEmail() {

    // REFERENCES
    const verifyCodeRef = useRef();


    // ON SUBMIT OF LOGIN FORM
    const onLoginSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();
        // GET VALUES
        const verifyCode = verifyCodeRef.current?.value;

        // VALIDATE
        if (!verifyCode) {
            toast.error('Please enter your verification code.');
            return;
        }

        // SUBMIT FORM
        toast.success('Logging you in...');
    }

    return (
        <div className={`${classes.ContentContainer}`}>
            <div className={`${classes.ContentContainer__FormContainer}`}>
                <div className={`${classes.ContentContainer__FormContainer__Header}`}>
                    <h1>Verify Your Email Address</h1>
                    <p>We have sent you an email with a verification code. Please enter it below to verify your email
                        address.</p>
                </div>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onLoginSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <div className={`${classes.SameLineBetween}`}>
                            <label htmlFor={'VerificationCode'}>Verification Code</label>
                            <button className={`${classes.SameLineBetween__Button}`}>Resend Code</button>
                        </div>
                        <input type={'text'} id={'VerificationCode'} ref={verifyCodeRef}/>
                    </div>
                    <button className={`${classes.ContentContainer__FormContainer__Form__Button}`}>Verify
                        me &rarr;</button>
                </form>
            </div>
        </div>
    )
}