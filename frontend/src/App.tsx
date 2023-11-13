import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function App() {
  const { token } = useSelector(state => state.user);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  })
  return <>
  </>
}

export default App
