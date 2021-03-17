import React, { useState } from "react";

function App() {
  const state = useState(0); // 0 - starting state
  console.log(state[0]);

  //Destructuring example
  const [red, green, blue] = [9, 132, 227];
  console.log(green);

  function increase() {
    // count++;
    // console.log(count);
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
