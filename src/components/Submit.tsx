import React, { useState, useEffect } from "react";
import "./Submit.css";

export interface SubmitProps {
  onSubmit: (item: string) => void;
}

function Submit({ onSubmit }: SubmitProps) {
  const [toDo, setToDo] = useState("");

  useEffect(() => {
    // Check for changes in state
    // console.log("state toDo:", toDo);
  });

  const handleClick = (): void => {
    onSubmit(toDo);
    setToDo("");
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (e.key === "Enter") {
      onSubmit(toDo);
      setToDo("");
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLTextAreaElement).value;
    setToDo(value);
  };

  return (
    <>
      <label htmlFor="todo-textarea">Add To Do Item</label>
      <textarea
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        name="todo-textarea"
        id="todo-textarea"
        value={toDo}
        cols={30}
        rows={5}
      ></textarea>
      <button onClick={handleClick}>Add Item</button>
    </>
  );
}

export default Submit;
