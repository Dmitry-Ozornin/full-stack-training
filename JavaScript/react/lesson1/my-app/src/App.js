import "./App.css";
import "./greeting";
import Greeting from "./greeting";
import CurrentTime from "./time";
import EventCard from "./EventCard";

function App() {
  return (
    <div>
      <header>
        <h2>Hello world</h2>
      </header>
      <Greeting />
      <CurrentTime />
      <EventCard name="VK-fest" date="10/02/11" location="SPB" />
      <EventCard name="fest" date="10" location="ddd" />
    </div>
  );
}

export default App;
