import React, { useState } from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';

function App() {

  const [todos, setTodo] = useState(['Hello everyone','Take dogs for a walk','Hii... everyone']);

  const [input, setInput] = useState('');

  const addTodo= (event) =>{
    //Add todo using useState and setState 
    event.preventDefault()
    console.log('hello')
    setTodo([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
        <h1>Hello World!!</h1>

        <form>
          <FormControl>
            <InputLabel>Add a new task</InputLabel>
            <Input value={input} onChange={(event)=> setInput(event.target.value)} />
            <Button disabled={!input} onClick={addTodo} variant="contained" color="primary">
            Add TO-DO
            </Button>
          </FormControl>
        </form>
        
        <ul>
            {todos.map(todo => {
              return(
                <Todo list={todo}/>
              );
            })}
        </ul>
    </div>
  );
}

export default App;