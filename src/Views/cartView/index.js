import React,{ Component } from 'react';
import Cart from '../../components/cart'
import './style.css'
import { Link } from 'react-router-dom';

export class CartView extends Component{
  constructor(props){
    super(props);
    this.state = {
      cart: JSON.parse(window.localStorage.getItem('cartItems')),
      totalPrice:'',
      showRadio:false,
      showButton: true,
      value: '/pickup'
    }
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
  changeState = () =>{
    this.setState({showButton:false,showRadio:true})
  }
  setValue = (name) => {
    this.setState({value: name})
  };

  render() {
    const {cart, totalPrice,} = this.state;
    if (this.state.showButton) {
      return (
          <div className='cartContainer'>
            <div className='cartLeft'>
            </div>
            <div className='cartMiddle'>
              {(cart !== null) ? (
                  <ul className='cart'>
                    {cart.map((item) => <Cart props={item}/>)}
                  </ul>) : (
                  <h2>Cart is empty!</h2>
              )
              }
              <div className="cart-btn-wrapper">
                <button className="cart-btn"onClick= {this.changeState}>Checkout</button>
              </div>
            </div>
            <div className='cartRight'>
              {(cart !== null) ? (
                  <p>Total: {totalPrice} ISK</p>) : (
                  <p/>
              )
              }</div>
          </div>

      )
    } else {
      return (
          <div className='cartContainer'>
            <div className='cartLeft'>
            </div>
            <div className='cartMiddle'>
              {(cart !== null) ? (
                  <ul className='cart'>
                    {cart.map((item) => <Cart props={item}/>)}
                  </ul>) : (
                  <h2>Cart is empty!</h2>
              )
              }
            </div>
            <div className='cartRight'>
              {(cart !== null) ? (
                  <p>Total: {totalPrice} ISK</p>) : (
                  <p/>
              )
              }</div>
          <form>
            <div>
              <label><input type='radio' name='checkradio' onChange={() => this.setValue('/pickup')}/>Pickup at store</label>
            </div>
            <div>
              <label><input type="radio" name="checkout" onChange={() => this.setValue("/delivery")} />Delivery!</label>
            </div>
          </form>
          <div>
            <Link to={this.state.value}><button>Next</button></Link>
          </div>
        </div>

    )

    }
  }
}
export default CartView;
