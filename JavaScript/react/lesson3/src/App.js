import "./App.css";
import Counter from "./components/Counter";
import GreetingProps from "./components/GreetingProps";
import MessageKist from "./components/MessageListHead";
import Switch from "./components/switch/Theme";
import ThemeSwitcher from "./components/switch/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <GreetingProps name="Dima" />
      <GreetingProps name="Diana" />
      <Counter />
      <MessageKist />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
