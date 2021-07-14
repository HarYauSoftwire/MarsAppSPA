import React, { useEffect, useState } from "react";
import "./counterComponent.css";

export const Counter: React.FC<{ title: string }> = ({ title }) => {
    const [clickCount, setCount] = useState(0);
    useEffect(() => {
        setCount(Number(localStorage.getItem("clickCount") || 0));
    }, []);
    useEffect(() => {
        localStorage.setItem("clickCount", clickCount.toString());
    }, [clickCount]);
    return (
        <>
            <button
                className="counter"
                onClick={() => {
                    setCount(clickCount + 1);
                }}
            >
                {title}: {clickCount}
            </button>
            <button
                className="counter"
                onClick={() => {
                    setCount(clickCount * 2);
                }}
            >
                Double
            </button>
            <button
                className="counter"
                onClick={() => {
                    setCount(0);
                }}
            >
                Reset
            </button>
        </>
    );
};
