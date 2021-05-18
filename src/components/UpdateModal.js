import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import db from "../firebase";
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateModal(props) {
  const classes = useStyles();
  const [input, setInput] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <EditIcon className="iicon" onClick={handleOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Update Task</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <form>
              <h1>Update Task</h1>
              <input
                placeholder={props.todo.todo}
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <Button
                type="submit"
                onClick={updateTodo}
                variant="contained"
                color="primary"
              >
                Update Todo
              </Button>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

{/* <div>
      <EditIcon className="iicon" onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form>
              <h1>Update Task</h1>
              <input
                placeholder={props.todo.todo}
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <Button
                type="submit"
                onClick={updateTodo}
                variant="contained"
                color="primary"
              >
                Update Todo
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div> */}