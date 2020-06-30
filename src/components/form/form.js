
import React from 'react';
import './form.scss';
// stateful / class Component
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url:'',method:''};
  }
    handleChangeForURL = (e) => {
      const url = e.target.value;
      this.setState({ url });
    };

    handleChangeForMethod = (e) => {
      const method = e.target.value;
      this.setState({ method });
    };
    handleClick = (e) => {
      const url = this.state.url;
      const method = this.state.method;
      this.setState({ url , method });
    };
  
    render() {
      return (
        <main className="main">
          <label>URL</label>
          <input type="text" onChange={this.handleChangeForURL} />
          <button onClick={this.handleClick}>GO</button> <br/>

          <div className="method">
            <input onChange={this.handleChangeForMethod} type="radio" id="get" name="method" value="GET"/>
            <label>GET</label>
           
            <input onChange={this.handleChangeForMethod} type="radio" id="post" name="method" value="POST"/>
            <label>POST</label>
          
            <input onChange={this.handleChangeForMethod} type="radio" id="put" name="method" value="PUT"/>
            <label>PUT</label>
          
            <input onChange={this.handleChangeForMethod} type="radio" id="delete" name="method" value="DELETE"/>
            <label>DELETE</label>
          </div>

          <section className='choice'>
            {this.state.method} {this.state.url}
          </section>

        </main>
      );
    }
}

export default Form;