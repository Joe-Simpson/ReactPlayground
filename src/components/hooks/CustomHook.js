import React, { useState, useEffect } from 'react';

function CustomHookExample() {
  
  const [count, setCount] = useState(0);
  
  function handleCountChange() {
    setCount(count + 1);  
  };

  useEffect(() => {
    console.log(`CustomHook triggered. Count: ${count}`);
  });

  return count;
}

function CustomHook() {
  const count = CustomHookExample();

  return (
    <div>
      <h2>Effect Hooks</h2>
      <h3>Another Click Counter</h3>
      <p>You clicked {count} times. Check out the window title!</p>
      <button onClick={() => CustomHookExample()}>
        Click me
      </button>
      <br/>
      <a href="https://reactjs.org/docs/hooks-overview.html#effect-hook">
        Go to React docs
      </a>
    </div>
  );
}

export default CustomHook;