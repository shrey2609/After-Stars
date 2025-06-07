import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        id:"",
        role: "",
        name: ""
    },
    reducers: {
        setUser(state, action) {
            console.log(state);
            
            return action.payload;
        },

        removeUser(state, action) {
            return "";
        }
    }
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;