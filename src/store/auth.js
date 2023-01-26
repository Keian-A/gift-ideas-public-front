import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        setLoggedIn(state, action) {
            state = true;
        },
        setLoggedOut(state, action) {
            state = false;
        },
    }
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;

export default authSlice;
