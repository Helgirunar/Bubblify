import React, { Component } from 'react';
import Bundles from "../../components/bundles";
import BubbleDetail from "../../components/bubbleDetails";

export class BundleView extends Component{
 constructor(props) {
   super(props)
   this.state = {
     bundles:[]
   }
 }
 componentDidMount() {
   fetch('http://localhost:3500/api/bundles').then(resp =>{
     if(resp.ok){return resp.json();}
   }).then(data =>{
     this.setState({bundles: data});
   });

 }
 render() {
   const  { bundles } = this.state;
   console.log(this);
   return(
       <div>
           {bundles.map((item) => (<Bundles id={item.id} name={item.name} items={item.items}/>))}
           <BubbleDetail description={this.props.description} isSell='false'/>
       </div>

   )
 }
}
export default BundleView;
