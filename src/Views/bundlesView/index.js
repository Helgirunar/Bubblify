import React from 'react';
import BundleList from "../../components/BundleList";

let bubbleService = require('../../../../server/services/bubbleService');



class Bundles extends React.Component {
    componentDidMount() {
        this.setState({
            bundles: bubbleService.getBundles()
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            bundles: [],
        }
    }



    render() {
        return (
            <div>
                <BundleList bundles={ this.state.bundles } />
            </div>
        );
    }
}


export default Bundles;