import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUserSuccess: (state, action) => {
            state.user = action.payload;
        },
        logoutUserSuccess: (state) => {
            state.user = null;
        },
        groupAddSuccess: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { loginUserSuccess, logoutUserSuccess, groupAddSuccess } = userSlice.actions;

export default userSlice.reducer;