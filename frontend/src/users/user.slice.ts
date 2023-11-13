import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./UserService";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		token: localStorage.getItem("token"),
	},
	reducers: {
		setToken: (state, action) => {
			const { payload: value } = action;
			localStorage.setItem("token", value);
			state.token = value;
		}
	},
	extraReducers: builder => {
		builder.addCase(loginUserThunk.fulfilled, (state, action) => {
			state.token = action.payload as string;
		})
	}
});