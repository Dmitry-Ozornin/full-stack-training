function TodoItem({ id, text, completed, toogleComplite, deleteTodo }) {
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={() => toogleComplite(id)} />
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>Удалить</button>
    </li>
  );
}

export default TodoItem;
