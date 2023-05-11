import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test02 = () => {

    const [id, setId] = useState(1);
    const [search, setSearch] = useState(1);

    const [data, setData] = useState({});

    const onSearch = (id) => {
        setSearch(id);
    }
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setData(res.data))

    }, [ search ]);

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={ () => onSearch(id) }>검색</button>
           <hr/>
                {
                    <li key={data.id}><span>{data.title}</span></li>
                }
           
        </div>
    );
};

export default Test02;