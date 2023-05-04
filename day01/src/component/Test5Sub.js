import React from 'react';

const Test5Sub = ({name, color, age, addr, tel, bgcolor, done}) => {
    
    const css1 = {
        color: color,
        backgroundColor : bgcolor
        
    }

    return (
        <div>
            <h2>신상명세서</h2>
            <ul style={css1}>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>핸드폰 : {tel}</li>
                <li>주소 : {addr}</li>
                <li>동의여부 : {done ? '동의' : '비동의'}</li>
                
            </ul>
        </div>
    );
};

export default Test5Sub;