import React, { useState } from 'react';
import Test08View from './Test08View';
import dataList from './Test08Data';
import '../css/Test08.css'

const Test08Gallery = () => {

    const [data, setData] = useState(dataList);
    const [one, setOne] = useState(data[0]);

    //함수
    const onView = (id) => {
        console.log(id);
        setOne(data[id-1]);
    }


    return (
        <div className="wrap">
            <Test08View one={one} data={data} onView={onView}/>
            
        </div>
    );
};

export default Test08Gallery;