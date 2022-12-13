import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    let score = 100;


    const handleIncrement = () => {
        setCount(count + score)
    }

    const handleDecrement = () => {
        setCount(count - score)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <>
            <h2><span>Score: {count}</span></h2>
            <br />
            <div className="counterButtons">
                <button className="increaseButton" onClick={handleIncrement}>Increase</button>
                <button className="decreaseButton" onClick={handleDecrement}>Decrease</button>
                <button className="resetButton" onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}