import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './page05/Main';
import ProductList from './page05/ProductList';
import './css/style05.css'
import ProductDetail from './page05/ProductDetail';

const App05 = () => {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/productList'>ProductList</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/productList' > 
                        <Route index element={<ProductList />}/>
                        <Route path=':productId' element={<ProductDetail />}/>
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App05;