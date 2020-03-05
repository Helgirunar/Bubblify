import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import BubbleList from '../bubbleList'

class BundleList extends Component {
  constructor(props){
    super(props);
    this.state = {
      bubbles: []
    }
  }
  componentDidMount(){
    let tempBubbles = [];
    this.props.items.map((item) => {
      fetch(`http://localhost:3500/api/bubbles/${item}`).then(resp =>{
        if(resp.ok) {return resp.json();}
      }).then(data => {
        tempBubbles.push(data);
      })
    })
    console.log(tempBubbles);
    this.setState({
      bubbles:tempBubbles
    })
  }

  render(){
    const {id, name} = this.props;
    const { bubbles } = this.state;
    return(
      <div className='bubbleListContainer'>
        <Link className='direction 'to={'/bundles/' + id} id={id} bubbles={this.state.bubbles}>
        <div className='bubbleListInfo'>
          <h3>{name}</h3>
          {bubbles.map((item) => (<BubbleList key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>))}
        </div>
        </Link>
      </div>
    )
  }
}
export default BundleList;

BundleList.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    item: PropTypes.array.isRequired
};
