import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { notificationSlice } from "./notification.slice";

export function NotificationComponent() {
	const { open, message, severity } = useSelector(state => state.notification);
	const dispatch = useDispatch<AppDispatch>();
	const onClose = () => dispatch(notificationSlice.actions.closeSnackbar());
	return <Snackbar onClose={onClose} autoHideDuration={5000} open={open} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
		<Alert onClose={onClose} severity={severity}>{message}</Alert>
	</Snackbar>;
}