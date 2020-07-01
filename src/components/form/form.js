import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      request: {},
      txt:'',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    try{
      if ( this.state.url && this.state.method ) {
          
        const raw = await fetch(`${this.state.url}`);
        const data = await raw.json();
  
        const results = {
          Headers : raw.headers.entries(),
          Response : data,
        };
        this.props.handler(results);
        
      }
      else {
        alert('missing information');
      }
    }
    catch(e){
      console.log(e);
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({url});
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
      </>
    );
  }
}

export default Form;
