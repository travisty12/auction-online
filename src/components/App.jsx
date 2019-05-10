import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Setup from './Setup';
import Room from './Room';
import Header from './Header';
import Settings from './Settings';
import ItemList from './ItemList';
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
      updateMargin();
    }, true);

  return (
    <div className="mainContainer">
      <style jsx>{`
        .mainContainer {
          background-image: linear-gradient(to bottom right, #FFDC00 0%, #D4AF37 100%);
          border: 2px solid rgba(00,00,00,0.1);
          outline: rgba(255, 220, 0, .1) solid 2px;
          width: 80vw;
          max-width: 900px;
          height: 90vh;
          margin-top: 5vh;
          margin-left: ${marginWidth};
          margin-right: auto;
          box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.3);
        }
        `}</style>
      <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
        }
        body {
          background-color: #800000;
          display: flex;
          justify-conent: center;
        }
        `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/room' component={Room} />
        <Route path='/setup' component={Setup} />
        <Route path='/settings' component={Settings} />
        <Route path='/additems' component={ItemList} />
        <Route component={Error404} />
      </Switch>

    </div>
  );
}

export default App;
