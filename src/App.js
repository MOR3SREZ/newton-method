import { useState } from 'react';
import './App.css';

function App() {
  const [inputX0, setInputX0] = useState(0);
  const [root, setRoot] = useState(0);
  const [steps, setSteps] = useState([]);
  let elem;
  let s = [];
  let EPSILON = 0.001;

  function func(x) {
    return x - Math.cos(x);
  }

  //
  function derivFunc(x) {
    return 1 + Math.sin(x);
  }

  //Function to find the root

  function newtonRaphson(x) {
    let h = func(x) / derivFunc(x);
    while (Math.abs(h) >= EPSILON) {
      h = func(x) / derivFunc(x);

      x = x - h;
      s.push(parseFloat(x.toFixed(5)));
    }

    console.log('root', parseFloat(x.toFixed(4)));
    setRoot(parseFloat(x.toFixed(4)));
    console.log(s);

    setSteps(s);
  }

  console.log(steps);
  const submitHandler = (e) => {
    e.preventDefault();
    newtonRaphson(+inputX0);
  };

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <label>
          Enter initial value:
          <input type='text' onChange={(e) => setInputX0(e.target.value)} />
        </label>
        <button>Enter</button>
      </form>
      {steps !== 0 && (
        <ul>
          {steps.map((step, i) => (
            <li key={step}>
              x<sub>{i}</sub>: {step}
            </li>
          ))}
        </ul>
      )}
      {root !== 0 && (
        <div className='root'>
          <span>Root is: </span>
          {root}
        </div>
      )}
    </div>
  );
}

export default App;
