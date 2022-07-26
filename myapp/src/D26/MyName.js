import React from 'react';

const MyName = (props)=>{
    return <div>안녕하세요 제 이름은 {props.name}입니다..
        children 값은 {props.children}입니다
    </div>
}

MyName.defaultProps = {
    name : '기본 이름',
    children : '자식 집에 가구 싶구나..'
}
export default MyName;