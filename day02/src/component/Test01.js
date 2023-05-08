import React from 'react';
import Test06 from './Test06';


const Test01 = () => {

    const test1 = () => { alert('test1')};
    const test2 = () => { alert('test2')};
    const test3 = (num) => { alert('num= '+ num)};
    const test4 = (num) => { alert(`num=  ${num}`)};


    return (
        <div>
            <h2>이벤트 : on + 첫글자 대문자</h2>
            <p>
                <button onClick={test1 }>클릭</button>
                <button onClick={test2 }>클릭</button>
                <button onClick={() => test3(10) }>클릭</button>
                <button onClick={() => test4(40) }>클릭</button>
            </p>
            <p>
                <button onClick={() => {
                    console.log("사자");
                    console.log("사2");
                    console.log("사3");
                }}>클릭</button>
                 <button onClick={() => console.log('빨간')}>클릭</button>
            </p>
        </div>
    );
};

export default Test01;