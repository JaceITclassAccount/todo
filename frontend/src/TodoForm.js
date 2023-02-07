import { useRef } from "react";

function TodoForm(props) {
  const { addTodo } = props;
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new task</h3>

      <input
        type="text"
        ref={inputRef}
        placeholder="What needs to be done?"
      />

      <button className='showbuttons' type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
