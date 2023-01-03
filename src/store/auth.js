import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        setValid(state, action) {
            state = true;
        },
        setInvalid(state, action) {
            state = false;
        },
    }
});

export const { setInvalid, setValid } = authSlice.actions;

export default authSlice;
