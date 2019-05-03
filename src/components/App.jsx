import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Setup from './Setup';
import Room from './Room';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/room' component={Room} />
        <Route path='/setup' component={Setup} />
        <Route component={Error404} />
      </Switch>
      <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
        }
      `}</style>

    </div>
  );
}

export default App;
