import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

export function InvoicesComponent() {
	const dispatch = useDispatch<AppDispatch>();
	return <Box minWidth={"100vw"} minHeight={"90vh"}>
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
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
				</TableHead>
				<TableBody></TableBody>
			</Table>
		</TableContainer>
	</Box>;
}