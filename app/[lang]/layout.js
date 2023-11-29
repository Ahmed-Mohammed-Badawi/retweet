import {PrimeReactProvider} from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./globals.css";
import {defaultLocale} from "@/middleware";


import Navbar from "../components/Navbar/Navbar";
import MegaMenu from "@/app/components/MegaMenu/MegaMenu";
import MainSearchBox from "@/app/components/MainSearchBox/MainSearchBox";
import Footer from "@/app/components/Footer/Footer";

export const metadata = {
    title: "Retweet",
    description: "Retweet is a social media platform that allows you to share your thoughts with the world.",
};

export default function RootLayout({children, params: {lang}}) {
    return (
        <html lang={lang || defaultLocale}>
        <body>
        <PrimeReactProvider>
            <div className={"container min-h-screen"}>
                <Navbar lang={lang}/>
                <MegaMenu lang={lang}/>
                <MainSearchBox lang={lang}/>
                {children}
            </div>
            <Footer lang={lang}/>
        </PrimeReactProvider>
        </body>
        </html>
    );
}
