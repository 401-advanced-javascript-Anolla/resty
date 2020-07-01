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
    try{
      e.preventDefault();
      if ( this.state.url && this.state.method ) {
        //GET
        if(this.state.method==='get'){
          const raw = await fetch(`${this.state.url}`);
          const data = await raw.json();
          const results = {
            Headers : raw.headers,
            Response : data,
          };
          this.props.handler(results);      
        }
        // POST
        else if(this.state.method==='post'){
          fetch(`${this.state.url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
        // PUT
        else if(this.state.method==='put'){
          fetch(`${this.state.url}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
        // DELETE
        else if(this.state.method==='delete'){
          fetch(`${this.state.url}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            // 'id': 2,
          })
            .then(response => console.log(response))
            .catch((error) => {
              console.error('Error:', error);
            });
            
        }
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

  handleChangeEntryBox= e => {
    const txt = e.target.value;
    this.setState({ txt });
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
          <input name='entryBox' type='text' onChange={this.handleChangeEntryBox} />
        </form>
      </>
    );
  }
}

export default Form;
