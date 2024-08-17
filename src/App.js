import React, { Component } from 'react'
import './App.css';
import NavBar from './component/navbar';
import Counters from './component/counters';

class App extends Component {
  

  state = {
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 1 },
        { id: 3, value: 0 }
    ]
  } 

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  }


  handleReset=()=> {
    const counters = [...this.state.counters]
    counters.map(c=> {
      c.value = 0;
    })
    this.setState({counters})
  }

  handleDelete = counterId=> {
    // console.log("delete clicked", counterId)
    let counters = this.state.counters.filter((a)=>(a.id!==counterId));
    console.log(counters)
    this.setState({counters})
  }

  render() { 
    console.log("app running")
    // console.log(this.state.counters)
    return <>
    <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length }/>
    <main className='container'>
    <Counters 
    onReset = {this.handleReset}
    onDelete={this.handleDelete} 
    onIncrement={this.handleIncrement} 
    onDecrement={this.handleDecrement} 
    counters={this.state.counters}/>
    </main>
    </>;
  }
}

export default App;
