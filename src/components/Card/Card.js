import React, { Component } from 'react';
import './Card.css';
import {connect} from 'react-redux';
import { saveCard1, saveCard2} from "../../redux/reducer";

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            flipped: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.flip=this.flip.bind(this)
        this.hide=this.hide.bind(this)
    } 

handleClick(key, face){
    const flip = this.flip
    const {saveCard1, saveCard2} = this.props
    if(!this.state.flipped){
    
    
    if(!this.props.face1){
        flip()
        saveCard1(key, face)
    }else if(this.props.face1){
        flip()
        saveCard2(key, face)
    }else if(this.props.face1 && face === this.props.face1){
        flip()
        saveCard1('', '')
        saveCard2('', '')
    }else if(this.props.face1 && face !== this.props.face1){
        flip()
        setTimeout(function(){
        flip()
        saveCard1('', '')
        saveCard2('', '')  
        }, 1000)
        
    }
}

}
flip(){
    this.setState({flipped: !this.state.flipped})
  }
hide(){
    this.setState({flipped: false})
}  

componentWillReceiveProps(){
    if(this.props.face2 && this.props.face1 !== this.props.face2){
        console.log(this.props.kay)
      this.hide()
    }
}

  render() {
    return (
        <div onClick={()=>{this.handleClick(this.props.kay, this.props.face)}} className={`card ${this.state.flipped?"flipped":''}`}>
            <figure className={`back hidden_${this.state.hidden}`}>{this.props.face}</figure>
            <figure className="front"></figure>
          </div>
    );
  }
} 


const mapStateToProps = state => state;

export default connect(mapStateToProps, { saveCard1, saveCard2 })(Card);
