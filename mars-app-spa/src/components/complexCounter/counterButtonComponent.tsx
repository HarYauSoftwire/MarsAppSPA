import React from "react";
import { counterContext } from "./counterParentComponent";

type CounterButtonProps = {
    btnText: string;
};

export const CounterButton: React.FC<CounterButtonProps> = ({ btnText }) => {
    const updatableCount = React.useContext(counterContext);
    return (
        <>
            <button
                onClick={() =>
                    updatableCount.updateCount(updatableCount.count + 1)
                }
            >
                {btnText}
            </button>
        </>
    );
};
