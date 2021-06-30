import React, { Component } from 'react';


class AddTodoForm extends Component{

    state = {
        content:'',
        warning: false
    } 

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content.length === 0){ 
            this.setState({
                warning: true
            });
        } else if(this.state.content.length !== 0) {
            this.props.addTodo(this.state); 
            this.setState({
                content:'',
                warning: false,
                placeholder:""
            });
        }
    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    { this.state.warning && 
                        <h6 style={{ color:"red" }}>to-do field cannot be empty!</h6> 
                    }
                    <input type="text" 
                        onChange={this.handleChange} 
                        value={this.state.content}
                        placeholder="enter to-do"
                    />
                    <button class="btn-floating waves-light blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodoForm;
