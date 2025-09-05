import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import InputTask from "./components/InputTask";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (task) => setText(task);
  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text, completed: false }]);
    }
    setText("");
  };

  const toogleComplite = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <InputTask text={text} handleInput={handleInput} addTodo={addTodo}/>
      <div>
        <TodoList todos={todos} toogleComplite={toogleComplite} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
