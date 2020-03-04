import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

class BubbleList extends Component {
  constructor(props){
    super(props);
    console.log(this);
  }
  componentDidMount(){
  }
  render(){
    console.log('hello');
    const { id, name, description, price, image } = this.props;
    console.log(id);
    return(
      <div class='bubbleListContainer'>
        <Link class='direction 'to={'/bubbles/' + id} id={id}>
        <div class='bubbleListImageDiv'>
          <img class='bubbleListImage' src={image} alt="Bubble image"/>
        </div>
        <div class='bubbleListInfo'>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        </Link>
      </div>
    )
  }
}
export default BubbleList;

BubbleList.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};
