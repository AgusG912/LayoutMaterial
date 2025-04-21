import { createSlice } from '@reduxjs/toolkit';

const EmptyUiState = {
   // * BEFORE AUTH
   toggleAuthCard: false,


   // * AFTER AUTH
   //MOBILE UI VERSION
   toggleMobileMenu: false,
   toggleMobileAccountMenu: false,

   // DESKTOP UI VERSION
   toggleDesktopSidebar: true,
   toggleDesktopInbox: false,
   sideBarWidth: { xs:'0px', sm:'0px', md: '280px', lg: '280px', xl: '320px' },
   sideBarMinWidth: '90px', // The best width to ui/ux
   sideBarPosition: 'left',
}

export const uiSlice = createSlice({
   name: 'ui',
   initialState: {
      ...EmptyUiState,
   },
   reducers: {
      //Auth Card
      switchFrontAuthCard: (state) => { state.toggleAuthCard = true; },
      switchBackAuthCard: (state) => { state.toggleAuthCard = false; },

      //Desktop State
      onToggleDesktopInbox: (state) => { state.toggleDesktopInbox = !state.toggleDesktopInbox; },
      onToggleDesktopSidebar: (state) => { state.toggleDesktopSidebar = !state.toggleDesktopSidebar },
      
      //Mobile State
      onToggleMobileMenu: (state) => { state.toggleMobileMenu = !state.toggleMobileMenu; },
      closeMobileMenu: (state) =>  { state.toggleMobileMenu = false; },
      
      openMobileAccountMenu: (state) =>  { state.toggleMobileAccountMenu = true; },
      closeMobileAccountMenu: (state) =>  { state.toggleMobileAccountMenu = false; },

   }
});


// Action creators are generated for each case reducer function
export const { 
   closeMobileAccountMenu,
   closeMobileMenu,
   onToggleDesktopInbox, 
   onToggleDesktopSidebar, 
   onToggleMobileMenu, 
   openMobileAccountMenu,
   switchBackAuthCard,
   switchFrontAuthCard

} = uiSlice.actions;