import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";

export default function Account() {
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
        </div>
    )
}