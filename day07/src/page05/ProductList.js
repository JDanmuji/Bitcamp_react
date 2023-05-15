import React from 'react';
import data from './Data.js';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div className='products'>
            <h2>짱구의 일상 리스트</h2>
            <div>
                {
                    data.map(item => 
                    <article key={item.key}>
                        <Link to={`/productList/${item.id}`}>
                            <h3>{item.name}</h3>
                            <p>
                                <img src={item.photo} alt={item.description}></img>
                            </p>  
                        </Link>                      
                    </article>

                    )
                }
                
            </div>
        </div>
    );
};

export default ProductList;