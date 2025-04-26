import React, { useState } from 'react';

function Counter(){
    const[count,setCount]=useState(0);

    //홀짝에 따라 색을 바꾸는 함수
    const changeColor = () => {
        if (count === 0) return 'black';
        if (count % 2 === 0) return 'blue';
        return 'red';
    };

    //증가함수
    const increase = () => setCount(count + 1);
    //감소함수
    const decrease = () => { if(count > 0) setCount(count - 1); };

    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{color:changeColor()}}> {count} </h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}
export default Counter;
