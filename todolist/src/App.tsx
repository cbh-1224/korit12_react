import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText, Button } from '@mui/material'
import { useState } from 'react'
import AddTodo from './components/AddTodo'

import './App.css'


export type Todo = {
  title: string;
  content: string;

}

function App() {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  }

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };  

  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              Todo List
            </Typography>
          </Toolbar>
        </AppBar>
        <AddTodo addTodo={addTodo}/>
        <List>
          {
            todos.map((todo, index) => 
              <ListItem 
                  key={index} 
                  divider
                  secondaryAction = {
                  <Button onClick = {() => removeTodo(index)}>
                    Delete
                  </Button>
                }         
                >       
                <ListItemText 
                  primary={todo.title}
                  secondary={todo.content}              
                />
              </ListItem>
            )
          }
        </List>


      </Container>
    </>
  );
}

export default App
