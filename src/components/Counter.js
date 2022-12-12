import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 50)
    }

    const handleDecrement = () => {
        setCount(count - 50)
    }

    const handleReset = () => {
        setCount(count = 0)
    }

    return (
        <>
            <span>Score: {count}</span>
            <br />
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}