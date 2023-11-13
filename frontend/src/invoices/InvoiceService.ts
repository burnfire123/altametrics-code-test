import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notificationSlice } from "../notifications/notification.slice";
import { Invoice } from "./Invoice";

interface IInvoiceService {
	getAll(): Promise<Invoice[]>
	findById(id: string): Promise<Invoice>;
}

export class InvoiceService implements IInvoiceService {
	constructor() { }
	async getAll(): Promise<Invoice[]> {
		const { data } = await axios.request({
			method: "get",
			baseURL: import.meta.env.VITE_BACKEND_URL,
			url: `/invoices`,
		});
		return data;
	}
	async findById(id: string): Promise<Invoice> {
		const { data } = await axios.request({
			method: "get",
			baseURL: import.meta.env.VITE_BACKEND_URL,
			url: `/invoices/${id}`,
		});
		return data;
	}
}

export const invoiceService = new InvoiceService();

export const getAllInvoicesThunk = createAsyncThunk("invoice/getAll", async (data: never, thunkAPI) => {
	try {
		const result = await invoiceService.getAll();
		return result;
	} catch (err) {
		thunkAPI.dispatch(notificationSlice.actions.displayError("Error"));
	}
});

export const findByIdThunk = createAsyncThunk("invoice/findById", async (data: string, thunkAPI) => {
	try {
		const result = await invoiceService.findById(data);
		return result;
	} catch (err) {
		thunkAPI.dispatch(notificationSlice.actions.displayError("Error"));
	}
});