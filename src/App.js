import React from 'react';
import Form from './components/form/form.js';
import Header from './components/header';
import Footer from './components/footer';
import Results from './components/results/results';

import './App.scss';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      results:{},
    };
  }

  handleForm = (results)=>{
    this.setState({results:results});
  }

  render(){
    return (
      <React.Fragment>
        <Header />
        <Form  handler={this.handleForm} />
        <Results results={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
