import TodoItem from "./TodoItem";

function TodoList({ todos, toogleComplite, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} toogleComplite={toogleComplite} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
