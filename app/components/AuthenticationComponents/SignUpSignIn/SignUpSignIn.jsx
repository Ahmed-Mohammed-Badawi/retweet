"use client"
import classes from './SignUpSignIn.module.scss';
import Image from "next/image";
import Link from "next/link";
import {useState, useRef} from "react";
import toast from "react-hot-toast";

export default function SignUpSignIn() {

    // REFERENCES
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();
    // SIGNUP REFERENCES
    const signUpNameRef = useRef();
    const signUpEmailRef = useRef();
    const signUpPhoneRef = useRef();
    const signUpPasswordRef = useRef();
    const signUpConfirmPasswordRef = useRef();
    const signUpTermsAndConditionsRef = useRef();


    const [ActiveButton, setActiveButton] = useState('Sign In');

    // ON CLICK OF SIGN IN BUTTON
    const onLoginClick = () => {
        setActiveButton('Sign In');
    }

    // ON CLICK OF SIGN UP BUTTON
    const onSignUpClick = () => {
        setActiveButton('Sign Up');
    }

    // ON SUBMIT OF LOGIN FORM
    const onLoginSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();
        // GET VALUES
        const email = loginEmailRef.current.value;
        const password = loginPasswordRef.current.value;
        // VALIDATE VALUES
        if (!email || !password) {
            return toast.error('Please fill all the fields');
        }
        // VALIDATE EMAIL
        if (!email.includes('@') || !email.includes('.')) {
            return toast.error('Please enter a valid email address');
        }
        // VALIDATE PASSWORD
        if (password.length < 8) {
            return toast.error('Password must be at least 8 characters long');
        }
        // SUBMIT FORM
        toast.success('Logging you in...');
    }

    // ON SUBMIT OF SIGN UP FORM
    const onSignUpSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();
        // GET VALUES
        const name = signUpNameRef.current.value;
        const email = signUpEmailRef.current.value;
        const phone = signUpPhoneRef.current.value;
        const password = signUpPasswordRef.current.value;
        const confirmPassword = signUpConfirmPasswordRef.current.value;
        const termsAndConditions = signUpTermsAndConditionsRef.current.checked;
        // VALIDATE VALUES
        if (!name || !email || !phone || !password || !confirmPassword) {
            return toast.error('Please fill all the fields');
        }
        // VALIDATE EMAIL
        if (!email.includes('@') || !email.includes('.')) {
            return toast.error('Please enter a valid email address');
        }
        // VALIDATE PASSWORD
        if (password.length < 8) {
            return toast.error('Password must be at least 8 characters long');
        }
        // VALIDATE CONFIRM PASSWORD
        if (password !== confirmPassword) {
            return toast.error('Passwords do not match');
        }
        // VALIDATE TERMS AND CONDITIONS
        if (!termsAndConditions) {
            return toast.error('Please accept the terms and conditions');
        }
        // SUBMIT FORM
        toast.success('Signing you up...');
    }

    return (
        <div className={`${classes.ContentContainer}`}>
            <div className={`${classes.ContentContainer__Buttons}`}>
                <button
                    className={`${classes.ContentContainer__Buttons__Button} ${ActiveButton === "Sign In" ? classes.ContentContainer__Buttons__Button__Active : ''} ${classes.ContentContainer__Buttons__Button__SignIn}`}
                    onClick={onLoginClick}>
                    Sign In
                </button>
                <button
                    className={`${classes.ContentContainer__Buttons__Button} ${ActiveButton === "Sign Up" ? classes.ContentContainer__Buttons__Button__Active : ''} ${classes.ContentContainer__Buttons__Button__SignUp}`}
                    onClick={onSignUpClick}
                >
                    Sign Up
                </button>
            </div>
            {/*LOGIN FORM*/}
            {ActiveButton === "Sign In" && (<div className={`${classes.ContentContainer__FormContainer}`}>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onLoginSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" ref={loginEmailRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <div className={`${classes.SameLineBetween}`}>
                            <label htmlFor="password">Password</label>
                            <Link href={'/auth/forgot-password'}
                                  className={`${classes.InputContainer__ForgotPassword}`}>Forgot Password</Link>
                        </div>
                        <input type="password" ref={loginPasswordRef}/>
                    </div>
                    <button className={`${classes.ContentContainer__FormContainer__Form__Button}`}>Sign
                        In &rarr;</button>
                </form>
                <div className={`${classes.ContentContainer__FormContainer__Or}`}>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Text}`}>or</div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                </div>
                <div className={`${classes.ContentContainer__FormContainer__SocialMedia}`}>
                    <button
                        className={`${classes.ContentContainer__FormContainer__SocialMedia__Button}`}>
                        <Image src="/assets/authentication/Google.png" width={20} height={20} alt="google"/>
                        <span>Login with Google</span>
                    </button>
                </div>
            </div>)}
            {/*SIGN UP FORM*/}
            {ActiveButton === "Sign Up" && (<div className={`${classes.ContentContainer__FormContainer}`}>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onSignUpSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" ref={signUpNameRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" ref={signUpEmailRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" ref={signUpPhoneRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder={'8+ characters'} ref={signUpPasswordRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" ref={signUpConfirmPasswordRef}/>
                    </div>
                    <div className={`${classes.TermsContainer}`}>
                        <input type={'checkbox'} id={'termsAndConditions'} ref={signUpTermsAndConditionsRef}/>
                        <label htmlFor="termsAndConditions">I agree to the <Link href={'/terms-and-conditions'}>Terms
                            and Conditions</Link></label>
                    </div>
                    <button
                        className={`${classes.ContentContainer__FormContainer__Form__Button}`}>
                        Sign Up &rarr;
                    </button>
                </form>
                <div className={`${classes.ContentContainer__FormContainer__Or}`}>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Text}`}>or</div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                </div>
                <div className={`${classes.ContentContainer__FormContainer__SocialMedia}`}>
                    <button
                        className={`${classes.ContentContainer__FormContainer__SocialMedia__Button}`}>
                        <Image src="/assets/authentication/Google.png" width={20} height={20} alt="google"/>
                        <span>Login with Google</span>
                    </button>
                </div>
            </div>)}
        </div>
    )
}