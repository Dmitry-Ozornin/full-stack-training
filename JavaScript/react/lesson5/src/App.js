import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Box from "./components/Box";
import List from "./components/List";
import DetailPage from "./components/DetailPage";
import ListPage from "./components/ListPage";

function App() {
  const liElements = [1, 2, 3, 4, 5];
  const RenderItem = (item, index) => {
    const style = { color: index % 2 === 0 ? "red" : "blue" };
    return <div style={style}>{item}</div>;
  };

  const articles = [
    { id: 1, title: "статья 1", text: "какой-то текст 1" },
    { id: 2, title: "статья 2", text: "какой-то текст 2" },
    { id: 3, title: "статья 3", text: "какой-то текст 3" }
  ];
  return (
    <div className="App">
      <Box>
        <h2 style={{ color: "red" }}>Первый children</h2>
      </Box>
      <Box>
        <img src="#" alt="тут картинка" />
      </Box>
      <List listItems={liElements} RenderItem={RenderItem} />
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/articles/:id" element={<DetailPage pages={articles} />} />
            <Route path="*" element={<ListPage articles={articles} />} />
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
