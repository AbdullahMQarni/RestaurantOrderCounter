import './App.css';
import Header from './components/Header'
import Counter from './components/Counter'
import OrderDetails from './components/OrderDetails';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Counter/>
        <OrderDetails />
      </div>
    </>
  );
}

export default App;
