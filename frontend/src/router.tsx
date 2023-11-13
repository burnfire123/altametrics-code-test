import { createBrowserRouter } from "react-router-dom";
import AppComponent from "./pages/App";
import { InvoicesComponent } from "./pages/Invoices";
import { LoginComponent } from "./pages/Login";
export const router = createBrowserRouter([{
	path: "/",
	Component: LoginComponent,
}, {
	path: "/app",
	Component: AppComponent,
	}, {
	path: "/invoices",
		Component: InvoicesComponent
}]);
