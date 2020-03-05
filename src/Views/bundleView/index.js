import React from 'react';
import BundleDetails from "../../components/BundleDetails";

class BundleView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bundle: {
          id:0,
          name:'',
          items:[]
        },
        bubbles:[]
      },
      this.addToCart = this.addToCart.bind(this);
      this.renderBubbles = this.renderBubbles.bind(this);
    }

    componentDidMount() {
      fetch(`http://localhost:3500/api/bundles/${this.props.match.params.id}`).then(resp => {
        if(resp.ok) {return resp.json(); }
      }).then(data =>{
        let tempBubbles = [];
        data.items.map((item) => {
          fetch(`http://localhost:3500/api/bubbles/${item}`).then(resp =>{
            if(resp.ok) {return resp.json();}
          }).then(data => {
            tempBubbles.push(data);
            console.log('creating bubble array');
          })
        })
        console.log('setting bubbles');
        this.setState({
          bubbles:tempBubbles
        });
        console.log('setting bundles');
        this.setState({bundle: data});
      });
    }

    renderBubbles(data){
    }
    addToCart(){
      console.log('button clicked!');
      console.log(this.state.bubbles.length);
      console.log(this.state.bundle.items.length);
    }
    render() {
      const { bundle, bubbles } = this.state;
        return (
          <BundleDetails id={bundle.id} name={bundle.name} items={bundle.items} addToCart={this.addToCart} bubbles={bubbles} isSell='true'/>
        );
    }
}


export default BundleView;
