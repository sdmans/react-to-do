import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Submit from "./components/Submit";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([] as string[]);

  const addToDo = (value: string): void => {
    console.log("Adding To Do:", value);
    // console.log("og list", list);
    // const updatedList: string[] = list.slice();
    // updatedList.push(value);
    // console.log("updatedList", updatedList);
  };

  return (
    <>
      <div className="header">
        <h1>To Do List App</h1>
      </div>
      <div>
        <Submit onSubmit={addToDo} />
        <List />
      </div>
    </>
  );
}

export default App;
