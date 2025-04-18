import { useContext, useEffect } from "react";
import ExampleContext from "../contexts/ExampleContext";

export default function Component2() {
    const { exampleState } = useContext(ExampleContext);

    useEffect(() => {
        console.log(exampleState);
    }, [exampleState]);

    return <>{exampleState.val1}</>;
}
