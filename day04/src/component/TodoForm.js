import React, { useRef, useState } from 'react';
import styles from '../css/TodoForm.module.css';

const TodoForm = ({onAdd}) => {
    
    const textRef = useRef();
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) return;

        onAdd(text);  

        setText('');      

        console.log(textRef);
        textRef.current.focus();
    }

    

    const onInput = (e) => {
        const { value } = e.target;

        setText(value);
    }


    return (
        <div>
            <form className={styles.TodoForm} onSubmit={ onSubmit }>
                <input type='text' value={text} onChange={onInput} placeholder='해야할 일을 적어주세요.' ref={textRef}/>
                <button type='submit'>추가</button>
            </form>
        </div>
    );
};

export default TodoForm;