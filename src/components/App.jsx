import React, { useState } from "react";

function App() {
  //count - name for [0] with initial value
  //setCount - function to update the initial value
  const [count, setCount] = useState(0);
  console.log(count);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{[count]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
