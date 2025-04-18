import { useContext } from "react";
import ExampleContext from "../contexts/ExampleContext";
const Component1 = () => {
    const { exampleState, setExampleState } = useContext(ExampleContext);

    const handleClick = () => {
        if (exampleState.val1 === "default") {
            setExampleState({ val1: "clicked" });
        } else {
            setExampleState({ val1: "default" });
        }
    };

    return <button onClick={handleClick}>This is a button</button>;
};

export default Component1;
