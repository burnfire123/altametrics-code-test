import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function App() {
  const { token } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  })
  return <>
    <Button variant="outlined" onClick={()=>navigate("/invoices")}>Go to Invoices list</Button>
  </>
}

export default App
