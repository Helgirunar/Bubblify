import React,{ Component } from 'react';
import Cart from '../../components/cart'
import './style.css'

export class CartView extends Component{
  constructor(props){
    super(props);
    this.state = {
      cart: JSON.parse(window.localStorage.getItem('cartItems')),
      totalPrice:''
    }
    console.log(JSON.parse(window.localStorage.getItem('cartItems')));
  }
  componentDidMount(){
    let price = 0;
    if(this.state.cart !== null){
      this.state.cart.map((item) => {
        for(let i = 0; i < item.count;i++){
          price += item.bubble.price;
        }
      });
    }
    this.setState({
      totalPrice: price
    })
  }

  render(){
    const {cart, totalPrice} = this.state;
    return(
      <div class='cartContainer'>
      <div class='cartLeft'>
      </div>
        <div class='cartMiddle'>
          {(cart !== null) ? (
            <ul class='cart'>
            {cart.map((item) => <Cart props={item}/>)}
            </ul>) : (
              <h2>Cart is empty!</h2>
            )
          }
        </div>
        <div class='cartRight'>
        {(cart !== null) ?(
          <p>Total: {totalPrice} ISK</p>) :(
            <p/>
          )
        }</div>
      </div>
    )}
}
export default CartView;
