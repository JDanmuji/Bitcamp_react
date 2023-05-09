import React, { useState } from 'react';
import Test07Input from './Test07Input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';
import '../css/Test07.css';

const Test07Main = () => {

    const [ data, setData ] = useState({
        name : '',
        age : '', 
        addr : '', 
        phone : ''
    });
    
    const [ count, setCount ] = useState(1);

    const onInput = (e) => {
        const { name, value } = e.target;
        
        setData({
            ...data, //먼저 객체를 복사하고, 원하는 것만 수정한다., 만약 복사하지 않으면 기존의 값에 덮어쓰기 됨(기)
            [name] : value //title 값을 얻고 싶으면 [] 사용
        });
        
    }

    const onNext = () => {
        setCount(count+1);
    }

    const onPrev = () => {
        setCount(count-1)
    }

    return (
        <div>
            {
                count === 1 && <Test07Input data={data} onInput={onInput} onNext={onNext}/>
            }
            {
                count === 2 && <Test07Print {...data} onNext={onNext} onPrev={onPrev}/>
            }
            {
                count === 3 && <Test07Output data={data.name} />
            }
        </div>
    );
};

export default Test07Main;