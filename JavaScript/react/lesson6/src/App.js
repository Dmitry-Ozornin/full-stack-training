
import "./App.css";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

export const UserContext = createContext('Guest')
export const ThemeContext = createContext("light")

function App() {
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState("Guest");

  const ChangeUserName = (e) => {
    let newUserName = e.target.closest("div").querySelector("input").value;
    setUserName(newUserName);
    newUserName = "";
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={userName}>
        <Header/>
        <div>
          <input/>
          <button onClick={ChangeUserName}>Edit user name</button>
        </div>
        <Profile/>
        <Footer/>
        <div>
            <button onClick={toggleTheme}>change theme</button>
          </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}

export default App;
