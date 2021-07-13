import React, { useContext } from "react";
import { counterContext } from "./counterParentComponent";

export const CounterValue: React.FC = () => {
    const counter = useContext(counterContext);
    return (
        <>
            <h3>{counter.count}</h3>
        </>
    );
};
