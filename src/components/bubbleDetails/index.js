import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class BubbleDetail extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    console.log('this worked');
  }
  render(){
    const { id, name, description, price, image, addToCart,isSell } = this.props;
    return(
      <div className='singleBubbleDiv'>
        <div>
          <img src={image} alt="Bubble image"/>
        </div>
        <div>
          <div>{name}</div>
          <div>{description}</div>
          <div>{price}</div>
        </div>
        <div>
          {(isSell === 'true') ? (
            <button className='btn btn-primary' onClick={addToCart} >Add to Cart!</button>
          ) : (
            <p/>
          )}
        </div>
      </div>
    )
  }
}
export default BubbleDetail;

BubbleDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  isSell: PropTypes.string.isRequired
};
