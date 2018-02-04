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
    this.flip=this.flip.bind(this)
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
flip(){
  this.setState({flipped: !this.state.flipped})
}

componentDidMount(){
  this.setState({randomArray: this.shuffle(this.props.cardArray)})
}

  render() {
    const cardList = this.state.randomArray.map(function(elem, index){
      return <Card face={elem} kay={index} key={index}/>
    })
    return (
      <div className="App">
        <section className="box">
          {cardList}
          </section>

      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
