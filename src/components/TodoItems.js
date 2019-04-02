import React, { Component } from 'react';

class TodoItem extends Component {

	divStyle = () =>{
		return { 
			padding: '4px',
			border: '1px #fff solid',
			backgroundColor : this.props.todo.completed ? '#A5D6A7': '#EF9A9A'
		}
	}
	

	delStyle = () =>{
		return{
			backgroundColor:'#E53935',
			color: '#fff',
			border: '0px',
			padding: '5px 8px',
			borderRadius: '50%',
			cursor: 'pointer',
			float: 'right'
		}
	}
	

  render() {
	const {id, title} = this.props.todo; //from App.js

    return (
        <div style={this.divStyle()}>
			<p>
				<input type='checkbox' onChange={this.props.completed.bind(this, id)}/>
				{title}
				<button onClick={this.props.delTodo.bind(this, id)} style={this.delStyle()}>X</button>
			</p>
        </div>
    )
  }
}
export default TodoItem;
