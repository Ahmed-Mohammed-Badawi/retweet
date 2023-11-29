import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {Button} from "primereact/button";
import LanguageSwitcher from "@/app/components/LanguageSwitcher/LanguageSwitcher";
import SelectedArea from "@/app/components/SelectedArea/SelectedArea";

function Navbar({lang}) {
    return (
        <nav className={classes.Navbar}>
            <div className={classes.Navbar__logo}>
                <Link href="/">
                    <Image src={'/assets/home/logo.png'} alt={'retweet logo'} width={200} height={36} priority/>
                </Link>
            </div>
            <div className={classes.Navbar__select__wrapper}>
                <SelectedArea className={classes.Navbar__select}/>
            </div>
            <div className={classes.Navbar_group}>
                <div className={classes.Navbar__icons}>
                    <Button className={classes.Navbar__icons__icon} tooltip={"Favourite"}>
                        <Image src={'/assets/home/Heart.svg'} alt={'Heart'} width={18} height={18}/>
                    </Button>

                    <span className={classes.Navbar__breaker}></span>

                    <Button className={classes.Navbar__icons__icon} tooltip={"Messages"}>
                        <Image src={'/assets/home/bx_chat.svg'} alt={'bx_chat'} width={18} height={18}/>
                    </Button>

                    <span className={classes.Navbar__breaker}></span>

                    <Button className={classes.Navbar__icons__icon} tooltip={"Notifications"}>
                        <Image src={'/assets/home/notification.svg'} alt={'notification'} width={18} height={18}/>
                    </Button>
                </div>

                <span className={classes.Navbar__breaker}></span>

                <div className={classes.Navbar__sign}>
                    <Button className={classes.Navbar__sign__btn}>
                        <Image src={'/assets/home/user.svg'} alt={'user'} width={19} height={19}/>
                        <Link href={"/auth/login"}>Sign Up/Sign In</Link>
                    </Button>
                </div>
            </div>

            <div className={classes.Navbar__Add}>
                <Button className={classes.Navbar__Add__btn}>
                    <Image src={'/assets/home/solar_camera-add-bold.svg'} alt={'camera'} width={19} height={19}/>
                    <span>Add New Listing</span>
                </Button>
            </div>

            <div className={classes.Navbar__lang}>
                <LanguageSwitcher className={classes.Navbar__lang__select} lang={lang}/>
            </div>
        </nav>
    );
}

export default Navbar;
