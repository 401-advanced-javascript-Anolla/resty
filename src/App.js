import React from 'react';
import Form from './components/form/form.js';
import Header from './components/header';
import Footer from './components/footer';
import Results from './components/results/results';
import History from './components/history/history';
import Main from './components/main/main';


import './App.scss';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      results:{},
      history:[],
    };
  }

  handleForm = (results)=>{
    this.setState({results:results});
  }

  handleHistory= (history)=>{
    this.setState({history:history});
  }

  render(){
    return (
      <React.Fragment>
        <Header />
        {/* <Main /> */}
        <Form  handler={this.handleForm} handlerForHistory={this.handleHistory} />
        <History history={this.state.history} />
        <section className="results">
          <Results results={this.state.results} />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
