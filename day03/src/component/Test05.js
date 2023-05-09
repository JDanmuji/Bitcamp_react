import React, { useState } from 'react';
import Name from './Name';
import Fruit from './Fruit';
import Output from './Output';

const Test05 = () => {

    const [name, setName] = useState('');
    const [fruit, setfruit] = useState('');
    
    const onInputName = (e) => {
        const { value } = e.target;
        setName(value);
    }


    const onInputFruit = (e) => {
        const { value } = e.target;
        setfruit(value);
    }

    return (
        <div>
            <Name name={ name } onInputName={ onInputName }/>
            <br/>
            <Fruit fruit={ fruit } onInputFruit={ onInputFruit } />
            <br/>
            <Output name={ name } fruit={ fruit } />
        </div>
    );
};

export default Test05;