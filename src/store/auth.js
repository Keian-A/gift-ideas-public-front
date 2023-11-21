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
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logoutSuccess: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        groupAddSuccess: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { loginSuccess, logoutSuccess, groupAddSuccess } = loginSlice.actions;

export default loginSlice.reducer;