import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import Card from './components/Card/Card';

class App extends Component {
  constructor(){
    super()
    this.state={
      randomArray:[],
    }
  }
shuffle(array) {
    var ctr = array.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;
}

componentDidMount(){
  this.setState({randomArray: this.shuffle(this.props.cardArray)})
}
refresh(){
  window.location.href = '/'
}
  render() {
    const cardList = this.state.randomArray.map(function(elem, index){
      return <Card face={Object.keys(elem)[0]} kay={index} key={index}/>
    })
    return (
      <div className="App">
      {this.props.tries === 0?
      <div className='lose'><h1>YOU LOSE</h1><h3 onClick={this.refresh}>Try Again!</h3>
      <h6>Created By Devin Jackson</h6>
      </div>
      :
      <div>
        <h1>Match Game!</h1>
        <h3>Tries Left: {this.props.tries}</h3>
        <section className="box">
          {cardList}
          </section>
          Created By Devin Jackson
          </div>
      }
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
