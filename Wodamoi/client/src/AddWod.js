import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from './components/Form/Form';
import add from "./images/add.png";

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img src={add} className="add" alt="add" onClick={handleClickOpen} />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <DialogContent>
            <DialogContentText>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </DialogContentText>
          </DialogContent>
        </DialogTitle>       
      </Dialog>
    </div>
  );
}