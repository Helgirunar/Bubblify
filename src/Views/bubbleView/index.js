import React, { Component } from 'react';
import BubbleList from '../../components/bubbleList';
import {Link} from "react-router-dom";

export class BubbleView extends Component{
  constructor(props) {
    super(props);
    console.log(this)
    this.state = {
      bubble: {
        name: '',
        description:'',
        price: '',
        image:'',
      }
    }
  }
  componentDidMount() {
    fetch('http://localhost:3500/api/bubbles').then(resp =>{
      if(resp.ok) {return resp.json();}
    }).then(data =>{
      const { match: { params }} = this.props;
      const getBubblebyId = id => data.find(n => n.id == id)
      this.setState({bubble: getBubblebyId(params.id)})
    })
  }
  //ERROR CHECK FOR ID THAT DOES NOT EXIST
  render() {
    const { name, description, price, image } = this.state.bubble;
    return (
        <div>
          <div>
            <img src={image} alt="Bubble image"/>
          </div>
          <div>
            <div>{name}</div>
            <div>{description}</div>
            <div>{price}</div>
          </div>
        </div>
    )
  }
}
export default BubbleView;
