import React from 'react';
import ReactJson from 'react-json-view';
function Results(props) {
  return (
    <>
      <ReactJson src={props.results} theme="bright-converted" />
    </>
  );
}

export default Results;