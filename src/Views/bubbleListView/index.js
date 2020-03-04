import React, { Component } from 'react';
import BubbleList from '../../components/bubbleList';

export class BubbleListView extends Component {
  constructor(props){
    super(props)
    this.state = {
      bubbles:[]
    }
  }
  componentDidMount(){
      fetch('http://localhost:3500/api/bubbles').then(resp => {
        if(resp.ok) { return resp.json(); }
      }).then(data => {
        this.setState({bubbles: data});
        console.log(data);
      });
      console.log(this);
  }
  render(){
    const { bubbles } = this.state;
      return(
        <ul>
        {bubbles.map((item) => ( <BubbleList id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>))}
        </ul>
      )}
}
export default BubbleListView;
