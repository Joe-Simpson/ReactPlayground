import React, { useState, useEffect } from 'react';

function EffectHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // Similar to comnponentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You have clicked ${count} times`;
  });
  // You can use more than a single Effect in a component
  useEffect(() =>{
    console.log('EffectHook component did something');
  });

  return (
    <div>
      <h2>Effect Hooks</h2>
      <h3>Another Click Counter</h3>
      <p>You clicked {count} times. Check out the window title!</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br/>
      <a href="https://reactjs.org/docs/hooks-overview.html#effect-hook">
        Go to React docs
      </a>
    </div>
  );
}

export default EffectHook;