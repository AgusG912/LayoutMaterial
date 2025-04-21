import { useDispatch, useSelector } from "react-redux"
import { clearInboxNotifications, updatePreferenceTheme } from "../store";
import { useLocation } from "react-router-dom";
import { PrivateRoutes } from "../models";


export const useUserStore = () => {
  
  const { 
    newNotifications, 
    themeUI, 
    fullName,
    lastLogin,
    accountBalance,


  } = useSelector( (store) => store.user );
  const dispatch = useDispatch();

  // "Here are all the internal variables for the functionality of the hook.
  const userLocation = useLocation().pathname;


  // "Here are defined all the custom props for the user's interaction with the application.
  const userLocationIsInbox = userLocation === `/${ PrivateRoutes.PRIVATE }/${ PrivateRoutes.INBOX }`;



  // "The following content includes all the methods associated with
  //  the hook and the interaction with the user.
  const markNotificationsAsRead = () => {
    dispatch( clearInboxNotifications() );
  } 

  const setPreferenceThemeUI = ( newPreference ) => {
    dispatch( updatePreferenceTheme({ themeUI: newPreference }) )
  }

  return {
    //* Props
      fullName,
      accountBalance,
      lastLogin,

    //* Props and Methods associated with user theme.
      themeUI,
      setPreferenceThemeUI,

    //* Props and Methods associated with Inbox.
      newNotifications,
      userLocationIsInbox,
      markNotificationsAsRead,
  }
}