import React, { Component } from 'react';
import BubbleDetail from '../../components/bubbleDetails';
import {Link} from "react-router-dom";

export class BubbleView extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bubble: {
        id: 0,
        name: '',
        description:'',
        price: 0,
        image:'',
      }
    },
      this.addToCart = this.addToCart.bind(this);
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
  addToCart() {
    let cart = [];
    let found = false;
    const bubble = this.state.bubble;

    if(window.localStorage.getItem('cartItems')){
      cart = JSON.parse(window.localStorage.getItem('cartItems'));
    }
    cart.map((item) => {
      if(item.bubble.id === this.state.bubble.id){
        item.count++;
        found = true;
      }
    });
    if(!found){
      cart.push({bubble, count: 1});
    }
    window.localStorage.setItem('cartItems',JSON.stringify(cart));
  }
  //ERROR CHECK FOR ID THAT DOES NOT EXIST
  render() {
    const { id, name, description, price, image } = this.state.bubble;
    return (
        <BubbleDetail id={id} name={name} description={description} price={price} image={image} addToCart={this.addToCart} isSell={'true'}/>
    )
  }
}
export default BubbleView;
