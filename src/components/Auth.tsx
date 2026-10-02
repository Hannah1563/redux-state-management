import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { login, logout } from "../store/actions/authActions";
import styles from "./Auth.module.css";

const Auth = () => {
  const { isLoggedIn, username } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim()) {
      dispatch(login(input.trim()));
      setInput("");
    }
  };

  return (
    <div className={styles.authContainer}>
      {isLoggedIn ? (
        <>
          <p>Welcome, <strong>{username}</strong>!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter username"
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Auth;
