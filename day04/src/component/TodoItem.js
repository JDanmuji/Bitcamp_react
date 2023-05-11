import React from 'react';


const TodoItem = ({ item, onDel }) => {

    const {seq, text} = item;
    
    return (
        <li key={seq}>
           <span>{ text } </span>
           <button onClick={ () => onDel(seq) }>삭제</button>
        </li>
    );
};

export default TodoItem;