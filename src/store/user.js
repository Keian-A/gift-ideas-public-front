import { createSlice } from '@reduxjs/toolkit';

// When initial login, current logged in user gets added here for later data manipulation
const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        add(state, action) {
            console.log(action.payload);
            // if (state[action.payload.name]) {

            // } else {
            //     state[action.payload.name] = 
            // }
        },
    }
});

export const { add } = userSlice.actions;

export default userSlice;
