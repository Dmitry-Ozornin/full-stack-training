import { useState } from "react";
import Switch from "./Theme";

function ThemeSwitcher() {
  const [tema, setTema] = useState("white");
  const changeTema = () => {
    if (tema === "white") {
      setTema("black");
    } else if (tema === "black") {
      setTema("white");
    }
  };

  return (
    <>
      <button onClick={changeTema}>сменить тему</button>
      
      <Switch theme={tema} />
    </>
  );
}

export default ThemeSwitcher;
