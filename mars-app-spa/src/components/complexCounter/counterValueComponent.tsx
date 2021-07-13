import React from "react";

type CounterValueProp = {
    value: number;
};

export const CounterValue: React.FC<CounterValueProp> = ({ value }) => {
    return (
        <>
            <h3>{value}</h3>
        </>
    );
};
