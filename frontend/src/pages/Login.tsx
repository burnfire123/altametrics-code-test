import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch } from "../store";
import { loginUserThunk } from "../users/UserService";

export function LoginComponent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	async function loginUser() {
		const { payload } = await dispatch(loginUserThunk({ email, password }));
		if (payload) {
			navigate("/app");
		}
	}
	return <Grid container direction={"column"} alignItems="center"
		alignSelf={"center"}
		sx={{ minWidth: '100vw' }}
		columnSpacing={2}>
		<Grid item mb={2}>
		<TextField label="Email" onChange={e=>setEmail(e.target.value)}></TextField>
		</Grid>
		<Grid item mb={2}>
		<TextField type="password" label="Password" onChange={e=>setPassword(e.target.value)}></TextField>
		</Grid>
		<Grid item>
			<Button variant="contained" onClick={loginUser}>Login</Button>
		</Grid>
		</Grid>;
}