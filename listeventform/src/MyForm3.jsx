import { useState } from "react"

export default function MyForm3() {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleSubmit = event => {
    alert(`Hello ${user.firstName} ${user.lastName} !`);
    event.preventDefault();
  }

  const handleChange = event => {
    setUser({...user, [event.target.name]:event.target.value});
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <label>First Name</label> <br />
      <input type="text" name="firstName" onChange={handleChange} value={user.firstName}/> <br />
      <label>LastName</label>  <br />
      <input type="text" name="lastName" onChange={handleChange} value={user.lastName}/> <br />
      <label>Email</label> <br />
      <input type="text" name="email" onChange={handleChange} value={user.email}/> <br /><br />
      <input type="submit" /> 
    </form>
  );
}