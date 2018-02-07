import React, { Component } from 'react';
import './Card.css';
import {connect} from 'react-redux';
import { flipCard, wrongCard } from "../../redux/reducer";

class Card extends Component {
    constructor(props){
        super(props)
        this.state ={
            flipped:''
        }

        this.handleClick=this.handleClick.bind(this)
    } 



handleClick(){
    const cards = this.props.cardArray
    this.props.flipCard(this.props.kay, cards)
}
checkWrong(){
   const {cardArray, kay, face, wrongCard} = this.props
   if(cardArray[kay][face] === "flipped wrong"){
     setTimeout(function(){
       wrongCard(kay, cardArray)  
     }, 2000)   
     return cardArray[kay][face]   
    }else {
     return cardArray[kay][face]   
    }   
}

componentWillReceiveProps(){
    this.setState({flipped: this.checkWrong()})
}

  render() { 
    const flipped = this.state.flipped
    return (
        <div onClick={this.handleClick} className={`card ${flipped}`}>
            <figure className="back">{this.props.face}</figure>
            <figure className="front">{this.props.kay}</figure>
        </div>
    );
  }
} 


const mapStateToProps = state => state;

export default connect(mapStateToProps, { flipCard, wrongCard })(Card);
