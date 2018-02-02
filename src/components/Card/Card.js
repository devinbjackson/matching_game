import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            hidden:'yes'
        }
        this.handleChange = this.handleChange.bind(this)
    }

handleChange(){
    this.setState({hidden: 'no'})
}

  render() {
    return (
        <div onClick={this.handleChange} className="card">
            <div className={`hidden_${this.state.hidden}`}>{this.props.face}</div>
          </div>
    );
  }
}

export default Card;
