import { useState } from "react";
import styles from "./App.module.css";
import Input from "./components/Input";
import { Todo } from "./utils/modals";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);

const handleAdd = (e:React.FormEvent)=>{
  e.preventDefault
}

  return (
    <div className={styles.container}>
      <span className={styles.heading}>TASKIFY</span>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
};

export default App;
