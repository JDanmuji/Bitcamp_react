import React from 'react';
import Test01 from './component/Test01';
import Test02 from './component/Test02';
import Test03 from './component/Test03';
import Todos from './component/Todos';

const App = () => {
  return (
    <div>
      {/* <Test01 /> */}
      {/* <Test02 /> */}
      {/* <Test03 /> */}
      <Todos />

    </div>
  );
};

export default App;


/*
컴포넌트별로 CSS 작성
- 파일명.module.css
- import 참조변수 form './파일명.module.css';
- 개발자 도구에서 보면 파일명_클래스명_아무말 이라고 설정된다
*/