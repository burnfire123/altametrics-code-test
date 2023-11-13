import { createSlice } from "@reduxjs/toolkit";
import { Invoice } from "./Invoice";
import { findByIdThunk, getAllInvoicesThunk } from "./InvoiceService";

interface IInvoiceState {
	all: Array<Invoice>,
	selected?: Invoice,
}

const initialState: IInvoiceState = {
	all: [],
	selected: undefined,
}

export const invoiceSlice = createSlice({
	name: "invoice",
	initialState,
	reducers: {
		resetSelected: (state) => {
			state.selected = undefined;
		},
	},
	extraReducers: builder => {
		builder.addCase(getAllInvoicesThunk.fulfilled, (state, action) => {
			state.all = action.payload!;
		}).addCase(findByIdThunk.fulfilled, (state, action) => {
			state.selected = action.payload!;
		})
	}
});