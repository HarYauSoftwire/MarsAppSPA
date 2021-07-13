import React from "react";

type CounterButtonProps = {
    btnText: string;
    onClick: () => void;
};

export const CounterButton: React.FC<CounterButtonProps> = ({
    btnText,
    onClick,
}) => {
    return (
        <>
            <button onClick={onClick}>{btnText}</button>
        </>
    );
};
