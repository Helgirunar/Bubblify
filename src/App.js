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
        <Route path='/bubbles'>
          <BubbleListView/>
        </Route>
        <Route />
        <Route />
        <Route />
      </Switch>
    )
};

export default App;
