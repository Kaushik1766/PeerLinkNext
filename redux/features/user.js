import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'userId',
    initialState: 0,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        }
    }

})
export const { setUser } = userSlice.actions;
export const useDispatch = state => state.userId;
export default userSlice.reducer;