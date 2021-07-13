import React from "react";
import "./counterComponent.css";

export const Counter: React.FC<{ title: string }> = ({ title }) => {
    let [clickCount, setStateCount] = React.useState(
        Number(localStorage.getItem("clickCount") || 0)
    );
    return (
        <>
            <button
                className="counter"
                onClick={() => {
                    clickCount += 1;
                    setClickCount(setStateCount, clickCount);
                }}
            >
                {title}: {clickCount}
            </button>
            <button
                className="counter"
                onClick={() => {
                    clickCount *= 2;
                    setClickCount(setStateCount, clickCount);
                }}
            >
                Double
            </button>
            <button
                className="counter"
                onClick={() => {
                    clickCount = 0;
                    setClickCount(setStateCount, clickCount);
                }}
            >
                Reset
            </button>
        </>
    );
};

function setClickCount(
    setClickCount: React.Dispatch<React.SetStateAction<number>>,
    clickCount: number
) {
    setClickCount(clickCount);
    localStorage.setItem("clickCount", clickCount.toString());
}
