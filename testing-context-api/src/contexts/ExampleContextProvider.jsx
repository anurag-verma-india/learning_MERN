import React, { useState } from "react";
import ExampleContext from "./ExampleContext";

export default function ExampleContextProvider({ children }) {
    const [exampleState, setExampleState] = useState({val1: "default"});
    return (
        <>
            <ExampleContext.Provider value={{ exampleState, setExampleState }}>
                {children}
            </ExampleContext.Provider>
        </>
    );
}
