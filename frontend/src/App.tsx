import { useDispatch, useSelector } from "react-redux"
import { authSlice } from "./store";

function App() {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  return (
    <>
      <input onChange={(e) => dispatch(authSlice.actions.setToken(e.target.value))}></input>
      {token}
    </>
  )
}

export default App
