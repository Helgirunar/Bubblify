import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
        item: this.props,
    }
  }
  componentDidMount(){
    console.log(this.state.item);
  }
  render(){
    const { item } = this.state;
    return(
      <Link to={'/bubbles/' + item.props.bubble.id} id={item.props.bubble.id} style={{textDecoration: 'none'}}>
        <div>
          <img src={item.props.bubble.image} alt="Bubble image"/>
        </div>
        <div>
          <p>{item.props.bubble.name}</p>
          <p>{item.props.bubble.description}</p>
          <p>price: {item.props.bubble.price}</p>
        </div>
        <p>count: {item.props.count}</p>
      </Link>
    )
  }
}
export default Cart;
