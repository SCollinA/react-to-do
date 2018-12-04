import React, {Component} from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            todos: []
        }
    }

    _updateSearch = searchTerm => {
        console.log(`Search Term: ${searchTerm}`)
        this.setState({
            term: searchTerm
        }, () => console.log('updated search term'))
    }

    _addTodo() {
        this.setState({
            term: '',
            todos: [...this.state.todos, this.state.term]
        })
    }

    _deleteTodo = indexToDelete => {
        this.setState({
            todos: this.state.todos.filter((todo, index) => index !== indexToDelete)
        })
    }

    render() {
        return (
            <div className="toDoList">
                <h1>To Do List!!!</h1>
                <TodoForm term={this.state.term} 
                onSubmit={event => {
                    event.preventDefault()
                    this._addTodo()
                }} 
                onChange={event => this._updateSearch(event.target.value)}
                />
                <Todos todos={this.state.todos} 
                deleteTodo={this._deleteTodo}
                />
            </div>
        )
    }
}