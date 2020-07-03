import React from 'react';
import ListItem from './list-item';

class History extends React.Component{

  // constructor(props) {
  //   super(props);
  //   this.state = { history:[] };
  // }

  // componentDidMount(){
  //   const history = JSON.parse(localStorage.getItem('history'));
  //   this.setState({history});
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