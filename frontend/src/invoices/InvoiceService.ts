import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notificationSlice } from "../notifications/notification.slice";
import { Invoice } from "./Invoice";

interface IInvoiceService {
	getAll(token: string): Promise<Invoice[]>
	findById(id: string, token: string): Promise<Invoice>;
}

export class InvoiceService implements IInvoiceService {
	constructor() { }
	async getAll(token: string): Promise<Invoice[]> {
		const { data } = await axios.request({
			method: "get",
			baseURL: import.meta.env.VITE_BACKEND_URL,
			url: `/invoices`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return data;
	}
	async findById(id: string, token: string): Promise<Invoice> {
		const { data } = await axios.request({
			method: "get",
			baseURL: import.meta.env.VITE_BACKEND_URL,
			url: `/invoices/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return data;
	}
}

export const invoiceService = new InvoiceService();

export const getAllInvoicesThunk = createAsyncThunk("invoice/getAll", async (token: string, thunkAPI) => {
	try {
		const result = await invoiceService.getAll(token);
		return result;
	} catch (err: any) {
		thunkAPI.dispatch(notificationSlice.actions.displayError(err.response.data.message));
	}
});

export const findByIdThunk = createAsyncThunk("invoice/findById", async (data: {
	id: string,
	token: string
}, thunkAPI) => {
	try {
		const result = await invoiceService.findById(data.id, data.token);
		return result;
	} catch (err: any) {
		thunkAPI.dispatch(notificationSlice.actions.displayError(err.response.data.message));
	}
});