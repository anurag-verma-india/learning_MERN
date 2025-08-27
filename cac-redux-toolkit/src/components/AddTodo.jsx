import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="flex w-full flex-col items-center rounded-sm border-2 bg-[hsl(80,100%,50%)] p-5"
      >
        <input
          type="text"
          className="h-12 w-full rounded-xl border-2 px-3"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="my-3 h-12 w-30 rounded-xl border-2 bg-white"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
