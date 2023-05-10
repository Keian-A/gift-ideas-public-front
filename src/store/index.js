// Redux imports
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

// Esoteric imports
// import userSlice from './user.js';
import authSlice from './auth.js';

// Reducer function.
const reducers = combineReducers({
    // user: userSlice,
    auth: authSlice,
});

// Store variable to be exported
const store = configureStore({ reducer: reducers });

export default store;
