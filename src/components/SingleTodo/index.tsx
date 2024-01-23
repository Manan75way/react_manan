import { Todo } from "../../utils/modals";
import { MdOutlineEdit, MdDelete, MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  key:number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = (props: Props) => {

  const {todo,key,todos,setTodos} = props

    const handleClick = (id :number) => {

        let updatedTodos:Todo[];
      updatedTodos =   todos.map((item)=> return {item.id === id ?  :item })
       setTodos(
       
       todos.map((item)=> return (
        item.id
       )

       )
       )
    }

  return (
    <form key={key}>
      {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
      <div>
        <span>
          <MdOutlineEdit />
        </span>
        <span>
          <MdDelete />
        </span>
        <span onClick={() => handleClick(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
