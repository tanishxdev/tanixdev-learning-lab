import "./App.css";
import { ButtonClick } from "./components/ButtonClick";
import { Counter } from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter />

      <ButtonClick />
    </div>
  );
};

export default App;
