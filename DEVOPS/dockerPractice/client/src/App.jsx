import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001")
      .then((res) => res.text())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1>Client</h1>
      <h1>Backend Data:</h1>
      <h1>{data}</h1>
    </>
  );
}

export default App;
