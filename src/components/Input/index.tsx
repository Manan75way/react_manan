import styles from "./Input.module.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}

const Input: React.FC<Props> = (props: Props) => {
  const { todo, setTodo ,handleAdd} = props;
  return (
    <form className={styles.form} onSubmit={handleAdd}>
      <input
        className={styles.form_input}
        type="text"
        placeholder="Enter the task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.form_btn} type="submit">Go</button>
    </form>
  );
};

export default Input;
