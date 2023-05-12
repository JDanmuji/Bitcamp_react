import React, { useEffect, useReducer, useState } from 'react';
import axios  from 'axios';

const initialState = {
    data : {},
    error : null,
    loading : true
};

const reducer = (state, action) => {
    
    switch(action.type) {
        case 'SUCCESS' :
            return {
                data : action.payload,
                error : null,
                loading : false
            }
        case 'ERROR' :
            return {
                data : {},
                error : '에러...',
                loading : true
            }
        default : 
            return state;
    }
}


const Test05 = () => {
    
    const [id, setId] = useState('');
    const [search, setSearch] = useState('');
   
    const [state, dispatch] = useReducer(reducer, initialState);

    
    useEffect(() => {
        console.log(id);
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        axios.get(url)
             .then(res => {
                dispatch({type : 'SUCCESS', payload : res.data})
             })
             .catch(error => {
                dispatch({ type : 'ERROR' })
             })
    }, [search])

    const onSearch = () => {
        setSearch(id);
    }


    return (
        <div>
            <h3>
                ID 입력 (1~5000) : <input type='text' value={id} onChange={e => setId(e.target.value)}/>
                <button onClick={onSearch}>검색</button>
            </h3>
            <hr/>
            
            {
                // false 
                state.loading || <div><img src={state.data.thumbnailUrl} alt={state.data.title} /> </div>

                //true
                //state.data &&  state.loading ? '로딩 중 ' : 
                //<div><img src={state.data.thumbnailUrl} alt={state.data.title} /> </div>
            }
            <p>
                {
                    state.error ? state.error : null
                }
            </p>
        </div>
    );
};

export default Test05;