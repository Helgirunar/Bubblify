import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'
import BubbleView from "../../Views/bubbleView";
import getProducts from "../../../../server/services/bubbleService"


class Bundles extends Component {
  constructor(props){
    super(props);
    //console.log(this)
  }
  componentDidMount(){
  }
  render(){

const {name,items} = this.props;

    return(
        <div>
          <div>{name}</div>
            <ul>{items}</ul>

        </div>

    )
  }

}
export default Bundles;
