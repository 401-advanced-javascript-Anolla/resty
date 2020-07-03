import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.StrictMode>
          <App />;
        </React.StrictMode>
      </BrowserRouter>
    );
      
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
