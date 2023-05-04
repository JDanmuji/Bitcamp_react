import React from 'react';

const Person = ({name, age}) => {
    return (
        <div>
            나의 이름은 {name}  나이는 {age} 살 입니다.
        </div>
    );
};

export default Person;