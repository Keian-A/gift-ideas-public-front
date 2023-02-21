import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        changeLoggedState(state, action) {
            state = !state;
        },
    }
});

export const { changeLoggedState } = authSlice.actions;

export default authSlice;
