import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { fetchData } from "./store/dataSlice";
import { useState } from "react";

function App() {
  //первый способ
  // const allData = useSelector((state)=> state.data.posts);
  // const isLoading = useSelector((state) => state.data.isLoading);
  // const error = useSelector((state) = state.data.error)

  // c деструктаризацией данных
  const [showPosts, setShowPosts] = useState();
  const [newPosts, setNewPosts] = useState([]);

  const { posts, isLoading, error } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const fetchPosts = () => {
    dispatch(fetchData());
  };

  const handleShowPosts = () => {

    if (posts.length > 0) {
      setNewPosts(posts);
      setShowPosts(true);
    }
  };
  return (
    <div className="App">
      <button onClick={fetchPosts}>{isLoading ? "загрузка" : "получить посты"}</button>
      <button onClick={handleShowPosts}>Показать</button>
      {error && <p>Ошибка: {error}</p>}
      {showPosts && (
        <div>
          <h3>Cписок постов</h3>
          <ul>
            {newPosts.map((post) => (
              <li key={post.id}>
                <p>{post.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
