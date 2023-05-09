import React from 'react';

const Test07Input = ({data, onInput, onNext}) => {
    
    const { name, age, addr, phone} = data;


    return (
        <div className="container">
            <table className="input-table">
                <tr>
                    <th>이름</th>        
                    <td>
                        <input type='text' name='name' value={ name } onChange={ onInput } />
                    </td>
                </tr>

                <tr>
                    <th>나이</th>        
                    <td>
                        <input type='text' name='age' value={ age }  onChange={ onInput } />
                    </td>
                </tr>

                <tr>
                    <th>주소</th>        
                    <td>
                        <input type='text' name='addr' value={ addr }  onChange={ onInput }/>
                    </td>
                </tr>

                <tr>
                    <th>핸드폰</th>        
                    <td>
                        <input type='text' name='phone' value={ phone }  onChange={ onInput }/>
                    </td>
                </tr>

                <tr>
                    <td colspan="2" align="center">
                        <button className='button' onClick={onNext}>다음</button>
                    
                    </td>
			    </tr>
           

            </table>
            
        </div>
    );
};

export default Test07Input;