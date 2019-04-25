import React from 'react';

const OtherHooks = (props) => {
  return (
    <div>
			<h2>Other Hooks</h2>
			<p>There are a few less commonly used built-in Hooks that may be useful.</p>
			<h3>useContext</h3>
			<p>Lets you subscribe to React context without introducing nesting.</p>
			<code className="prettyprint lang-js">
				function Example() {"{"} <br/>
				&nbsp;&nbsp;const locale = useContext(LocaleContext); <br/>
				&nbsp;&nbsp;const theme = useContext(ThemeContext); <br/>
				{"}"}
			</code>
			<br/><h3>useReducer</h3>
			<p>Lets you manage local state of complex components with a reducer.</p>
			<code className="prettyprint lang-js">
				function Todos() {"{"} <br/>
				&nbsp;&nbsp;const [todos, dispatch] = useReducer(todosReducer); <br/>
				{"}"}
			</code>
			<br/>
			<a href="https://reactjs.org/docs/hooks-overview.html">
			  Go to React docs
			</a>
    </div>
  )
}

export default OtherHooks;