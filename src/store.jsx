import { configureStore } from '@reduxjs/toolkit';
import friendsReducer from "./features/friends/friendsSlice"

export const store = configureStore({
    reducer: {
        friends: friendsReducer,
    }
});

// console.log(friendsReducer);