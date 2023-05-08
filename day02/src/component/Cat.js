import React, { useState } from 'react';
import CatData from './CatData.js'
import '../css/reset.css';
import '../css/style.css';
import CatList from './CatList.js';

const Cat = () => {

    const [data, setData] = useState(CatData);

    return (
        <>
            <section className='business'>
                <div className='inner'>
                    <h2>고냥이</h2>
                    <p>고냥이들</p>
                    <CatList data={ data }/>
                </div>
            </section>
        </>
    );
};

export default Cat;