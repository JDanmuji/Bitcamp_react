import React, { useEffect, useState } from 'react';

const Test01 = () => {

    const names = '짱구, 유리, 철수, 훈이, 맹구, 채성아, 나미리, 봉미선, 신형만, 흰둥이'.split(',');

    const [name, setName] = useState('고길동');
    const [age, setAge] = useState(25);

    const onName = () => {
        const index = Math.floor(Math.random() * names.length) //버림

        setName(names[index]);
    }

    const onAge = () => {
        setAge(age+1)
    }
    
    // 거의 사용안함, 값이 변하기만 하면 실행이 되므로 불필요한 사용이 너무 많다.
    // useEffect(() => {
    //     console.log('안녕하세요');
    // })

    //마운트될 때 한 번만 수행    
    // useEffect(() => {
    //     console.log('안녕하세요');
    // }, [])

    //name의 값이 바뀔 때만 수행
    useEffect(() => {
        console.log('안녕하세요');
    }, [ name, age ])

    return (
        <div>
            <button onClick={ onName }>이름 변경</button>
            <button onClick={ onAge }>나이 증가</button>
            <hr/>
            <h1>{ name }</h1>
            <h1>{ age }</h1>
        </div>
    );
};

export default Test01;


/*
useEffect란?
- useEffect는 렌더링, 혹은 변수의 값 혹은 오브젝트가 달라지게 되면, 그것을 인지하고 업데이트를 해주는 함수이다.
- useEffect는 콜백 함수를 부르게 되며, 렌더링 혹은 값, 오브젝트의 변경에 따라 어떠한 함수 혹은 여러 개의 함수들을 동작시킬 수 있다.
- 렌더링 후 useEffect는 무조건 한번은 실행된다.

[형식] 
//거의 사용안함, 값이 변하기만 하면 실행이 되므로 불필요한 사용이 너무 많다.
① 컴포넌트가 나타날 때 딱 1번만 함수가 호출
useEffect( () => {
}, [ ]);

② 특정 props가 바뀔 때마다 함수가 호출
useEffect( () => {
}, [ props ]);

useEffect 라는 Hook을 사용하여 할 수 있는 3가지 동작
- 컴포넌트가 마운트 됐을 때 (처음 나타났을 때)
- 언 마운트 됐을 때 (사라질 때)
- 업데이트될 때 (특정 props가 바뀔 때)

[ ]로 설정하면 컴포넌트가 처음 나타날 때만 useEffect에 등록한 함수가 호출 한다.

useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부른다. 
cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하면 되는데, 
[ ] 안에 내용이 비어 있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출된다.
*/