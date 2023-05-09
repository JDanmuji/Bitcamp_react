import React from 'react';
import Test08Big from './Test08Big';
import Test08List from './Test08List';

const Test08View = ({data}) => {
    return (
        <div>
            <Test08Big />
            <Test08List {...data}/>
        </div>
    );
};

export default Test08View;