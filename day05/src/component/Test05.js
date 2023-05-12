import React, { useEffect, useMemo, useState } from 'react';

//전역 변수
const user = [
    { id: 1, name: '짱구'},
    { id: 2, name: '유리'},
    { id: 3, name: 'doooog'},
    { id: 4, name: '훈이'},
    { id: 5, name: '맹구'},
    { id: 6, name: 'SUJI'},
    { id: 7, name: '채성아'},
    { id: 8, name: '나미리'},
    { id: 9, name: 'drop'},
    { id: 10, name: 'buriburiMANNN'}
]


const Test05 = () => {

    const [text, setText] = useState('');
    let [data, setData] = useState(user);
    const [search, setSearch] = useState('');

    //글자가 입력될때마다 바로 결과 출력
    useEffect(() => {
        //setData(user.filter(item=>item.name.toLowerCase.indexOf(text.toLowerCase()!==--1)))

        console.log(text);
        setData(user.filter((item) => item.name.toLowerCase().includes(text.toLowerCase())));
    });

    data = useMemo(() => {
        return user.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    }, [search]);

    
    const onSearch = () => {
        setSearch(text);
    }

    return (
        <div>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
          
            <ul>
                {
                    data.map(item => {
                        return (<li>{item.id} : {item.name}</li>)
                    })
                 }
            </ul>
        </div>
    );
};

export default Test05;
