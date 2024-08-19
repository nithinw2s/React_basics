import React, { Component} from "react";

class Counter extends Component {
    componentDidUpdate (prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevstate", prevState);
        console.log("current state", this.props.counter);
    };

    componentWillUnmount() {
        console.log("component - unmounted")
    }
    
    render() { 
        const { counter, onDecrement, onDelete, onIncrement, children } = this.props
        console.log("Counter-Rendered");
        
        return <React.Fragment>
            <h1>{children}</h1>
            {counter.value}
            <button onClick={()=>onIncrement(counter)} >Increment</button>
            <button onClick={()=>onDecrement(counter)} >decrement</button>
            <button onClick={()=>onDelete(counter.id)}>Delete</button>
            <br />
        </React.Fragment>;
    }
}
 
export default Counter;