import React from 'react';

const Test2 = () => {

    //함수 영역 - 조건문, 제어문 ..등 써도 된다.
    let title = '신상명세서';
    const name = '홍길동';
    const age = 25;
    const addr = '서울';


    return (
        <>
            <h2>JSX 영역</h2>  
            <h2>{title}</h2>  
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
            </ul>
        </>
    );
};

export default Test2;