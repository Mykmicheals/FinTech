import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialProfileState = {
    username: '',
    email: '',
    savings: '',
}

const userProfileSlice = createSlice({
    name: 'profile',
    initialState: initialProfileState,
    reducers: {
        addname(state, action) {
            state.username = action.payload
        },
    }
})

const store = configureStore({
    reducer: {
        profile: userProfileSlice.reducer
    }
})

export const profileActions = userProfileSlice.actions
export default store