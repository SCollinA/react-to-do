import React from 'react'

export default function Todo(props){
    return (
    <h1 onClick={() => {
        console.log(`${props.todo} task complete`)
        props.deleteTodo(props.index)
    }}>
    {props.todo}
    </h1>
    )
}