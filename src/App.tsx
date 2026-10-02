import Counter from "./components/Counter";
import Auth from "./components/Auth";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>React + Redux + TypeScript</h1>
      <Counter />
      <Auth />
    </div>
  );
}

export default App;
