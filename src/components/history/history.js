import React from 'react';
import ListItem from './list-item';

class History extends React.Component{

  // constructor(props) {
  //   super(props);
  //   this.state = { results: ['anolla','raad'] };
  // }

  // componentDidMount(){
  //   console.log( this.props.history,'history state');
  //   this.setState({ history: this.props.history });
  // }

  render() {
    return (
      <>
        <ul>
          {this.props.history.map((data) => {
            return <ListItem key={data.name} data={data} />;
          })}

        </ul>
      </>
    );
  }
}

export default History;