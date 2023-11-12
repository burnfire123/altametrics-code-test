import { configureStore, createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: localStorage.getItem("token"),
	},
	reducers: {
		setToken: (state, action) => {
			const { payload: value } = action;
			localStorage.setItem("token", value);
			state.token = value;
		}
	}
});

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	}
})