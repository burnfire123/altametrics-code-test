import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
	name: "notification",
	initialState: {
		open: false,
		message: "",
		severity: "info",
	},
	reducers: {
		displayError: (state, action) => {
			const { payload: message } = action;
			state.message = message;
			state.open = true;
			state.severity = "error";
		},
		closeSnackbar: (state) => {
			state.open = false;
		}
	},
});