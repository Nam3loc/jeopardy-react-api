import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    let valueToAdd = 50;


    const handleIncrement = () => {
        setCount(count + valueToAdd)
    }

    const handleDecrement = () => {
        setCount(count - valueToAdd)
    }

    const handleReset = () => {
        setCount(valueToAdd * 0)
    }

    return (
        <>
            <span><h2>Score: {count}</h2></span>
            <br />
            <div className="counterButtons">
                <button className="increaseButton" onClick={handleIncrement}>Increase</button>
                <button className="decreaseButton" onClick={handleDecrement}>Decrease</button>
                <button className="resetButton" onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}