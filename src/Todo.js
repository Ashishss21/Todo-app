import React from 'react';

function Todo(props){
    return(
        <div>            
            <li>{props.list}</li>
        </div>
    );
}

export default Todo;