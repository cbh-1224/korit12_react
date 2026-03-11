import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { Item } from "../App";

type AddItemProps = {
  addItem: (item: Item) => void;
}

export default function AddItem(props: AddItemProps) {
  const [ open, setOpen ] = useState(false);
  const [ item, setItem ] = useState<Item>({
    product: '',
    amount: '',
    price: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addItem = () => {
    props.addItem(item);
    setItem({product:'', amount:'', price: null});
    handleClose();
  }

  return(
    <>
      <Button onClick={handleOpen} >Add Item</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField 
            label='Product'
            margin="dense"
            fullWidth
            value={item.product}
            onChange={(e) => setItem(
              {
              ...item, 
              product: e.target.value
            })} 
          />
          <TextField 
            label='Amount'  
            margin="dense"
            fullWidth                                
            value={item.amount}
            onChange={(e) => setItem(
              {
                ...item, 
                amount: e.target.value
              })} 
          />
          <TextField 
            label='Price'  
            margin="dense"
            fullWidth                                
            value={item.price}
            onChange={(e) => setItem(
              {
                ...item, 
                price: Number(e.target.value)
              })} 
          />          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancle
          </Button>
          <Button onClick={addItem}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
