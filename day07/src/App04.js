import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Main from './page04/Main';
import Member from './page04/Member';
import MemberDetail from './page04/MemberDetail';

const App04 = () => {
    return (
        <BrowserRouter>
            <>
                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Main /> }/>
                    <Route path='/member'>
                        <Route path=':memberId' element={ <MemberDetail />}/>
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App04;