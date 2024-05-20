import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/data/data";

const initialState = {
    friends: data,
    status: 'all',
}

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        accept: (state, { payload }) => {
            const friend = state.friends.find((friend) => friend.id === payload);
            friend.status = "accepted";
        },
        reject: (state, { payload }) => {
            const friend = state.friends.find((friend) => friend.id === payload);
            friend.status = "rejected";
        },
        block: (state, { payload }) => {
            const friend = state.friends.find((friend) => friend.id === payload);
            friend.status = "blocked";
        },
        undoFriendStatus: (state, { payload }) => {
            const friend = state.friends.find((friend) => friend.id === payload);
            friend.status = '';
        },
        setStatus: (state, { payload }) => {
            state.status = payload;
        },
    }
})

export const { 
    accept,
    reject,
    block,
    undoFriendStatus,
    setStatus,
} = friendsSlice.actions;

export default friendsSlice.reducer;