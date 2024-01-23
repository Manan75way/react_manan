import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  
  return (
    <div className={styles.App}>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
