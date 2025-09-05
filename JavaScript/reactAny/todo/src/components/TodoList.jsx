import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList({ toogleComplite, deleteTodo }) {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
