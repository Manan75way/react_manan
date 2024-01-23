import React from "react";
import styles from "./TodoList.module.css";
import { Todo } from "../../utils/modals";
import SingleTodo from "../SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = (props: Props) => {
  const { todos, setTodos } = props;
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
