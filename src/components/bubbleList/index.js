import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

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
    return(
      <Link to={'/bubbles/' + id}>
      <div>
        <img src={image} alt="Bubble image"/>
      </div>
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      </Link>
    )
  }
}
export default BubbleList;

BubbleList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
};
