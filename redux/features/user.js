import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'userId',
    initialState: {
        userId: 0,
        currentUser: null,
        input: "",
        roomID: ""
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setSearchValue: (state, action) => {
            state.input = action.payload
        },
        setRoomID: (state, action) => {
            state.roomID = action.payload
        }
    }

})
export const { setUserId, setCurrentUser, setSearchValue, setRoomID } = userSlice.actions;
// export const useDispatch = state => state.userId.userId;
export default userSlice.reducer;