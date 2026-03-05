export default function MyForm() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('Form Submit');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username" />
      <input type="submit" value='제출' />
    </form> 
  );
}