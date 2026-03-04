import { useState } from "react"

export default function MyComponent() {
  const [firstName, setFirstName] = useState('김영');

  return(
    <>  
      <h1>Hello {firstName}</h1>
    </>
  )
}
