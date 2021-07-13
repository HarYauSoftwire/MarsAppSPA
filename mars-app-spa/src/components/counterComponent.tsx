import React from "react";
import "./counterComponent.css";

export const Counter: React.FC<{ title: string }> = ({ title }) => {
    const [clickCount, setCount] = React.useState(0);
    return (
        <>
            <button
                className="counter"
                onClick={() => setCount(clickCount + 1)}
            >
                {title}: {clickCount}
            </button>
            <button
                className="counter"
                onClick={() => setCount(2 * clickCount)}
            >
                Double
            </button>
            <button className="counter" onClick={() => setCount(0)}>
                Reset
            </button>
        </>
    );
};
