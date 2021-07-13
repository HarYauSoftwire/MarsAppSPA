import React from "react";
import { CounterValue } from "./counterValueComponent";

type CounterMessageProp = {
    message: string;
};

export const CounterMessage: React.FC<CounterMessageProp> = ({ message }) => {
    return (
        <>
            <CounterValue />
            <p>{message}</p>
        </>
    );
};
