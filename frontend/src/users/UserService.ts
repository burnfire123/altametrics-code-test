import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notificationSlice } from "../notifications/notification.slice";
interface IUserService {
	login(email: string, password: string): Promise<string>;
}

export class UserService implements IUserService {
	constructor() { }
	async login(email: string, password: string): Promise<string> {
		const { data } = await axios.request({
			method: "post",
			baseURL: import.meta.env.VITE_BACKEND_URL,
			url: `/auth/login`,
			data: {
				email, password,
			}
		});
		return data;
	}
}

export const userService = new UserService();

export const loginUserThunk = createAsyncThunk("user/login", async (data: { email: string, password: string }, thunkAPI) => {
	try {
		const result = await userService.login(data.email, data.password);
		thunkAPI.dispatch(notificationSlice.actions.displaySuccess("Login successful!"));
		return result;
	} catch {
		thunkAPI.dispatch(notificationSlice.actions.displayError("Login error!"));
	}
});