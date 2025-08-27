import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="my-3 text-3xl">Todos</h2>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="mb-3 flex w-full flex-row items-center rounded border-3 bg-[hsl(200,100%,50%)] p-3"
        >
          <li className="w-full">{todo.text}</li>
          <button
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
            className="mx-3 items-end rounded-sm border-3 bg-red-300 p-1"
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default Todos;
