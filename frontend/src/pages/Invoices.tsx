import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Invoice } from "../invoices/Invoice";
import { InvoiceDetailsComponent } from "../invoices/InvoiceDetailsComponent";
import { findByIdThunk, getAllInvoicesThunk } from "../invoices/InvoiceService";
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
	});
	function selectInvoice(invoice: Invoice) {
		dispatch(findByIdThunk({ id: invoice.id, token }));
	}
	return <>
		<InvoiceDetailsComponent />
		<Box minWidth={"100vw"} minHeight={"90vh"}>
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
						{invoices?.map((invoice: Invoice) => <TableRow key={invoice.id} onClick={()=>selectInvoice(invoice)}>
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
								{new Date(invoice.due_date).toDateString()}
							</TableCell>
						</TableRow>)}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>;
	</>
}