import React, { Component } from 'react';
import './Card.css';
import {connect} from 'react-redux';
import { flipCard1, flipCard2} from "../../redux/reducer";

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            hidden:'yes'
        }
        this.handleClick = this.handleClick.bind(this)
    }

handleClick(face){
    if(this.state.hidden === "yes"){
    this.setState({hidden: 'no'})

        if(!this.props.card1){
        this.props.flipCard1(face)
        }else{
        this.props.flipCard2(face)    
        }
    if(this.props.card1 != this.props.card2){
        setTimeout(()=>{this.props.flipCard1('')
        this.props.flipCard2('')
        this.setState({hidden: 'yes'}), 2000
    })
    }    

    }
}

  render() {
    return (
        <div onClick={()=>this.handleClick(this.props.face)} className="card">
            <div className={`hidden_${this.state.hidden}`}>{this.props.face}</div>
          </div>
    );
  }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps, { flipCard1, flipCard2 })(Card);
