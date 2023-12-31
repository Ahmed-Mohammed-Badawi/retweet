import classes from "./AccountNotificationsContent.module.scss";
import NotYet
    from "@/app/components/UserProfileComponents/AccountNotifications/AccountNotificationsContent/NotYet/NotYet";

export default function AccountNotificationsContent() {
    return (
        <div className={classes.AccountNotificationsContent}>
            <NotYet/>
        </div>
    );
}