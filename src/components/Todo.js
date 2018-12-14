import React, { Component } from 'react';
import PropTypes from 'prop-types';

//STYLES
import '../assets/css/Todo.css';

//COMPONENTS
import Completed from './Completed';
import ActiveTodos from "./ActiveTodos";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    static propTypes = {
        todos: PropTypes.array,
        addTodo: PropTypes.func,
        removeTodo: PropTypes.func,
        completeTodo: PropTypes.func
    };
    state = {
        addTask: ''
    };
    changeTodo(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.addTask);
        this.state.addTask = '';
    };
    removeTodo(id) {
        this.props.removeTodo(id);
    };
    handleChange(e, id) {
        this.props.completeTodo(e.target.checked, id);
    };
    render() {
        return(
            <div className={'todo'}>
                <div className={'search'}>
                    <form onSubmit={this.onSubmit}>
                        <input
                            name={'addTask'}
                            id={'addTask'}
                            onChange={this.changeTodo}
                            value={this.state.addTask}
                            placeholder={'Add a Daily Task From Here...'}/>
                        <button type={'submit'}>Add Task</button>
                    </form>
                </div>
                <ActiveTodos todos={this.props.todos} handleChange={this.handleChange} removeTodo={this.removeTodo}/>
                <Completed todos={this.props.todos} handleChange={this.handleChange} removeTodo={this.removeTodo}/>
            </div>
        )
    }
}

export default Todo;