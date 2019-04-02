import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';
// import uuid from 'uuid'; //generate random ids
import Axios from 'axios';// library for handling http requests


class App extends Component {

	state = {
		todo : []
	}

	componentDidMount(){
		Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
		.then(response=>this.setState({todo:response.data}));
	}

	completed = (id)=>{
		this.setState({todo: this.state.todo.map(todo=>{

			if(todo.id === id)
				todo.completed = !todo.completed
			return todo;
		})});
	}


	delTodo = (id) =>{
		Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(response=>this.setState({ todo : [...this.state.todo.filter(todo=>todo.id!== id)]}));
		// filter out the todo with id
	}

	addTodo = (title)=>{
		Axios.post('https://jsonplaceholder.typicode.com/todos', 
			{
				title,
				completed: false
			}
		).then(response=>this.setState({todo: [...this.state.todo, response.data]}));
		// ...this.state.todo - will retain the current state
	}
  
	render() {
    	return (
			<Router>
				<div className="App">
					<div className="container">
						<Header/>

						<Route exact path='/' render={props=>(
							<React.Fragment>
								<AddTodo addTodo = {this.addTodo}/>
								<Todo todo = {this.state.todo} completed={this.completed} delTodo={this.delTodo}/>	
							</React.Fragment>
						)}/>

						<Route path='/about' component={About}/>
					</div>
				</div>
			</Router>
    	);
  }
}

export default App;
