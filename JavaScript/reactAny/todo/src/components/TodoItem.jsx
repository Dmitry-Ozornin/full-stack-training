import { deleteTodo, toogleToDoComplite } from "../store/TodoSlice";
import { useDispatch } from "react-redux";
function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={() => dispatch(toogleToDoComplite({id}))} />
      <span>{text}</span>
      <button onClick={() => dispatch(deleteTodo({id}))}>Удалить</button>
    </li>
  );
}

export default TodoItem;
