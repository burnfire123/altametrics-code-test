import { Box, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Invoice } from "../invoices/Invoice";
import { getAllInvoicesThunk } from "../invoices/InvoiceService";
import { AppDispatch } from "../store";

export function InvoicesComponent() {
	const dispatch = useDispatch<AppDispatch>();
	const { all: invoices } = useSelector(state => state.invoice);
	const { token } = useSelector(state => state.user);
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getAllInvoicesThunk(token));
	}, [dispatch, token]);
	useEffect(() => {
		if (!token) {
			navigate("/");
		}
	})
	return <Box minWidth={"100vw"} minHeight={"90vh"}>
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							ID
						</TableCell>
						<TableCell>
							Amount
						</TableCell>
						<TableCell>
							Details
						</TableCell>
						<TableCell>
							Due date
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{invoices?.map((invoice: Invoice) => <TableRow key={invoice.id}>
						<TableCell>
							{invoice.id}
						</TableCell>
						<TableCell>
							{invoice.amount}
						</TableCell>
						<TableCell>
							{invoice.details}
						</TableCell>
						<TableCell>
							{invoice.due_date.toString()}
						</TableCell>
					</TableRow>)}
				</TableBody>
			</Table>
		</TableContainer>
	</Box>;
}