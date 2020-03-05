import React from 'react';
import BundleList from "../../components/BundleList";




class Bundles extends React.Component {
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
            search: "",
        }
    }



    render() {
      console.log('hello');
        return (
            <div>
                <BundleList bundles={ this.state.bundles } />
            </div>
        );
    }
}


export default Bundles;
