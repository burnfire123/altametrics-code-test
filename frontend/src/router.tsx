import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginComponent } from "./pages/Login";
export const router = createBrowserRouter([{
	path: "/",
	Component: LoginComponent,
}, {
	path: "/app",
	Component: App,
}]);
