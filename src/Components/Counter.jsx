import React, { useState } from "react";
import useStoreStored from "../ZustandStores/UseStoreStored";

// function Counter({ initialCount = 0, step = 1 }) {
//   const [count, setCount] = useState(initialCount);

//   const increment = () => {
//     setCount(count + step);
//   };

//   const decrement = () => {
//     setCount(count - step);
//   };

//   const reset = () => {
//     setCount(initialCount);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h2>Compteur : {count}</h2>
//       <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
//         -{step}
//       </button>
//       <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
//         +{step}
//       </button>
//       <button onClick={reset} style={{ margin: "5px", padding: "10px", backgroundColor: "red", color: "white" }}>
//         Reset
//       </button>
//     </div>
//   );
// }

const Counter = () => {
    const {count , increment , decrement} = useStoreStored();
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };



export default Counter;
