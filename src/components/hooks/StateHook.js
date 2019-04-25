import React, { useState } from 'react';

function StateHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // You can declare multiple state variables
  const [age, setAge] = useState(0);
  const [fruit, setFruit] = useState('banana');

  return (
    <div>
      <h2>State Hook</h2>
      <p>As a reminder, function components in React look like this:</p>
      <pre className="prettyprint">
          const Example = (props) => {"{"} <br/>
          &nbsp;&nbsp;// You can use Hooks here! <br/>
          &nbsp;&nbsp;return &lt;div /&gt;; <br/>
          {"}"}
      </pre>
      <p>You <strong>cannot</strong> use Hooks in classes. You use them instead of writing classes.</p>
      <p>If you write a function and realise you need to add state to it, previously you had to convert it to a class. Now, since 16.8.0, you can use a Hook inside the existing function component. A Hook is a special function that allows you to use React features.</p>
      <p><code>useState</code> is a Hook that lets you add React state to a function component.</p>
      <h3>Declaring State Variables</h3>
      <p>In a class, we use a contructor to intialise the variable in state by setting <code>this.state</code> to <code>{"{"} someVariable: someValue {"}"}</code>.</p>
      <p>In a function component, there is no <code>this</code>. We instead call the <code>useState</code> Hook directly inside the component.</p>
      <pre className="prettyprint">
          import React, {"{"} useState {"}"} from 'react'; <br/>
          <br/>
          const Example = (props) => {"{"} <br/>
          &nbsp;&nbsp;// We declare a new state variable, "count" <br/>
          &nbsp;&nbsp;const [count, setCount] = useState(0); <br/>
          &nbsp;&nbsp;return &lt;div /&gt;; <br/>
          {"}"}
      </pre>
      <p>Calling <code>useState</code> declares a "state variable". This is a new way to use the exact same capabilities that <code>this.state</code> provides in a class. State variables are persisted over rerenders of the function component.</p>
      <p>The only argument to the <code>useState</code> Hook is the initial state. Unlike with classes, the state doesnt have to be an object, it can be a number, string, array, etc.</p>
      <p><code>useState</code> returns a pair of values: the current state amd a function that updates it. We use "array destructuring" when assigning the variables.</p>
      <h3>Reading State</h3>
      <p>In a function, we can use our declared state variable <code>count</code> directly.</p>
      <pre className="prettyprint">
          &lt;p&gt;You click {"{"}count{"}"} times&lt;/p&gt;
      </pre>
      <h3>Updating State</h3>
      <p>In a function, we have <code>setCount</code> and <code>count</code> as variables, so we just call them directly.</p>
      <pre className="prettyprint">
          &lt;button onClick={"{"}() =&gt; setCount(count + 1) {"}"}&gt; <br />
          &nbsp;&nbsp;Click me <br/>
          &lt;/button&gt;
      </pre>
      <div>
        <h4>Example: Click Counter</h4>
        <h5>Code</h5>
        <pre className="prettyprint">
          import React, {"{"} useState {"}"} from 'react'; <br/>
          <br/>
          const Example = (props) => {"{"} <br/>
          &nbsp;&nbsp;// We declare a new state variable, "count" <br/>
          &nbsp;&nbsp;const [count, setCount] = useState(0); <br/>
          &nbsp;&nbsp;return ( <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;You click {"{"}count{"}"} times&lt;/p&gt; <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}() =&gt; setCount(count + 1) {"}"}&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt; <br/>
          &nbsp;&nbsp;); <br/>
          {"}"} <br/>
        </pre>
        <h5>Component</h5>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <h3>Using Multiple State Variables</h3>
      <p>You can declare multiple state variables with different names by assigning them one after the other.</p>
      <pre className="prettyprint">
        function ExampleWIthManyStates() {"{"} <br/>
        &nbsp;&nbsp;const [age, setAge] = useState(30); <br/>
        &nbsp;&nbsp;const [fruit, setFruit] = useState('banana'); <br/>
        {"}"};
      </pre>
      <p>You don't have to use many state variables. State variables can hold objects and arrays, so you can group related data together. However, unlike <code>this.setState</code> in a class, updating a state variable always replaces it instead of merging.</p>
      <h3>More Examples</h3>
      <div>
        <h4>Example: Set Age</h4>
        <p>You are {age}</p>
        <input onChange={(e) => setAge(e.target.value)} value={age}>
        </input>
      </div>
      <div>
        <h4>Example: Favorite Fruit</h4>
        <p>Your favourite fruit is {fruit}</p>
        <input onChange={(e) => setFruit(e.target.value)} value={fruit}>
        </input>
      </div>
      <a href="https://reactjs.org/docs/hook-state.html">
        Go to React docs
      </a>
    </div>
  );
}

export default StateHook;