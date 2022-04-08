// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  function countHandeler(value){
    setCounter(counter+value);
  }
  return (
    <div className="App">
      <h2 className={`${ counter%2===0 ? `green` : `red`}`}>Counter:{counter}</h2>
      <button onClick={()=>{countHandeler(+1)}} >Increment</button>
      <button onClick={()=>{countHandeler(-1)}}>Decrement</button>
      <button onClick={()=>{countHandeler(+counter)}}>Double</button>
    </div>
  );
}

export default App;
 