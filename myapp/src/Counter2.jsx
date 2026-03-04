import { useState } from "react";

export default function Counter2() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }
  
  return (
    <>
    <p>Counters: {count1} | {count2}</p>
    <button onClick={increment}>증가</button>
    </>
  )
}