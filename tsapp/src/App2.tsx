import { useState } from 'react';
import './App.css'
import HelloComponent from './HelloComponent'

function App() {

  const [ age, setAge ] = useState(0);

  setAge(10);

  return (
    <>
      <HelloComponent name='김영' />
    
    </>
  );
}

export default App
