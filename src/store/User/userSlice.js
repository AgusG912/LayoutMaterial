import { createSlice } from '@reduxjs/toolkit';

//* Default object from user.
const EmptyUserState = {
   id: null,
   fullName: '',
   email: '',
   rol: '',
   accountVerified: false,
   accountStatus: '',
   lastLogin: null,
   newNotifications: false,
   themeUI: 'system', // 'light', 'dark', 'system'
}

//* userSlice:
export const userSlice = createSlice({
   name: 'user',
   initialState: {
      ...EmptyUserState,
   },
   reducers: {
      clearUser: () => EmptyUserState,
      clearInboxNotifications: (state) => { state.newNotifications = false },
      setUserState: (state, { payload }) => { return { ...state, ...payload } },
      updatePreferenceTheme: (state, { payload }) => { return { ...state, ...payload } }
   }
});


// Action creators are generated for each case reducer function
export const { clearUser, clearInboxNotifications, setUserState, updatePreferenceTheme } = userSlice.actions;