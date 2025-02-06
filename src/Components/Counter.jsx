import React, { useState } from "react";

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Compteur : {count}</h2>
      <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
        -{step}
      </button>
      <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
        +{step}
      </button>
      <button onClick={reset} style={{ margin: "5px", padding: "10px", backgroundColor: "red", color: "white" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
