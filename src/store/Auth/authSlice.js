import { createSlice } from '@reduxjs/toolkit';

//* Default object from auth.
const EmptyAuthState = {
   status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'checking'
   user: {
      // id: 1,
      // fullName: 'Agustin Garcia',
      // email: 'agustin@gmail.com',
      // rol: 'user',
      // accountVerified: true,
      // accountStatus: 'active',
      // lastLogin: new Date().getTime() - 1000,
      // newNotifications: true, //Required from UI.
   },
   errorMessage: undefined,
}

//* authSlice:
export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      ...EmptyAuthState,
   },
   reducers: {
      onLogout: () => { return { ...EmptyAuthState, status:'not-authenticated' } },
      onChecking: () => { return { ...EmptyAuthState, status:'checking' } },
      onLogin: (state, {payload}) => { return { ...state, status:'authenticated', user:payload } }

   }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogout, onLogin } = authSlice.actions;
