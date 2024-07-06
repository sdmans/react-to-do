// import { useState } from "react";
import "./App.css";
import List from "./components/List";
import TextArea from "./components/TextArea";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <h1>To Do List App</h1>
      </div>
      <div>
        <TextArea />
        <List />
      </div>
    </>
  );
}

export default App;
