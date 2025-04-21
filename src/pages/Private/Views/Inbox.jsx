import { useEffect } from "react";
import { useUserStore } from "../../../hooks"


export const Inbox = () => {

  const { newNotifications, userLocationIsInbox, markNotificationsAsRead } = useUserStore();

  // "This line prevents the inbox from being automatically cleared when 
  //  the user renders it as the first page upon entering the application.
  useEffect(() => {
    if(newNotifications){
      if( userLocationIsInbox ){ markNotificationsAsRead() }
    }

  }, [newNotifications]);
  
  return (
    <div>Inbox</div>
  )
}

export default Inbox;