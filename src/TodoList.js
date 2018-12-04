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

    componentDidMount() {
        fetch('/test-react')
        .then(res => res.json())
        .then(tasks => {
            this.setState({
                todos: tasks
            })
        })
    }
    _updateSearch = searchTerm => {
        console.log(`Search Term: ${searchTerm}`)
        this.setState({
            term: searchTerm
        }, () => console.log('updated search term'))
    }

    _addTodo() {
        fetch('/test-react', { 
            method: 'post', 
            body: JSON.stringify({taskName: this.state.term}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(tasks => {
            this.setState({
                term: '',
                todos: tasks
            })
        })
    }

    _deleteTodo = iDToDelete => {
        fetch('/test-react-delete', {
            method: 'delete', 
            body: JSON.stringify({taskID: iDToDelete}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(tasks => {
            this.setState({
                todos: tasks
            })
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