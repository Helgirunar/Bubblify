import React from 'react';
import BundleList from "../../components/BundleList";




class BundleListView extends React.Component {
    componentDidMount() {
      fetch('http://localhost:3500/api/bundles').then(resp => {
        if(resp.ok) {return resp.json(); }
      }).then(data =>{
        this.setState({bundles: data});
      });
    }

    constructor(props) {
        super(props);
        this.state = {
            bundles: [],
        }
    }



    render() {
        return (
            <ul>
              {this.state.bundles.map((item) => (<BundleList id={item.id} name={item.name} items={item.items} />))
              }
            </ul>
        );
    }
}


export default BundleListView;
