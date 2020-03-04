import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'


class Bundles extends Component {
  constructor(props){
    super(props);
    //console.log(this)
  }
  componentDidMount(){
  }
  render(){

const {name,discription,items} = this.props;
    return(
        <div>
          <div>{name}</div>
          <div>{discription}</div>
            <div>{items[0]}</div>
        </div>

    )
  }

}
export default Bundles;
