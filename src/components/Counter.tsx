import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment, decrement, reset, setValue } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSetValue = () => {
    const num = parseInt(input);
    if (!isNaN(num)) {
      dispatch(setValue(num));
      setInput("");
    }
  };

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div className={styles.setValueRow}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Set value"
        />
        <button onClick={handleSetValue}>Set</button>
      </div>
    </div>
  );
};

export default Counter;
