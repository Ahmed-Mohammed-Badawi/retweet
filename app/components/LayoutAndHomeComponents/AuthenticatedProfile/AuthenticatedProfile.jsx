"use client";

import {useRef} from "react";
import {OverlayPanel} from 'primereact/overlaypanel';
import Image from "next/image";
import {Button} from "primereact/button";
import Link from "next/link";
import classes from "./AuthenticatedProfile.module.scss"

export default function AuthenticatedProfile({lang}) {

    // INIT OVERLAY PANEL
    let op = useRef(null);

    return (
        <div>
            <Button className={classes.Navbar__sign__btn} onClick={(e) => op.toggle(e)}>
                <div className={classes.Navbar__sign__btn__Image}>
                    <Image src={'/assets/home/userAccount.png'} alt={'user'} width={22} height={22}/>
                    <Image src={'/assets/home/ArrowDown.svg'} alt={'arrow '}
                           className={classes.Navbar__sign__btn__Image_Arrow} width={15} height={15}/>
                </div>
                <p>Yazan.</p>
            </Button>
            <OverlayPanel ref={(el) => op = el}>
                <div className={classes.Navbar__sign__btn__Content}>
                    {/*  USER IMAGE + FULL NAME  */}
                    <div className={classes.Navbar__sign__btn__FullImage}>
                        <Image src={'/assets/home/userAccount.png'} alt={'user'} width={50} height={50}/>
                        <p>Yazan Ibrahem</p>
                    </div>

                    {/*  LINE TO SPLIT THE USER INFO  */}
                    <div className={classes.Navbar__sign__btn__Line}></div>

                    {/*  USER INFO LINKS */}
                    <div className={classes.Navbar__sign__btn__Links}>
                        <Link href={"#"} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/dashboard.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>Dashboard</span>
                            </span>
                            <span>
                                <Image src={'/assets/home/ArrowRight.svg'} alt={'ArrowRight'} width={15} height={15}/>
                            </span>
                        </Link>
                        <Link href={"#"} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/notificationAuth.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>Notification</span>
                            </span>
                            <span>
                                <Image src={'/assets/home/ArrowRight.svg'} alt={'ArrowRight'} width={15} height={15}/>
                            </span>
                        </Link>
                        <Link href={"#"} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/MyAds.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>My Ads</span>
                            </span>
                            <span>
                                <Image src={'/assets/home/ArrowRight.svg'} alt={'ArrowRight'} width={15} height={15}/>
                            </span>
                        </Link>
                        <Link href={"#"} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/MyAccount.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>My Account</span>
                            </span>
                            <span>
                                <Image src={'/assets/home/ArrowRight.svg'} alt={'ArrowRight'} width={15} height={15}/>
                            </span>
                        </Link>

                        {/*  LINE TO SPLIT THE USER INFO  */}
                        <div className={classes.Navbar__sign__btn__Line}></div>

                        <Link href={"#"} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/Logout.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>Logout</span>
                            </span>
                        </Link>
                    </div>

                </div>
            </OverlayPanel>
        </div>
)
}