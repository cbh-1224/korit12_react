import { useState } from "react";

export default function Users() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    alert(`Hello ${username} !`);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>username</label>
      <input 
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>password</label>
      <input 
        type="password" 
        name="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> 
      <br />
      <label>E-mail</label>
      <input 
        type="email" 
        name="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> 
      <br /><br />
      <input type="submit" /> 
      <br />
    </form>
  );
}