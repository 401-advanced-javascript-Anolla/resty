import React from 'react';

import './form.scss';

let historyArray=[];
let infoObj={};
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

          const raw = await fetch(`${this.state.url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:`${this.state.txt}`,
          });
          const data = await raw.json();
          // console.log('Success:', data);
          this.props.handler(data);
        }
        // PUT
        else if(this.state.method==='put'){
          const raw= await fetch(`${this.state.url}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body:`${this.state.txt}`,
          });
          const data = await raw.json();
          // console.log('Success:', data);
          this.props.handler(data);
        }
        // DELETE
        else if(this.state.method==='delete'){
          const raw =await fetch(`${this.state.url}`, {
            method: 'DELETE',
            // 'id': 2,
          });
          console.log('Success:', raw);
          // const data = await raw.json();
          this.props.handler({'Message':'Item deleted'});
        }

        infoObj={'method':this.state.method,'url':this.state.url,'body':this.state.txt? this.state.txt:''};
        historyArray.push(infoObj);
        // localStorage.setItem('method',JSON.stringify(this.state.method));
        // localStorage.getItem('method');
        // localStorage.setItem('url',JSON.stringify(this.state.url));
        // localStorage.getItem('url');
        // if(this.state.txt){
        //   localStorage.setItem('results' ,JSON.stringify(this.state.txt));
        //   localStorage.getItem('results');
        // }
        localStorage.setItem('history',JSON.stringify(historyArray));
        let historyString= localStorage.getItem('history');
        let  historyFromLS= JSON.parse(historyString);
        this.props.handlerForHistory(historyFromLS);
        // console.log(historyFromLS);
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
