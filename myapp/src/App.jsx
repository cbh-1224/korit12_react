import { useRef } from "react"
import './App.css'
import Counter5 from "./Counter5";

export default function App() {
  const inputRef = useRef(null);
 
  return (
    <>
      <Counter5 />
      <br />
      <input type="text" ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  )
}
