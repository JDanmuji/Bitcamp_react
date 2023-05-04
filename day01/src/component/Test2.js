import React from 'react';

const Test2 = () => {

    //함수 영역 - 조건문, 제어문 ..등 써도 된다.
    let title = '신상명세서';
    const name = '홍길동';
    const age = 25;
    const addr = '서울';

    //css 코드가 아닌 js 객체 선언
    const css1 = {
        color: 'red',
        backgroundColor : 'yellow',
        fontSize: 10,
        padding:  20,
        marigin: 10,
        border: '3px solid #000'
    }

    //css 코드가 아닌 js 객체 선언
    const css2 = {
        width : 400,
        backgroundColor : 'pink',
        fontSize: 20,
        padding:  13,
        marigin: 30,
        
    }

    return (
        <>
            <h2>JSX 영역</h2>  
            <h2 style={css1}>{title}</h2>  
            <ul>
                <li style={css2}>이름 : {name}</li>
                <li style={{backgroundColor:'greenyellow', width: 400, padding:13, margin: 30}}>
                    나이 : {age} 살 {age > 20 ? '성인' : '청소년'}</li>
                <li >주소 : {addr}</li>
            </ul>
        </>
    );
};

export default Test2;