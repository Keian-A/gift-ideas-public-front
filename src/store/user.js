import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        add(state, action) {
            console.log(action.payload.name);
            // if (state[action.payload.name]) {

            // } else {
            //     state[action.payload.name] = 
            // }
        },
    }
});

export const { add } = userSlice.actions;

export default userSlice;
