import React, { Component} from "react";

class Counter extends Component {

    state = {
        value: this.props.value
    }


    handleIncrement =()=> {
        // console.log(this.props.value.value)
        this.setState({value:this.state.value +1 });
    };
    

    handleDegrement =()=> {
        (this.state.count===0) ?this.setState({count:0}) :this.setState({count:this.state.count-1})
    };


    render() { 
        // console.log("props:", this.props)
        return <React.Fragment>
            <h1>{this.props.children}</h1>
            {this.props.value.value}
            <button onClick={this.handleIncrement} >Increment</button>
            <button onClick={this.handleDegrement} >degrement</button>
            <button onClick={()=>this.props.onDelete(this.props.value.id)}>Delete</button>
            <br />
            
        </React.Fragment>;
    }

    
}
 
export default Counter;