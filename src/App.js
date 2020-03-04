import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BubbleListView from './Views/bubbleListView';
import BubbleView from './Views/bubbleView';
import BundlesView from './Views/bundlesView';
import CartView from './Views/cartView';
import AboutView from './Views/aboutView';
import NavBar from './components/navBar'

const App = () => {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={BubbleListView}/>
          <Route exact path='/bubbles' component={BubbleListView}/>
          <Route path='/bubbles/:id' component={BubbleView}/>
          <Route path='/bundles' component={BundlesView} />
          <Route />
        </Switch>
      </div>
    )
};

export default App;
