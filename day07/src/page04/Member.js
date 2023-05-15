import React from 'react';
import MemberDetail from './MemberDetail';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({item}) => {

    const { id, name, username, email, address, phone, website, company } = item;
    const navigate = useNavigate();

    const css = {
        border : '1px solid green', 
        margin : 20,
        padding : 20
    }

    const onGo = () => {
        navigate(`/member/${id}`) // Nav 자주 사용
    }

    return (
        <div style={ css }>
            <p>ID : {id}</p>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>

            
            <p><Link to={`/member/${id}`}>자세히 보기</Link></p>
            <button onClick={ onGo }>상세보기</button> 
        </div>
    );
};

export default Member;