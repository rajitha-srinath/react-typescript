import "./App.css";
import { Counter } from "./components/state/Counter";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="success"/>
      <Counter />
    </div>
  );
}

export default App;
