import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { fetchTasks } from "./store/tasksSlice";
import React, { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const { entities, isLoading, error } = useSelector((state) => state.tasks);

  const loaded = () => {
    const done = isLoading ? "Загрузка задач" : "Список задач";
    return done;
  };
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>{loaded()}</h1>
      {error ? (
        <p>Ошибка: {error}</p>
      ) : (
        <ul>
          {entities.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
