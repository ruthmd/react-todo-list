import React, { Component } from 'react';
import TodoItem from './TodoItems';


class Todo extends Component {
  render() {
    //   console.log(this.props.Todo); // states from App.js becomes properties in the current file
    return this.props.todo.map((todos)=>(
        <TodoItem key={todos.id} todo={todos} completed={this.props.completed} delTodo={this.props.delTodo}/>
    ));
  }
}

export default Todo;
