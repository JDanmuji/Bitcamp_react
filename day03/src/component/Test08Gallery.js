import React, { useState } from 'react';
import Test08View from './Test08View';
import dataList from './Test08Data';

const Test08Gallery = () => {

    const [data, setData] = useState(dataList);

    return (
        <div className="wrap">
            <Test08View data={data}/>
        </div>
    );
};

export default Test08Gallery;<Test08View />