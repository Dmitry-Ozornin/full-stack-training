import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
  };
  const countMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={countMinus}>-1</button>
      <button onClick={countPlus}>+1</button>
    </div>
  );
}

export default Counter;
