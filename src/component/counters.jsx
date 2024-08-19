import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const { counters, onDelete, onIncrement, onDecrement, onReset }=this.props
        console.log("Counters-Rendered");

        return (<>
        <button onClick={onReset}>Reset</button>
        {counters.map(counter => (<Counter 
                key={counter.id} 
                counter={counter}
                // {...console.log(counter, "map called")}
                onDelete={onDelete}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
                
                ><p>Title{counter.id}</p></Counter>))
            }</>);
    }
}
 
export default Counters;