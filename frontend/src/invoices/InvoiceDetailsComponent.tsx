import { Box, Dialog, DialogContent, DialogTitle, IconButton, Modal, Paper, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { AppDispatch } from "../store";
import { invoiceSlice } from "./invoices.slice";

export function InvoiceDetailsComponent() {
	const { selected } = useSelector(state => state.invoice);
	const dispatch = useDispatch<AppDispatch>();
	const open = !!selected;
	function closeModal() {
		dispatch(invoiceSlice.actions.resetSelected());
	}
	return open ? <Modal open={open}>
		<Dialog open={open}>
			<DialogTitle>
				<Box>
					Invoice details
					<IconButton onClick={closeModal}>
						<CloseIcon />
					</IconButton>
				</Box>
			</DialogTitle>
			<DialogContent>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell variant="head">Id</TableCell>
							<TableCell>{selected.id}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Amount</TableCell>
							<TableCell>{selected.amount}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Details</TableCell>
							<TableCell>{selected.details}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Due date</TableCell>
							<TableCell>{selected.due_date}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Created by</TableCell>
							<TableCell>{`${selected.User.name} (${selected.User.email})`}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</DialogContent>
		</Dialog>
	</Modal> : <></>;
}