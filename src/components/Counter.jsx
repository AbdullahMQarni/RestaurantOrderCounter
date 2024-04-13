import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const decrementCounter = () => {
        setCounter(prevCounter => prevCounter - 1);
    };

    return (
        <div>
            {/* Button to increment the counter */}
            <button onClick={incrementCounter}>+</button>
            <div className='box'>
                <h3>Counter</h3>
                <div className='number-box'>{counter}</div>
            </div>
            {/* Button to decrement the counter */}
            <button onClick={decrementCounter}>-</button>
        </div>
    );
}

export default Counter;
