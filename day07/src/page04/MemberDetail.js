import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios  from 'axios';

const MemberDetail = () => {

    const [member, setMember] = useState({});
    const { memberId } = useParams();
    const navigate = useNavigate();

    const {name, email, phone, website} = member;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${memberId}`
        axios
          .get(url)
          .then((res) => setMember(res.data));
      }, []);
    

    const css = {
        border : '1px solid yellow', 
        margin : 20,
        padding : 20
    }

    const onBack = () => {
        //navigate('/') // index 페이지 이동
        navigate(-1) // 바로 전 페이지 이동
    }

    return (
        <div style={ css }>
            <h2> MemberDetail Page : { memberId } </h2>
            <h4>이름 : {name }</h4>
            <ul>
                <li>이메일 : {email}</li>
                <li>전화번호 : {phone}</li>
                <li>웹사이트 : {website}</li>
            </ul>
            <button onClick={ onBack }>뒤로</button>
        </div>
    );
};

export default MemberDetail;