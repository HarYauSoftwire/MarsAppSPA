import React from "react";
import { CounterButton } from "./counterButtonComponent";
import { CounterMessage } from "./counterMessageComponent";

type CounterParentProp = {
    btnText: string;
    message: string;
};

type UpdatableCount = {
    count: number;
    updateCount: (newValue: number) => void;
};

export const counterContext = React.createContext<UpdatableCount>({
    count: 0,
    updateCount: (newValue: number) => {},
});

export const CounterParent: React.FC<CounterParentProp> = ({
    btnText,
    message,
}) => {
    let [count, setCount] = React.useState(0);
    return (
        <counterContext.Provider
            value={{
                count: count,
                updateCount: setCount,
            }}
        >
            <div>
                <CounterButton btnText={btnText} />
                <CounterMessage message={message} />
            </div>
        </counterContext.Provider>
    );
};
