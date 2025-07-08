import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>+ Increase</button>
      <button onClick={decrease} disabled={count === 0}>- Decrease</button>
      
      <br/>

      <button onClick={reset} >Reset</button>
    </div>
  );
}

export default Counter;
