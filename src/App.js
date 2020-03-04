import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BubbleListView from './Views/bubbleListView';
import BubbleView from './Views/bubbleView';
import BundlesView from './Views/bundlesView';
import CartView from './Views/cartView';
import AboutView from './Views/aboutView';

const App = () => {
    return (
      <Switch>
        <Route exact path='/' component={BubbleListView}/>
        <Route path='/bubbles/:id' component={BubbleView}>
        </Route>
        <Route path='/bundles' component={BundlesView} />
        <Route />
      </Switch>
    )
};

export default App;
