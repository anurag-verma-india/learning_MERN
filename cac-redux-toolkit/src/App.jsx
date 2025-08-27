import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        {/* <h1 className="rounded-sm py-3 text-xl">Redux Toolkit Tutorial</h1> */}
        <div className="flex w-7/8 flex-col items-center md:w-5/8 lg:w-4/8">
          <Todos />
          <AddTodo />
        </div>
      </div>
    </Provider>
  );
}

export default App;
