import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const inputCelsius = (e) => {
    setCelsius(e.target.value);
  };

  const converterCelsius = () => {
    const CForm = document.querySelector(".celsius");
    const DeleteC = document.querySelector(".celsiusText");
    if (DeleteC) {
      CForm.removeChild(DeleteC);
    }

    if (Number(celsius) || Number(celsius) === 0 && celsius.length != "") {
      let temperatute = (Number(celsius) * 9) / 5 + 32;
      const elementP = document.createElement("h3");
      elementP.textContent = celsius + "°F = " + temperatute + "°C";
      elementP.className = "celsiusText";
      CForm.appendChild(elementP);
      setCelsius("");
    } else {
      let erorrAnswer = "Введите число";
      const elementP = document.createElement("h3");
      elementP.textContent = erorrAnswer;
      elementP.className = "celsiusText";
      CForm.appendChild(elementP);
      setCelsius("");
    }
  };

  const inputFahrenheit = (e) => {
    setFahrenheit(e.target.value);
  };

  const converterFahrenheit = () => {
    const DeleteEl = document.querySelector(".fahrenheitText");
    const fForm = document.querySelector(".fahrenheit");
    if (DeleteEl) {
      fForm.removeChild(DeleteEl);
    }

    if (Number(fahrenheit) || Number(fahrenheit) === Number(0) && fahrenheit.length != "") {
      let temperatute = (5 / 9) * (fahrenheit - 32);
      const elementP = document.createElement("h3");
      elementP.textContent = fahrenheit + "°F = " + temperatute + "°C";
      elementP.className = "fahrenheitText";
      fForm.appendChild(elementP);
      setFahrenheit("");
    } else {
      let erorrAnswer = "Введите число";
      const elementP = document.createElement("h3");
      elementP.textContent = erorrAnswer;
      elementP.className = "fahrenheitText";
      fForm.appendChild(elementP);
      setFahrenheit("");
    }
  };

  return (
    <div className="converter">
      <form className="converter__form celsius">
        <h2>Введите градусы Цельсия для конвертирования в градусы Фаренгейта</h2>
        <TextField id="outlined-basic" label="Celsius" variant="outlined" onChange={inputCelsius} value={celsius} />
        <Button variant="contained" color="success" onClick={converterCelsius}>
          Конвертировать
        </Button>
      </form>
      <form className="converter__form fahrenheit">
        <h2>Введите градусы Фаренгейта для конвертирования в градусы Цельсия</h2>
        <TextField id="outlined-basic" label="Fahrenheit" variant="outlined" onChange={inputFahrenheit} value={fahrenheit} />
        <Button variant="contained" color="success" onClick={converterFahrenheit}>
          Конвертировать
        </Button>
      </form>
    </div>
  );
}

export default TemperatureConverter;
