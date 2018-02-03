import React, { Component } from 'react';
import './Card.css';
import {connect} from 'react-redux';
import { flipCard1, flipCard2} from "../../redux/reducer";

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            flipped: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.flip=this.flip.bind(this)
    }

handleClick(face){
    const flip = this.flip()
    if(this.state.hidden === "yes"){

        if(!this.props.card1){
        this.props.flipCard1(face)
        flip
        }else{
        this.props.flipCard2(face)    
        }
    if(this.props.card1 != this.props.card2){
        setTimeout(()=>{this.props.flipCard1('')
        this.props.flipCard2('')
    }, 2000)
    }    

    }
}
flip(){
    this.setState({flipped: !this.state.flipped})
  }
  render() {
    return (
        <div onClick={()=>{this.handleClick(this.props.face)}} className={`card ${this.state.flipped?"flipped":''}`}>
            <figure className={`back hidden_${this.state.hidden}`}>{this.props.face}</figure>
            <figure className="front"></figure>
          </div>
    );
  }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps, { flipCard1, flipCard2 })(Card);
