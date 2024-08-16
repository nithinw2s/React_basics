import React, { Component} from "react";

class Counter extends Component {
    
    state = {
        value: this.props.counter.value
    };


    handleIncrement =()=> {
        console.log("increment clicked")
        this.setState({value:this.state.value+1 });
        console.log(this.state.value)
    };
    

    handleDegrement =()=> {
        (this.state.value===0) 
        ?this.setState({value:this.state.value===0}) 
        :this.setState({value:this.state.value-1})
    };


    render() { 
        console.log(this.props)
        return <React.Fragment>
            <h1>{this.props.children}</h1>
            {this.state.value}
            <button onClick={this.handleIncrement} >Increment</button>
            <button onClick={this.handleDegrement} >degrement</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
            <br />
            
        </React.Fragment>;
    }

    
}
 
export default Counter;