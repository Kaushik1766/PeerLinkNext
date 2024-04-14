import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'userId',
    initialState: {
        userId: 0,
        currentUser: null,
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }

})
export const { setUserId, setCurrentUser } = userSlice.actions;
// export const useDispatch = state => state.userId.userId;
export default userSlice.reducer;