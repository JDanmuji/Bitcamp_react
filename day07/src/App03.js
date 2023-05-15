import React from 'react';
import Home from './page03/Home';
import About from './page03/About';
import Profiles from './page03/Profiles';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Front from './page03/Front';

const data =  [
    {title : 'html', info:'HTML 임'},
    {title : 'css', info:'CSS 임'},
    {title : 'javascript', info:'CEO 임'},
    {title : 'react', info:'REACT 임'},
    {title : 'vue', info:'VUE 임'}
]


const App03 = () => {
    return (
        <BrowserRouter>
            <>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>

                    <li><Link to='/front/html'>html</Link></li>
                    <li><Link to='/front/css'>css</Link></li>
                    <li><Link to='/front/js'>js</Link></li>
                    <li><Link to='/front/react'>react</Link></li>
                    <li><Link to='/front/vue'>vue</Link></li>
                    
                </ul>
            
                {/* 화면에 보이는 영역  */}

                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about'  element={<About/>}/>
                    <Route path='/profile' element={<Profiles />} />
                    <Route path='/front/:name' element={ <Front data={data} />} />
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App03;

