import React, { Component } from 'react';

class ClassComponent extends Component {
	constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    increase = () => {this.setState({age:this.state.age +1})};

     

    render() {
        return (
        	<center>
        	<h1>
        	{this.props.name}
        	</h1>
        	<p>
        	{this.state.age}
        	</p>
        	<p>
        	{this.props.hairColor}
        	</p>
        	<button onClick={this.increase}>click me</button>
        	</center>

        	);
    }
}
    
export default ClassComponent;