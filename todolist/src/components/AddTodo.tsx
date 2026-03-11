import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { Todo } from "../App";

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
}

export default function AddTodo(props: AddTodoProps) {
  const [ open, setOpen ] = useState(false);
  const [ todo, setTodo ] = useState<Todo>({
    title: '',
    content: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addTodo = () => {
    props.addTodo(todo);
    setTodo({title: '', content: ''});
    handleClose();
  }
  

  return(
    <>
      <Button onClick={handleOpen} >Add Todo</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Content</DialogTitle>
        <DialogContent>
          <TextField 
            label='Title'
            margin="dense"
            fullWidth
            value={todo.title}
            onChange={(e) => setTodo(
              {
              ...todo, 
              title: e.target.value
            })} 
          />
          <TextField 
            label='Content'  
            margin="dense"
            fullWidth                                
            value={todo.content}
            onChange={(e) => setTodo(
              {
                ...todo, 
                content: e.target.value
              })} 
          />       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancle
          </Button>
          <Button onClick={addTodo}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
