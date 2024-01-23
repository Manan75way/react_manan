import { useState } from "react";
import styles from "./App.module.css";
import Input from "./components/Input";
import { Todo } from "./utils/modals";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);

      setTodo("");
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.heading}>TASKIFY</span>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
