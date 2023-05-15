import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Member from './Member';



const Main = () => {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);

    return (
        <div>
            <h1>MAIN / 회원 수 : {data.length} </h1>
            <u1>
                {

                    data.loading ||  data.map((item) => <Member key={item.id} item={item}/>)
                
                }
            </u1>
        </div>
    );
};

export default Main;