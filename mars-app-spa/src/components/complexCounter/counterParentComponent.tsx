import React from "react";
import { CounterButton } from "./counterButtonComponent";
import { CounterMessage } from "./counterMessageComponent";

type CounterParentProp = {
    btnText: string;
    message: string;
};

export const CounterParent: React.FC<CounterParentProp> = ({
    btnText,
    message,
}) => {
    let [count, setCount] = React.useState(0);
    return (
        <>
            <div>
                <CounterButton
                    btnText={btnText}
                    onClick={() => setCount(count + 1)}
                />
                <CounterMessage message={message} value={count} />
            </div>
        </>
    );
};
