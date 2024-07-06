import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <h1>To Do List App</h1>
      </div>
      <div>
        <List />
      </div>
    </>
  );
}

export default App;
