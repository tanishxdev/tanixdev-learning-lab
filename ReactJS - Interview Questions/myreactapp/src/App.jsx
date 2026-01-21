import "./App.css";
import ButtonClick from "./components/ButtonClick";

// import components
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import StatePropsExample from "./components/StatePropsExample";
import Welcome from "./components/Welcome";
function User(props) {
  return <h2>Hi, {props.name}</h2>;
}
function App() {
  return (
    <>
      {/* Basics */}
      <User name="Tanish" />

      <Welcome />
      <Counter />
      <Greeting />
      <ButtonClick />
      <StatePropsExample />
    </>
  );
}

export default App;
