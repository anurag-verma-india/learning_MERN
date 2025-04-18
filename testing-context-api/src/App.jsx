import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

import ExampleContextProvider from "./contexts/ExampleContextProvider";

function App() {
    return (
        <>
            <ExampleContextProvider>
                <Component1 />
                <br />
                <br />
                <Component2 />
            </ExampleContextProvider>
        </>
    );
}

export default App;
