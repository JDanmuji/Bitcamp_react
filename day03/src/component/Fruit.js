import React from 'react';

const Fruit = ({fruit, onInputFruit}) => {
    return (
        <div>
            <h2>Fruit component</h2>
            <label>과일 이름 입력</label> &nbsp;
            <input type="text" value={ fruit } onChange={ onInputFruit }/>
        </div>
    );
};

export default Fruit;