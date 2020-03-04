import React, { Component } from 'react';
import Bundles from "../../components/bundles";
import BubbleDetail from "../../components/bubbleDetails";
import BubbleList from "../../components/bubbleList";

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
           {bundles.map((bundle) => (<Bundles key={bundle.id} id={bundle.id} name={bundle.name} items={bundle.items}/>))}
       </div>

   )
 }
}
export default BundleView;
