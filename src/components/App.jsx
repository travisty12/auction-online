import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Setup from './Setup';
import Room from './Room';
import Error404 from './Error404';

function App(){
  let marginWidth;
  let marginTop;
  function updateMargin() {
    if (window.innerWidth > 1000) {
      marginWidth = `calc((100vw - 900px) / 2)`;
    } else {
      marginWidth = `10vw`;
    }
  }
  updateMargin();
  window.addEventListener('resize', function() {
      console.log(window.innerWidth);
      updateMargin();
    }, true);

  return (
    <div className="mainContainer">
      <style jsx>{`
        .mainContainer {
          background-color: yellow;
          width: 80vw;
          max-width: 900px;
          height: 90vh;
          margin-top: 5vh;
          margin-left: ${marginWidth};
          padding: 0 10% 0 10%;
        }
        `}</style>
      <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
        }
        body {
          background-color: red;
          display: flex;
          justify-conent: center;
        }
        `}</style>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/room' component={Room} />
        <Route path='/setup' component={Setup} />
        <Route component={Error404} />
      </Switch>

    </div>
  );
}

export default App;
