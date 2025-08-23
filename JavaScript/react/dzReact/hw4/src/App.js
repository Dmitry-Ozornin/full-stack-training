import "./App.css";
import AboutPage from "./components/AboutPage";
import HeadPage from "./components/HeadPage";
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  const pages = [
    { name: "Head", title: "Гавная" },
    { name: "About", title: "Обо мне" },
  ];

  return (
    <div>
      <BrowserRouter>
        <nav className="nav">
          <Link to={"/"}>main</Link>
          <Link to={"/about"}>about me</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HeadPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
