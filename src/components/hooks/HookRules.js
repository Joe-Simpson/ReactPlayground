import React from 'react';

const HookRules = (props) => {
  return (
    <div>
    	<h2>Rules of Hooks</h2>
      <p>Hooks are JavaScript functions, but they impose two additional rules</p>
      <ul>
        <li>Only call Hooks <strong>at the top level</strong>. That is to say, do not call Hooks inside loops, conditions or nested functions.</li>
        <li>Only call Hooks <strong>from React function components</strong>. Do not call Hooks from regular js functions. You may call Hooks within custom Hooks.</li>
      </ul>
      <a href="https://reactjs.org/docs/hooks-overview.html#rules-of-hooks">
        Go to React docs
      </a>
    </div>
  )
}

export default HookRules;