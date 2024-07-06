import "./TextArea.css";

const TextArea = () => {
  return (
    <>
      <label htmlFor="todo-textarea">Add To Do Item</label>
      <textarea
        name="todo-textarea"
        id="todo-textarea"
        cols={30}
        rows={5}
      ></textarea>
    </>
  );
};

export default TextArea;
