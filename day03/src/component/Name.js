import React from 'react';

const Name = ({name, onInputName}) => {

    
    return (
        <div>
            <h2>Name component</h2>
            <label>사람 이름 입력</label> &nbsp;
            <input type="text" value={ name } onChange={ onInputName }/>
        </div>
    );
};

export default Name;


