import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'userId',
    initialState: {
        userId: 0
    },
    reducers: {
        setUserId: (state, action) => {
            console.log(state);
            state.userId = action.payload;
        }
    }

})
export const { setUserId } = userSlice.actions;
export const useDispatch = state => state.userId.userId;
export default userSlice.reducer;