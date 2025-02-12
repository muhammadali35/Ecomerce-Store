import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(sessionStorage.getItem('authUser')) || {
    name: '',
    password: '',
    image: '',
    authUSer: false,
  },
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
        const userId = action.payload;
        const userValidate = /^[A-Za-z\s'-]{3,50}$/.test(userId.name);
        const passwordValidate = /^[A-Za-z0-9@#$%^&*!]+$/.test(userId.password);
      
        console.log('Action payload:', action.payload); // Log action payload
        if (!userValidate || !passwordValidate) {
          state.user.authUSer = false;
        } else {
          state.user.authUSer = true;
          const saveState = JSON.stringify(userId);
          console.log('Saving user to sessionStorage:', saveState); // Log sessionStorage content
          sessionStorage.setItem('authUser', saveState); // Corrected
        }
      },
      
    logOut(state) {
      state.user = {
        name: '',
        password: '',
        image: '',
        authUSer: false,
      };
      sessionStorage.removeItem('authUser'); 
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
