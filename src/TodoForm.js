import React from 'react'

export default function TodoForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                value={props.term} 
                onChange={props.onChange} 
                type='text'
                placeholder='Input To Do'
            />
            <input type='submit' value='add'/>
        </form>
    )
}
