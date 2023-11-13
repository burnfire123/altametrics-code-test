import { createBrowserRouter } from "react-router-dom";
import { LoginComponent } from "./pages/Login";
export const router = createBrowserRouter([{
	path: "/",
	Component: LoginComponent,
	
}]);
