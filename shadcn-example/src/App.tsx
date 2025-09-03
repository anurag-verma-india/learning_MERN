import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div>
        <div className="flex h-screen w-screen flex-col items-center justify-center">
          <div className="p-3">
            <Button
              onClick={() => {
                alert(0);
              }}
            >
              Example
            </Button>
          </div>
          <div className="p-3">
            <Button
              onClick={() => {
                alert(1);
              }}
            >
              Example 1
            </Button>
          </div>
          <div className="p-3">
            <Button
              onClick={() => {
                alert(2);
              }}
            >
              Example 2
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
