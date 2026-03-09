import { useState } from "react";

export default function Review() {
  const [ name, setName ] = useState<string | null>('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);    
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Hello ${name} !`);
    setName('');    
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name}
          onChange={handleChange}
        />
        <input type="submit" value='제출' />
      </form>
    </>
  );
}