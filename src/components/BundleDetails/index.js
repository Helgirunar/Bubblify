import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import BubbleList from '../bubbleList'

class BubbleDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      name:'',
      bubbles:[]
    }
  }
  componentDidMount(){
    console.log(this.props);
    this.setState({
      id: this.props.id,
      name: this.props.name,
      bubbles: this.props.bubbles
    })
  }
  render(){
    const { addToCart,isSell} = this.props;
    const { id, name, bubbles } = this.state;
    console.log(this.state);
    return(
      <div>
        <div>
          <div>{name}</div>
        </div>
        <div>
          <ul>
          {bubbles.map((item) => ( <BubbleList key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>))}
          </ul>
          {(isSell === 'true') ? (
            <button onClick={addToCart} >Add to Cart!</button>
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
  addToCart: PropTypes.func.isRequired,
  bubbles: PropTypes.array.isRequired,
  isSell: PropTypes.string.isRequired
};
