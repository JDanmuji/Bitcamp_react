import React, { useState } from 'react';

const Test03 = () => {

    //const name = '홍길동';
    //const age = 25;
    //const color = "cyan";

    const [name, setName] = useState('홍길동');
    const [age, setAge] = useState(25);
    const [color, setColor] = useState('cyan');

    const onName = () => {
        setName('코난');
    };

    const onAge = (num) => {
        setAge(num);
    };

    const onColor = () => {
        setColor('yellow');
    };

    return (
        <div>
            <h2 style={{background : color}}>
                이름 : {name} / 나이 : {age}
            </h2>      
            <p>
                <button onClick={ onName }>코난</button>
                <button onClick={ () => onAge(30) }>나이변경</button>
                <button onClick={ () => setAge(35) }>35 나이변경</button>
                <button onClick={ () => onColor() }>색상변경</button>
            </p>
        </div>
    );
};

export default Test03;     