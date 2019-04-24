import React, { useState, useEffect } from 'react';

function HookState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // Similar to comnponentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the documetn title using the browser API
    document.title = `You have clicked ${count} times`;
  });
  // You can declare multiple state variables
  const [age, setAge] = useState(0);
  const [fruit, setFruit] = useState('banana');

  return (
    <div>
      <div>
        <h3>Click Counter</h3>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <div>
        <h3>Set Age</h3>
        <p>You are {age}</p>
        <input onChange={(e) => setAge(e.target.value)} value={age}>
        </input>
      </div>
      <div>
        <h3>Favorite Fruit</h3>
        <p>Your favourite fruit is {fruit}</p>
        <input onChange={(e) => setFruit(e.target.value)} value={fruit}>
        </input>
      </div>
      <a href="https://reactjs.org/docs/hooks-overview.html#state-hook">Go to React docs</a>
      <br/><a href="/list">Back to List</a>
    </div>
  );
}

export default HookState;