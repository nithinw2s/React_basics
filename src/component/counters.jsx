import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 1 },
            { id: 3, value: 0 }
        ]
    } 


    handleDelete = counterId=> {
        // console.log("delete clicked", counterId)
        let counters = this.state.counters.filter((a)=>(a.id!==counterId));
        console.log(counters)
        this.setState({counters})
    }

    render() { 
        return (<>
            {this.state.counters.map(counter=><Counter key={counter.id} value={counter} onDelete={this.handleDelete} ><p>Title{counter.id}</p></Counter>)}
        </>);
    }
}
 
export default Counters;