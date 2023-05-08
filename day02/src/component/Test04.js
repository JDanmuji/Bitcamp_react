import React, { useState } from 'react';

const Test04 = () => {

    const [visible, setVisible] = useState(true);

    const onShow = () => {
        setVisible(true);
    }

    const onHide = () => {
        setVisible(false);
    }

    
    const ontoggle = () => {
        setVisible(!visible);
    }


    return (
        <div>
            {/* <button onClick={ onShow }>보이기</button>
            <button onClick={ onHide }>숨기기</button> */}
            <button  onClick={ ontoggle }>{visible ? '숨기기' : '보이기'}</button>
            <hr/>
            {
              // 삼항연산자
              //  visible ?  <div style={{width : 300, height : 300, margin : 20, background : 'pink' }}></div> : <div></div> 
              // && 조건 연산자
              visible &&  <div style={{width : 300, height : 300, margin : 20, background : 'pink' }}></div>
            }
        </div>
    );
};

export default Test04;