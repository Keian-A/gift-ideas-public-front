import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLoggedIn: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
        },
        logoutSuccess: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        }
    }
});

export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;