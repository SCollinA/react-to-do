import React from 'react'

export default function Todo(props){
    return (
    <h1 onClick={() => {
        console.log(`${props.todo.name} task complete`)
        props.deleteTodo(props.todo.id)
    }}>
    {props.todo.name}
    </h1>
    )
}