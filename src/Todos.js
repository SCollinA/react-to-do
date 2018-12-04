import React from 'react'
import Todo from './Todo'

export default function Todos(props){
    return (
        <div className="Todos">
            {props.todos.map((todo, index) => <Todo todo={todo} key={index} deleteTodo={props.deleteTodo} index={index}/>)}
        </div>
    )
}