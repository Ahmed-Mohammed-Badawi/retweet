import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AccountHome from "@/app/components/UserProfileComponents/AccountHome/AccountHome";

export default function Ads({lang}) {
    console.log(lang)
    return (
        <div className={'w-full min-h-screen'}>
            <SecondaryNavigation arrayOfLinks={[
                {
                    href: '/',
                    icon: '/assets/home/House.svg',
                    arrow: true
                },
                {
                    href: '/profile/account',
                    text: 'My Account',
                    arrow: false
                },
            ]}/>
            {/*  CONTENT  */}
            <AccountHome lang={lang}/>
        </div>
    )
}