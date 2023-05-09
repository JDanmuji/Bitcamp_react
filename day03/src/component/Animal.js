import React from 'react';
import Display from './Display';

const Animal = ({ name, onInputName }) => {


    return (
        <div>
            <h2>Animal component</h2>
            <label>동물 이름을 입력하시오.</label> &nbsp;
            <input type="text" value={ name } onChange={ onInputName }/>
        </div>
    );
};

export default Animal;