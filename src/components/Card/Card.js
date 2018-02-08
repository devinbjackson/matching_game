import React, { Component } from 'react';
import './Card.css';
import {connect} from 'react-redux';
import { flipCard, wrongCard, useTry } from "../../redux/reducer";

class Card extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    } 



handleClick(){
    const cards = this.props.cardArray
    this.props.flipCard(this.props.kay, cards)
}

  render() { 
      
    const {cardArray, kay, face, wrongCard, tries, useTry} = this.props
    const checkWrong = function(){
    if(cardArray[kay][face] === "flipped wrong"){
     setTimeout(function(){
       wrongCard(kay, cardArray)
       useTry(tries)  
     }, 900)   
     return cardArray[kay][face]   
    }else {
     return cardArray[kay][face]   
    }       
    
    }  
    const flipped = checkWrong()
    return (
        <div onClick={this.handleClick} className={`card ${flipped}`}>
            <figure className="back"><img alt='card face' src={`${this.props.cardPictures[this.props.face]}`}/></figure>
            <figure className="front"></figure>
        </div>
    );
  }
} 


const mapStateToProps = state => state;

export default connect(mapStateToProps, { flipCard, wrongCard, useTry })(Card);
