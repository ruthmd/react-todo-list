import React, { Component } from 'react'

class AddTodo extends Component {

    formStyle=()=>{
        return{
        borderTop: '10px solid #fff',
        borderBottom: '10px solid #fff',
        display: 'flex',
        }
    }

	// component state
    state ={
        title: ''
    }

	onSubmit = (e)=>{
		e.preventDefault();
		this.props.addTodo(this.state.title); // pass the state(ie. title) to App 
		this.setState({title:''}); // re-set the title after passing-up the component state
	}

    onChange = (e)=> this.setState({[e.target.name]: e.target.value});

    render() {
    return (
        <form onSubmit={this.onSubmit} style={this.formStyle()}>
            <input 
            type="text" 
            name="title" 
            placeholder="Add Todo.." 
            style={{flex: '10',padding: '10px'}}
            value = {this.state.title}
            onChange={this.onChange}/>
            
            <input type="submit" value="+" className="btn" style={{flex:'1'}}/>
        </form>
    )
  }
}


export default AddTodo
