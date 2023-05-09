import React from 'react';

const Test07Print = ({name, age, addr, phone, onNext, onPrev}) => {
    
    


    return (
        <div className="container">
            <hr/>
            <ul className="print-list">
                <li><span className="label">이름 :</span> <em>{name}</em></li>
                <li><span className="label">나이 :</span> <em>{age}</em></li>
                <li><span className="label">주소 :</span> <em>{addr}</em></li>
                <li><span className="label">핸드폰 :</span> <em>{phone}</em></li>
            </ul> 
            <div className="button-container">
                <button className="button" onClick={onPrev}>이전</button> &nbsp;
                <button className="button" onClick={onNext}>다음</button> &nbsp;
            </div>
        </div>
    );
};

export default Test07Print;