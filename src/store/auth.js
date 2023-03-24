import { createSlice } from '@reduxjs/toolkit';

// Initial state is an object here to track the user as well as logged in information. Makes user reducer reduntant. Will keep the user reducer for now for reference.
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