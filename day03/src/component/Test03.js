import React, { useState } from 'react';
import '../css/Test03.css';
import Test03Modal from './Test03Modal';

const Test03 = () => {
    const [isOpen, setIsOpen] = useState(false);

    //변환해주는 상태 변수는 항상 같이 있어야 한다.
    const onOpen = (e) => {
        setIsOpen(true);
    }

    
    const onClose = (e) => {
        setIsOpen(false);
    }

    return (
        <div>
            <button className='button' onClick={ onOpen }>팝업창</button>
            {
                isOpen && <Test03Modal onClose={ onClose } />
            }
        </div>
    );
};

export default Test03;