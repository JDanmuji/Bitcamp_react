import React, { useMemo } from 'react';



const getColor = (color) => {


    console.log('getColor'); // 어떤 걸 선택하든 getFood 함수가 호출

    switch(color) {
        case 'hotpink' : 
            return '진한 분홍색'
        case 'magenta' : 
            return '보라색'
        case 'skyblue' : 
            return '하늘색'
        case 'tomato' : 
            return '토마토'
    }
}


const getFood = (food) => {

    console.log('getFood'); // 어떤 걸 선택하든 getColor 함수가 호출

    switch(food) {
        case '햄버거' : 
            return '버거킹'
        case '삼겹살' : 
            return '돼지'
        case '치킨' : 
            return '닭'
        case '짜장면' : 
            return '중화'
    }
}


const Test04Sub = ({ color, food }) => {

    //color를 선택하건, food를 선택하건 둘 다 호출
    // const colorInfo = getColor(color);
    // const foodInfo = getFood(food);

    // => 해결방법
    // color 를 선택하면 getColor만 호출, food 를 선택하면 getFood만 호출되도록 수정
    const colorInfo = useMemo(() => {
        getColor(color)
    }, [color]);
    
    const foodInfo = useMemo(() => {
       getFood(food)
    }, [food]);
    
    return (
        <div>
            <h2>선택한 색 : {color}</h2>
            <h2>당신은 {colorInfo} 색 을 좋아하시는군요!</h2>

            <h2>선택한 음식 : { food }</h2>
            <h2>당신은 {foodInfo} 을 좋아하시는군요!</h2>
        </div>
    );
};

export default Test04Sub;