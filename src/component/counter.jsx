import React, { Component} from "react";

class Counter extends Component {
    
    render() { 
        const { counter, onDecrement, onDelete, onIncrement, children } = this.props
        // console.log(counter)
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