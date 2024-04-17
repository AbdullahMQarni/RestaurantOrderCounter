import React from 'react';

function Counter({counter, decrementCounter, resetCounter, incrementCounter}) {


    return (
        <div>
            {/* Button to increment the counter */}
            <button onClick={incrementCounter}>+</button>
            <div className='box'>
                <h3>Counter</h3>
                <div className='number-box'>{counter}</div>
                <button onClick={resetCounter}>Reset Counter</button>
            </div>
            {/* Button to decrement the counter */}
            <button onClick={decrementCounter}>-</button>
        </div>
    );
}

export default Counter;
