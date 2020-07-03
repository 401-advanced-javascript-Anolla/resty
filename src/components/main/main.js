// All routes lives here :D
import React from 'react';
import { Route } from 'react-router-dom';
// import Home from '../home/home';
import History from '../history/history';


const Main = (props) => {
  return (
    <main>
      {/* <Route exact path="/">
        <Home /> */}
      {/* </Route> */}
      <Route exact path="/history" >
        <History />
      </Route>
    </main>
  );
};

export default Main;