import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isLoggedIn = true;
        },
        logoutSuccess: (state) => {
            state.isLoggedIn = false;
        }
    }
});

export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;