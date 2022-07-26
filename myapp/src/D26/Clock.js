import React from 'react'

function Clock(props){
    return (
        <div>
            <h1>props.time</h1>
            <h2>현재 시간은 {props.time.toLocationTimeString()} 입니다</h2>
        </div>
    )
}

export default Clock;