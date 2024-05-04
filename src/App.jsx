// App.js
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import OrderDetails from './components/OrderDetails';
import { useState } from 'react';
import orders from './Assets/Order'; // Import the data from data.js

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => Math.min(prevCounter + 1, orders.length - 1)); // Prevent going out of bounds
  };

  const decrementCounter = () => {
    setCounter(prevCounter => Math.max(prevCounter - 1, 0)); // Prevent going negative
  };

  const resetCounter = () => {
    setCounter(0); // Reset counter to zero
  };

  return (
    <>
      <Header />
      <div className="App">
        <Counter decrementCounter={decrementCounter} resetCounter={resetCounter} incrementCounter={incrementCounter} counter={counter} />
        <OrderDetails orderData={orders[counter]} /> {/* Pass the selected order data */}
      </div>
      {counter < 0 ? <p id='warning'>The Counter Must Be Positive Value</p> : null}
    </>
  );
}

export default App;