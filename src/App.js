import React, { Component } from 'react';

//STYLES
import './assets/css/App.css';

//COMPONENTS
import Header from './components/Header';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }
  state = {
    todos: []
  };
  addTodo(title) {
    if(title === '' || title === undefined) return false;
    const todo = {
      id: Date.now(),
      title: title,
      isCompleted: false
    };
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }
  completeTodo(isChecked, id) {
    const todo = this.state.todos.filter(todo => {
      return todo.id === id
    })[0];
    const otherTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    todo.isCompleted = isChecked;
    otherTodos.push(todo);
    this.setState({
      todos: otherTodos
    })
  }
  removeTodo(id) {
    const filteredItems = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: filteredItems
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Todo
            todos={this.state.todos}
            addTodo={this.addTodo}
            removeTodo={this.removeTodo}
            completeTodo={this.completeTodo}/>
      </div>
    );
  }
}

export default App;
