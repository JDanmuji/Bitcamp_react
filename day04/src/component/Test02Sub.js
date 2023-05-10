import React, { useEffect, useState } from 'react';

const Test02Sub = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMove = (e) => {
        // 브라우저에서 사용자가 웹페이지가 보여지는 영역을 기준으로 좌표 표시
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect');
        
        window.addEventListener('mousemove', onMove);

        return () => {
            console.log('clean Up');
            window.removeEventListener('mousemove', onMove);
        }
    }, []);
    
    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{ border: '1px solid #000', width: 400, padding: 30, margin: 15}}>
                <h3>X축 : { x }, Y축 : { y }</h3>
            </div>
        </div>
    );
};

export default Test02Sub;