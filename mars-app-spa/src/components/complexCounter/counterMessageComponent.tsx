import React from "react";
import { CounterValue } from "./counterValueComponent";

type CounterMessageProp = {
    value: number;
    message: string;
};

export const CounterMessage: React.FC<CounterMessageProp> = ({
    value,
    message,
}) => {
    return (
        <>
            <CounterValue value={value} />
            <p>{message}</p>
        </>
    );
};
