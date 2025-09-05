import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import InputTask from "./components/InputTask";
import { addTodo } from "./store/TodoSlice";
import { useDispatch } from "react-redux";

function App() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleInput = (task) => setText(task);

  const addTask = () => {
    if (text.trim()) {
      dispatch(addTodo({ text }));
    }
    setText("");
  };

  return (
    <div className="App">
      <InputTask text={text} handleInput={handleInput} addTodo={addTask} />
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
