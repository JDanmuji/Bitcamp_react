import React from 'react';
import data from './Data.js';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { productId } = useParams();
    const nav = useNavigate();
    const item = data.find(item => item.id == productId);

    const onHome = () => {
        nav('/');
    }

    const onList = () => {
        nav('/productList');
    }


    return (
        <div className='item'>
          
                
                <h2>짱구의 상세 페이지</h2>
                <h3>제품명 : {item.name} / 가격 : {item.price}</h3>
                <p><img src={item.photo} alt={item.name}></img></p>
                <p>제품 설명 : {item.description}</p>
            
            <button onClick={ onHome }>Home</button>
            <button onClick={ onList }>List</button>
        </div>
    );
};

export default ProductDetail;